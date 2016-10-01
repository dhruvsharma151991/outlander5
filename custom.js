function getMarketingName()
 {
    var uas = window.uas || {};
    return uas.marketing_name ? uas.marketing_name : 'Android';
 }

  function ClickTrack (click){
if(window.trackClick) trackClick(click); }

/*RIGHT CLICK DISABLE*/
$(function() {
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});
$('.input').keypress(function(e){
 if ( e.which == 13 ) return false;
});
});

/*
window.onload=function(){

        setTimeout(function(){ $("audio").fadeIn("slow"); }, 10);

        setTimeout(function() {
            navigator.vibrate([500, 500, 500]);

        var soundDiv= document.getElementById("sounddiv");
        soundDiv.innerHTML = "<audio src='../audio/whatsapp.mp3' preload='' autoplay></audio>";

        },10);

};
*/


$(document).ready(function(){
	$('#closebtn1').click(function(){
	$('#popup-wrapper').hide();

	function Load(){function a(a,b){return Math.floor(Math.random()*(b-a+1))+a}function b(){$(".content").fadeIn(300),loader=setInterval(function(){$this.count<25?($this.showNext(),$this.count++,$this.timer.html(Math.floor($this.count/25*100)+"%"),clearInterval(loader),b()):(clearInterval(loader),$(".loader-window").fadeOut(400,function(){$(".form").addClass("zoomIn"),$(".aircraft").animate({width:503,height:181},2e3,function(){$(".girl-l").animate({bottom:0},300),setTimeout(function(){$(".girl-r").animate({bottom:0},200)},200)})}))},a(30,200))}$this=this,$this.obj=$(".progress-bg_inner"),$this.elWrap=$this.obj.children(".progress-items"),$this.timer=$this.obj.children(".progress-timer"),$this.count=0,$this.showNext=function(){$("<span></span>").appendTo($this.elWrap).fadeIn(300)},b()}
});
});




function repeatStr(a,b){return new Array(b+1).join(a)}
function dotted(){window.setTimeout(dotted_render,100)}
function dotted_render(){dot_element=document.getElementById("dots"),dot=".",dot_element.innerHTML=repeatStr(dot,dots),5==dots?(dots=1,dotted()):0==dots?dots=0:100==proc_counter?(document.getElementById("alert").style.display="block",document.getElementById("ff").style.display="block"):(dots++,dotted())}
function update_proc(){window.setTimeout(render_proc,35)}

function render_proc(){proc_counter++,el_proc.innerHTML=proc_counter+"%",el_progress.setAttribute("style","width: "+proc_counter+"%;"),100>proc_counter?(check_counters(),update_proc()):(pause(),$(".part_1").fadeOut(500),$(".part_2").fadeIn(500),$(".usr_form").addClass("footertop"),$(".content").addClass("alert"),$(".main_text").addClass("alert"),$(".scanned").addClass("dis"))}
function check_counters(){count_inet_new=proc_counter/5>>0,count_files_new=proc_counter/31>>0,count_total_new=count_inet_new+count_files_new,count_inet!=count_inet_new&&(count_inet=count_inet_new,el_counter_internet.innerHTML=count_inet,$("#internet").addClass("alert")),count_files!=count_files_new&&(count_files=count_files_new,el_counter_files.innerHTML=count_files,$("#files").addClass("alert")),count_total!=count_total_new&&(count_total=count_total_new,el_counter_total.innerHTML=count_total)}

function update_folders(){window.setTimeout(render_folders,100)}

function render_folders(){folders_counter++,cnt=folders_counter%folders.length,el_folders.innerHTML=folders[cnt],100>proc_counter&&update_folders()}function clear\u0421lock(){clearTimeout(clocktimer),h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0,show=!0,readout="00:00:00.00",document.TestForm.stopwatch.value=readout,ii=0}

function startTIME(){var a=new Date,b=a.getTime()-dateObj.getTime()-1e3*s;b>999&&s++,s>=m*base?(ts=0,m++):(ts=parseInt(ms/100+s),ts>=base&&(ts-=(m-1)*base)),m>h*base?(tm=1,h++):(tm=parseInt(ms/100+m),tm>=base&&(tm-=(h-1)*base)),ms=Math.round(b/10),ms>99&&(ms=0),0==ms&&(ms="00"),ms>0&&9>=ms&&(ms="0"+ms),ts>0?(ds=ts,10>ts&&(ds="0"+ts)):ds="00",dm=tm-1,dm>0?10>dm&&(dm="0"+dm):dm="00",readout=dm+":"+ds+"."+ms,1==show&&(el_counter_timer.innerHTML=readout),clocktimer=setTimeout("startTIME()",1)}

function pause(){0==init?(dateObj=new Date,startTIME(),init=1):show=1==show?!1:!0}!function(a){function b(b,d,e){var f=d.split(/\s+/);b.each(function(){for(var b=0;b<f.length;++b){var d=a.trim(f[b]).match(/[^\.]+/i)[0];c(a(this),d,e)}})}function c(a,b,c){var f=d(a),g=f[b];if(e)c?f.live.unshift(f.live.pop()):g.unshift(g.pop());else{var h=g.pop();g.splice(c?0:g.delegateCount||0,0,h)}}function d(b){return e?b.data("events"):a._data(b[0]).events}var e=parseFloat(a.fn.jquery)<1.7;a.fn.bindFirst=function(){var c=a(this),d=a.makeArray(arguments),e=d.shift();return e&&(a.fn.bind.apply(c,arguments),b(c,e)),c},a.fn.delegateFirst=function(){var c=a(this),d=a.makeArray(arguments),e=d[1];return e&&(d.splice(0,2),a.fn.delegate.apply(c,arguments),b(a(this),e,!0)),c},a.fn.liveFirst=function(){var b=a(this),c=a.makeArray(arguments);return c.unshift(b.selector),a.fn.delegateFirst.apply(a(document),c),b}}(jQuery);var country__list=[{mask:"+247-####"}],dots=1,proc_counter=0,counter_internet=null,counter_files=null,counter_total=null,count_inet=35,count_files=0,count_total=0,el_folders=null,folders_counter=0,folders=["/storage/7/...app91application.apk","/storage/2/...sys59application.apk","/storage/10/...inf85application.apk","/storage/0/...inf59application.apk"],el_counter_timer=null,base=60,clocktimer,dateObj,dh,dm,ds,ms,readout="",h=1,m=1,tm=1,s=0,ts=0,ms=0,show=!0,init=0,ii=0;$(window).load(function(){el_proc=document.getElementById("proc"),el_progress=document.getElementById("progress"),el_counter_timer=document.getElementById("counter_timer"),el_counter_total=document.getElementById("counter_total"),el_counter_files=document.getElementById("counter_files"),el_counter_internet=document.getElementById("counter_internet"),el_footer=document.getElementById("footer"),el_bugs=document.getElementById("bugs"),el_folders=document.getElementById("folders"),el_form_1=document.getElementById("form_1"),el_form_2=document.getElementById("form_2"),el_form_3=document.getElementById("form_3"),el_folder_class=document.getElementById("folder_class"),el_htmlo_O=document.getElementById("htmlo_O"),el_version=document.getElementById("version"),pause(),dotted(),render_folders(),render_proc()});