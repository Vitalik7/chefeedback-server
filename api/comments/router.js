const express = require('express');
const Comment = require('./model')
const router = express.Router();

router.get('/comment', (req, res, next) => {
    console.log('GET');
    Comment.find()
        .then(comment => {
            res.json({comment})
        })
        .catch(next)
});

router.post('/comment', (req, res, next) => {
  console.log('POST');
    new Comment(req.body.comment)
        .save()
        .then(function (comments) {
            res.json({comments})
        })
        .catch(next)
});

router.get('/comment/:id', (req, res, next) => {
    let id = req.params._id;
    Comment.findOne({ id: id })
        .then(function (comment) {
        res.json({comment})
    }).catch(next)
});

// router.post('/comment/:id', function (req, res) {
//     Comment.findById(req.params.id, function (err, theUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             theUser.likes += 1;
//             theUser.save();
//             console.log(theUser.likes);
//             res.send({likeCount: theUser.likes}); //something like this...
//         }
//     });
// });

router.get('/category/:category', (req, res, next) => {
    Comment
        .find({category: req.params.category})
        .then(comments => {
            res.json({comments})
        })
        .catch(next)
});

module.exports = router;
