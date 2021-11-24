const btn=document.getElementById("btn");
const dt=document.getElementsByClassName("darkt")[0];
const list=document.getElementsByClassName("list")[0];
console.log(dt);
function randno(num){
  return Math.floor(Math.random()*(num));
}
console.log(randno(255));
btn.addEventListener("click",(e)=>{
  let randcol="rgb(" +randno(255)+" , "+ randno(255)+ " , "+ randno(255)+" )";
  document.body.style.backgroundColor=randcol;
});
function darktheme(){
  if(document.body.style.backgroundColor === "black"){
    document.body.style.backgroundColor= "white";
  }
  else{
    document.body.style.backgroundColor= "black";
  document.body.style.opacity=.75;
  }
}
dt.onclick=darktheme;

