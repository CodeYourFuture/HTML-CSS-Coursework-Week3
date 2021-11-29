window.onload=function(){
    document.getElementById("hamburger").addEventListener("click", ()=>{
        document.getElementById("navigation").classList.toggle("open")
        document.getElementById("header").classList.toggle("sticky")
        document.getElementById("hamb-icon").classList.toggle("hidden")
        document.getElementById("close-icon").classList.toggle("hidden")
    })
}
