
function calculate1()
{
var math1=document.getElementById("math1").value;
var eng1 =document.getElementById("eng1").value;
var phy1=document.getElementById("phy1").value;
var che1=document.getElementById("che1").value;
var hpe1=document.getElementById("hpe1").value;
var cf1=document.getElementById("cf1").value;

if(math1=="Grade")
{
var op=1;
}if(math1=="Grade")
{
var op=1;
}if(eng1=="Grade")
{
var op=1;
}if(che1=="Grade")
{
var op=1;
}if(phy1=="Grade")
{
var op=1;
}if(hpe1=="Grade")
{
var op=1;
}if(cf1=="Grade")
{
var op=1;
}
if(op==1)
{
alert("please select grades for all subjects!!!");
}else{
var check=1;
if((math1==0) || (eng1==0) || (phy1==0) || (che1==0) || (hpe1==0) || (cf1==0))
{
alert("Can't calculate cgpa for failed subjects!!!");
check=0;
}
var pointeng1=eng1*3;
var pointmath1=math1*6;
var pointphy1=phy1*3;
var pointche1=che1*3;
var pointhpe1=hpe1*2;
var pointcf1=cf1*4;

var sum=pointeng1+pointmath1+pointphy1+pointche1+pointhpe1+pointcf1;
var total=(((sum/210)*10)*check);
document.getElementById('result').innerHTML =total;
}}
function reloadpage() {
    location.reload();
}