module.exports = {
	index: function(req, res) {
		if (req.session.logged_in) {
			res.redirect('/dashboard');
		}
		res.render('pages/front/index');			
	}
}