// const val = {
//   name: "kome",
//   age: 23
// };

// val.name = "kame";
// console.log(val);

// const name = "ame";
// const age = 12;

// テンプレート文字列　バッククオート
// const message = `わたしの名前は${name}です。年齢は${age}です`;
// console.log(message);

// 分割代入
//const profile = {
//  name: "kome",
//  age: 23
//};
//
//const { name, age } = profile;
//const mes = `私の名前は${name}です。年齢は${age}です`;
//console.log(mes);

//const profile = ["kome", 29];
//
//const [name, age] = profile;
//console.log(`私の名前は${name}です。年齢は${age}です`);

// デフォルト値の設定
//const sayHello = (name = "ゲスト") => console.log(`名前は${name}です`);
//sayHello();
//sayHello("あめ");

//スプレッド構文
//const arr = [1, 3, 3];
//const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
//
//sumFunc(...arr);

//const arr = [1, 2, 3, 4, 5];
//const [num1, num2, ...arr2] = arr;
//console.log(num1);
//console.log(num2);
//console.log(arr2);

//配列のコピー、結合
//const arr1 = [2, 2];
//const arr2 = [3, 5];
//
//const arr3 = [...arr1];
//console.log(arr3);
//
//const arr4 = [...arr1, ...arr2];
//console.log(arr4);

/**
 * map filterを使った配列の処理
 */

//const namArr = ["tanaka", "yamada", "seino"];
// for (let i = 0; i < namArr.length; i++) {
//   console.log(`${i + 1}番目は${namArr[i]}`);
// }

//const namArr2 = namArr.map((n) => n);
//console.log(namArr2);
//
//namArr.map((nam, i) => console.log(`${i + 1}番目は${nam}`));

//const numArr = [1, 2, 3, 4, 5];
//const newNumArr = numArr.filter((num) => num % 2 === 1);
//console.log(newNumArr);

//const newNamArr = namArr.map((nam) => {
//  if (nam !== "seino") {
//    return `${nam}さん`;
//  } else {
//    return nam;
//  }
//});
//
//console.log(newNamArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき　: 条件がfalseのとき
//const val = 1 > 0 ? "true" : "false";
//console.log(val);

// const num = 1200;
// console.log(num.toLocaleString());

//const formatterNum =
//  typeof num === "number" ? num.toLocaleString() : "数値を設定しなさい";
//
//console.log(formatterNum);

//const checkSum = (num1, num2) => {
//  return num1 + num2 > 100 ? "100オーバー" : "範囲いないです";
//};
//
//console.log(checkSum(54, 32));

/**
 * 論理演算子のほんとうの意味を知ろう　&& ||
 */

// || は左側がfalseなら右側を返す

// const num = 0;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "なにか設定された";
// console.log(fee2);
