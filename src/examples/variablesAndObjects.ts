/* eslint-disable no-unused-vars */

let varStr: string;
let varBool: boolean;
let varInt: number;
let varArr: [];
let varStrArr: string[];
let varIntArr: number[];
let varObj1: {};
let varObj2: {
  name: string;
  age: number;
};

type Tperson = {
  name: string;
  age: number;
};

let varObj3: Tperson;

const str = 'foo';
const bool = true;
const number = 123;

type Tcar = {
  brand: string;
  owner: Tperson;
};

const theCar: Tcar = {
  brand: 'Ferrari',
  owner: {
    name: 'Tero',
    age: 55,
  },
};

interface Iperson {
  name: string;
  age: number;
}

interface Icar extends Iperson {
  brand: string;
}

const theOtherCar: Icar = {
  brand: 'Uaz',
  name: 'Siiri',
  age: 18,
};
