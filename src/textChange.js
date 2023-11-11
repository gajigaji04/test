document.addEventListener("DOMContentLoaded", function () {
  // 이벤트 핸들러를 연결하기 전에 DOM이 완전히 로드될 때까지 기다린다.

  var button = document.getElementById("btn");
  var paragraph = document.querySelector("p");
  // 버튼과 단락 요소를 찾습니다.

  button.addEventListener("click", function () {
    // 버튼에 클릭 이벤트 리스너를 추가합니다.
    paragraph.textContent = "Worlds";
    // 버튼을 클릭하면 단락의 텍스트 내용을 변경합니다.
  });
});
