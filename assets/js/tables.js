
/*
//hidecolumns();
// using body.on for data that was injected through the .load event
//This is used for column adding and removing
$("body").on({
        click: function (event) {
            hidecolumns();
            clickcolumns();
        }
    }, ".categoryadder input ");

//Defined Columns for easy changing
var columns = [] 
    columns[0] = "Ancillary";
    columns[1] = "AvgAge";
    columns[2] = "AvgPaid";
    columns[3] = "AvoidableCost";
    columns[4] = "Admissions";
    columns[5] = "AvgCostPerEpisode";
    columns[6] = "AvgCostVariance";
    columns[7] = "AvgDuration";
    columns[8] = "BenchmarkEpisodeDuration";
    columns[9] = "BenchmarkCost";
    columns[10] = "CaseMix";
    columns[11] = "CaseWeight";
    columns[12] = "CompliancePercentage";
    columns[13] = "CostPerEpisode";
    columns[14] = "CostVariance";
    columns[15] = "Duration";
    columns[16] = "Efficiency";
    columns[17] = "EfficiencyRanking";
    columns[18] = "Episodes";
    columns[19] = "EpisodeBeginDate";
    columns[20] = "EpisodeDescription";
    columns[21] = "EpisodeDuration";
    columns[22] = "EpisodeGroup";
    columns[23] = "ERVisits";
    columns[24] = "Facility";
    columns[25] = "Gender";
    columns[26] = "ID";
    columns[27] = "Management";
    columns[28] = "NumberChronicEpis";
    columns[29] = "NumberAdmissions";
    columns[30] = "NumberReadmissions";
    columns[31] = "Patients";
    columns[32] = "PatientAge";
    columns[33] = "PatientName";
    columns[34] = "PatientRisk";
    columns[35] = "PatientID";
    columns[36] = "PeerGroupRanking";
    columns[37] = "Pharmacy";
    columns[38] = "PharmacyEfficiencyIndex";
    columns[39] = "Providers";
    columns[40] = "ProviderName";
    columns[41] = "ResponsibleProvider";
    columns[42] = "Risk";
    columns[43] = "Severity";
    columns[44] = "Specialty";
    columns[45] = "Specialties";
    columns[46] = "Surgical";
    columns[47] = "SurgicalEfficiencyIndex";
    columns[48] = "TotalCost";

    var activecolumns = [];

//Hide columns that are not checked
    function hidecolumns() {
        $("input:checkbox:not(:checked)").each(function () {
            var column = "." + $(this).attr("name");
            $(column).hide();
        });
    };

//This is run to set views by checking associated column checkbox
    function showcolumns() {
        $("input:checkbox:checked").each(function () {
            var column = "." + $(this).attr("name");
            $(column).show();
        });
    };

//click and show columns
    function clickcolumns() {
        $("input:checkbox").click(function () {
            var column = "." + $(this).attr("name");
            $(column).show();
        });
    };

//Open column selector
    function toggleColumnselector() {
        $(".categoryadder").slideToggle();
    };
//Set the View by Summary for provider list
    function setProviderListSummary() {
        cleartablelist();
        var columnindex;
        activecolumns = [columns[44], columns[26], columns[31], columns[18], columns[42], columns[16], columns[10], columns[48],  columns[3], columns[6],  columns[13], columns[9]];
        for (columnindex = 0; columnindex < activecolumns.length; columnindex++) {
            $(("input[name=") + activecolumns[columnindex] + ("]:checkbox")).prop("checked", true);
        }
        showcolumns();
    }

//Set the View by Detail for provider list
    function setProviderListDetails() {
        cleartablelist();
        var columnindex;
        activecolumns = [columns[44], columns[26], columns[31], columns[18], columns[42], columns[16], columns[10], columns[48],  columns[3], columns[6],  columns[13], columns[9], columns[1], columns[2], columns[28], columns[29], columns[30], columns[27], columns[46], columns[24], columns[0], columns[37]];
        for (columnindex = 0; columnindex < activecolumns.length; columnindex++) {
            $(("input[name=") + activecolumns[columnindex] + ("]:checkbox")).prop("checked", true);
        }
        showcolumns();
    }

    //Set the View by Summary for Episode list
    function setEpisodeListSummary() {
        cleartablelist();
        var columnindex;
        activecolumns = [columns[20], columns[41], columns[19], columns[21], columns[42], columns[16], columns[11], columns[48], columns[29], columns[43], columns[8], columns[5], columns[14]];
        for (columnindex = 0; columnindex < activecolumns.length; columnindex++) {
            $(("input[name=") + activecolumns[columnindex] + ("]:checkbox")).prop("checked", true);
        }
        showcolumns();
    }

//Set the View by Detail for Episode list
    function setEpisodeListDetail() {
        cleartablelist();
        var columnindex;
        activecolumns = [columns[20], columns[41], columns[19], columns[21], columns[32], columns[42], columns[16], columns[11], columns[13], columns[48], columns[3], columns[29], columns[27], columns[46], columns[24], columns[0], columns[37], columns[43], columns[8], columns[5], columns[14]];
        for (columnindex = 0; columnindex < activecolumns.length; columnindex++) {
            $(("input[name=") + activecolumns[columnindex] + ("]:checkbox")).prop("checked", true);
        }
        showcolumns();
    }

//Unchecks all column selectors
    function cleartablelist() {
        var columnindex;
        for (columnindex = 0; columnindex < columns.length; columnindex++) {
            $(("input[name=") + columns[columnindex] + ("]:checkbox")).prop("checked", false);
        }
        hidecolumns();
    }

    function showallcolumns() {
        cleartablelist();
        var columnindex;
        for (columnindex = 0; columnindex < columns.length; columnindex++) {
            $(("input[name=") + columns[columnindex] + ("]:checkbox")).prop("checked", true);
        }
        showcolumns();
    }

*/
