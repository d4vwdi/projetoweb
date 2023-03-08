const express = require("express")
const app = express()

//Criando uma rota para o diretório principal do domínio
app.get("/", function(req, res){
    //res.send("<h1>Estou na primeira página.</h1>")
    res.sendFile(__dirname + "/html/index.html")
})
//Teste com uma outra página
app.get("/contato", function(req, res){
    res.send("Estou na página de contato.")
})
//Página de produto
app.get("/produto", function(req, res){
    res.send("Estou na página de produto.")
})
//Teste mais uma outra página
app.get("/produto/:item", function(req, res){
    res.send("Item: " + req.params.item)
})
//Teste quantidade na página produto
app.get("/produto/:item/:quantidade", function(req, res){
    res.send("Item: " + req.params.item + "<br>Quantidade: " + req.params.quantidade)
})
//Criando o servidor web na porta 8081
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
//Nada pode vir após o listen. pois ele encerra a leitura do browser

