// BAGIAN 1
// NO.1

function mergeArray(a, b) {
  return [...a, ...b];
}

const a = [1, 2, 3];
const b = ["x", "y", "z"];
const answ1 = mergeArray(a, b);
// console.log(merged);

// NO.2

// NO.3
function fibSequence(range) {
  let a = 0;
  let b = 1;
  let temp = 0;
  let sequence = [];

  for (let i = 0; i < range; i++) {
    sequence.push(a);
    temp = a + b;
    a = b;
    b = temp;
  }

  return sequence;
}

const answ3 = fibSequence(15);
// console.log(sequence);

// NO.4
function objectMapper(obj) {
  const copiedObj = [...obj];
  return copiedObj.map((e) => {
    return { ...e, customer: `${e.code} - ${e.name}` };
  });
}

const testObj = [{ code: "12345", name: "foo" }];

const answ4 = objectMapper(testObj);
// console.log(ans);

// BAGIAN 2
// NO.1
function multiplicationMapper(row, col) {
  let resArr = [];
  let initArr = [];

  for (let i = 0; i < row; i++) {
    initArr.push(i + 1);
  }

  for (let i = 0; i < row; i++) {
    resArr.push([]);
    let multiplication = [...initArr].map((e) => e * (i + 1));
    resArr[i] = [...multiplication];
  }

  return resArr;
}

const answ5 = multiplicationMapper(5, 5);
// console.log(answ5);

// NO.2
function priceFraction(price) {
  const enums = [100_000, 50_000, 20_000, 10_000, 5_000, 2_000, 1000];
  const priceMap = {};
  while (price > 0) {
    if (price - enums[0] >= 0) {
      if (priceMap[enums[0]]) {
        priceMap[enums[0]] += 1;
      } else {
        priceMap[enums[0]] = 1;
      }
      price -= enums[0];
    } else {
      enums.shift();
    }
  }

  return priceMap;
}

const answ6 = priceFraction(273000);
// console.log(answ6);

// BAGIAN 3
// NO.1
function purchaseMOQMapping(inpt) {
  let baseMOQ = [21, 24];
  if (inpt <= baseMOQ[1] && inpt >= baseMOQ[0]) {
    return inpt;
  } else if (inpt < baseMOQ[0]) {
    return "Tonase tidak sesuai order harus dengan range 21-24";
  } else {
    let doLoop = true;

    while (doLoop) {
      const newBaseMOQ = baseMOQ.map((e) => e * 2);
      if (inpt <= newBaseMOQ[1]) {
        return `Tonase tidak sesuai order, harus dengan range ${newBaseMOQ[0]} - ${newBaseMOQ[1]}`;
      }
    }
  }
}

const answ7 = purchaseMOQMapping(25);
// console.log(answ7);

// NO.2
function productCart(name, qty, price) {
  const cartObj = {
    name,
    qty,
    satuan_karton: qty % 24 === 0 ? qty : qty % 24,
    price,
  };

  return cartObj;
}
const answ8 = productCart("Pocari Sweat", 24, 4);
// console.log(answ8);

// NO.3
function checkStandard() {}
