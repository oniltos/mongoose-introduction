import mongoose, { mongo } from "mongoose";

mongoose
  .connect("mongodb://localhost/promise-all-dev")
  .then((db) => {
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`);
  })
  .catch((error) => {
    console.log("Error connecting to mongo", error);
  });

const Student = mongoose.model("Student", { firstName: String });
const City = mongoose.model("City", { name: String });

const students = Student.insertMany([
  { firstName: "John" },
  { firstName: "Jane" },
  { firstName: "Mary" },
]);

const cities = City.insertMany([
  { name: "Rio de Janeiro" },
  { name: "Pindamonhangaba" },
  { name: "Salvador" },
]);

Promise.all([students, cities])
  .then((values) => {
    console.log("Os alunos e as cidades foram inseridos");
    console.log(values);
  })
  .catch((error) => console.log(error));
