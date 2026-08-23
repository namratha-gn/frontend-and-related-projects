let url="https://catfact.ninja/fact";
fetch(url)

.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data1= ",data.fact);
    return fetch(url);
})
.then((data1)=>{
    return  data1.json();
})
.then((info)=>{
    console.log("data2= ",info.fact);
})
.catch((err)=>{
    console.log("ERROR=",err);
})
