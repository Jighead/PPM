//Column Configuration
var providerColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
{
    "render": function (data, type, row) {
        return '<a href="#/providerprofile">' + data + '</a>';
    }, "targets": [1],
},

        { targets: 'no-sort', orderable: false },

    {
        "targets": [1, 12, 13],
        "sClass": 'text-left ln-nowrap'
    },
    {
        "targets": [2, 3, 4, 5, 6,7,8,9,10,11],
        "sClass": 'text-center ln-nowrap'
    },
    //Patient Risk Score 
    {
        "render": function (data, type, row) {
            return '<div class="ln-overutilized_color ln-insetShadowRed ln-shadowEfficiency">\<span class="fa fa-level-up ln-faRight"></span>' + data + '</div>';
        },
        "targets": [2],
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        },
        "targets": [3]
    },
    //Case Mix
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [4]
    }
]

var providerColumnNetworkLeakage = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
{
    "render": function (data, type, row) {
        return '<a href="#/providerprofile">' + data + '</a>';
    }, "targets": [2],
},
{
    "render": function (data, type, row) {
        return '<a href="#/networkleakageservicelist">' + data + '</a>';
    }, "targets": [5, 10],
},
{
    "render": function (data, type, row) {
        return '<a href="#/networkleakagepatientlist">' + data + '</a>';
    }, "targets": [7, 12],
},

        { targets: 'no-sort', orderable: false },

    {
        "targets": [1],
        "sClass": 'text-left ln-nowrap'
    },
    {
        "targets": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "targets": [8,9,10,11,12,13,14],
        "visible": false
    }
]

var ServiceColumnNetworkLeakage = [

{
    "render": function (data, type, row) {
        return '<a href="#/providerprofile">' + data + '</a>';
    }, "targets": [0],
},
{
    "render": function (data, type, row) {
        return '<a href="#/patientprofile">' + data + '</a>';
    }, "targets": [1],
},

    {
        "targets": [0,1,3, 5, 6, 4,8],
        "sClass": 'text-left ln-nowrap'
    },
    {
        "targets": [2,7],
        "sClass": 'text-center ln-nowrap'
    },
]

var PatientColumnNetworkLeakage = [
{
    "render": function (data, type, row) {
        return '<a href="#/patientprofile">' + data + '</a>';
    }, "targets": [0],
},
{
    "render": function (data, type, row) {
        return '<a href="#/networkleakageservicelist">' + data + '</a>';
    }, "targets": [5, 10],
},

    {
        "targets": [0, 1, 10, 11, 12 ],
        "sClass": 'text-left ln-nowrap'
    },
    {
        "targets": [2, 3, 4, 5, 6, 7, 8, 9],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "targets": [7,8],
        "visible": false
    }
]

var PatientColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
{
    "render": function (data, type, row) {
        return '<a href="#/patientprofile">' + data + '</a>';
    }, "targets": [1],
},
{
    targets: 'no-sort', orderable: false },
    { "targets": [1, 2, 3], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        "sClass": 'text-center ln-nowrap'
    },
    //Patient Risk Score 
    {"render": function (data, type, row) {
            return '<div class="ln-overutilized_color ln-insetShadowRed ln-shadowEfficiency">\<span class="fa fa-level-up ln-faRight"></span>' + data + '</div>';
        },"targets": [9],
    },
    //Efficiency
    {"render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        },"targets": [10]
    },
    //Case Mix
    {"render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [11]
    }
]

var EpisodeColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
    {
        "render": function (data, type, row) {
            return '<a href="#/episodedetails">' + data + '</a>';
        }, "targets": [1],
    },
{
    targets: 'no-sort', orderable: false },
    { "targets": [1, 2, 3], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        "sClass": 'text-center ln-nowrap'
    },
    //Risk
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [11]
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [12]
    }
]

var EpisodeandOutlierColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
    {
        "render": function (data, type, row) {
            return '<a href="#/episodedetails">' + data + '</a>';
        }, "targets": [1],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/patientprofile">' + data + '</a>';
        }, "targets": [2],
    },
    {
            "render": function (data, type, row) {
            return '<a href="#/providerprofile">' + data + '</a>';
        }, "targets": [11],
    },
{
    targets: 'no-sort', orderable: false
},
    { "targets": [1, 2], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,],
        "sClass": 'text-center ln-nowrap'
    },
    //Risk
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [4]
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [5]
    },
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
            <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [6]
    }
]

var ETGOutlierColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},

    {
        "render": function (data, type, row) {
            return '<a href="#/compareproviders">' + data + '</a>';
        }, "targets": [6],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/patientlist">' + data + '</a>';
        }, "targets": [7],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/episodelist">' + data + '</a>';
        }, "targets": [8],
    },
{
    targets: 'no-sort', orderable: false
},
    { "targets": [1], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ],
        "sClass": 'text-center ln-nowrap'
    },
    //Risk
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [2]
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [3]
    },
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
            <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [4]
    }
]

var ETGColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
{
    targets: 'no-sort', orderable: false },
    { "targets": [1, 2, 3], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        "sClass": 'text-center ln-nowrap'
    },
    //Patient Risk Score 
    {
        "render": function (data, type, row) {
            return '<div class="ln-overutilized_color ln-insetShadowRed ln-shadowEfficiency">\<span class="fa fa-level-up ln-faRight"></span>' + data + '</div>';
        }, "targets": [7],
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [8]
    },
    //Case Mix
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [9]
    }
]

var ETGColumn_Surgical = [

    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "sClass": 'text-center ln-nowrap'
    },
    //Patient Risk Score 
    {
        "render": function (data, type, row) {
            return '<div class="ln-overutilized_color ln-insetShadowRed ln-shadowEfficiency">\<span class="fa fa-level-up ln-faRight"></span>' + data + '</div>';
        }, "targets": [7,3,6],
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [8,4]
    },
    //Case Mix
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-check ln-faRight"></span>' + data + '</div';
        }, "targets": [5]
    }
]

var AvailablePeerGroupColumns = [

    { "targets": [0, 1, 4], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [2, 3, 5, 6, 7],
        "sClass": 'text-center ln-nowrap'
    },
    { targets: 'no-sort', orderable: false },
    {
        "render": function (data, type, row) {
            return '<a href="#/peergroupdetails">' + data + '</a>';
        }, "targets": [0],
    },
    {
        "render": function (data, type, row) {
            return '<a href="" ><img src="resources/dmc/images/copy.png" width="20" /></a>';
        }, "targets": [5],
    },
    {
        "render": function (data, type, row) {
            return '<a href="" onclick="gotoCreateNewPeerGroup()"><img src="resources/dmc/images/edit.png" width="15" /></a>';
        }, "targets": [6],
    },
    {
        "render": function (data, type, row) {
            return '<a href="" ><img src="resources/dmc/images/delete.png" width="16" /></a>';
        }, "targets": [7],
    },
]

var MyTemplateColumns = [

    { "targets": [0,], "sClass": 'text-left' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [1,2, 3, 4, 5, 6, 7],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "render": function (data, type, row) {
            return '<span class="mytemplate_name">' + data + '</span>';
        }, "targets": [0],
    },
    {
        "render": function (data, type, row) {
            return '<td class="mytemplate_icons"><span class="ln-mytemplate_lastrun text-center">' + data + '</span></td>';
        }, "targets": [1],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/compareefficiency" ><img src="resources/dmc/images/run.png" width="18"/></a>';
        }, "targets": [2],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/create_summary"><i class="fa mytemplate_icons fa-lg fa-pencil fa-fw"></i></i></a>';
        }, "targets": [3],
    },
    {
        "render": function (data, type, row) {
            return '<a href=""><i class="fa mytemplate_icons fa-lg fa-copy fa-fw"></i></a>';
        }, "targets": [4],
    },
    {
        "render": function (data, type, row) {
            return '<a href=""><i class="fa mytemplate_icons fa-lg fa-university fa-fw"></i></a>';
        }, "targets": [5],
    },
    {
        "render": function (data, type, row) {
            return '<a href="" ><i class="fa mytemplate_icons fa-lg fa-history fa-fw"></i></a>';
        }, "targets": [6],
    },
    {
        "render": function (data, type, row) {
            return '<a href=""><i class="fa mytemplate_icons fa-lg fa-remove fa-fw"></i></a>';
        }, "targets": [7],
    },
]

