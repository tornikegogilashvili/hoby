let navbar = ["HOME", "ABOUT US", "PRODUCT", "CONTACT"]
let navlink = ["index.html","index.html","index.html","index.html"]
let navtext = "<ul class="+"nav_ul"+">";
let navLength = navbar.length;
for (let i=0; i<navLength;i++){
    navtext+="<li class=" + "nav_ul_li" + "><a class=" + "nav_a" + " href="+navlink[i]+">" +navbar[i]+'</a></li>';
    console.log(navtext);
}

navtext += "</ul>";
console.log(navtext);
document.getElementById("navigation").innerHTML = navtext;
