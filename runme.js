var readline = require('readline');
var fs = require('fs');

var foo;
var spot;

var noun;
var verb;

var val1;
var val2;
var val1f;
var val2f;
var val3;
var lock;
var myfinaloutput;

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

myInterface.on('line', function (line) {
  var temp = new Array();
	for (noun = 0; noun < 100 ; noun++) {
		for (verb = 0; verb < 100 ; verb++) {
			temp = line.split(",");
			temp[1] = noun;
			temp[2] = verb;
				//Start loop of updating numbers until halt or 19690720
				foo = 0;
				while (temp[foo] != 99) {
					if (temp[foo] == 99) break;
									
					lock = 0;
					val1 = Number(temp[foo+1]);
					val1f = Number(temp[val1]);
					val2 = Number(temp[foo+2]);
					val2f = Number(temp[val2]);
					spot = Number(temp[foo+3]);
		
					if (lock == 0) {
						if (temp[foo] == 1) {
							lock = 1;
							val3 = val1f+val2f;
						};
					};
					if (lock == 0) {
						if (temp[foo] == 2) {
							lock = 1;
							val3 = val1f*val2f;
						};
					};
					temp[spot] = val3;
					foo = foo + 4;
					
					if (temp[0] == 19690720) {
						console.log("Noun: " , noun , "Verb: " , verb);
						myfinaloutput = (100 * noun) + verb;
						console.log("Final output: " , myfinaloutput);
						break;
					}
					
					};
			}
		}
});
