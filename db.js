require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

module.exports.getUsers = async function getUsers() {
  const users = await sql`
    select * from users
  `;
  return users;
};

module.exports.getUserById = async function getUserById(id) {
  const user = await sql`
    select * from users where id = ${id}
  `;
  return user;
};
