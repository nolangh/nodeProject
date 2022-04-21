const csv = require("csv-parser");
const fs = require("fs");
const path = "data/data.csv";
const langPath = "data/languages.csv";

/* fs.createReadStream(path)
	.pipe(csv())
	.on("data", (row) => {
		console.log(row);
	})

	.on("end", () => {
		console.log("Done parsing");
	}); */

// Line break

fs.createReadStream(langPath)
	.pipe(csv())
	.on("data", (row) => {
		if (row.language === "French") {
			console.log(row);
		}
	})

	.on("end", () => {
		console.log("These fools are french");
	});
