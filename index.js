const express = require("express"); // importando o express
const path = require("path"); // importando o path
const app = express();
const port = 3000;

app.set("view engine", "ejs"); //set engine para trabalhar com o EJS

app.use(express.static(path.join(__dirname,"public"))); // set public como  pasta raiz para arquivo
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index", {titulo: "Qualquer coisa"});
});

app.get("/pagina", function (req, res) {
    res.render("pagina");
});

app.get("/formulario", function (req, res) {
    res.render("formulario");

});
app.get("/cadastro", function (req, res) {
    res.render("cadastro");

});
// app.post("/recebform", function (req, res) {
//     const { nome, email, senha } = req.body;
//     res.send({nome: nome, email: email, senha: senha});

// });

app.post("/formulario", function (req, res) {
    const{nome, email, senha, endereco} = req.body;
    const site = {nome: site.nome, senha: site.senha, email: site.email, endereco: site.endereco};
    res.render("cadastro", site);
})

//Não é recomendado
// app.get("/recebform", function (req, res) {
//     const { nome, email, senha } = req.query;
//     res.send({nome: nome, email: email});

// });


// app.get("/site", function (req, res) {
//     res.send("acho que é um site");
// });

// app.post
// app.put
// app.delete
// app.listen(3000);

app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`)); //faz o servidor escutar, passando a porta onde o serviço vai ficar ativo