// const express=require('express');
// const app=express();
// const port=4900;
// app.get('/',(req,res)=>{
//     res.send("this is my first server")
// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>this is about page</h1>");
// })
// app.get('/img',(req,res)=>{
//     res.send('<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmk1PHONqzC5xU2IbX-SA-zaKv7ND-69Dtg&s"></img>');
// })

// app.listen(port,()=>{
//     console.log(`server is run at http://localhost:${port}`);
// })


const express=require('express');
const app=express();
const port=4100;

app.use(express.json());
// database(json)
const students=[
    {
        id:1,
        name:"deepak",
        class:"b.tech"
    },
    {
        id:2,
        name:"priyanshu",
        class:"M.tech"

    }
]


//data read(all data)
app.get('/read',(req,res)=>{
    try{
        res.status(200).json({message:"show all data",data:students});

    }
    catch(error){
        res.status(500).json({message:"error reading data",error:error.message});
    }
})


//data show for id
app.get('/about/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const student=students.find(s=>s.id==id);    // s is a variable
        if(!student){
            return res.status(404).json({message:"student data is not found",data:students});
        }
        res.status(200).json({message:"student data is found",data:student});
    }
    catch(error){
        res.status(500).json({message:"error reading data",error:error.message});
    }
})




// data is create
app.post('/add',(req,res)=>{
    try{
        const newstudent={
            id:students.length+1,
            ...req.body                            // ... for destructuring
        }
        students.push(newstudent);
        res.status(200).json({message:"student data is add successful",data:newstudent});


    }
    catch(error){
        res.status(500).json({message:"error adding data",error:error.message});
    }
})





//data update
app.put('/edit/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const index=students.findIndex(s=>s.id==id);
        if(index==-1){
            return res.status(404).json({message:"student data is not found"});
        }
        students[index]={
            ...students[index],
            ...req.body
        }
        res.status(200).json({message:"student data is update successful",data:students[index]});

    }
    catch(error){
        res.status(500).json({message:"error updating data",error:error.message});
    }
})




//data delete
app.delete('/delete/:id',(req,res)=>{
    try{
        const  id=req.params.id;
        const index=students.findIndex(s=>s.id==id);
        if(index==-1){
            return res.status(404).json({message:"student data is not found"});
        }
        students.splice(index,1);
        res.status(200).json({message:"student data is delete successful",data:students});

    }
     catch(error){
        res.status(500).json({message:"error deleting data",error:error.message});
    }

})
app.listen(port,()=>{
    console.log(`server is run at http://localhost:${port}`);
})