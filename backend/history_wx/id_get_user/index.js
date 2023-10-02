// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const { user_id } = event // 从客户端传来的参数中获取user_id

  // 连接到数据库
  const db = cloud.database()

  // 从"user_profile"表中查找user_id对应的记录
  try {
    const res = await db.collection('user_profile').where({ user_id: user_id }).get()
    if (res.data.length > 0) {
      // 返回成功信息和找到的记录
      return {
        success: true,
        message: 'User information retrieved successfully.',
        data: res.data[0]
      }
    } else {
      // 如果未找到记录，则返回失败信息
      return {
        success: false,
        message: 'User not found.'
      }
    }
  } catch (err) {
    // 发生错误时返回失败信息
    console.error(err)
    return {
      success: false,
      message: 'Failed to retrieve user information.',
      error: err
    }
  }
}
