// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let msg = "test function";

    const db = cloud.database()

    db.collection('user_profile').add({
        data: {
            avatar: "https://pic4.zhimg.com/v2-3c5d866701650615f50ff4016b2f521b.jpg",
            name: "ElonMusk",
            age: 40,
            school: "无",
            description: "暂无"
        }
    })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)

    return {
        msg,
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}