var MyTemplatePPMColumns = [

    { "targets": [0,1,2], "sClass": 'text-left ln-nowrap' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [3, 4, 5],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/compareefficiency"><img src="resources/dmc/images/run.png" width="20" /></a>';
        }, "targets": [3],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/create_summary"><img src="resources/dmc/images/edit.png" width="15" /></a>';
        }, "targets": [4],
    },
    {
        "render": function (data, type, row) {
            return '<a href="" ><img src="resources/dmc/images/delete.png" width="16" /></a>';
        }, "targets": [5],
    },
]

var PatientExcludeColumn = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
    {targets: 'no-sort', orderable: false },

    { "targets": [1, 2, 3], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [4, 5, 6],
        "sClass": 'text-center ln-nowrap'
    },
    //Patient Risk Score 
    {
        "render": function (data, type, row) {
            return '<div class="ln-overutilized_color ln-insetShadowRed ln-shadowEfficiency">\<span class="fa fa-level-up ln-faRight"></span>' + data + '</div>';
        }, "targets": [4],
    },
    //Efficiency
    {
        "render": function (data, type, row) {
            return '<div class="ln-underutilization_color ln-insetShadowYellow ln-shadowEfficiency">\
                    <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [5]
    },
    //Case Mix
    {
        "render": function (data, type, row) {
            return '<div class="ln-expected_color ln-insetShadowGreen ln-shadowEfficiency">\
                <span class="fa fa-level-down ln-faRight"></span>' + data + '</div';
        }, "targets": [6]
    }
]

var MeasureComplianceColumns = [
{
    "render": function (data, type, row) {
        return '<input class="control-label  chk-exclusions" type="checkbox" value="' + data + '">';
    },
    "targets": [0],
},
{ targets: 'no-sort', orderable: false },
    { "targets": [1, 2, 3], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [4, 5, 6, 7],
        "sClass": 'text-center ln-nowrap'
    },
    {
    "render": function (data, type, row) {
        return '<a href="#/measurecompliance_patient" >' + data + '</a>';
    }, "targets": [4],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/measurecompliance_patient"  >' + data + '</a>';
        }, "targets": [6],
    },
]

var MeasureComplianceDetailsColumns = [

    { "targets": [0, 1], "sClass": 'text-left ln-nowrap' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [2, 3, 4, 5, 6],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/measurecompliance_patient"  >' + data + '</a>';
        }, "targets": [3],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/measurecompliance_patient"  >' + data + '</a>';
        }, "targets": [5],
    },
]

var MeasureCompliancePatientsColumns = [

    { "targets": [0, 1, 2, 3], "sClass": 'text-left ln-nowrap' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [3, 4, 5, 6, 7, 8 ],
        "sClass": 'text-center ln-nowrap'
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/patientprofile" >' + data + '</a>';
        }, "targets": [0],
    },
]

var PharmacyProviderListColumns = [
    {
        "render": function (data, type, row) {
            return '<input class="class="control-label" type="checkbox" value="">';
        },
        "targets": [0],
    },
    { "targets": [ 1, 2, 3], "sClass": 'text-left ln-nowrap ' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        "sClass": 'text-center'
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/pharmacy_patients" >' + data + '</a>';
        }, "targets": [4, 5, 6, 7, 8 , 9, 10],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/providerprofile" >' + data + '</a>';
        }, "targets": [1],
    },
]

