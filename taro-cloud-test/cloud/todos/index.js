const cloud = require("wx-server-sdk");
const { getList } = require("./getList.js");
const { add } = require("./add.js");
const { change } = require("./change.js");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

exports.main = async (event) => {
  const { ENV, OPENID, APPID } = cloud.getWXContext();
  const { func, data } = event;
  let res = null;

  //获取列表
  if (func === "getList") {
    res = await getList(data);
  } else if (func === "add") {
    res = await add(data);
  } else if (func === "change") {
    res = await change(data);
  }

  return {
    data: res,
    ENV,
    OPENID,
    APPID,
  };
};
