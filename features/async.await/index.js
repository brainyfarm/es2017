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
 * We can combine two asynchronous operations too
 */
const greetUs = async (name1, name2) => {
  const firstGreetings = await greetAfterFiveSeconds(name1);
  const secondGreetings = await greetAfterFiveSeconds(name2);
   logger.log(`${firstGreetings}, ${secondGreetings}`);
}

greetUs("Olawale", "Temitope"); // Hi there Olawale, Hi there Temitope


/**
 * Example with Promise.all
 */

const greetTwo = async (name1, name2) => {
  const [myGreeting, tayosGreeting] = await Promise.all([greetAfterFiveSeconds('Olawale'), greetAfterFiveSeconds('Tayo')]);
  logger.log(`${myGreeting}, ${tayosGreeting}`) 
}

greetTwo('Olawale', 'Tayo'); // Hi there Olawale, Hi there Tayo
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

