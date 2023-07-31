// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 简单的哈希函数，将字符串转换为数字
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取微信的OpenID
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID

  // 使用哈希函数生成10位数字
  let uid = hashString(openid) % 10000000000;

  // 连接到数据库
  const db = cloud.database()

  // 检查UID是否唯一
  const existingUser = await db.collection('user_profile').where({ user_id: uid }).get()
  if (existingUser.data.length > 0) {
    // 如果UID已存在，可以选择抛出错误或采取其他措施
    return {
      success: false,
      message: 'Failed to generate unique UID.',
    }
  }

  // 解构从客户端传来的其他参数
  const {
    avatar,
    name,
    age,
    school,
    photos,
    description,
    room_id_list,
    skin_id_list
  } = event

  // 添加数据到"user_profile"表中
  try {
    const res = await db.collection('user_profile').add({
      data: {
        user_id: uid,
        avatar: avatar,
        name: name,
        age: age,
        school: school,
        photos: photos,
        description: description,
        room_id_list: room_id_list,
        skin_id_list: skin_id_list
      }
    })

    // 返回成功信息
    return {
      success: true,
      message: '成功创建用户',
      data: res
    }
  } catch (err) {
    // 发生错误时返回失败信息
    console.error(err)
    return {
      success: false,
      message: '上传用户信息失败, 请重试',
      error: err
    }
  }
}
