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
    if(name === 'Chike') {
      reject("I cannot greet you Chike")
    }
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
   const greetings = await greetAfterFiveSeconds(name);
    logger.log(greetings);
}

greetMe("Olawale"); // Hi there Olawale

/**
 * catching Errors with async await
 * use try-catch
 */

const greetMeError = async name => {
  try {
    const greetings = await greetAfterFiveSeconds("Chike");
    logger.log(greetings);
  } catch(error){
    logger.log(error);
  }
}


greetMeError('Chike'); // I cannot greet you Chike