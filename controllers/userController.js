const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.find({})
        .then((data) => {
            data ? res.json(data) : res.json('not find users');
        })
        .catch((error) => next(error));
};

exports.postUser = (req, res, next) => {
    const newUser = new User({
        name: {
            first: req.body.first,
            last: req.body.last,
        },
        email: req.body.email,
        zipCode: req.body.zipCode,
        password: req.body.password,
    });

    newUser
        .save()
        .then((data) => res.json(data))
        .catch((error) => next(error));
};

exports.putUser = (req, res, next) => {
    const id = req.params.id;

    const newUser = {
        name: {
            first: req.body.first,
            last: req.body.last,
        },
        email: req.body.email,
        zipCode: req.body.zipCode,
        password: req.body.password,
    };

    User.findByIdAndUpdate(id, newUser, { new: true })
        .then((data) => res.json(data))
        .catch((error) => next(error));
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => next(error));
};
