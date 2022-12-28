const users = [
  { fname: "Bruce", lname: "Wayne", age: 25 },
  { fname: "Captain", lname: "America", age: 23 },
  { fname: "Black", lname: "Panther", age: 27 },
  { fname: "Clark", lname: "Kent", age: 22 },
  { fname: "Blk", lname: "Widow", age: 29 },
  { fname: "Winter", lname: "Soldier", age: 22 },
  { fname: "Star", lname: "Lord", age: 25 },
  { fname: "Peter", lname: "Parker", age: 23 },
  { fname: "Captain", lname: "India", age: 22 },
  { fname: "Black", lname: "Bitch", age: 27 },
  { fname: "Thor", lname: "Odinson", age: 22 },
  { fname: "Captain", lname: "Yellow", age: 33 },
  { fname: "Winter", lname: "summer", age: 32 },
  { fname: "Star", lname: "wars", age: 24 },
];

const result = users.map((user) => user.fname + " " + user.lname);
console.log("Full name of users:", result);

const result1 = users.filter((user) => user.age > 20 && user.age < 25);
console.log("Users between 20-26:", result1);

const result2 = users.reduce((acc, curr) => {
  if (!acc[curr.age]) acc[curr.age] = 1;
  else acc[curr.age]++;
  return acc;
}, {});
console.log("Age wise count:", result2);

const result3 = users.reduce((user, curr) => {
  if (user[curr.fname]) user[curr.fname]++;
  else user[curr.fname] = 1;
  return user;
}, {});
console.log("Name-wise count: ", result3);

const result4 = users
  .filter((user) => user.age > 27)
  .map((user) => user.fname + " " + user.lname);
console.log("Users above 27: ", result4);

const result5 = users.reduce((result, user) => {
  if (user.age < 25) result.push(user.fname + " " + user.lname);
  return result;
}, []);
console.log("Users below 25: ", result5);

const result6 = users.reduce((acc, curr) => {
  return acc + JSON.stringify(curr.fname + " " + curr.lname) + ", ";
}, "");
console.log("All users: ", result6);

const modifiedUsersList = users.reduce((newUsers, currUser) => {
  if (currUser.age > 25) newUsers.push(`${currUser.fname} is verified!!`);
  return newUsers;
}, []);
