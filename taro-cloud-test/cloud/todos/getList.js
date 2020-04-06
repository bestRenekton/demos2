const cloud = require("wx-server-sdk");

async function getList(data) {
  const { row, page } = { row: 10, page: 1, ...data };
  const db = cloud.database();
  const collection = db.collection("todos");

  try {
    return await collection
      .skip((page - 1) * row) // 跳过结果集中的前 10 条，从第 11 条开始返回
      .limit(row) // 限制返回数量为 10 条
      .get()
      .then((res) => res.data);
  } catch (e) {
    console.error(e);
    return { msg: e, code: 500 };
  }
}

exports.getList = getList;
