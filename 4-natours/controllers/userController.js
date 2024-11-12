// const users = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/users.json`));
// ROUTE HANDLERS

// const getAllUsers = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'sucess',
//     requestedAt: req.requestTime,
//     results: users.length,
//     data: {
//       users,
//     },
//   });
// };

// const createUser = (req, res) => {
//   // console.log(req.body);
//   const newID = users[users.length - 1].id + 1;
//   const newUser = Object.assign({ id: newID }, req.body);

//   users.push(newUser);

//   fs.writeFile(`${__dirname}/dev-data/data/users.json`, JSON.stringify(users), (err) => {
//     res.status(201).json({
//       status: 'success',
//       data: {
//         user: newUser,
//       },
//     });
//   });
// };

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
