import logger from 'util';

/**
 * Check to see if an array contains a specific value
 * A replacement for arr.indexOf(value) for checking
 */
 const john = { name: "John"};
 const people = ["Olawale", "Temitope", "Smith", "Ogbonna", {"name": "Tracy"}, john];

 const smithInPeople = people.includes("Smith"); // true
 const omotayoInPeople = people.includes("Omotayo"); // false
 const tracyObjectInPeople = people.includes({"name": "Tracy"}); // false (different instance)
 const johnInPeople = people.includes(john); // true

logger.log(`john`, john);
logger.log(`people`, people, '\n');
logger.log(`people.includes("Smith") -> `, smithInPeople);
logger.log(`people.includes("Omotayo") ->`, omotayoInPeople);
logger.log(`people.includes({"name": "Tracy"})`, tracyObjectInPeople);
logger.log(`people.includes(john)`, people.includes(john));



logger.log(` --------- Blank --------- \n`);

/**
 * includes VS indexOf prototype
 * makes sense semantically
 * proper handling of objects
 * proper handling of `NaN`
 */

 const listOfNumbers = [30, 14, 32, NaN];

 const indexOfNaN = listOfNumbers.indexOf(NaN); // -1
 const includesNaN = listOfNumbers.includes(NaN) // true

 logger.log(`listOfNumbers`, listOfNumbers);
 logger.log(`listOfNumbers.indexOf(NaN)`, indexOfNaN);
 logger.log(`listOfNumbers.includes(NaN)`, includesNaN);
