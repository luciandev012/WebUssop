const toggleBtn = document.getElementById("toggle-nav");
const nav = document.getElementById("navbarNavAltMarkup");

toggleBtn.addEventListener('click', () => {
    if(nav.style.display === "none")
        nav.style.display = "block";
    else nav.style.display = "none";
    
})
