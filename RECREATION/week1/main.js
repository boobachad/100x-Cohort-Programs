// this was coded in replit
/// class codes

let checkAge=canVote(19);

// 3.waf that takes new object as input which ahs name, age and gender and greets the user with thier gender (Hi Mr/Mrs/Others) name , your age is age

let user2=[
  {
  firstName: "rekha",
  age: 45,
  gender: "male"
  },
{
  firstName: "rekha",
  age: 5,
  gender: "male",
},
{
  firstName: "rekha",
  age: 19,
  gender: "male",
},
]

function assGreet(user){
  let title;

  if(user.gender=="male") title="Mr";
  else if(user.gender=="female") title="Mrs";
  else title="Others";

  console.log(`Helalo ${title} ${user.firstName} you are ${user.age}'s years old`);
  
  
}

assGreet(user2[0])
assGreet(user2[1])

// manuall assignment given by sir
// waf that takes an arry of objecs as inputs and returns the  users whose age >18 and are male

// function manAssignment(user){
//   for(let i=0; i<user.length; ++i){
//     if(user[i].age>18 && user[i].gender=="male") console.log(user[i].firstName);
//   }
// }

// manAssignment(user2)

// or as sir siad first create a array then push the reuslts into that and then return array

// oh we have to return the arry not names

function manAssignment(user){
  let arr2=[]
  for(let i=0; i<user.length; ++i){
    if(user[i].age>18 && user[i].gender=="male") arr2.push(user[i]);
  }
  return arr2;
}

let usersList=manAssignment(user2);
console.log(usersList)


// enhanced version of above use filters or maps or reduce to do the same work/ class codes

let checkAge=canVote(19);

// 3.waf that takes new object as input which ahs name, age and gender and greets the user with thier gender (Hi Mr/Mrs/Others) name , your age is age

let user2=[
  {
  firstName: "rekha",
  age: 45,
  gender: "male"
  },
{
  firstName: "rekha",
  age: 5,
  gender: "male",
},
{
  firstName: "rekha",
  age: 19,
  gender: "male",
},
]

function assGreet(user){
  let title;

  if(user.gender=="male") title="Mr";
  else if(user.gender=="female") title="Mrs";
  else title="Others";

  console.log(`Helalo ${title} ${user.firstName} you are ${user.age}'s years old`);
  
  
}

assGreet(user2[0])
assGreet(user2[1])

// manuall assignment given by sir
// waf that takes an arry of objecs as inputs and returns the  users whose age >18 and are male

// function manAssignment(user){
//   for(let i=0; i<user.length; ++i){
//     if(user[i].age>18 && user[i].gender=="male") console.log(user[i].firstName);
//   }
// }

// manAssignment(user2)

// or as sir siad first create a array then push the reuslts into that and then return array

// oh we have to return the arry not names

function manAssignment(user){
  let arr2=[]
  for(let i=0; i<user.length; ++i){
    if(user[i].age>18 && user[i].gender=="male") arr2.push(user[i]);
  }
  return arr2;
}

let usersList=manAssignment(user2);
console.log(usersList)


// enhanced version of above use filters or maps or reduce to do the same work
