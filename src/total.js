function sumNumbers(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

const result = sumNumbers(1, 10);
console.log(result); // 결과 출력
