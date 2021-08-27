// Korjaa funktiot jotta testit menevät läpi.
// Joudut myös korjaamaan kaikki any tyypitykset sekä parametrien nimeämisen.

// any type on nimensä mukaan tyyppi joka voi olla mitä vain, se ei kuitenkaan ole hyvän ohjelmointitavan mukaista.
// any type rikkoo TypeScriptin perusideaa, joten sitä tulee välttää, niin kauan kun mahdollista.

// aja testit consolilla komennolla 'npm run test'

// parametrin tyypin selvittämiseksi joudut tutkimaan tiedostoa ../test/stringManipulator.test.ts

// sayHello on esimerkki functio joka ottaa vataan yhden parametrin name, se on tyypiltään string.
// palautusarvo on myös määritetty merkkijonoksi.
// sayHello('Anni') palauttaa siis merkkijonon "Hello Anni".
export const sayHello = (name: string): string => {
  const result: string = `Hello ${name}`;
  return result;
};

export const scoreAsPostfix = (score: any, name: any): any => {};

export const scoreAsPrefix = (score: any, name: any): any => {};

export const inLowerCase = (score: any, name: any): any => {};

export const noWhitespace = (score: any, name: any): any => {};

export const backwards = (name: any): any => {};

export const toArray = (name: any): any => {};

export const toMap = (name: any): any => {};
