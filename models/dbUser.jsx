const dbManager = require("./dbManager");
const db = dbManager.db;

exports.getNames = () => {
  const sql = "SELECT * FROM usuario";
  let stmt = db.prepare(qry);
  let res = stmt.all();
  return res;
};
