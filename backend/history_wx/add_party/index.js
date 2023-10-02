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
  // 解构从客户端传来的参数
  const {
    party_name,
    member_num,
    seat_list,
    time,
    location,
    cost,
    description,
    type
  } = event

  // 使用派对信息和当前时间戳生成字符串
  const partyInfoString =  member_num + seat_list.join('') + time + location + cost + description + type + Date.now()

  // 使用哈希函数生成10位数字
  let party_id = hashString(partyInfoString) % 10000000000;
  party_id = parseInt(String(party_id).padStart(10, '0'));

  // 连接到数据库
  const db = cloud.database()

  // 检查party_id是否唯一
  const existingParty = await db.collection('party').where({ party_id: party_id }).get()
  if (existingParty.data.length > 0) {
    // 如果party_id已存在，可以选择抛出错误或采取其他措施
    return {
      success: false,
      message: 'Failed to generate unique party_id.',
    }
  }

  // 添加数据到"party"表中
  try {
    const res = await db.collection('party').add({
      data: {
        party_id: party_id, // 唯一的10位数字ID
        party_name: party_name,
        member_num: member_num,
        seat_list: seat_list,
        time: time,
        location: location,
        cost: cost,
        description: description,
        type: type
      }
    })

    // 返回成功信息
    return {
        success: true,
        message: '成功录入组局信息',
        data: res,
        party_id: party_id  // 返回party_id
    }
    
  } catch (err) {
    // 发生错误时返回失败信息
    console.error(err)
    return {
      success: false,
      message: '录入组局信息失败, 请重试',
      error: err
    }
  }
}
