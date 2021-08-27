# ts-node-boilerplate

TypeScript on JavaScriptiin perustuva ohjelmointikieli. TypeScriptin ja JavaScriptin suurin ero on TypeScriptin vahva tyypitys, josta kielen nimikin tulee.

TypeScript on JavaScriptin supersetti, se tarkoittaa että toimiva JavaScript koodisi on myös toimivaa typescript koodia. Sen lisäksi että TypeScript sisältää kaikki JavaScriptin hyvät ominaisuudet, se tuo siihen mukaan oman kerroksensa.

JavaScript on dynaamisesti kirjoitettu kieli, tämä tarkoittaa, että ohjelmisto ei käsittele tyyppieroja virheinä ennen ajonaikaa, Tämä aiheuttaa usein paljon bugeja joita voi olla vaikeakin selvittää. TypeScriptin vahvan tyypityksen hyötynä onkin saada koodin virheitä kiinni jo ennen ajonaikaa. Koodin ajamiseksi kieli kääntyy JavaScriptiksi.

 ## Repon lataaminen ja asentaminen komentokehotteella
 
 ###### 1. Lataa git repo
```
git clone https://github.com/JoniRinta-Kahila/varia-ts.git
```
###### 2. Siirry repon sisälle
```
cd varia-ts
```
###### 3. Suorita npm asennus
```
npm install
```
###### 4. Avaa repo Visual Studio Codella
```
code .
```
## Harjoitukset
Repo sisältää valmiita testejä jotka sinun on saatava toimimaan, muokkaamatta itse testejä.
Repo sisältää tiedostot ```stringManipulator.ts``` & ```collectionManipulator.ts``` joista löytyvät funktiot ovat keskeneräisiä.
Korjaa funktiot sekä tyypitykset jotta testit menevät läpi.
Tehtävätiedostot löydät repon polusta ```src\exercises\```.

#### Testien ajaminen
```
npm run test
```
