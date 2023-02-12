// Step: 1 add  addEventListener to the Deposit Button

document.getElementById("dep-btn").addEventListener("click", function () {
  //   Step:2 get the Deposit amount from the deposit input Field

  const depField = document.getElementById("dep-input");
  let depNewAmount = depField.value;
  // convert String to number
  depNewAmount = parseFloat(depNewAmount);
  // Deposit input Clear
  depField.value = "";

  //   Step:3 get the current deposit total
  const depCurrentTotal = document.getElementById("dip-amount");
  const depPreviousTotal = depCurrentTotal.innerText;
  // convert Deposit current value string to number
  const depPreTotal = parseFloat(depPreviousTotal);

  // Step:4 Sum Deposit input value and Deposit Current value
  const sumDepTotal = depNewAmount + depPreTotal;
  // push dip-amount Id
  depCurrentTotal.innerText = sumDepTotal;

  // Step:5  get current Balance Total
  const balCurrentTotal = document.getElementById("bal-amount");
  let balanceGet = balCurrentTotal.innerText;
  // convert String to Number
  balanceGet = parseFloat(balanceGet);

  // Step:6 Calculate Deposit  Value and Balance current Value
  const balSetTotal = balanceGet + sumDepTotal;
  // push bal-amount Id
  balCurrentTotal.innerText = balSetTotal;
});
