

//Commentaire monoligne

/*commentaire
multiligne*/

//EXO 1
function func01(){
    alert("Hello world");
}



function func02(){
    document.write("<p>Hello world</p>");
}


function func03(){
    document.write("<div id=myclass>RIP JS</div>");
}


function func05A(){
    document.write("<p id=myp>open");
}
function func05B(){
    document.write("close</p>");
}
function func04A(){
    document.write("<div id=mydiv>");
}
function func04B(){
    document.write("</div>");
}

function func06(){
    
}

//EXO 2

function func07(a){
    document.write("<p>zejrgbzpieugr"+a+"</p>");
    
}

function func08(id,a){
    document.write("<div id="+id+">");
    func07(a);
    func07(a);
    func04B();
}

function func09(n){
    document.write("<ul>");
    for(let i=0;i<n;i++){
        document.write("<li>1</li>");
    }
    document.write("</ul>")
}

//Boucle a

function funcgras(g){
    
    for(let i=0;i<g;i++){
        document.write("<strong>hello world</strong><br>");
    }
    
}

function funcouleur(c){
    
    for(let i=0;i<c;i++){
        txtcolor=(i%2==0)?"red":"blue";
        document.write("<p style=color:"+txtcolor+">hello world</p>");

    }
    
}
function funcmodulo(m){
    for(let i=0;i<=m;i++){
    if(i%3!==0){
        document.write(i+",");
    }}
}
function funcL(n,s){
    for(let i=0;i<=n;i++){
        document.write(s+"<br>");
    }
}
function funcD(n,s){
    for(let i=0;i<=n;i++){
        document.write("<p id="+s+">rip</p>");
    }
}

function funcLD(n,s){
    for(let i=0;i<=n;i++){
        func04A();
        for(let i=0;i<=s;i++){
            func05A();
            func05B();

        }
        func04B();
    }
}

function funtable(){
    document.write("<table>");
    for(let i=0;i<5;i++){
        document.write("<tr>");
        for(let ii=0;ii<6;ii++){
            document.write("<td>"+(ii+1)+"</td>");
        }
        document.write("</tr>")
    }document.write("</table>");
}

function func12(s){
    document.getElementById("mydiv").innerHTML = s;
}

function func13(s){
    document.getElementById("mydiv").innerHTML += s;
}


function func14(T,S){
    document.write("<div id="+T+">dv,tu</div");
    if (document.getElementById(T).innerHTML == ""){

        document.getElementById(T).innerHTML += "<strong>"+S+"</strong>";
    }
    else {
        document.getElementById(T).innerHTML += "<span>"+S+"</span>";
    }

}
function func15(id,o){
    document.write("<ul id="+id+">");
    for(let i=0;i<3;i++){
       if (o== 2){
           document.write("<li style=display:inline-block>yessss</li>");
        }
       else{
           document.write("<li>nooooooo</li>");
        }
    }
    document.write("</ul>");
}
function func15b(id,o){
    document.write("<ul id="+id+">");
    for(let i=0;i<3;i++){
       if (o== 2){
           document.write("<li style=display:inline-block>yessss</li>");
        }
       else{
           document.write("<li>nooooooo</li>");
        }
    }
    document.write("</ul>");
}

function func16(a,b,c){
    document.write("<div id=menu>");
        
    document.write("<a href="+a+">Accueil</a>");
    document.write("<a href="+b+">blog</a>");
    document.write("<a href="+c+">contact</a>");
    
    document.write("</div>");
}

function head(a,b,c,n,s){
    document.write("<div id=header>");
    func16(a,b,c);
    document.write("</div><div id=contenue>");
    funcLD(n,s);
    document.write("</div><footer><p id=footerp>2018 - copyright DWWM - VALES Donovan</p></footer>");

}



//question avant de rentrer sur la page
rep=prompt("Taille  ?");
document.write("rep:"+rep+"<br>");

//mettre la date heures etc
function date(){
var d = new Date();
    document.write(d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+"<br>"+d.getHours()+":"+d.getMinutes());
setInterval(() => {
    document.write(d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+"<br>"+d.getHours()+":"+d.getMinutes());
},3000);
}


