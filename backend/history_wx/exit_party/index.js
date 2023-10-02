// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 从客户端传来的参数中获取user_id、party_id和seat_index
  const { user_id, party_id, seat_index } = event

  // 连接到数据库
  const db = cloud.database()

  // 开始一个事务
  const transaction = await db.startTransaction()

  try {
    // 获取派对信息
    const partyRes = await transaction.collection('party').where({ party_id: party_id }).get()
    if (partyRes.data.length === 0) {
      await transaction.rollback()
      return {
        success: false,
        message: 'Party not found.'
      }
    }

    const party = partyRes.data[0]

    // 检查座位序号是否有效
    if (seat_index < 0 || seat_index >= party.member_num || !party.seat_list || party.seat_list[seat_index] !== user_id) {
      await transaction.rollback()
      return {
        success: false,
        message: 'Invalid seat index or user not in the specified seat.'
      }
    }

    // 将用户ID从seat_list的指定位置移除
    const updatedSeatList = [...party.seat_list]
    updatedSeatList[seat_index] = null

    await transaction.collection('party').doc(party._id).update({
      data: {
        seat_list: updatedSeatList
      }
    })

    // 提交事务
    await transaction.commit()

    // 返回成功信息
    return {
      success: true,
      message: 'Exited party successfully.'
    }
  } catch (err) {
    // 发生错误时，回滚事务
    await transaction.rollback()

    // 返回失败信息
    console.error(err)
    return {
      success: false,
      message: 'Failed to exit party.',
      error: err
    }
  }
}
