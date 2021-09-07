const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  User.findAll()
  .then(userInfo => res.json(userInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(userInfo => {
    if (!userInfo) {
      res.status(404).json({message: 'No user with this id'});
      return;
    }
    res.json(userInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', /*withAuth,*/ (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(userInfo => {
    req.session.save(() => {
    req.session.user_id = userInfo.id;
    req.session.username = userInfo.username;
    req.session.loggedIn = true;
  
    res.json(userInfo);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', /*withAuth,*/ (req, res) => {
  console.log(req.body)
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userInfo => {
    if (!userInfo) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
  
    const validPassword = userInfo.checkPassword(req.body.password);
  
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
  
    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.username = userInfo.username;
      req.session.loggedIn = true;
  
      res.json({ user: userInfo, message: 'You are logged in!' });
    });
  });
});

router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', withAuth, (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;