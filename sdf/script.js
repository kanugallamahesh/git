const add =()=>{
    event.preventDefault();
    let v1=Number(document.getElementById("v1").value)
    let v2=Number(document.getElementById("v2").value)
    //console.log(v1+" "+v2);
    let dis=document.getElementById("dis")
    dis.innerHTML=`the sum of ${v1} and ${v2} is ${v1+v2}`

};