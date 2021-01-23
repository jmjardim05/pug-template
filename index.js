const express = require("express");
const posts = require("./data/posts.json");

const app = express();

// seta as views (UI) da aplicação
app.set("views", "./templates");
// seta qual a engine que gera as views, neste caso será pug
app.set("view engine", "pug");

// app.get configura uma rota para o método get
app.get("/", (req, res) => {
    // response -> render renderiza uma view com base na view engine configurada e na pasta de views
    // index aponta para index.pug na pasta templates
    // definimos uma variável message para ser exibida na página
    res.render("index", {
        message: "Este site usa PUG com Express!!"
    });
});

app.get("/sobre", (req, res) => res.render("sobre"));
app.get("/contato", (req, res) => res.render("contato"));

app.get("/posts", (req, res) => {
    // response -> render renderiza uma view com base na view engine configurada e na pasta de views
    // posts aponta para posts.pug na pasta templates
    // definimos uma variável posts para ser os posts na página
    res.render("posts", {
        posts
    });
});

// app.listen -> inicia o servidor na porta informada
app.listen(8088, () => console.log("Aplicação executando na porta 8088"));