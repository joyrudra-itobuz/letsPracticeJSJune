//Testing Phase

import axios from "axios";
import { log } from "console";
import path from "path";
import saveData from "./modules/saveData.js";
import { read } from "fs";
import readData from "./modules/readData.js";

export const getCuurentPath = path.resolve();
console.log("Hello World");
let rest;

const nosArr = [1, 2, 3, 4, 5];

//Rest Part

const [firstName, secondName] = ["Joyrudra", "Biswas"];
const detailsArr = { myName: "Joyrudra", age: "22", address: "Kolkata" };
const [getFirstNo] = [nosArr];

console.log(getFirstNo);
console.log(firstName, secondName);

const { myName, age } = detailsArr;

console.log(myName, age);

const spread = ["Joy", "Has", ...nosArr];

console.log(spread);

//Get Data

const getData = ({ myName, age }) => {
  console.log("Name and Age : ", myName, age);

  try {
    addData();
  } catch (err) {
    console.log(err);
    showData();
  }
};

getData(detailsArr);

//Add Data

const addData = ([firstNo, ...secondNum]) => {
  console.log("Sb : ", secondNum);
  console.log("Add : ", firstNo + "," + secondNum);
};

function showData() {
  console.log("@AddData Look I can be called but you can't");
}

addData(nosArr);

//Global Object

global.console.log("Hi Rahul");

global.console.log("Hi Zenia");

const a = 0;

//Clousures

const seeClosureInAction = () => {
  console.log("Me Called!");
  console.log("Hoised Here : ", hoistMe);

  const arr = ["Zenia", "21", "Kolkata", "Itobuz"];
  let theName = "Zenia";
  let age = "22";
  const [herName, herAge] = [theName, age, ...arr];
  console.log("name", herName, " age", herAge);

  try {
    console.log("Hoisted Here 2 : ", hoistMe2);
  } catch (error) {
    console.log(error);
  }

  let closureVariable = "I'm Clousure";
  var hoistMe = "Hoist Me!!!";
  let hoistMe2 = "Hoist Me tooooo!!!";

  const meEnclosing = () => {
    console.log(closureVariable);
  };
  meEnclosing();
  ("Me Not Called!");
};

seeClosureInAction();

//Array Methods

nosArr.map((data, index) => {
  console.log(data, index);
});

const mapedArr = nosArr.map((data) => data * 2); //Intrinsive Return Type

nosArr.forEach((data) => console.log("For Each : ", data));

console.log(mapedArr);

const getRest = (getName, ...restDetails) => {
  console.log("Name : ", getName);
  console.log("Rest Details : ", restDetails);
};

getRest("Joyrudra Biswas", "22", "Krishnanagar");

//Callback Functions

const meWillCalledBack = (num) => {
  return num * num;
};

const meCallback = (num, meWillCalledBack) => {
  const res = meWillCalledBack(num);
  console.log(meWillCalledBack(num));
  return res;
};

const callback = () => {
  console.log("I'm a callback Function");
};

const meCallbackAgain = (name, callback) => {
  console.log("Hi " + name);
  callback();
};

meCallback(5, meWillCalledBack);
meCallbackAgain("Joy", callback);

//Spread Again

const sen = "My Name is Zenia";
const input = sen.split(" ");

const sen2 = "She Said That?";
const input2 = sen2.split(" ");

input2.push("ummm....", ...input);
input.push("Hmmmmmm?", ...input2);

// console.log(input2);

console.log(input);

const [index1, index2] = input;

console.log(index1, index2);

const getResponse = async () => {
  const response = await axios.get(
    "http://localhost:7000/database/Frontend-user/"
  );
  // console.log(response?.data?.data.slice(0, 2));
  return response;
};

const res = await getResponse()
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });

// console.log("res", res);

// await saveData(res?.data?.data);

// readData(); //You can read My Databsase

log("Hey Joy! Though I'm Written Later I will be called earlier!");

//Let's Practice some array Methods

const databaseInfos = await readData();

console.log(databaseInfos);

databaseInfos.forEach((data, index) => {
  console.log(data.email);
});

const newPhNos = databaseInfos.map((data, index) => {
  return data.phone;
});

console.log(newPhNos);

const newReducer = databaseInfos.reduce((accumulator, currentValue) => {
  log(accumulator);
  return accumulator.phone + currentValue.phone;
});

console.log(newReducer);

const testArr = [
  {
    name: "Joyrudra Biswas",
    age: 22,
    moreDetails: {
      gender: "male",
      address: "kolkata",
    },
  },
  {
    name: "Amar Kundu",
    age: 17,
    moreDetails: {
      gender: "undefined",
      address: "newtown",
    },
  },
  {
    name: "Bidisha Biswas",
    age: 19,
    moreDetails: {
      gender: "female",
      address: "bally",
    },
  },
  {
    name: "Rahul Karmakar",
    age: 45,
    moreDetails: {
      gender: "male",
      address: "barasat",
    },
  },
  {
    name: "Zenia Karmakar",
    age: 25,
    moreDetails: {
      gender: "female",
      address: "kalyani",
    },
  },
  {
    name: "Debasish Gantait",
    age: 26,
    moreDetails: {
      gender: "male",
      address: "hatibagan",
    },
  },
];

const testFilter = testArr.filter((data, index) => data.age > 20);

console.log(testFilter);

const testFindIndex = testArr.findIndex((data) => data.name.includes("Zenia"));

log(testFindIndex);

const even = (elem) => elem % 2 == 0;

// const testSome = testArr.some((data) => data.age % 2 === 0);

console.log(testArr.some(even));

testArr.forEach((data) => {
  setTimeout(() => {
    data["createdAt"] = new Date();
    log(data);
  }, 1000);
});

// console.log(testArr);

setTimeout(() => {
  testArr.forEach((data) => {
    log(data.createdAt.toLocaleString("en", { timezone: "UTC" }));
  });
}, 2000);
