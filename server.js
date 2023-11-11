const express = require("express");
const app = express();
const port = 3000; // 포트 번호

// 엔드포인트 정의
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

// 서버 시작
app.listen(port, () => {
  console.log(`백엔드 서버 시작 http://localhost:${port}`);
});
