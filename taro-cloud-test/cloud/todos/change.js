const cloud = require("wx-server-sdk");

async function change(data) {
  const { _id, type } = data;
  const db = cloud.database();
  const collection = db.collection("todos");
  const _ = db.command;

  try {
    return await collection
      .doc(_id)
      .update({
        data: {
          type: _.set(type),
        },
      })
      .then((res) => ({ msg: "更新成功", code: 200 }));
  } catch (e) {
    console.error(e);
    return { msg: e, code: 500 };
  }
}

exports.change = change;
