//foreach



// let arr=[1,2,3,4,5];

// arr.forEach(function(values){
//     console.log(values);
// })


//or

// let arr=[1,2,3,4,2015,5];

// let print=function(value){
//     console.log(value);
// }

// arr.forEach(print);

//or


// let arr=[1,2,3,4,2015,5];

// arr.forEach((value)=>{
//     console.log(value);
// })



//map

// arr=[1,2,3,4,5];

// let new_arr=arr.map((num)=>{
//     return num*2;
// })
// console.log(new_arr);


//or


// const student=[
//     { 
//         name:"Namratha",
//         age:22,
//     },
//     {
//         name:"nagaraj",
//         age:49,
//     },
//     {
//         name:"bhuvan",
//         age:18,

//     }
// ]


// let arr_new=student.map((ages)=>{
//     return ages.age/2;
// })

// console.log(arr_new);



//filter

// let num=[1,2,3,4,5,6];

// let new_num=num.filter((ele)=>{
//     return ele%2==0;
// })
// console.log(new_num);


//reduce function



//this is wrong code , no return, you  have to erite return

// let num=[1,2,3,4];

// num.reduce((acc,el)=>{
//     console.log(acc+el);
// }
// )    


//finding max number using return

let num=[7,5,9,6,8,11,5];


let res=num.reduce((acc,ele)=>{
    if(acc>ele){
        return acc;
    }
    else{
        return ele;
    }
}


)
console.log(res);

 











