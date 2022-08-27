import express from "express";

const app = express()

//Para entender lo que el cliente envia
app.use(express.json());

const people = [];

app.get("/", (request, response)=>{
//    response.json({
//     ok: true,
//     // data: "Hola mundo",
//     data: [ 
//         { 
//             id: 1,
//             name:"Pepe",
//             last_name:"Perez",
//             age:25
//         },
//     ]
//    })
        return response.json({
            ok: true,
            data: people,
        })
    
});

app.post("/create", function(req, res){
    // const data= req.body;
    // const { name, last_name }= req.body;
    const data = req.body;
    data.id = people.length + 1;
    people.push(req.body);


    // return res.json(name);
    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    })
})

app.listen(6004, () =>
 console.log(`El servidor inicio en http://localhost:6004`)
 )