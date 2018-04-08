var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
	if (err) throw err;
	console.log(files);
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
    });
});
