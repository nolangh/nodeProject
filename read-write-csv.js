const csv = require("csv-parser");
const fs = require("fs");
const path = "data/data.csv";

fs.createReadStream(path)
	.pipe(csv())
	.on("data", (row) => {
		console.log(`${row}`);
	})

	.on("end", () => {
		console.log("Done parsing");
	});
