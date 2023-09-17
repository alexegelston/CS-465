const index = (req, res) => {
    res.render('index', {title: 'Travlr Gentaways'});
};

module.exports = {
    index
}