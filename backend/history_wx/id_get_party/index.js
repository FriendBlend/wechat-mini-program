// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const { party_id } = event // 从客户端传来的参数中获取party_id

  // 连接到数据库
  const db = cloud.database()

  // 从"party"表中查找party_id对应的记录
  try {
    const res = await db.collection('party').where({ party_id: party_id }).get()
    if (res.data.length > 0) {
      // 返回成功信息和找到的记录
      return {
        success: true,
        message: 'Party information retrieved successfully.',
        data: res.data[0]
      }
    } else {
      // 如果未找到记录，则返回失败信息
      return {
        success: false,
        message: 'Party not found.'
      }
    }
  } catch (err) {
    // 发生错误时返回失败信息
    console.error(err)
    return {
      success: false,
      message: 'Failed to retrieve party information.',
      error: err
    }
  }
}
