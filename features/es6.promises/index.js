import logger from 'util';

/**
 * Working with Promises
 */

 /**
  * one regular promise
  */
const afterXMilliseconds = time => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
      resolve(time);
    }, time);
	});
};

const allPromises = [afterXMilliseconds(5000), afterXMilliseconds(2000)]

/**
 * Would return only after all promises are resolved
 */
Promise.all(allPromises)
  .then((values) => {
    logger.log(values)
  }); // [ 5000, 2000 ]

/**
 * Would return after the first promise is resolved
 */
  Promise.race(allPromises)
    .then((values) => {
      logger.log(values) // 2000
    });

