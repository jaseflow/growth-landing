var express = require('express');
var router = express.Router();
var mock = require('../db');
var fs = require('fs');
var staff = require('../controllers/staff/index.js');

var user = mock.users[0];


router.get('/', function(req, res, next) {
    res.render('landing', { title: 'Express', layout: 'main'});
});

router.get('/admin', function(req, res, next) {
    res.render('activity', {
        menuItems: mock.menuItems,
        title: user.company,
        user: user,
        active: req.url,
        staff: user.staff,
        pageAction: 'Add new staff',
        pageActionUrl: '/admin/add'
    });
});

router.get('/admin/add', function(req, res, next) {
    res.render('add', {
        title: 'Add a staff member',
        user: user,
        courses: mock.courses
    });
});

router.post('/admin/add', function(req, res) {
    var db = req.db;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    var collection = db.get('usercollection');

    collection.insert({
        firstName: firstName,
        lastName: lastName,
        email: email
    }, function(err, doc) {
        if (err) {
            res.send('There was a problem adding the information to the database.');
        }
        else {
            res.location('/admin');
            res.redirect('/admin');
        }
    });
});

router.get('/admin/staff', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('staff', {
            users: docs,
            title: 'Staff at ' + user.company,
            pageAction: 'Add new staff',
            pageActionUrl: '/admin/add'
        });
    });
});

router.get('/admin/staff/:id', function(req, res){
    var staffId = parseInt(req.params.id) - 1;
    res.render('profile', {
        title: user.staff[staffId].firstName + ' ' + user.staff[staffId].lastName,
        user: user,
        profile: user.staff[staffId],
        pageAction: 'Edit profile',
        pageActionUrl: '/admin/staff/:id/edit'
    });
});

router.get('/timeline-items', function(req, res){
    res.send([
      {
          date: 'yesterday',
          personName: 'Jason',
          profileUrl: 'https://github.com/jsncbt',
          actionText: 'ate',
          itemName: 'heaps of cake'
      },
      {
          date: 'today',
          personName: 'Simon',
          profileUrl: 'http://simonlang.org',
          actionText: 'made angular work',
          itemName: 'like a boss'
      }
    ]);
});


module.exports = router;
