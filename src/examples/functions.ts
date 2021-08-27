/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// FUNCTION TYYPITTÄMINEN.

// void
  const functionTypeVoid1 = () => {
    // Funktiota ei ole erikseen tyypitetty. Koska funktio ei sisällä palautusta (return), eslint olettaa funktion tyypiksi <() => void>
  };

  const functionTypeVoid2: () => void = () => {
    // Tälläkertaa funktio on tyypitetty void, tällöin kaikenlainen palauttaminen functiosta aiheuttaa virheen.
  };

// string, number, etc..
  const functionTypeString1 = () => {
    // Fukctio ei ole erikseen tyypitetty. Koska funktio sisältää palautuksen (return 'string'), eslint olettaa funktion tyypin olevan <() => string>
    const value  = 'string';
    return value;
  };

  const functionTypeString2: () => string = () => {
    // Funktio on tyypitetty merkkijonoksi, joten sen on palautettava merkkijono.
    const value  = 'string';
    return value;
  };

  const functionTypeString3 = (): string => {
    // Tässä on tyypitetty funktion palaustusarvo.
    const value  = 'string';
    return value;
  };

  type TfunctionString = string;

  const functionTypeString4 = (): TfunctionString => {
    // Tässä tapauksessa tyyppi on määritelty ennakkoon
    const value  = 'string';
    return value;
  };

  // luodaan tyyppi <TfunctionObj> joka on Objekti
  type TfunctionObj = {
    prop1: string,
    prop2: number,
    prop3: boolean,
  };

  // luodaan uusi funktio käyttäen tyyppiä <TfunctionObj>
  const functionTypeObj1 = (): TfunctionObj => {

    const obj: TfunctionObj = {
      prop1: 'foo',
      prop2: 123,
      prop3: true,
    };

    return obj;
  };

  // alla on esimerkin vuoksi functio, joka palauttaa samanlaisen objektin kun edellinen functio.
  // Tässä tapauksessa palautusarvoa ei ole määritetty ennakkoon.
  // Tämä on huono tapa koska:
  // 1. function palauttama tyyppi ei ole uudelleen käytettävä, vaan se täytyy määrittää uudelleen ja uudelleen, aina kun sitä tarvitsee.
  // 2. koodista tulee vaikeasti ymmärrettävää.

  const functionTypeObj2 = (): { 
    prop1: string,
    prop2: number,
    prop3: boolean,
  } => {
    const obj = {
      prop1: 'foo',
      prop2: 123,
      prop3: true,
    };
    return obj;
  };