let navbar = ["HOME", "PRODUCT", "ABOUT US",  "CONTACT"]
let navlink = ["index.html", "index.html", "#aboutus","index.html","index.html"]
let navtext = "<ul class="+"nav_ul"+">";
let navLength = navbar.length;
for (let i=0; i<navLength;i++){
    navtext+="<li onclick=openNav() class=" + "nav_ul_li" + "><a class=" + "nav_a" + " href="+navlink[i]+">" +navbar[i]+'</a></li>';
    console.log(navtext);
}

navtext += "</ul>";
console.log(navtext);
document.getElementById("navigation").innerHTML = navtext;
