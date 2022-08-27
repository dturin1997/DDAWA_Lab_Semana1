import express from "express";

const app = express()

//Para entender lo que el cliente envia
app.use(express.json());

const people = [];

app.get("/", (request, response)=>{

        return response.json({
            ok: true,
            data: people,
        })
    
});

app.post("/create", function(req, res){

    const data = req.body;
    data.id = people.length + 1;
    people.push(req.body);

    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    })

    /*
    const data = req.body;
    data.id = people.length + 1;

    if(people.length==0){
        people.push(req.body);
    }

    let i;
    
    for(i=0;i<people.length;i++){
        if(data.id==people[i].id){
            continue;
        }else{
            people.push(req.body);
        }
    }

    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    })
    */
})

/* Laboratorio de la Semana 1 */

app.put("/update", (request, response)=>{
    
    const data = request.body;

    people[data.id-1].name=data.name;
    people[data.id-1].last_name=data.last_name;
    people[data.id-1].age=data.age;


    return response.status(204).json({
        ok: true,
        data: "Persona modificada",
    })
});

app.delete("/delete", (request, response)=>{
    
    const data = request.body;

    let i;

    for(i=0;i<people.length;i++){
        if(data.id==people[i].id){
            people.splice(i,1);
            i=0;
        }
    };
    

    return response.status(201).json({
        ok: true,
        data: "Persona eliminada",
    })
});


/* */

app.listen(6004, () =>
 console.log(`El servidor inicio en http://localhost:6004`)
 )