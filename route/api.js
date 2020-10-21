const express = require('express');

const router = express.Router();

const NewPost = require('../model/NewPost')
//router
router.get('/', (req, res) => {
    NewPost.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.post('/quest', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newNewPost = new NewPost(data);

    //.save

    newNewPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, server error' });
            return;
        }

        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });

    });
});

// router.get('/name', (req, res) => {
//     const data = {
//         username: 'ben',
//         age: 5
//     };
//     res.json(data);
// });

module.exports = router;