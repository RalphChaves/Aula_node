const express = require("express"); // importando o express
const path = require("path"); // importando o path
const app = express();
const port = 3000;

app.set("view engine", "ejs"); //set engine para trabalhar com o EJS

app.use(express.static(path.join(__dirname,"public"))); // set public como  pasta raiz para arquivo

app.get("/", function (req, res) {
    res.render("index", {titulo: "Qualquer coisa"});
});

app.get("/pagina", function (req, res) {
    res.render("pagina");
});


// app.get("/site", function (req, res) {
//     res.send("acho que é um site");
// });

// app.post
// app.put
// app.delete
// app.listen(3000);

app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`)); //faz o servidor escutar, passando a porta onde o serviço vai ficar ativo