import logger from 'util';

/**
 * async && await
 */

 /**
  * This is an asynchronous function by default
  * Could be call to server etc..
  */
 const greetAfterFiveSeconds = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(`Hi there ${name}`);
     }, 5000);
  });
 }

 
 /**
  * This is a function which would depend on reponse from the one above
  * We prefix it with async
  * We also prefix the greetAfterFiveSeconds with an await 
  * My log will only work when the function is resolved.
  */
 const greetMe = async name => {
   const greetings = await greetAfterFiveSeconds('Olawale');
    logger.log(greetings);
}

greetMe(); // Hi there Olawale
