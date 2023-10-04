let openNav = () => {
    if(document.getElementById("navigation").style.display === "none" || document.getElementById("navigation").style.display === ""){
        document.getElementById("navigation").style.display = "block";
    }else{
        document.getElementById("navigation").style.display = "none"
    }
}