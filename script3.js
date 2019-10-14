
function calculate3()
{
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
}
if(op==1)
{
alert("please select grades for all subjects!!!");
}else{

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
document.getElementById('result3').innerHTML =total3;
}}
function reloadpage() {
    location.reload();
}