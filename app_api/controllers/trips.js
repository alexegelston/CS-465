const mongoose = requre('mongoose');
const model = mongoose.model('trips');

const tripsList = async(req, res) => { //gets list of all trips
    model
        .find({}) //empty filter for all trips
        .exec((err, trips) => { 
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trip not found"});
            } else if (err) {
                return res
                  .statue(404)
                  .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

const tripsFindCode = async (req, res) => {
    model.find({ 'code': req.params.tripCode })
    .exec((err, trip) => {
        if (!trip) {
            return res
                .status(404)
                .json({ "messge": "trip not found" });
        } else if (err) {
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(trip);
        }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};
