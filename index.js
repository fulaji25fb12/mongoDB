let mongoose = require("mongoose");

//connection
mongoose
    .connect("mongodb://localhost/UDH", { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log(`connected to db`))
    .catch(error => console.log(`something went wrong! ${error.message}`));

// let courseSchema = new mongoose.Schema({
//     author: { type: String, required: true },
//     price: { type: Number, required: true },
//     courses: [String],
//     date: { type: Date, default: Date.now() },
//     isPublished: { type: Boolean, required: true }
// });
// let courserModel = mongoose.model("courses", courseSchema);

let authorSchema = new mongoose.Schema({
    tags: [String],
    data: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    isPublished: { type: Boolean, required: true }
});
let authorModel = mongoose.model("authors", authorSchema);

// async function Course(){
//     let authorcourse = new courserModel({
//         author: "makdoe",
//         price: 4000,
//         courses: ["BACKEND END", "GRAPHSQL"],
//         isPublished: true
//     });
//     let data = await authorcourse.save();
//     // console.log(data);
// }
// // Course();

// //fetch record

// //$gt,$gte,$lt,$lte,$eq,$neq, $in, $nin
// //and, or
// async function AllCourses() {
//     // let data = await courserModel
//     //     .find({ "author": "makdoe" })
//     //     .select("author price -_id")
//     let data = await courserModel
//         // .find({
//         //     "price": {
//         //     $gte:200, $lte:600
//         // }})
//         // .find({
//         //     "price": {
//         //     $in:[200,400,500,600]
//         // }})
//         .find()
//         // .and([{"price":4000}, {"author":"makdoe"}])
//         // .select("author price -_id")
//         // .sort("-price")
//         .count()
//         console.log(data);
// };
// AllCourses();

async function Authors(){
    let data = await authorModel
        .find({"tags":"backend"})
        .sort("-name")
        .select("tags name author")
        console.log(data);
}
Authors();

async function AuthorsDB(){
    let data = await authorModel
        .find()
        .sort("-price")
        .select("name author tags price")
        console.log(data);
}
AuthorsDB();
