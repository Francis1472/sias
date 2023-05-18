$(document).ready(function () {
    const EnrolledSubjects = document.getElementById("EnrolledSubjects");
    const ClassAbsences = document.getElementById("ClassAbsences");
    const TGM = document.getElementById("TGM");
    const FGM = document.getElementById("FGM");
    const GWA = document.getElementById("GWA");
    const TGI = document.getElementById("TGI");
    const FGI = document.getElementById("FGI");
    const GWAI = document.getElementById("GWAI");
    const CE = document.getElementById("CE");
    const SOA = document.getElementById("SOA");    
    const IO = document.getElementById("IO"); 
    const PR = document.getElementById("PR");     

    const bEnrolledSubjects = document.getElementById("bEnrolledSubjects");
    const bClassAbsences = document.getElementById("bClassAbsences");
    const bTGM = document.getElementById("bTGM");
    const bFGM = document.getElementById("bFGM");
    const bGWA = document.getElementById("bGWA"); 
    const bTGI = document.getElementById("bTGI");   
    const bFGI = document.getElementById("bFGI");
    const bGWAI = document.getElementById("bGWAI");
    const bCE = document.getElementById("bCE");
    const bSOA = document.getElementById("bSOA");    
    const bIO = document.getElementById("bIO");   
    const bPR = document.getElementById("bPR");       
    
    
    $("#bEnrolledSubjects").click(function (e) {
        e.preventDefault();
        EnrolledSubjects.style.display = "block";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });

    $("#bClassAbsences").click(function (e) {
        e.preventDefault();
        ClassAbsences.style.display = "block";
        EnrolledSubjects.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });

    $("#bTGM").click(function (e) {
        e.preventDefault();
        TGM.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    $("#bFGM").click(function (e) {
        e.preventDefault();        
        FGM.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    $("#bGWA").click(function (e) {
        e.preventDefault();                
        GWA.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    
    $("#bTGI").click(function (e) {
        e.preventDefault();                        
        TGI.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    
    $("#bFGI").click(function (e) {
        e.preventDefault();                                
        FGI.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    
    $("#bGWAI").click(function (e) {
        e.preventDefault();                                        
        GWAI.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    
    $("#bCE").click(function (e) {
        e.preventDefault();                                                
        CE.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });
    
    $("#bSOA").click(function (e) {
        e.preventDefault();                                                        
        SOA.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        IO.style.display = "none";
        PR.style.display = "none";
    });

    $("#bIO").click(function (e) {
        e.preventDefault();                                                        
        IO.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        PR.style.display = "none";
    });

    $("#bPR").click(function (e) {
        e.preventDefault();                                                              
        PR.style.display = "block";
        EnrolledSubjects.style.display = "none";
        ClassAbsences.style.display = "none";
        TGM.style.display = "none";
        FGM.style.display = "none";
        GWA.style.display = "none";
        TGI.style.display = "none";
        FGI.style.display = "none";
        GWAI.style.display = "none";
        CE.style.display = "none";
        SOA.style.display = "none";
        IO.style.display = "none";
    });
});