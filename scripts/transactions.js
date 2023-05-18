$(document).ready(function () {
    const Sp = document.getElementById("Sp");
    const Cp = document.getElementById("Cp");
    const Pe = document.getElementById("Pe");
    const Enrollment = document.getElementById("Enrollment");
    const Ace = document.getElementById("Ace");
    const Assessment = document.getElementById("Assessment"); 
    const Lm = document.getElementById("Lm");
    const Mot = document.getElementById("Mot");         

    Sp.style.display = "block";
    // Sp.style.display = "none";
    Cp.style.display = "none";
    Pe.style.display = "none";
    Enrollment.style.display = "none";    
    Ace.style.display = "none";  
    Assessment.style.display = "none";  
    Lm.style.display = "none";   
    Mot.style.display = "none";          

    const bSp = document.getElementById("bSp");
    const bCp = document.getElementById("bCp");
    const bPe = document.getElementById("bPe");
    const bEnrollment = document.getElementById("bEnrollment");
    const bAce = document.getElementById("bAce");
    const bAssessment = document.getElementById("bAssessment");  
    const bLm = document.getElementById("bLm"); 
    const bMot = document.getElementById("bMot");            

    $("#bMot").click(function (e) {
        e.preventDefault();
        Mot.style.display = "block";          
        Lm.style.display = "none";      
        Ace.style.display = "none";  
        Assessment.style.display = "none";
        Enrollment.style.display = "none";
        Pe.style.display = "none";
        Cp.style.display = "none";
        Sp.style.display = "none";
    });

    $("#bLm").click(function (e) {
        e.preventDefault();
        Lm.style.display = "block";      
        Ace.style.display = "none";  
        Assessment.style.display = "none";
        Enrollment.style.display = "none";
        Mot.style.display = "none";
        Pe.style.display = "none";
        Cp.style.display = "none";
        Sp.style.display = "none";
    });

    $("#bAce").click(function (e) {
        e.preventDefault();
        Ace.style.display = "block";  
        Assessment.style.display = "none";
        Enrollment.style.display = "none";
        Pe.style.display = "none";
        Lm.style.display = "none";
        Mot.style.display = "none";
        Cp.style.display = "none";
        Sp.style.display = "none";
    });

    $("#bAssessment").click(function (e) {
        e.preventDefault();
        Assessment.style.display = "block";
        Ace.style.display = "none";
        Enrollment.style.display = "none";
        Pe.style.display = "none";
        Mot.style.display = "none";
        Lm.style.display = "none";
        Cp.style.display = "none";
        Sp.style.display = "none";
    });
    
    $("#bEnrollment").click(function (e) {
        e.preventDefault();
        Enrollment.style.display = "block";
        Pe.style.display = "none";
        Mot.style.display = "none";
        Assessment.style.display = "none";
        Lm.style.display = "none";
        Ace.style.display = "none";    
        Cp.style.display = "none";
        Sp.style.display = "none";
    });
    
    $("#bPe").click(function (e) {
        e.preventDefault();
        Pe.style.display = "block";
        Cp.style.display = "none";
        Enrollment.style.display = "none"; 
        Lm.style.display = "none";   
        Sp.style.display = "none";
        Mot.style.display = "none";
        Assessment.style.display = "none";
        Ace.style.display = "none";    
    });

    $("#bCp").click(function (e) {
        e.preventDefault();
        Cp.style.display = "block";
        Sp.style.display = "none";
        Ace.style.display = "none"; 
        Assessment.style.display = "none";
        Mot.style.display = "none";
        Lm.style.display = "none";
        Pe.style.display = "none";
        Enrollment.style.display = "none";    
    });

    $("#bSp").click(function (e) {
        e.preventDefault();
        Sp.style.display = "block";
        Cp.style.display = "none";
        Mot.style.display = "none";
        Ace.style.display = "none";    
        Assessment.style.display = "none";
        Lm.style.display = "none";
        Pe.style.display = "none";
        Enrollment.style.display = "none";    
    });
});