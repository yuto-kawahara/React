/**
 * const, letなどの変数宣言
 */
// let val2 = "let変数";
// console.log(val2);

// // letじゃ上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再現不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数は上書き不可";
// console.log(val3);

// const val3 = "const変数は再宣言不可";
// console.log(val3);

// const val4 = {
//   name: "shimeji",
//   age: 27
// };
// console.log(val4);
// // constのプロパティは上書き可能
// val4.name = "maitake";
// val4.age = 25;

// /**
//  * テンプレート文字列
//  */

// const name = "シメジ";
// const age = 27;
// // [私の名前はシメジです。年齢は27才です。]

// // 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の方法
// const func1 = function (str) {
//   return str;
// };
// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// // 省略
// const func3 = (str) => str;
// console.log(func3("func3です"));

// // アロー関数を用いた加算処理
// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "シメジ",
//   age: 27
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["シメジ", 27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ！${name}さん!`);
// // sayHello("シメジ");
// sayHello();

/**
 * スプレッド構文
 */

// 配列の展開
// ... ドットを三つ書いてその後に配列を指定すると配列の中身が展開される
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを用いた配列の処理
 */

const nameArr = ["田中", "山田", "シメジ"];

// 従来の方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapを用いた方法
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// インデックスを使用したい場合は、一番最後の引数にindexを指定する
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filterを使用すると配列の中である条件に一致するもののみを抽出したいときに便利
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "シメジ") {
//     return name;
//   }
//   else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件？条件がtrueの時：条件がfalseの時

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1と2はtrueになります");
}

// ||(パイプライン*2)は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&(アンバサンド*2)は左がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
