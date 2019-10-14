
function calculate4()
{
var dc4=document.getElementById("dc4").value;
var os4=document.getElementById("os4").value;
var ds4=document.getElementById("ds4").value;
var csh4=document.getElementById("csh4").value;
var sal4=document.getElementById("sal4").value;
var dsl4=document.getElementById("dsl4").value;
var cshl4=document.getElementById("cshl4").value;
var adl4=document.getElementById("adl4").value;
if(dc4=="Grade")
{
var op=1;
}if(os4=="Grade")
{
var op=1;
}if(ds4=="Grade")
{
var op=1;
}if(csh4=="Grade")
{
var op=1;
}if(sal4=="Grade")
{
var op=1;
}if(dsl4=="Grade")
{
var op=1;
}if(cshl4=="Grade")
{
var op=1;
}if(adl4=="Grade")
{
var op=1;
}
if(op==1)
{
alert("please select grades for all subjects!!!");
}else{

var check4=1;
if((dc4==0) || (os4==0) || (csh4==0) || (sal4==0) || (dsl4==0) || (cshl4==0) || (adl4==0) || (ds4==0))
{
alert("Can't calculate cgpa for failed subjects!!!");
check4=0;
}

var pointdc4=dc4*4;
var pointos4=os4*4;
var pointds4=ds4*5;
var pointcsh4=csh4*4;
var pointsal4=sal4*3;
var pointdsl4=dsl4*3;
var pointcshl4=cshl4*3;
var pointadl4=adl4*5;
var sum4=pointdc4+pointos4+pointds4+pointcsh4+pointsal4+pointdsl4+pointcshl4+pointadl4;
var total4=(((sum4/310)*10)*check4);
document.getElementById('result4').innerHTML =total4;
}}
function reloadpage() {
    location.reload();
}