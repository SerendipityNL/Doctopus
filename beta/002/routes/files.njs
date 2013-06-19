// // file system and easyimage resize
var fs 		= require('fs');	
/* -------------------------------------------------------------
Module functions
------------------------------------------------------------- */

module.exports = {
	upload: function(req, res) {
		//settings
	    var id  		= 1;
		var ext 		= req.files.file.name.split('.').pop();
		var new_name 	= Math.random().toString(36).substring(7);
		var max_width 	= 800;
		var max_height 	= 600;
		var max_size    = 5000000; // in bits, its 2mb
		var upload_dir  = "/public/uploads/";
		var resize = false;

		// write the new file
		fs.readFile(req.files.file.path, function (err, data) {
		  var newPath = __dirname + upload_dir + id + "_" + req.session.username + "_" + new_name + "." +ext+ " ";

				fs.writeFile(newPath, data, function (err) {
					res.send(err);
				});
			});
	}
}