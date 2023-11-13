const mysql = require("mysql2");

// MySQL 연결 정보
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "dbname",
});

// 연결 시도
connection.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
  } else {
    console.log("MySQL 연결 성공!");
  }
});
