// Step : 1 add  addEventListener to the Withdraw Button

document.getElementById("wit-btn").addEventListener("click", function () {
  //   Step :2 get the Withdrew amount from the Withdraw input Field
  const withInputValue = document.getElementById("wit-input");
  let withGetInput = withInputValue.value;
  //  withdraw Input value convert  string to Number
  withGetInput = parseFloat(withGetInput);

  //   step:3 get the current Withdraw total
  const withCurrentTotal = document.getElementById("wit-amount");
  let withPreviousTotal = withCurrentTotal.innerText;
  withPreviousTotal = parseFloat(withPreviousTotal);

  //   Step:4 Sum Withdrew input value and Withdrew Current value

  const sumWithTotal = withGetInput + withPreviousTotal;
  // push wit-amount Id
  withCurrentTotal.innerText = sumWithTotal;

  // Step:5  get current Balance Total

  const balCurrentTotal = document.getElementById("bal-amount");
  let balanceGet = balCurrentTotal.innerText;
  // convert String to Number
  balanceGet = parseFloat(balanceGet);

  // Step:6 Calculate minus  Balance current Value and withdraw Input value

  const balMinusTotal = balanceGet - withGetInput;
  // push bal-amount Id
  balCurrentTotal.innerText = balMinusTotal;

  //   step:7 Withdraw input Field clear
  withInputValue.value = "";
});
