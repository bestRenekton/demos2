const cloud = require("wx-server-sdk");

async function add(data) {
  const { value } = data;
  const db = cloud.database();
  const collection = db.collection("todos");

  try {
    return await collection
      .add({
        data: {
          name: value,
          type: 1,
          date: new Date(),
        },
      })
      .then((res) => ({ msg: "添加成功", code: 200 }));
  } catch (e) {
    console.error(e);
    return { msg: e, code: 500 };
  }
}

exports.add = add;
