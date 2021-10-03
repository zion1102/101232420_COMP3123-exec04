let express = require('express')
let app = express()


app.get("/hello",(req, res)=>{
    res.send("<h1>Hello Express JS</h1>")
}) 
app.get("/user",(req, res)=>{

    let firstname = req.query.fnm
    let lastname = req.query.lnm
    
response ={
    status : "success",
    firstname,
    lastname
}

    res.send(response)
})

app.post("/user/:fnm/:lnm",(req, res)=>{
    let fnm = req.params.fnm
    let last_name = req.params["lnm"]


response ={
    status : "success",
    fnm,
    last_name,
    
}

    res.send(response)
})

let server = app.listen(8090,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s",host,port)
})