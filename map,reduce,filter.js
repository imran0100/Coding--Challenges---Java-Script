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
