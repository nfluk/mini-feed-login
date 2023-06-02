let database = [
  {
    username: 'Jim',
    password: 'secret',
  },
  {
    username: 'Alice',
    password: 'Secret',
  },
  {
    username: 'Ruben',
    password: 'secreT',
  },
];

let newsfeed = [
  {
    username: 'Bobby',
    timeline: 'Life is great!',
  },
  {
    username: 'Timmy',
    timeline: 'I love sunny days!',
  },
  {
    username: 'Sally',
    timeline: 'My dog is great!',
  },
];

function login() {
  let uName = prompt('Enter username:');
  let pWrd = prompt('Enter password:');

  database.forEach((user) => {
    if (uName === user.username && pWrd === user.password) {
      feedPrint(newsfeed);
      return;
    }
  });

  console.log('Sorry. Username and password do not match.');
}

function feedPrint(arr) {
  arr.forEach((news) => {
    console.log(`${news.username} writes: ${news.timeline}`);
  });
}
