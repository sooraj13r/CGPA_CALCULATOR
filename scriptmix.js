
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
}if(op!=1){

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
document.getElementById('result').innerHTML =total;}

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
}if(op!=1){
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
document.getElementById('result2').innerHTML =total2;}

var dcp3=document.getElementById("dcp3").value;
var cpp3=document.getElementById("cpp3").value;
var ca3=document.getElementById("ca3").value;
var dbms3=document.getElementById("dbms3").value;
var evs3=document.getElementById("evs3").value;
var dcpl3=document.getElementById("dcpl3").value;
var cppl3=document.getElementById("cppl3").value;
var dbmsl3=document.getElementById("dbmsl3").value;
if(dcp3=="Grade")
{
var op=1;
}if(cpp3=="Grade")
{
var op=1;
}if(ca3=="Grade")
{
var op=1;
}if(dbms3=="Grade")
{
var op=1;
}if(evs3=="Grade")
{
var op=1;
}if(dcpl3=="Grade")
{
var op=1;
}if(cppl3=="Grade")
{
var op=1;
}if(dbmsl3=="Grade")
{
var op=1;
}if(op!=1){

var check3=1;
if((dcp3==0) || (cpp3==0) || (ca3==0) || (dbms3==0) || (evs3==0) || (dcpl3==0) || (cppl3==0) || (dbmsl3==0))
{
alert("Can't calculate cgpa for failed subjects!!!");
check3=0;
}
var pointdcp3=dcp3*4;
var pointcpp3=cpp3*5;
var pointca3=ca3*4;
var pointdbms3=dbms3*4;
var pointevs3=evs3*3;
var pointdcpl3=dcpl3*3;
var pointcppl3=cppl3*3;
var pointdbmsl3=dbmsl3*2;
var sum3=pointdcp3+pointcpp3+pointca3+pointdbms3+pointevs3+pointdcpl3+pointcppl3+pointdbmsl3;
var total3=(((sum3/280)*10)*check3);
document.getElementById('result3').innerHTML =total3;}

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
}if(op==1)
{
alert("please select grades for all subjects!!!");
}if(op!=1){
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
document.getElementById('result4').innerHTML=total4;
tot4=((sum+sum2+sum3+sum4)/1140)*10;
document.getElementById('tot').innerHTML =tot4;
}}
function reloadpage() {
    location.reload();
}
