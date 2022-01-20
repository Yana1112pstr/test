const items = [
  {
    code: "036",
    ISO: "AUD",
    amount: "1",
    name: "австралийский доллар",
    course: "20,2301",
    UAH: "+0.2434",
    percent: "+1.218 %",
  },
  {
    code: "975",
    ISO: "BGN",
    amount: "1",
    name: "болгарский лев",
    course: "16,2500",
    UAH: "+0.1579",
    percent: "+0.981 %",
  },
  {
    code: "933",
    ISO: "BYN",
    amount: "1",
    name: "белорусский рубль",
    course: "10,8387",
    UAH: "+0.0459",
    percent: "+0.425 %",
  },
  {
    code: "124",
    ISO: "CAD",
    amount: "1",
    name: "канадский доллар",
    course: "22,2164",
    UAH: "+0.1327",
    percent: "+0.601 %",
  },
  {
    code: "756",
    ISO: "CHF",
    amount: "1",
    name: "швейцарский франк",
    course: "30,4053",
    UAH: "+0.3817",
    percent: "+1.271 %",
  },
  {
    code: "156",
    ISO: "CNY",
    amount: "1",
    name: "китайский юань женьминьби",
    course: "4,3604",
    UAH: "+0.0078",
    percent: "+0.179 %",
  },
  {
    code: "203",
    ISO: "CZK",
    amount: "1",
    name: "чешская крона",
    course: "1,2991",
    UAH: "+0.0103",
    percent: "+0.799 %",
  },
  {
    code: "208",
    ISO: "DKK",
    amount: "1",
    name: "датская крона",
    course: "4,2712",
    UAH: "+0.0408",
    percent: "+0.964 %",
  },
  {
    code: "818",
    ISO: "EGP",
    amount: "1",
    name: "египетский фунт",
    course: "1,7645",
    UAH: "+0.0019",
    percent: "+0.108 %",
  },
  {
    code: "978",
    ISO: "EUR",
    amount: "1",
    name: "Евро",
    course: "31,7813",
    UAH: "+0.3017",
    percent: "+0.958 %",
  },
  {
    code: "826",
    ISO: "GBP",
    amount: "1",
    name: "фунт стерлингов Великобритании",
    course: "38,0443",
    UAH: "+0.2599",
    percent: "+0.688 %",
  },
  {
    code: "344",
    ISO: "HKD",
    amount: "1",
    name: "гонконгский доллар",
    course: "3,5608",
    UAH: "+0.0063",
    percent: "+0.177 %",
  },
  {
    code: "191",
    ISO: "HRK",
    amount: "1",
    name: "хорватская куна",
    course: "4,2263",
    UAH: "+0.0424",
    percent: "+1.013 %",
  },
  {
    code: "348",
    ISO: "HUF",
    amount: "100",
    name: "венгерских форинтов",
    course: "8,9449",
    UAH: "+0.1032",
    percent: "+1.167 %",
  },
  {
    code: "360",
    ISO: "IDR",
    amount: "1000",
    name: "индонезийских рупий",
    course: "1,9399",
    UAH: "+0.0054",
    percent: "+0.279 %",
  },
  {
    code: "376",
    ISO: "ILS",
    amount: "1",
    name: "израильский шекель",
    course: "8,9107",
    UAH: "+0.0090",
    percent: "+0.101 %",
  },
  {
    code: "356",
    ISO: "INR",
    amount: "10",
    name: "индийских рупий",
    course: "3,7523",
    UAH: "+0.0042",
    percent: "+0.112 %",
  },
  {
    code: "392",
    ISO: "JPY",
    amount: "10",
    name: "японских йен",
    course: "2,4255",
    UAH: "+0.0252",
    percent: "+1.050 %",
  },
  {
    code: "410",
    ISO: "KRW",
    amount: "100",
    name: "южно-корейских вон (Корея)",
    course: "2,3346",
    UAH: "+0.0067",
    percent: "+0.288 %",
  },
  {
    code: "398",
    ISO: "KZT",
    amount: "100",
    name: "казахских тенге",
    course: "6,3934",
    UAH: "+0.0195",
    percent: "+0.306 %",
  },
  {
    code: "498",
    ISO: "MDL",
    amount: "1",
    name: "молдовский лей",
    course: "1,5410",
    UAH: "-0.0012",
    percent: "-0.078 %",
  },
  {
    code: "484",
    ISO: "MXN",
    amount: "1",
    name: "мексиканский песо",
    course: "1,3589",
    UAH: "+0.0007",
    percent: "+0.052 %",
  },
  {
    code: "578",
    ISO: "NOK",
    amount: "1",
    name: "норвежская крона",
    course: "3,1998",
    UAH: "+0.0279",
    percent: "+0.880 %",
  },
  {
    code: "554",
    ISO: "NZD",
    amount: "1",
    name: "новозеландский доллар",
    course: "19,0596",
    UAH: "+0.2824",
    percent: "+1.504 %",
  },
  {
    code: "985",
    ISO: "PLN",
    amount: "1",
    name: "польский злотый",
    course: "7,0089",
    UAH: "+0.0677",
    percent: "+0.975 %",
  },
  {
    code: "946",
    ISO: "RON",
    amount: "1",
    name: "новый румынский лей",
    course: "6,4278",
    UAH: "+0.0624",
    percent: "+0.980 %",
  },
  {
    code: "643",
    ISO: "RUB",
    amount: "10",
    name: "российских рублей",
    course: "3,6696",
    UAH: "-0.0486",
    percent: "-1.307 %",
  },
  {
    code: "682",
    ISO: "SAR",
    amount: "1",
    name: "саудовский риял",
    course: "7,3911",
    UAH: "+0.0088",
    percent: "+0.119 %",
  },
  {
    code: "752",
    ISO: "SEK",
    amount: "1",
    name: "шведская крона",
    course: "3,1042",
    UAH: "+0.0365",
    percent: "+1.190 %",
  },
  {
    code: "702",
    ISO: "SGD",
    amount: "1",
    name: "сингапурский доллар",
    course: "20,6041",
    UAH: "+0.0984",
    percent: "+0.480 %",
  },
  {
    code: "949",
    ISO: "TRY",
    amount: "1",
    name: "новая турецкая лира",
    course: "2,0419",
    UAH: "+0.0359",
    percent: "+1.790 %",
  },
  {
    code: "840",
    ISO: "USD",
    amount: "1",
    name: "доллар США",
    course: "27,7372",
    UAH: "+0.0299",
    percent: "+0.108 %",
  },
  {
    code: "960",
    ISO: "XDR",
    amount: "1",
    name: "СПЗ",
    course: "39,0401",
    UAH: "+0.1945",
    percent: "+0.501 %",
  },
  {
    code: "710",
    ISO: "ZAR",
    amount: "1",
    name: "южно-африканский рэнд",
    course: "1,8012",
    UAH: "+0.0097",
    percent: "+0.541 %",
  },
];

