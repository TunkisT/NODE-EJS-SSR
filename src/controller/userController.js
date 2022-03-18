const { getUsers } = require('../model/userModel');

function usersIndex(req, res) {
  const users = getUsers();
  console.log('users ===', users);
  const data = {
    page: 'users',
    title: 'Our users',
    users,
  };
  res.render('users', data);
}

module.exports = {
  usersIndex,
};