var PharmacyPatientListColumns = [
    {
        "render": function (data, type, row) {
            return '<input class="class="control-label" type="checkbox" value="">';
        },
        "targets": [0],
    },
    {
        "render": function (data, type, row) {
            return '<a ui-sref="pharmacy_patients" href="#/patientprofile" >' + data + '</a>';
        }, "targets": [1],
    },
    { "targets": [0, 1, 2, 12, 13], "sClass": 'text-left ln-nowrap' },
    { targets: 'no-sort', orderable: false },
    {
        "targets": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        "sClass": 'text-center '
    }
]
    

var ProcedureFrequencyProvidersListColumns = [

    {
        "render": function (data, type, row) {
            return '<a href=' + proc_prov_list_Goto + '>' + data + '</a>';
    }, "targets": [0],
    },
    
    {
        "targets": [0],
        "sClass": 'text-left ln-nowrap',
    },
    {
        "targets": [1, 2, 3, 4, 5, 6, 7],
        "sClass": 'text-center '
    }
]

var ProcedureFrequencyEpisodesListColumns = [
    {
        "render": function (data, type, row) {
            return '<a href=' + proc_epi_list_Goto + '>' + data + '</a>';
        }, "targets": [0],
    },

    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1, 2, 3, 4, 5, 6, 7],
        "sClass": 'text-center '
    }
]

var ProcedureFrequencyProceduresListColumns = [
    {
        "render": function (data, type, row) {
            return '<a href=' + proc_list_Goto + '>' + data + '</a>';
        }, "targets": [0],
    },
    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1,2,3,4,5, 6, 7, 8,9],
        "sClass": 'text-center ln-nowrap'
    }
]

var ProcedureFrequencyProviderViewColumns = [
    {
        /*
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_procedureview">' + data + '</a>';
        }, "targets": [0],
        */
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_episodes">' + data + '</a>';
        }, "targets": [1],
    },
    {
        /*
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_procedures">' + data + '</a>';
        }, "targets": [3],
        */
    },
    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1, 2, 3, 4, 5, 6, 7, 8],
        "sClass": 'text-center '
    }
]

var ProcedureFrequencyEpisodeViewColumns = [
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_procedureview">' + data + '</a>';
        }, "targets": [0],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_episodes">' + data + '</a>';
        }, "targets": [1],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_providers">' + data + '</a>';
        }, "targets": [2],
    },
    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "sClass": 'text-center '
    }
]

var ProcedureFrequencyProcedureViewColumns = [
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_providerview">' + data + '</a>';
        }, "targets": [0],
    },
    {
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_episodes">' + data + '</a>';
        }, "targets": [1],
    },
    {
        /*
        "render": function (data, type, row) {
            return '<a href="#/procedure_frequency_procedures">' + data + '</a>';
        }, "targets": [3],
        */
    },
    { "targets": [0], "sClass": 'text-left ln-nowrap' },
    {
        "targets": [1, 2, 3, 4, 5, 6 , 7, 8],
        "sClass": 'text-center '
    }
]

//Initialize Tables Start

function Initprovidertable() {
    var table = $('#providerlisttable').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        //"ajax": "resources/providers.json",
        order: [[1, 'asc']],
        data: providerdataSet,
        columnDefs: providerColumn,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
            colReorder: {
                    fixedColumns: 2,
                    realtime: true,
    }
});
    new $.fn.dataTable.FixedColumns(table, {
            leftColumns: 2
});
};

