function demoLily(input) {
 
  let age = Number(input[0]);
  let laundry = Number(input[1]);
  let toyPrice = Number(input[2]);

  let sumOfToys = 0;
  let sumOfMoney = 0;
  let currentMoney = 10;

  for (let i = 1; i <= age; i++) {

      if (i % 2 === 0) {
          sumOfMoney += currentMoney;
          sumOfMoney -= 1;
          currentMoney += 10;

      } else {
          sumOfToys++;
      }
  }
  sumOfMoney += sumOfToys * toyPrice;

  if (sumOfMoney >= laundry) {
      console.log(`Yes! ${(sumOfMoney - laundry).toFixed(2)}`)

  } else {
      console.log(`No! ${(laundry - sumOfMoney).toFixed(2)}`)
  }
}
demoLily(["10", "170", "6"])