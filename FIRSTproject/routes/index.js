var express = require('express');
var router = express.Router();
const DB = require('./DB')


router.get('/table', async function (req, res) {
  const users = await DB.query(`SELECT * FROM empolyee;`);
  // res.json(users.rows);
  res.send(users.rows);
  // res.render('index', { paramA: 'Nurlan', fam: 'Саитов', data: users.rows });
});

router.get('/home', function (req, res) {
  res.render('homepage', { par: '123' });
});


router.get('/formAddUser', function (req, res) {
  res.render('insertformpage', { par: '123' });
});


router.get('/formEditUser', async function (req, res) {
  console.log(1);
  const datas = await DB.query('SELECT * FROM empolyee WHERE id = $1;', [req.query.id])
  res.send(datas.rows);
});



router.get('/actionDeleteUser', async function (req, res) {
  console.log(req.query);
  const id = req.query.id
  const del = await DB.query(`DELETE FROM empolyee where id=$1`, [id])
  res.redirect('/db/table');
});


router.get('/actionNewUser', async function (req, res) {
  console.log(req.query)
  const add = await DB.query(`
  INSERT INTO empolyee (first_name, last_name, email, gender) 
  values ($1, $2, $3, $4)`,
    [req.query.first_name, req.query.last_name, req.query.email, req.query.gender]
  )
  console.log(add)
  res.redirect('http://localhost:3000/');
});


router.get('/actionEditUser', async function (req, res) {
  const { first_name, last_name, email, gender, id } = req.query
  console.log(req.query)
  const edit = await DB.query(`
  UPDATE empolyee set first_name = $1, last_name=$2, email=$3, gender=$4 WHERE id=$5;`,
    [first_name, last_name, email, gender, id])
  res.redirect('/');
})

module.exports = router;
