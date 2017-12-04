//Procedure Frequency Variables
var startAtProvider = false;
var startAtEpisode = false;
var startAtProcedure = false;
var startAtProvList = false;
var startAtEpiList = false;
var startAtProcList = false;

//This sets up the procedure workflow
var proc_prov_list_Goto = "#/procedure_frequency_episodes";
var proc_epi_list_Goto = "#/procedure_frequency_procedures";
var proc_list_Goto = "#/procedure_frequency_providerview";

var arrow1_text = function (name) {
    document.getElementById("arrow1_text").innerHTML = name;
};
var arrow2_text = function (name) {
    document.getElementById("arrow2text").innerHTML = name;
};
var arrow3_text = function (name) {
    document.getElementById("arrow3text").innerHTML = name;
};

var arrow1_text_details = function (name) {
    document.getElementById("arrow1textdetails").innerHTML = name;
};
var arrow2_text_details = function (name) {
    document.getElementById("arrow2textdetails").innerHTML = name;
};
var arrow3_text_details = function (name) {
    document.getElementById("arrow3textdetails").innerHTML = name;
};

function SetArrowText(prov, epis, proc, prov_details, epis_details, proc_details) {
    arrow1_text(prov);
    arrow2_text(epis);
    arrow3_text(proc);
    arrow1_text_details(prov_details);
    arrow2_text_details(epis_details);
    arrow3_text_details(proc_details);
}

function RemoveClassShown() {
    $("#arrow_1").removeClass("shown");
    $("#arrow_2").removeClass("shown");
    $("#arrow_3").removeClass("shown");
}

function RemoveClassHidden() {
    $("#arrow_1").removeClass("hidden");
    $("#arrow_2").removeClass("hidden");
    $("#arrow_3").removeClass("hidden");
}

function HideAllArrows() {
    $("#arrow_1").addClass("hidden");
    $("#arrow_2").addClass("hidden");
    $("#arrow_3").addClass("hidden");
}

function ShowArrow1() {
    $("#arrow_2").addClass("hidden");
    $("#arrow_3").addClass("hidden");
}
function ShowArrow2() {
    $("#arrow_3").addClass("hidden");
}
function ShowArrow3() {
    RemoveClassShown();
}

//Functions Related to Procedure frequency
function GotoCorrectLocation() {
    if (startAtProvider) {
        console.log("Started from Provider");
        proc_prov_list_Goto = "#/procedure_frequency_episodes";
        proc_epi_list_Goto = "#/procedure_frequency_procedures";
        proc_list_Goto = "#/procedure_frequency_providerview";
        //GotoProcedureFrequencyProviders();
        //HideAllArrows();
    }
    if (startAtEpisode) {
        console.log("Started from Episode");
        proc_prov_list_Goto = "#/procedure_frequency_providerview";
        proc_epi_list_Goto = "#/procedure_frequency_procedures";
        proc_list_Goto = "#/procedure_frequency_providers";
    }
    if (startAtProcedure) {
        console.log("Started from Procedure");
        proc_prov_list_Goto = "#/procedure_frequency_providerview";
        proc_epi_list_Goto = "#/procedure_frequency_providers";
        proc_list_Goto = "#/procedure_frequency_episodes";
    }
    if (startAtProvList) {
        console.log("Started from provider list");
        proc_prov_list_Goto = "#/procedure_frequency_episodes";
        proc_epi_list_Goto = "#/procedure_frequency_procedures";
        proc_list_Goto = "#/procedure_frequency_providerview";
        //GotoProcedureFrequencyProviders();
        //HideAllArrows();
    }
    if (startAtEpiList) {
        console.log("Started from episode list");
        proc_prov_list_Goto = "#/procedure_frequency_providerview";
        proc_epi_list_Goto = "#/procedure_frequency_procedures";
        proc_list_Goto = "#/procedure_frequency_providers";
    }
    if (startAtProcList) {
        console.log("Started from procedure list");
        proc_prov_list_Goto = "#/procedure_frequency_providerview";
        proc_epi_list_Goto = "#/procedure_frequency_providers";
        proc_list_Goto = "#/procedure_frequency_episodes";
    }

}
function SetProcArrowText() {
    if (startAtProvList) {
        SetArrowText("Provider", "Episode", "Procedure", "Specific Provider Name", "Specific Episode Name", "Specific Procedure Name")

    }
    else if (startAtEpiList) {
        SetArrowText("Episode", "Procedure", "Provider", "Specific Episode Name", "Specific Procedure Name", "Specific Provider Name")

    }
    else if (startAtProcList) {
        SetArrowText("Procedure", "Episode", "Provider", "Specific Procedure Name", "Specific Episode Name", "Specific Provider Name")
    }
    else if (startAtProvider) {
        SetArrowText("Provider", "Episode", "Procedure", "Specific Provider Name", "Specific Episode Name", "Specific Procedure Name")
    }
    else if (startAtEpisode) {
        SetArrowText("Episode", "Procedure", "Provider", "Specific Episode Name", "Specific Procedure Name", "Specific Provider Name")
    }
    else if (startAtProcedure) {
        SetArrowText("Procedure", "Episode", "Provider", "Specific Procedure Name", "Specific Episode Name", "Specific Provider Name")
    }
    else {
        HideAllArrows();
    }

}

//Procedure Frequency Helpers
function ClearProcedureStart() {
    startAtProvider = false;
    startAtEpisode = false;
    startAtProcedure = false;
    startAtProvList = false;
    startAtEpiList = false;
    startAtProcList = false;
}

function ShowState() {
    console.log("startAtProvider = " + startAtProvider);
    console.log("startAtEpisode = " + startAtEpisode);
    console.log("startAtProcedure = " + startAtProcedure);
    console.log("startAtProvList = " + startAtProvList);
    console.log("startAtEpiList = " + startAtEpiList);
    console.log("startAtProcList = " + startAtProcList);

    console.log("proc_prov_list_Goto = " + proc_prov_list_Goto);
    console.log("proc_epi_list_Goto =" + proc_epi_list_Goto);
    console.log("proc_list_Goto =" + proc_list_Goto);

}

function SetupArrows() {
    RemoveClassHidden();
    if (startAtProvider) {
        //HideAllArrows();
        //ShowArrow1();
    }
    if (startAtEpisode) {
        //ShowArrow1();
    }
    if (startAtProcedure) {
        //ShowArrow1();
    }
    if (startAtProvList) {

    }
    if (startAtEpiList) {

    }
    if (startAtProcList) {

    }
}
