
function loadUser()
{ 
    fetch("/get-user") .then(res => res.json()) .then(data => { 
        document.getElementById("output").innerHTML = data.name + " - " + data.role + "<br>" + data.message; }); 
} 
function yesClicked() 
{ 
    document.getElementById("questionBox").style.display = "none"; 
    document.getElementById("thankYouPopup").style.display = "flex"; 
    let name = localStorage.getItem("valentineName"); 
    document.getElementById("thankText").innerText = name + ", You made my Valentine special ❤️"; } 
    
    // NO button behavior 
const noBtn = document.getElementById("noBtn"); 
noBtn.addEventListener("mouseover", function () {
     noBtn.style.position = "absolute"; 
     noBtn.style.left = Math.random() * 80 + "%"; 
     noBtn.style.top = Math.random() * 80 + "%"; }); 
     document.addEventListener("DOMContentLoaded", function () { 
        document.getElementById("thankYouPopup").style.display = "none"; 
        // Check if user data already exists 
        let name = localStorage.getItem("valentineName"); 
        let dob = localStorage.getItem("valentineDob"); 
        if (name && dob) { document.getElementById("userForm").style.display = "none"; 
            document.getElementById("mainContent").style.display = "block"; 
            document.getElementById("displayName").innerText = name; } }); 
            document.addEventListener("DOMContentLoaded", function () { 
                let name = localStorage.getItem("valentineName"); 
                if (name && name.trim() !== "") { 
                    document.getElementById("displayName").innerText = name; } 
                    else { 
                        document.getElementById("displayName").innerText = "My Love"; } }); 
                        function saveUser() { let name = document.getElementById("userName").value; 
                            let dob = document.getElementById("userDob").value; if (name === "" || dob === "") 
                                { 
                                    alert("Please fill all details ❤️"); return; 
                                } 
                                localStorage.setItem("valentineName", name); 
                                localStorage.setItem("valentineDob", dob); 
                                document.getElementById("userForm").style.display = "none"; 
                                document.getElementById("mainContent").style.display = "block"; 
                            } 
                        function closePopup() { 
                            document.getElementById("thankYouPopup").style.display = "none"; }
                             document.getElementById("noBtn").addEventListener("mouseover", function () { 
                                document.getElementById("noMessage").style.display = "block"; }); 
                                document.getElementById("noBtn").addEventListener("click", function () { 
                                    this.disabled = true; });