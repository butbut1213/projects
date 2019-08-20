//xmg price
window.setInterval(function(){
var butbut =document.getElementById("but").innerHTML;
var siksik =document.getElementById("sik").innerHTML;
var lamlam= Number(butbut) * Number(135.29736775);
var edmund= Number(siksik)* Number(135.29736775);
document.getElementById('lamlam').innerHTML ='HKD $'+Math.round(edmund*100)/100;
document.getElementById('lamb').innerHTML ='GBP £'+Math.round(lamlam*100)/100;
},2000);

//xmg

function repeat57() {
$(function() {
$.ajax({
type: "GET",
url: "https://min-api.cryptocompare.com/data/price?fsym=XMG&tsyms=XMG,GBP,HKD",
dataType: "json",
success: function (data) {
        console.log(typeof data); // -- Object
        var json = data;
        $('#but').html(json.GBP);
        $('#sik').html(json.HKD);

}
});
});
setTimeout(repeat57, 19000);
}
repeat57();



//eth status

//function repeat0() {
//$(function() {
//$.ajax({
//type: "GET",
//url: "https://api.nanopool.org/v1/eth/balance/0xdd20bf3af0960295ca20452b5bb608f3d722f68c",
//dataType: "json",
//success: function (data) {
//	console.log(typeof data); // -- Object
//	var json = data;
//
//	$('#color').html(Math.round(json.status));
//
//
//	var connected;
//	var butbut = $('#color').html();
//	var siksik =Number(butbut);
//	if ( siksik === 1) {
  // document.getElementById("connected").innerHTML = "CONNECTED" ;
//   document.getElementById('centerbox1').style.backgroundColor = '#00FF00';}
//   else {
//    document.getElementById("connected").innerHTML = "DISCONNECTED" ;
//   document.getElementById('centerbox1').style.backgroundColor = '#FF0000';
//	  }
//
//
//
//}
//});
//});
//setTimeout(repeat0, 19000);

//}
//repeat0();
//eth account balance & calculated hashrate

function repeat1() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/eth/user/0xce7e697d7c436113186d3dae167985fbb02cca1e",
dataType: "json",
success: function (data) {
	console.log(typeof data);
	var json = data;
	$('#balance_eth').html((Math.round(json.data.balance*100000000)/100000000)+' ETH');
	$('#balance').html(Math.round(json.data.balance*100000000)/100000000);
	$('#calcuhsrate').html(json.data.hashrate+'Mh/s');


}
});
});
setTimeout(repeat1, 19000);
}
repeat1();

// eth average hashrate
function repeat2() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/eth/reportedhashrate/0xce7e697d7c436113186d3dae167985fbb02cca1e",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
	$('#results').html(Math.round(json.data*100)/100+'Mh/s');

}
});
});
setTimeout(repeat2, 19000);
}
repeat2();



//SIA account balance && calculated hashrate
function repeat3() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/sia/user/f5dc8071fbd7c0d4b443075d4ba4fea711722d7167748d58b9f2fb4800d1ebc5db2d6e97e220",
dataType: "json",
success: function (data) {
	console.log(typeof data);
	var json = data;
	$('#balance_xmr').html(2931+' SIA');
	$('#balance_2').html(Math.round(json.data.balance*1)/1);
	$('#calcuhsrate_xmr').html(json.data.hashrate+'Mh/s');

}
});
});
setTimeout(repeat3, 19000);
}
repeat3();



//sia average hashrate
function repeat4() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/sia/reportedhashrate/f5dc8071fbd7c0d4b443075d4ba4fea711722d7167748d58b9f2fb4800d1ebc5db2d6e97e220",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
	$('#results_xmr').html(Math.round(json.data*100)/100+'Mh/s');

}
});
});
setTimeout(repeat4, 19000);
}
repeat4();







//clock
function GetClock(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clock').innerHTML=""+ndate+"-"+(nmonth+1)+"-"+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
};



