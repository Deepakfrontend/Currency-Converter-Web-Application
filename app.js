const base_url =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

const fromCurr = document.querySelector(".from  select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdown) {
  for (curCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = curCode;
    newOption.value = curCode;
    if (select.name === "from" && curCode === "USD") {
      newOption.selected = "Selected";
    }

    if (select.name === "to" && curCode === "INR") {
      newOption.selected = "Selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let curCode = element.value;
  let countryCode = countryList[curCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;

  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amount.value = 1;
  }
  let ffromCurr = fromCurr.value.toLowerCase();
  let ttoCurr = toCurr.value.toLowerCase();

  const urlFrom = `${base_url}${ffromCurr}.json`;
  const urlTo = `${base_url}${ttoCurr}.json`;
  let resp1 = await fetch(urlFrom);
  let data1 = await resp1.json();
  let rate = data1[ffromCurr][ttoCurr];

  let exchAmount = rate * amtValue;
  let newMsg = `${amtValue} ${ffromCurr.toUpperCase()} = ${exchAmount}${ttoCurr.toUpperCase()}`;
  msg.innerText = newMsg;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
