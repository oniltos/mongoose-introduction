import mongoose, { mongo } from "mongoose";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) => {
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`);
  })
  .catch((error) => {
    console.log("Error connecting to mongo", error);
  });

const Cat = mongoose.model("Cat", { name: String });

const addNewCat = (catName) => {
  const newCat = new Cat({ name: catName });
  newCat
    .save()
    .then((newCatFromDB) => console.log("Novo gato criado", newCatFromDB))
    .catch((error) => console.log("Erro ao criar gato", error));
};

const showCats = () => {
  Cat.find()
    .then((cats) => {
      cats.forEach((cat) => console.log(`Nome: ${cat.name}`));
    })
    .catch((error) => console.log(error));
};

addNewCat("Javascripto");
addNewCat("Alirio");

setTimeout(showCats, 2500);
