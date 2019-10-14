
function calculate2()
{
var math2=document.getElementById("math2").value;
var eng2=document.getElementById("eng2").value;
var phy2=document.getElementById("phy2").value;
var che2=document.getElementById("che2").value;
var c2=document.getElementById("c2").value;
var eg2=document.getElementById("eg2").value;
var wp2=document.getElementById("wp2").value;
var slab2=document.getElementById("slab2").value;
var clab2=document.getElementById("clab2").value;
var lskill2=document.getElementById("lskill2").value;
if(math2=="Grade")
{
var op=1;
}if(eng2=="Grade")
{
var op=1;
}if(che2=="Grade")
{
var op=1;
}if(phy2=="Grade")
{
var op=1;
}if(c2=="Grade")
{
var op=1;
}if(eg2=="Grade")
{
var op=1;
}if(wp2=="Grade")
{
var op=1;
}if(slab2=="Grade")
{
var op=1;
}if(clab2=="Grade")
{
var op=1;
}if(lskill2=="Grade")
{
var op=1;
}
if(op==1)
{
alert("please select grades for all subjects!!!");
}else{

var check2=1;
if((math2==0) || (eng2==0) || (phy2==0) || (che2==0) || (c2==0) || (wp2==0) || (eg2==0) || (slab2==0) || (clab2==0) || (lskill2==0))
{
alert("Can't calculate cgpa for failed subjects!!!");
check2=0;
}
var pointeng2=eng2*3;
var pointmath2=math2*6;
var pointphy2=phy2*3;
var pointche2=che2*3;
var pointc2=c2*4;
var pointeg2=eg2*5;
var pointwp2=wp2*3;
var pointslab2=slab2*3;
var pointclab2=clab2*2;
var pointlskill2=lskill2*2;

var sum2=pointeng2+pointmath2+pointphy2+pointche2+pointc2+pointeg2+pointwp2+pointslab2+pointclab2+pointlskill2;
var total2=(((sum2/340)*10)*check2);
document.getElementById('result2').innerHTML =total2;
}}
function reloadpage() {
    location.reload();
}