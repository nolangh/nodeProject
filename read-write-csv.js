const csv = require("csv-parser");
const { createObjectCsvWriter } = require("csv-writer");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = "data/usedCars.csv";
const carPath = "data/carData.csv";

// Line break
/* fs.createReadStream(path)
	.pipe(csv())
	.on("data", (row) => {
		console.log(row);
	})

	.on("end", () => {
		console.log("Done parsing");
	});

 fs.createReadStream(langPath)
	.pipe(csv())
	.on("data", (row) => {
		if (row.language == "French") {
			console.log(row.first_name + " " + row.last_name);
		}
	})

	.on("end", () => {
		console.log("These fools are french");
	}); */

//Line Break

/* const csvWriter = createObjectCsvWriter({
	path: path,
	header: [
		{ id: "name", title: "First Name" },
		{ id: "age", title: "Age" },
	],
});

const data = [
	{ name: "Nolan Higgins ", age: 29 },
	{ age: 29, name: "Paige Higgins " }, //NOTE: order doesn't matter becaus ethe header sets the order
];

csvWriter.writeRecords(data).then(() => {
	console.log("done");
}); */

//Line Break

fs.createReadStream(path)
	.pipe(csv())
	.on("data", (row) => {
		if (row.year >= 2010) {
			console.log(row.make, row.model, row.year);
		}
	})

	.on("end", () => {
		console.log("Done parsing");
	});

const csvWriter = createObjectCsvWriter({
	path: carPath,
    header:[
        {id:"make", title: "Make"},
        {id: "model", title: "Model"},
        {id: "year", title: "Year"},
    ],
});

class car {
	constructor(make, model, year){
		    this.make = this.make,
    this.model = this.model,

	}
}

