var express = require('express');
var Products_type = require('../models/product_type');

var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Products_type.find({})
            .then((products_type) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(products_type);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        console.log(req.body);
        Products_type.create(req.body)
            .then((villain) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(villain);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Products_type.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        Products_type.findById(req.params.id)
            .then((villain) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(villain);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Products_type.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((villain) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(villain);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Products_type.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;