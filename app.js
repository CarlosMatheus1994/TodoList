const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

app.set("view engine", "ejs");

// Método Post
app.post('/', (req, res) => {
    console.log(req.body);
});
// Método Get
app.get('/', (req, res) => {
    res.render('todo.ejs');
});

app.listen(3000, () => console.log("Servidor instalado e funcionando"));