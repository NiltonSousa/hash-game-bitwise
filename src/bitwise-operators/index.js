function bitwiseOperator(n1, n2, operator) {
  if (operator === "AND") return n1 & n2;
  if (operator === "OR") return n1 | n2;
  if (operator === "XOR") return n1 ^ n2;
  if (operator === "LEFT-SHIFT") return n1 << n2;
  if (operator === "RIGHT-SHIFT") return n1 >> n2;
}

async function getBinary(decimal) {
  const binaryResponse = [];

  while (decimal > 0) {
    if (decimal % 2 == 1) {
      binaryResponse.push(1);
    } else {
      binaryResponse.push(0);
    }
    decimal = Math.floor(decimal / 2);
  }
  return binaryResponse.reverse();
}

async function main() {
  const n1 = 10;
  const n2 = 11;
  const binaryN1 = await getBinary(n1);
  const binaryN2 = await getBinary(n2);

  const res = bitwiseOperator(n1, n2, "AND");
  console.log(`Binary of ${n1}`, binaryN1);
  console.log(`Binary of ${n2}`, binaryN2);
  console.log("Response", res);
}

main();