const countItems = items.length;

const tableList = document.querySelector(".table");

const buttonName = document.getElementById("buttonName");
const sortByName = () => {
  console.log("click sort name");
  // items.sort((a, b) => a.name.localeCompare(b.name));
  buttonName.removeEventListener("click", sortByName);
};
buttonName.addEventListener("click", sortByName);

const buttonCourse = document.getElementById("buttonCourse");
const sortByCourse = () => {
  console.log("click sort course");
  // items.sort(function (a, b) {
  //   return a.course - b.course;
  // });
  buttonCourse.removeEventListener("click", sortByCourse);
};
buttonCourse.addEventListener("click", sortByCourse);

for (let i = 0; i < countItems; i++) {
  let code = items[i].code;
  let ISO = items[i].ISO;
  let amount = items[i].amount;
  let name = items[i].name;
  let course = items[i].course;
  let UAH = items[i].UAH;
  let percent = items[i].percent;

  function createTab() {
    let body = `<td>${code}</td><td>${ISO}</td><td>${amount}</td><td>${name}</td><td>${course}</td><td>${UAH}</td><td>${percent}</td>`;
    if (UAH < 0) {
      let tbody = `<tr class="table_tbody table_tbody-red" id=${code}>${body}</tr>`;
      tableList.insertAdjacentHTML("beforeend", tbody);
    }
    let tbody = `<tr class="table_tbody table_tbody-green" id=${code}>${body}</tr>`;
    tableList.insertAdjacentHTML("beforeend", tbody);
  }
  createTab();
}
