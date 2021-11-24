//This is for static advertising only.

var waitt;

function setwait(waittime)
{
   waitt = waittime
}

function start(sites)
{
   setTimeout(function(){
    advertise(sites);
}, waitt);
}


function advertise(sites){
   
var sit = sites;
const sitecount = sites.length;
const one = 1;
var freecount = getRandomInt(sitecount);

createwindow(sites[])

}

function createwindow(url)
{
   var Window = window.open(url, '', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