//eth exchange rate
function repeat5() {
$(function() {
$.ajax({
type: "GET",
url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,GBP,HKD",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
	$('#1').html('£'+json.GBP);
	$('#2').html('$'+json.HKD);
$('#gbp').html(json.GBP);
	$('#hkd').html(json.HKD);

}
});
});
setTimeout(repeat5, 19000);
}
repeat5();
//sia exchange rate
function repeat6() {
$(function() {
$.ajax({
type: "GET",
url: "https://min-api.cryptocompare.com/data/price?fsym=SC&tsyms=SC,GBP,HKD",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
	$('#3').html('£'+json.GBP);
	$('#4').html('$'+json.HKD);

	$('#gbp_xmr').html(json.GBP);
	$('#hkd_xmr').html(json.HKD);
}
});
});
setTimeout(repeat6, 19000);
}
repeat6();


//etn exchange rate

function repeat16() {
$(function() {
$.ajax({
type: "GET",
url: "https://min-api.cryptocompare.com/data/price?fsym=ETN&tsyms=ETN,GBP,HKD",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
	$('#5').html('£'+json.GBP);
	$('#6').html('$'+json.HKD);
$('#gbp_etn').html(json.GBP);
	$('#hkd_etn').html(json.HKD);

}
});
});
setTimeout(repeat16, 19000);
}
repeat16();




//ETN account balance && calculated hashrate
function repeat200() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/etn/user/etnk6Gv1vo7B3ijkvacu8gRNjF6RGB3oMFrHnkqUtvPk7gXf6znUGQYD1EGQzVgLJS5VKoXERFzFyUX4AsMUFqcg2DnTULnEPm",
dataType: "json",
success: function (data) {
	console.log(typeof data);
	var json = data;



	$('#etn_confirmed').html(Math.round(json.data.balance*1000000)/1000000+' ETN');
         $('#etn_con').html(Math.round(json.data.balance*1000000)/1000000);
  $('#etn_unconfirmed').html(Math.round(json.data.unconfirmed_balance*1000000)/1000000+' ETN');
	$('#etn_hashrate').html(Math.round(json.data.hashrate*1000000)/1000000+' H/s')





}
});
});
setTimeout(repeat200, 19000);
}
repeat200();














//sia payment
function repeat100() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/sia/payments/f5dc8071fbd7c0d4b443075d4ba4fea711722d7167748d58b9f2fb4800d1ebc5db2d6e97e220",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
  	$('#payout_sia').html(json.data[0].amount);
}
});
});
setTimeout(repeat100, 19000);
}
repeat100();


//eth wallet
function repeat101() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.ethplorer.io/getAddressInfo/0xce7e697d7c436113186d3dae167985fbb02cca1e?apiKey=freekey",
dataType: "json",
success: function (data) {
	console.log(typeof data); // -- Object
	var json = data;
  	$('#wallet_eth').html(json.ETH.balance);
}
});
});
setTimeout(repeat101, 190000);
}
repeat101();



//eth wallet
function repeat105() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.ethplorer.io/getAddressInfo/0x9F96f393eeA191200d289088fF129aaB61cc20BF?apiKey=freekey",
dataType: "json",
success: function (data) {
        console.log(typeof data); // -- Object
        var json = data;
        $('#wallet_eth2').html(json.ETH.balance);
}
});
});
setTimeout(repeat105, 190000);
}
repeat105();








//eth profit calculation
window.setInterval(function(){
var miley2 = document.getElementById("wallet_eth2").innerHTML;
var miley = document.getElementById("wallet_eth").innerHTML;
var butbut = document.getElementById("gbp").innerHTML;
var siksik = document.getElementById("balance").innerHTML;
var payout = document.getElementById("payout_eth").innerHTML;
var total =  Number(siksik) + Number(miley)+ Number(miley2);
var lamlam =Number(butbut) * Number(total) ;
document.getElementById('money').innerHTML ='GBP £'+Math.round(lamlam*100)/100;

},2000);
window.setInterval(function(){
var miley2 = document.getElementById("wallet_eth2").innerHTML;
var miley = document.getElementById("wallet_eth").innerHTML;
var butbut = document.getElementById("hkd").innerHTML;
var siksik = document.getElementById("balance").innerHTML;
var payout = document.getElementById("payout_eth").innerHTML;
var total =  Number(siksik) + Number(miley)+ Number(miley2) ;
var lamlam =Number(butbut) * Number(total) ;
document.getElementById('money_hkd').innerHTML ='HKD $'+Math.round(lamlam*100)/100;
		},2000);

