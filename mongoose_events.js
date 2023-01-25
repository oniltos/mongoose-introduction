import mongoose, { mongo } from "mongoose";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) => {
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`);
  })
  .catch((error) => {
    console.log("Error connecting to mongo", error);
  });

mongoose.connection.on("connected", () => console.log("Conexão aberta"));
mongoose.connection.on("error", (error) =>
  console.log("Erro na conexão", error)
);
mongoose.connection.on("disconnect", () =>
  console.log("desconectado do mongo")
);

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Fechando a conexão do mongoose porque o node vai morrer.");
    process.exit(0);
  });
});
