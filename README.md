<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My World!</title>
    <style>
        body {
    background: linear-gradient(#00ddff,#00aaff);
}

#body {
    width: 100%;
    height: 520px;
    border: 1px solid transparent;
    border-radius: 10px;
}

#head{
    font-size: 120%;
    font-weight: bold;
    font-style: italic;
    margin: 3.5% 1.5%;
    margin-left: 18%;
}

#setting{
    font-size: 145%;
    position: absolute;
    top:3%;
    left:6%;
}

hr{
    opacity: 0.3;
}

/* section1 */
#web{
    width:95%;
    display: none;
    grid-template-columns: auto auto auto;
    position: absolute;
    top:15%;
    background: transparent;
}

.web{
    border:1px solid #ddd;
    border-radius: 20px 2px 20px 10px;
    box-shadow: 2px 2px #aaa;
    text-align: center;
    padding: 7% 0%;
    margin: 6% 1.5% 3.5% 1.5%;
    background: transparent;
    font-weight: 500;
    font-style: italic;
    font-size: 110%;
}

.web:hover{
    color: #15ffcb;
}

.web1{
    grid-column: span 3;
    text-align: center;
    margin: 2%;
}

/* profile */
#profile{
    display: none;
}

.img{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px #bbb;
    width: 65px;
    height: 65px;
    position: absolute;
    top: 15%;
    left: 8%;
}

.social{
    position: absolute;
    top: 28%;
    margin-left: 0%;
    text-align: center;
    font-size: 120%;
    padding: 3%;
    width: 80%;
}

#fb2{
    margin-left: 8%;
}

#tt{
    margin-left: 16%;
}

#yt{
    margin-left: 24%;
}

#ct1{
    margin-left: 32%;
}

#ct2{
    margin-left: 20%;
}

.cc{
    border: 1px outset rgba(0,0,0,0.5);
    border-radius: 3px;
    box-shadow: 5px 5px #bbb;
    padding: 2.5%;
    margin-top: 1.5%;
    width: 68%;
    font-style: italic;
}

#fb1:hover,#fb2:hover,#tt:hover,#yt:hover,#ct1:hover,#ct2:hover{
    margin-left: 0%;
}

.name{
    position: absolute;
    font-size: 135%;
    font-weight: 500;
    top: 20%;
    left: 32%;
}

#edit{
    font-size: 140%;
    position: absolute;
    top: 20%;
    right: 10%;
}

footer{
    margin: 3% 0% 0% 0%;;
}

.sectionstyle{
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    margin: auto;
    margin-bottom: 0px;
    text-align: center;
    padding: 3% 0% 0% 0%;
    border-top: 1px solid rgba(0,0,0,0.1);
}

.gostyle{
    margin: auto;
    width: 20px;
    padding: 10%;
    border: 1px solid rgba(200,200,200,0);
    box-shadow: 1px 1px rgba(0,0,0,0);
}

.gostyle:hover{
    border-radius: 50px;
    border: 1px solid rgba(200,200,200,0.5);
    box-shadow: 1px 1px #aaa;
    overflow: scroll;
}

#go1{
    border: 1px solid rgba(200,200,200,0.5);
    box-shadow: 1px 1px #aaa;
}

    </style>
    <script>
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

    </script>
</head>
<body>
    
    <div id="body">
        <div id="head">Websites</div>
        <div id="setting" onclick="setting()">⚙️</div>
        
        <hr>
        
      <div id="web">
          
        <div id="web1" class="web" onclick="web1()">Facebook</div>
        <div id="web2" class="web" onclick="web2()">Youtube </div>
        <div id="web3" class="web" onclick="web3()">Tiktok </div>
        <div id="web4" class="web" onclick="web4()">Chrome</div>
        <div id="web5" class="web" onclick="web5()">Gmail</div>
        <div id="web6" class="web" onclick="web6()">Translater</div>
        <div id="web7" class="web" onclick="web7()">Map</div>
        <div id="web8" class="web" onclick="web8()">Account</div>
        <div id="web9" class="web" onclick="web9()">Edu</div>
        <div id="web10" class="web" onclick="web10()">Developers</div>
        <div id="web11" class="web" onclick="web11()">Ads</div>
        <div id="web12" class="web" onclick="web12()">TVchannels</div>
        <div id="web13" class="web" onclick="web13()">Coda Shop</div>
        <div id="web14" class="web" onclick="web14()">Postel Code</div>
        <div id="web15" class="web" onclick="web15()">Play Store</div>
        <div id="web16" class="web" onclick="web16()">Logo Make</div>
        <div id="web17" class="web" onclick="web17()">Bootstrap</div>
        <div id="web18" class="web" onclick="web18()">Html Save</div>
        <div id="web19" class="web" onclick="web19()">My World</div>
        <div id="web20" class="web" onclick="web20()">PlayPhrase</div>
        <div id="web21" class="web" onclick="web21()">Draw</div>
        <div id="web22" class="web" onclick="web22()">NaSa</div>
        <div id="web23" class="web" onclick="web23()">Github</div>
        <div id="web24" class="web" onclick="web24()">W3school</div>
        <div></div>
        <div class="web1">_ • ° ` > _ < ´ ° • _</div>
        <div></div>
        
      </div>
      
      <div id="other"></div>
      
      <div id="profile">
          
          <div id="img" class="img"></div>
          <div id="name" class="name" onclick="name()">M Naw</div>
          <div id="edit" onclick="edit()">✏️</div>
          
          <div id="social" class="social">
              
              <div id="fb1" class="cc" onclick="fb1()">
                  M Naw
              </div>
              <div id="fb2" class="cc" onclick="fb2()">
                  M Naw
              </div>
              <div id="tt" class="cc" onclick="tt()">
                  Tik tok
              </div>
              <div id="yt" class="cc" onclick="yt()">
                  Youtube
              </div>
              <div id="ct1" class="cc" onclick="ct1()">
                  09767103730
              </div>
              <div id="ct2" class="cc" onclick="ct2()">
                  09420612282
              </div>
              
          </div>
          
      </div>
      
    </div>
    
</body>

<footer>
    
    <div id="section" class="sectionstyle">
        
        <div id="go1" class="gostyle" onclick="section1()">
            🌐
        </div>
        <div id="go2" class="gostyle" onclick="section2()">
            ⏬
        </div>
        <div id="go3" class="gostyle" onclick="section3()">
            👤
        </div>
        
    </div>
    
</footer>
</html>
