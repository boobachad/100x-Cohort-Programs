use filter method more

eg for like checking the eligibilty of anyone instead of iterating and then if else to check if age is above 18 or not
we can do

filter((person)=>person.age>18);

then store iterating

let eligibile=persons.filter((person)=>person.age>18);
