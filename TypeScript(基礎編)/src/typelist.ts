/* eslint-disable @typescript-eslint/no-unused-vars */
/** Typescriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字列
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any 何でも屋さん どの型でも入れられるが使わないようにする
let any1: any = false;

// void
const funcA = () => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
