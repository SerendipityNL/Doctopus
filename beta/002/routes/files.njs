var fs = require('fs');	
var easyimg = require('easyimage');
/* -------------------------------------------------------------
Module functions
------------------------------------------------------------- */

module.exports = {
	upload: function(req, res) {
		console.log(req.files);
		//console.log(req.body);
		//console.log(req.files.Image);

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
		var newPath = __dirname + upload_dir + id + "_" + new_name + "." +ext+ " ";
		fs.writeFile(newPath, data, function (err) {

			easyimg.info(req.files.file.path, function(err, img_info, img_err) {
				
			// if there are any errors return them
			if (err) throw err;
			console.log(img_info);

			//check file size again	
			if(img_info.size > max_size){
				console.log('file is too large '+ img_info.size +'');
				resize = false;
			}

			// check max width
			if(img_info.width > max_width){
				console.log('width '+img_info.width+' is too high');
				resize = true;
			}

			// check max height
			if(img_info.height > max_height){
				console.log('height '+img_info.height+' is too high');
				resize = true;
			}

			if(resize == true){
				easyimg.resize({src:req.files.file.path, dst:newPath, width:800, height:600}, function(err, stdout, stderr) {
				if (err) throw err;
					console.log('Resized to 800x600');
				});
			}

			});

			if (err) return console.log(err);

			res.redirect('/document/upload');
			console.log(' '+newPath+' has been uploaded');
			});
		});
	}
}