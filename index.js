require('dotenv').config();

const express = require('express');
const { getUsers, getUserById } = require('./db.js');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const users = await getUsers();

  // const users =  [
  //   {id: 1, first_name: 'Abdullah', last_name: 'Abdularaihm', role: 'admin', slug: 'abdullah-abdularaihm' }
  //   {id: 2, first_name: 'Xiaomin', last_name: 'Zhu', role: 'admin', slug: 'xiaomin-zhu' }
  //   {id: 3, first_name: 'Michaela', last_name: 'Heyer', role: 'admin', slug: 'michaela-heyer' }
  // ]

  res.send(`
    <h1>Users</h1>
    <ul>
      ${users
        .map((user) => {
          return `<li>
            <a href="/users/${user.id}">
              ${user.first_name} ${user.last_name}
            </a>
          </li>`;
        })
        .join('')}
    </ul>
  `);
});

app.get('/users/:userId', async function usersHandler(req, res) {
  const userId = req.params.userId;

  const user = await getUserById(userId);
  // console.log(user);

  if (user.count === 0) {
    res.status(404).send('No user found!');
  }

  res.send(`
    <h1>${user[0].first_name} ${user[0].last_name}</h1>
    <pre>
      ${JSON.stringify(user[0])}
    </pre>
  `);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
