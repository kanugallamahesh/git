// // var a = 10;
// // var a = 20;
// // console.log(a);

// // let c = 32;
// //  c = 64;
// // console.log(c);

// // const b = 54;
// // console.log(b);


// // for(let i=0;i<=4;i++)
// // {
// //     for(let j=0;j<=4;j++)
// //     {
// //         console.log("*");
// //     }
// //     console.log(" "); 
// // }


// // let num1=10;
// // let num2="10";
// // if(num1==num2)
// // {
// //     console.log(-1);
// // }
// // else{
// //     console.log(1);
// // }

// // Arrays

// let userdata=[10,"hello",false,3.4567,null];
// for(let index=0;index<userdata.length;index++){
//     console.log( typeof userdata[index]);
    
// }
// console.log(userdata);
// //userdata.push(20)
// //userdata.pop(2938)
// userdata.shift()
// userdata.unshift("chotu")
// console.log(userdata); 


// const obj = {
//     id:1,
//     name:"guest",
//     mydata:[10, "hello"," hiii,hii"]
// }
// console.log(obj.id);

// obj.loc="hyd"
// console.log(obj.mydata);


// const user= [
//     {
//     id:1,
//     name:"hii",
//     loc:"hyd"
// },
// {

//     id:2,
//     name:"bye",
//     loc :"knl"
// }
// ];

// for (const element of user) {
//     for (const key in element) {
//         if (!Object.hasOwn(element, key)) continue;
        
//         //const element = object[key];
//         console.log(element[key])
        
//     }
// }
//console.log(user[0].name)
// let nam = "sai";
// let age = 22;
// console.log(`My name is ${nam}. i am ${age} old `);

//DOM in JS

//console.log(document.body);
// let babu=document.getElementById("babu");
// console.log(babu);

// babu.innerText="<b>hello</b>";
// babu.innerHTML="<b>hello</b>";

// let boxes=document.getElementsByClassName("box2");
// let para=document.getElementsByClassName("para");

// boxes[0].innerHTML="ALLU BHAIIIII";
// para[0].innerHTML="haloooo";
let b = true;
const myfunc = () => {
    let display = document.getElementById("display");
    //display.innerHTML = display.innerHTML === "Hello" ? "Bye" : "Hello";
    // if(display.innerHTML === "hello" ){
    //     display.innerHTML = "Bye"
    //      display.style.color = "red";
    // }
    // else{
    //     display.innerHTML = "hello"
    //      display.style.color = "blue";
    // }
    // display.style.color = "red";
    if(b){
        display.src = "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?cs=srgb&dl=pexels-samandgos-709552.jpg&fm=jpg";
        b = false;
    }
    else{
        display.src = "https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain&o=7&rm=3";
        b = true;
    }
   
    
};