function InitoverallScoreTable() {
    var table = $('#overallscorelisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
            //"ajax": "resources/providers.json",
           data: providerdataSet,
            columnDefs: providerColumn,
            scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
    colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitPatientTable() {
    var table = $('#patientlisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: patientdataSet,
        columnDefs: PatientColumn,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitOpenAndOutliersEpisodeTable() {
    var table = $('#episodeoutlierlisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: episodeOutlierDataSet,
        columnDefs: EpisodeandOutlierColumn,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitOpenAndOutliersETGTable() {
    var table = $('#etgoutlierlisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: ETGOutlierDataSet,
        columnDefs: ETGOutlierColumn,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitEpisodeTable() {
    var table = $('#episodelisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: episodedataSet,
        columnDefs: EpisodeColumn,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitETGTable() {
    var table = $('#etglisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: etgdataSet,
        columnDefs: ETGColumn,
        "pageLength": 100,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 3,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 3
    });
};

function InitETGTable_Surgical() {
    var table = $('#etglisttable_surgical').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: etgdataSet_Surgical,
        columnDefs: ETGColumn_Surgical,
        "pageLength": 100,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 0,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 0
    });
};

function InitPatientexcludeTable() {
        var table = $('#patientsexcluded').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: patientexcludedataSet,
        columnDefs: PatientExcludeColumn,
        "pageLength": 100,
        //"autoWidth": true,
        scrollY: "330px",
        scrollX: "true",
        scrollCollapse: true,
        });
};

function InitAvailablePeerGroupTable() {
    var table = $('#availablepgtable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[0, 'asc']],
        data: availablePeerGroupdataSet,
        columnDefs: AvailablePeerGroupColumns,
        "pageLength": 100,
        //"autoWidth": true,
        scrollY: "416px",
        scrollX: "true",
        scrollCollapse: true,
    });
};

function InitMyTemplateTable() {
    var table = $('#mytemplatetable').dataTable({
        dom: 'R<".ln-tablepaddingright"f>r<".ln-underlinecommon"t><ilp>',
        order: [[0, 'asc']],
        data: myTemplatedataSet,
        columnDefs: MyTemplateColumns,
        "pageLength": 100,
        //"autoWidth": true,
        scrollY: "416px",
        scrollX: "true",
        scrollCollapse: true,

    });
    setTimeout(function () {
        refresh('#mytemplatetable');
    }, 300);
};

function InitMyTemplateTablePPM() {
    var table = $('#mytemplatetable').dataTable({
        dom: 'R<"#mytemplatetable_filter">r<".ln-underlinecommon"t><>',
        order: [[0, 'asc']],
        data: myTemplatePPMdataSet,
        columnDefs: MyTemplatePPMColumns,
        "pageLength": 100,
        "autoWidth": true,
        scrollY: "416px",
        scrollX: "true",
        scrollCollapse: true,
    });
    setTimeout(function (){
        refresh('#mytemplatetable');
    }, 300);
};

function refresh(table) {
    $(table).DataTable()
    .columns.adjust()
    //.responsive.recalc();
}

function InitEpisodeexcludeTable() {
        $('#episodesexcluded').dataTable({
        //dom: 'R<f>rt<"bottom"ilp>',
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        "pageLength": 100,
        scrollY: "330px",
        scrollX: "true",
        scrollCollapse: true,
    });
};

function InitMeasureComplianceTable() {
    var table = $('#providertable_measurecompliance').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: measurecompliancedataSet,
        columnDefs: MeasureComplianceColumns,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitMeasureComplianceDetailsTable() {
    var table = $('#tablemeasurecompliance_details').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[0, 'asc']],
        data: measurecompliancedetailsdataSet,
        columnDefs: MeasureComplianceDetailsColumns,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 0
    });
};

function InitMeasureCompliancePatientsTable() {
    var table = $('#measurecomliance_patientlisttable').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: measurecompliancepatientsdataSet,
        columnDefs: MeasureCompliancePatientsColumns,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 0
    });
};

function InitPharmacyProviderList() {
    var table = $('#pharmacy_provider_list').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: PharmacyProviderListColumnsDataset,
        columnDefs: PharmacyProviderListColumns,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 0
    });
};

