// Korjaa funktiot jotta testit menevät läpi
// joudut myös korjaamaan kaikki any tyypitykset

// any type tarkoittaa nimensä mukaan että tyyppi voi olla mitä vain, se ei kuitenkaan ole hyvän ohjelmointitavan mukaista.
// any type syö vie TypeScriptin perusidean joten sitä tulee välttää, niin kauan kun mahdollista.

// aja testit consolilla komennolla 'npm run test'

// parametrin tyypin selvittämiseksi joudut tutkimaan tiedostoa ../test/stringManipulator.test.ts

// sayHello on esimerkki functio joka ottaa vataan yhden parametrin name, se on tyypiltään string.
// palautusarvo on myös määritetty merkkijonoksi.
// sayHello('Anni') palauttaa siis merkkijonon "Hello Anni".
export const sayHello = (name: string): string => {
  const result: string = `Hello ${name}`;
  return result;
};

export const scoreAsPostfix = (a: any, b: any): any => {};

export const scoreAsPrefix = (a: any, b: any): any => {};

export const inLowerCase = (a: any, b: any): any => {};

export const noWhitespace = (a: any, b: any): any => {};

export const backwards = (a: any): any => {};

export const toArray = (a: any): any => {};

export const toMap = (a: any): any => {};
