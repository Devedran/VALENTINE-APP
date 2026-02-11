
function loadUser()
{ fetch("/get-user") 
    .then(res => res.json()) 
    .then(data => { document.getElementById("output").innerHTML = data.name + " - " + data.role + "<br>" + data.message; }); } 

    function yesClicked() 
    { // hide question 
    document.getElementById("questionBox").style.display = "none"; // show popup 
    document.getElementById("thankYouPopup").style.display = "flex"; } 
    // NO button behavior 
    const noBtn = document.getElementById("noBtn"); 
    noBtn.addEventListener("mouseover", function () { 
        noBtn.style.position = "absolute"; 
        noBtn.style.left = Math.random() * 80 + "%"; 
        noBtn.style.top = Math.random() * 80 + "%"; 
    });