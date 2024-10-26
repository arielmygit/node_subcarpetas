const express = require("express");
const path = require("path");
const port = 3012;
const app = express();

app.get( "/",(req, res)=>{
    //res.send("Hola mundo");
    //res.sendFile("C:/Users/aaron/Desktop/clases2025/web2_1758/21102024/index.html");
    res.sendFile(path.join(__dirname +"/index.html") );

} );


app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html'));
});

app.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'informacion.html'));
});


app.listen(port,()=>{
    console.log(`El servidor esta diponible por medio del: http://localhost:${port}`);
})