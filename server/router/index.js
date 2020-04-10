const router = require("express").Router();
const controller = require("../controllers");
const psqlController = require("../../database-psql/controllers/")
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log(`Time: `.green, `${Date.now()}`.green);
	next();
});



//get shoe by ID
router.route("/shoe/:nikeID").get(controller.getOneShoe)

//get shoeset by name
router.route("/shoes/:nikeID").get(controller.getShoes);

//get shoe by ID
router.route("/shoepsql/:nikeID").get(psqlController.getOneShoe)

//get shoeset by name
router.route("/shoespsql/:nikeID").get(psqlController.getShoes);


module.exports = router;
// {"name":"Nike Free RN 3.0 NRG",
// "price":90,
// "discountPrice":78,
// "gender":"male",
// "productDetails":{"weight":"11.78","style":"UB4922 - 12","offset":"3mm (3mm forefoot, 3mm heel)","last":"MY26"},
// "colorStyles":["Team Red","White","Gum Light Brown","Team Red"],
// "availSizes":{"5":false,"6":false,"7":true,"8":false,"9":true,"10":true,"11":true,"12":true,"13":true,"14":false,"15":false,"16":false,"17":false,"18":false,"5x5":false,"6x5":false,"7x5":true,"8x5":false,"9x5":true,"10x5":true,"11x5":true,"12x5":true,"13x5":true},
// "productPictures":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pllreyrjt8klklnvmde7/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
// "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0.89/zey6vuqpj4zxw76kuxye/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
// "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ttvpr7emwalmb6uaghn2/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
// "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/sfylmnvk7xdplpz6wcmu/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
// "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/acywmtdwxncro3fr0pl6/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
// "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/r9mz0al9fpftyz1s2ngq/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg"],
// "type":"Men Running Shoe",
// "collection":["Nike","Free","RN","3.0","NRG","Team Red","White","Gum Light Brown","Team Red"],
// "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pllreyrjt8klklnvmde7/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg"}