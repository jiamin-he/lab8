var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.addRSVP = function(req, res){
	console.log("hi");
	var rsvpEmail = req.body.rsvpEmail;
	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail);
  	res.send(rsvpEmail);
};
