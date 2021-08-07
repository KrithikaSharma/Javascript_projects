var eqtn="";
const input=document.getElementById('input');
const ouput=document.getElementById('result');
function cal(val){
    eqtn+=val;
    input.value=eqtn;
}
function remove(){
    eqtn=eqtn.substring(0, eqtn.length-1);
    input.value=eqtn;
}
function tot(){
    if(eqtn.length==0 || eqtn==""){
        alert("Give input");
        return;
    }
    try{
        ans=eval(eqtn);
        ouput.value=ans;
    }
    catch(err){
        alert("Invalid input!!");
    }
}
function reset(){
    input.value="";
    ouput.value="";
    eqtn="";
}