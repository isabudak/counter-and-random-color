const button=document.getElementById('button');
const span=document.getElementById('ozel');


const dizi=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let count=0;

function rastgeleDegerOlustur(){
    const rastgeleDeger=Math.floor(Math.random() * dizi.length);
    const rastgeleDegerValue=dizi[rastgeleDeger];
    return rastgeleDegerValue;
}
function rastgeleDegerYazdir(stringValue){
    let diziString='';
    for(let i=0; i<stringValue; i++){
        diziString+= rastgeleDegerOlustur();
    }
    return diziString;
}

button.addEventListener("click",function (){
    const rastgeleDiziString='#'+ rastgeleDegerYazdir(6);
    document.body.style.setProperty("background-color", rastgeleDiziString);
    span.textContent=rastgeleDiziString;

})
button.onclick=function(){
    count+=1;
    document.getElementById('value').innerHTML=count;
}