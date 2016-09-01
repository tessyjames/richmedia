function login() {
	location.href="login.html";
	}
function viewcontent() {
	location.href="viewcontent.html";
	}
	function home() {
		location.href="trial.html";
		}


function POMEGRANATEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F22613";
}

function softredbackground() {
var blue=document.getElementById('pageback');
blue.style.backgroundColor=" #EC644B";
}

function FLAMINGObackground() {
var green=document.getElementById('pageback');
green.style.backgroundColor="#EF4836";
}

function RAZZMATAZZbackground() {
var white=document.getElementById('pageback');
white.style.backgroundColor="#DB0A5B";
}

function CABARETbackground() {
var AliceBlue =document.getElementById('pageback');
AliceBlue.style.backgroundColor="#D2527F";
}

function RADICALbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F62459";
}

function SNUFFbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#DCC6E0";
}

function REBECCAPURPLbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#663399";
}

function WISTFULbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#AEA8D3";
}

function SEANCEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#9A12B3";
}

function MEDIUMbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#BF55EC";
}


function ALICEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#E4F1FE";
}
function ROYALbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#4183D7";
}
function HUMMINGbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#C5EFF7";
}
function MADISONbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#2C3E50";
}
function TURQUOISEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#4ECDC4";
}
function JADEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#00B16A";
}
function MADANGbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#C8F7C5";
}
function CREAMbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F5D76E";
}
function SAFFRONbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F4D03F";
}
function CAPEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#FDE3A7";
}



function CASABLANCAbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F4B350";
}
function BUCKTHORNbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#EB974E";
}
function ECSTASYbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#F9690E";
}
function PORCELAINbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#ECF0F1";
}
function SILVERbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#BFBFBF";
}
function CASCADEbackground() {
var red=document.getElementById('pageback');
red.style.backgroundColor="#95A5A6";
}


document.getElementById('imagevalue').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("imagevalue").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('previmage').style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}