function InitPharmacyPatientList() {
    var table = $('#pharmacy_patient_list').DataTable({
        dom: 'R<".ln-lefttablesearch"f>rt<"bottom"ilp>',
        order: [[1, 'asc']],
        data: PharmacyPatientListColumnsDataset,
        columnDefs: PharmacyPatientListColumns,
        scrollY: "300px",
        scrollX: "true",
        "pageLength": 100,
        scrollCollapse: true,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
};

function InitProviderListNetwork() {

    var table = $('#overallscorelisttable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: providerdataSet_network,
        columnDefs: providerColumnNetworkLeakage,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 2
    });
};

function InitServiceListNetwork() {

    /* Formatting function for row details - modify as you need */
    function format(d) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
                '<td>Full name:</td>' +
                '<td>' + d.name + '</td>' +
            '</tr>' +
            '<tr>' +
                '<td>Extension number:</td>' +
                '<td>' + d.extn + '</td>' +
            '</tr>' +
            '<tr>' +
                '<td>Extra info:</td>' +
                '<td>And any further details here (images etc)...</td>' +
            '</tr>' +
        '</table>';
    }

    var table = $('#servicestable').DataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],

        /*trying to get dropdowns to work
        "ajax": "/assets/js/datasets/servicedataset_network.txt",
        "columns": [
            {
                "className": 'details-control',
                "orderable": true,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Provider" },
            { "data": "Patient" },
            { "data": "Date Of Service" },
            { "data": "Diagnosis Code" },
            { "data": "Procedure Code" },
            { "data": "NDC" },
            { "data": "Rev Code" },
            { "data": "Paid Amount" },
            { "data": "OON Reason Code" }
        ], 
        */
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            //fixedColumns: 2,
            order: [4, 2, 3, 5, 6, 7, 8, 1, 0, ],
            realtime: true,
        },
        data: Servicedataset_Network,
        columnDefs: ServiceColumnNetworkLeakage,
        //refresh(table)
    });
    //new $.fn.dataTable.FixedColumns(table, {
       // leftColumns: 1
    // });
    $('#servicestable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
};

function InitPatientListNetwork() {
    var table = $('#servicestable').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: Patientdataset_Network,
        columnDefs: PatientColumnNetworkLeakage,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
    new $.fn.dataTable.FixedColumns(table, {
        leftColumns: 1
    });
};


//Procedure Init Functions
function InitPFProviderView() {
    var table = $('#pf_providerview_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyProviderViewDataSet,
        columnDefs: ProcedureFrequencyProviderViewColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
};

function InitPFProviders() {
    var table = $('#pf_providers_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyProvidersDataSet,
        columnDefs: ProcedureFrequencyProvidersListColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
};

function InitPFEpisodes() {
    var table = $('#pf_episodes_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyEpisodeDataSet,
        columnDefs: ProcedureFrequencyEpisodesListColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
};

function InitPFEpisodeView() {
    var table = $('#pf_episodeview_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyEpisodeViewDataSet,
        columnDefs: ProcedureFrequencyEpisodeViewColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 1,
            realtime: true,
        }
    });
};

function InitPFProcedures() {
    var table = $('#pf_procedures_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyProceduresDataSet,
        columnDefs: ProcedureFrequencyProceduresListColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
};

function InitPFProcedureView() {
    var table = $('#pf_procedureview_list').dataTable({
        dom: 'R<".ln-tabletop"f>rt<"bottom"ip>',
        order: [[1, 'asc']],
        //"ajax": "resources/providers.json",
        data: ProcedureFrequencyProcedureViewDataSet,
        columnDefs: ProcedureFrequencyProcedureViewColumns,
        scrollY: "300px",
        scrollX: "true",
        scrollCollapse: true,
        "pageLength": 100,
        colReorder: {
            fixedColumns: 2,
            realtime: true,
        }
    });
};
//Initialize Tables End
