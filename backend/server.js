const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

const barlist=require('./models/issue');
const custlist=require('./models/cust');
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bardb');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/bardb').get((req, res) => {
    barlist.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/bardb/:id').get((req, res) => {
    barlist.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/bardb/add').post((req, res) => {
    let issue = new barlist(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/bardb/update/:id').post((req, res) => {
    barlist.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else {
            issue.name=req.body.name;
            issue.gstnumber=req.body.gstnumber;
            issue.description=req.body.description;
            issue.latittude=req.body.latittude;
            issue.longitude=req.body.longitude;
            issue.rating=req.body.rating;
            issue.review=req.body.review;
            issue.timing=req.body.timing;
            issue.totalitems=req.body.totalitems;
            issue.specialitems=req.body.specialitems;
            issue.facilities=req.body.facilities;
            issue.contactnumber=req.body.contactnumber;
            issue.facilities=req.body.facilities;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/bardb/delete/:id').get((req, res) => {
    barlist.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));