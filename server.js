const express = require("express");
const app = express();
const port = 3000; // 포트 번호

// "/" 경로에 대한 라우트 정의
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 정적 파일 제공을 위한 middleware 설정
app.use(express.static("public"));

// 엔드포인트 정의
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

// 서버 시작
app.listen(port, () => {
  console.log(`백엔드 서버 시작 http://localhost:${port}`);
});
