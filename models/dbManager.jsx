const sqlite = require("sqlite3");

const db = new sqlite("../db/controleLogistico.db");
exports.db = db;