//sia profit calculation
window.setInterval(function(){
var butbut_xmr = document.getElementById("gbp_xmr").innerHTML;
var s1 = document.getElementById("balance_2").innerHTML;
var payout =document.getElementById("payout_sia").innerHTML;
var siksik_xmr =  Number(s1) + Number(payout);
var lamlam_xmr = 2931 * butbut_xmr ;
document.getElementById('money_xmr').innerHTML ='GBP £'+Math.round(lamlam_xmr*100)/100;
},2000);
window.setInterval(function(){
var butbut_xmr = document.getElementById("hkd_xmr").innerHTML;
var s1 = document.getElementById("balance_2").innerHTML;
var payout = document.getElementById("payout_sia").innerHTML;
var siksik_xmr =  Number(s1) + Number(payout);
var lamlam_xmr =Number(butbut_xmr) * 2931  ;
document.getElementById('money_xmr_hkd').innerHTML ='HKD $'+Math.round(lamlam_xmr*100)/100;
},2000);



//etn   profit calculation
window.setInterval(function(){
var siksik_xmg = document.getElementById("etn_con").innerHTML;
var miley_etn = document.getElementById("hkd_etn").innerHTML;
var lamlam_xmg = Number(miley_etn) *  (Number(siksik_xmg) + 1000)  ;
document.getElementById('xmg_profit').innerHTML ='HKD $'+Math.round(lamlam_xmg*100)/100;
 },2000);
window.setInterval(function(){
var butbut_hi = document.getElementById("etn_con").innerHTML;
var siksik_hi = document.getElementById("gbp_etn").innerHTML;
var lamlam_hi = Number(siksik_hi) *( Number(butbut_hi) +1000);
document.getElementById('xmg_profit_gbp').innerHTML ='GBP £'+Math.round(lamlam_hi*100)/100;
 },2000);




//eth  payment
function repeat15() {
$(function() {
$.ajax({
type: "GET",
url: "https://api.nanopool.org/v1/eth/payments/0xdd20bf3af0960295ca20452b5bb608f3d722f68c",
dataType: "json",
success: function (data) {
        console.log(typeof data); // -- Object
        var json = data;
        $('#payout_eth').html(json.data[0].amount);
}
});
});
setTimeout(repeat15, 19000);
}
repeat15();


//background

var bgImageArray = ["1.jpg", "2.jpg", "3.jpg","5.jpg", "6.jpg"],
base = "http://192.168.1.64/src/img/lam-",
secs = 5;
bgImageArray.forEach(function(img){
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
		}, (secs * 1000) * i)
	}
}
backgroundSequence();




//eth progress bar

window.setInterval(function(){
  var current_progress =document.getElementById("balance").innerHTML;
  var aria_valuemax = 0.05;
  var percentage =  (current_progress/aria_valuemax)*100;

      $("#progress_1")
      .css("aria-valuemax",aria_valuemax)
      .attr("aria-valuenow", current_progress)

    .css("width", percentage + "%")
 if (percentage == 100 || percentage > 100 )
      progress_1.className = "progress-bar progress-bar-success progress-bar-striped active";






},2000);


//etn progress bar

window.setInterval(function(){
  var current_progress =document.getElementById("etn_con").innerHTML;
  var aria_valuemax = 100;
  var percentage =  (current_progress/aria_valuemax)*100;

      $("#progress_2")
      .css("aria-valuemax",aria_valuemax)
      .attr("aria-valuenow", current_progress)

    .css("width", percentage + "%")

 if (percentage == 100 || percentage > 100 )
      progress_1.className = "progress-bar progress-bar-success progress-bar-striped active";




},2000);
