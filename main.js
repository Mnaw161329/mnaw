if(1>0) {
    var h = "hidden";
    var v = "visible";
    var br = "50px";
    var bs = "1px 1px #aaa"
    var bs2= "1px 1px rgba(0,0,0,0)"
    var b1 = "1px solid rgba(0,0,0,0.2)";
    var b2 = "1px solid rgba(0,0,0,0.0)";
    var b3 = "1px solid rgba(200,200,200,0.5)";
    var goa = document.getElementById("go1");
    var gob = document.getElementById("go2");
    var goc = document.getElementById("go3");
    
  function a() {
    var h = "hidden";
    var v = "visible";
    var br = "50px";
    var bs = "1px 1px #aaa"
    var bs2= "1px 1px rgba(0,0,0,0)"
    var b1 = "1px solid rgba(0,0,0,0.2)";
    var b2 = "1px solid rgba(0,0,0,0.0)";
    var b3 = "1px solid rgba(200,200,200,0.5)";
    var h = document.getElementById("head");
    var goa = document.getElementById("go1");
    var gob = document.getElementById("go2");
    var goc = document.getElementById("go3");
        h.innerHTML = "Websites";
        goa.style.border = b3;
        gob.style.border = b2;
        goc.style.border = b2;
        goa.style.boxShadow = bs;
        gob.style.boxShadow = bs2;
        goc.style.boxShadow = bs2;
    }
    
  function b() {
    var h = "hidden";
    var v = "visible";
    var br = "50px";
    var bs = "1px 1px #aaa"
    var bs2= "1px 1px rgba(0,0,0,0)"
    var b1 = "1px solid rgba(0,0,0,0.2)";
    var b2 = "1px solid rgba(0,0,0,0.0)";
    var b3 = "1px solid rgba(200,200,200,0.5)";
    var h = document.getElementById("head");
    var goa = document.getElementById("go1");
    var gob = document.getElementById("go2");
    var goc = document.getElementById("go3");
        h.innerHTML = "Down Mp-3,Mp-4"
        goa.style.border = b2;
        gob.style.border = b3;
        goc.style.border = b2;
        goa.style.boxShadow = bs2;
        gob.style.boxShadow = bs;
        goc.style.boxShadow = bs2;
    }
    
  function c() {
    var h = "hidden";
    var v = "visible";
    var br ="50px";
    var bs = "1px 1px #aaa"
    var bs2= "1px 1px rgba(0,0,0,0)"
    var b1 = "1px solid rgba(0,0,0,0.2)";
    var b2 = "1px solid rgba(0,0,0,0.0)";
    var b3 = "1px solid rgba(200,200,200,0.5)";
    var h = document.getElementById("head");
    var goa = document.getElementById("go1");
    var gob = document.getElementById("go2");
    var goc = document.getElementById("go3");
        h.innerHTML = "Profile";
        goa.style.border = b2;
        gob.style.border = b2;
        goc.style.border = b3;
        goa.style.boxShadow = bs2;
        gob.style.boxShadow = bs2;
        goc.style.boxShadow = bs;
    }
    
    function section1() {
        a();
        document.getElementById("web").style.display = "grid";
        document.getElementById("other").style.display = "none";
        document.getElementById("profile").style.display = "none";
    }
    
   function section2() {
        b();
        document.getElementById("web").style.display = "none";
        document.getElementById("other").style.display = "block";
        document.getElementById("profile").style.display = "none";
    }
    
    function section3() {
        c();
        document.getElementById("web").style.display = "none";
        document.getElementById("other").style.display = "none";
        document.getElementById("profile").style.display = "block";
    }
}

function web1() {
    open("https:/\/www.facebook.com");
}

function web2() {
    open("https:/\/www.youtube.com");
}

function web3() {
    open("https:/\/www.tiktok.com");
}

function web4() {
    open("https:/\/www.google.com");
}

function web5() {
    open("https:/\/mail.google.com");
}

function web6() {
    open("https:/\/translate.google.com");
}

function web7() {
    open("https:/\/map.google.com");
}

function web8() {
    open("https:/\/account.google.com");
}

function web9() {
    open("https:/\/edu.google.com");
}

function web10() {
    open("https:/\/developers.google.com");
}

function web11() {
    open("https:/\/adssettings.google.com");
}

function web12() {
    open("https:/\/tvchannels.live/myanmar");
}

function web13() {
    open("https:/\/www.codashop.com/my-mm");
}

function web14() {
    open("https:/\/www.myanmars.net");
}

function web15() {
    open("https:/\/play.google.com");
}

function web16() {
    open("https:/\/looka.com");
}

function web17() {
    open("https:/\/getbootstap.com");
}

function web18() {
    open("https:/\/htmlsave.com");
}

function web19() {
    open("https:/\/");
}

function web20() {
    open("https:/\/www.playphrase.me");
}

function web21() {
    open("https:/\/quickdraw.withgoogle.com");
}

function web22() {
    open("https:/\/www.nasa.gov");
}

function web23() {
    open("https:/\/www.github.com");
}

function web24() {
    open("https:/\/www.w3schools.com");
}

function fb1() {
    
}

function fb2() {
    
}

function tt() {
    
}

function yt() {
    
}

function ct1() {
    open("tel:09767103730");
}

function ct2() {
    open("tel:09420612282");
}

function edit() {
    var name = prompt("Change Name!");
    document.getElementById("name").innerHTML = name;
}
