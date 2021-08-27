/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */


// 'functions.ts' start 
const DoSomething = () => {
  console.log('ready!');
};

export const consoleLog = (str: string): void => {
  console.log(str);
 }

export const getUnixTime = () => new Date().getTime();

export default DoSomething;
// functions.ts end


/** 'app.ts' start
 *
 * import DoSomething, { consoleLog, getUnixTime } from './functions';
 * //
 * consoleLog(getUnixTime());
 * DoSomething();
 * 
 ** 'app.ts' end
 */ 


 /** 'index.ts' start
  * 
  * import * as functions from './functions';
  * 
  * const unixTime = functions.getUnixTime();
  * 
  ** 'index.ts' end
  */


