fetch("http://127.0.0.1:5500/index.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("네트워크 응답이 없습니다.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("문제가 발생했습니다.:", error);
  });
