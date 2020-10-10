// const fs = require('fs');

// Read file

// fs.readFile('./new.txt', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.toString());
// 	}
// });


// Write file

// fs.writeFile('./new.txt', 'a little more of something', () => {
// 	console.log('Overwritten');
// });


// Directories

// if (! fs.existsSync('./Testing')) {
// 	fs.mkdir('./Testing', (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('done');
// 		}
// 	});
// } else {
// 	fs.rmdir('./Testing', (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('deleted');
// 		}
// 	});
// }


// Delete files

// if (fs.existsSync('./new.txt')) {
// 	fs.unlink('./new.txt', (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('file deleted');
// 		}
// 	});
// }


const fs = require('fs');
const rd = fs.createReadStream('./new.txt', { encoding: 'utf8' });
const wt = fs.createWriteStream('./new1.txt');
rd.on('data', (chunk) => {
	console.log('---------New Chunk---------');
	console.log(chunk);
	wt.write('\n\n\n\nNew Data\n\n\n\n');
	wt.write(chunk);
});