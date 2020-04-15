require('newrelic');
const db = require("../../database-mongoose/dbHelpers");

module.exports = {

	//fetch a single shoe by ID given
	getOneShoe: (req, res) => {
		let { nikeID } = req.params;
		console.log(`QUERYING DB FOR SINGLE SHOE WITH ID OF`.green, `${nikeID}`.cyan);
		db.getOne(nikeID)
			.then(shoe => {
				console.log("Get One SHOE".green, " Success".cyan);
				const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
				res.status(200).send(shoe);
			})
			.catch(e => {
				console.log("Get One SHOE".red, " UnSuccessFull".red);
				res.status(400).send();
			});
	},
	//query DB and return all shoes with matching name
	getShoes: (req, res) => {
		let {nikeID} = req.params
		console.log(req.params, "THE PARAMS")
		console.log(`QUERYING DB FOR ALL`.green, `${nikeID}`.cyan, `SHOES`.green)
		db.getOne(nikeID)
			.then(allData => {
				console.log("QUERY SHOESET".green, " Success".cyan);
				
				res.status(200).send(allData);
			})
			.catch(e => {
				console.log("QUERY SHOESET".red, " UnSuccessFull".red);
				res.status(400).send(e);
			});
	}
};
