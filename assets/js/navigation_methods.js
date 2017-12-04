/****** Global Variables *******/
    var headerTitle = function (name) {
        document.getElementById("headertitle").innerHTML = name;
    };
    var mainSectionTitle = function (name) {
        document.getElementById("mainsectiontitle").innerHTML = name;
    };

//Toggle fixed top error message 
    $(".closefloatingerrormessage").click(function () {
        $("#floatingerrormessage").toggle("fast");
    });

    var transitionspeed = 1000;
    function hideall() {
            //sidebar
        $("#sidebar_MenuGroup").hide();
        $("#sidebar_ppmquicklinks").hide();
        $("#sidebar_phmquicklinks").hide();
        $("#contentheaderrightplaceholder").hide();
        $("#activetemplate").hide();
        $("#sidebar_ViewBy").hide();
        $("#sidebar_creatingTemplate").hide();
        $("#sidebar_ProviderPerformanceGroup").hide();
        $("#sidebar_PhysicianPerformanceGroup").hide();
        $("#sidebar_ViewBy").hide();
        $("#provider_op_viewby").hide();
        $("#provider_group_viewby").hide();
        $("#providergroup_viewby_icon").hide();
        $("#provider_viewby_icon").hide();
        $("#overallscores_groupbyonly").hide();
        //SidebarProfileContent
        $("#sidebar_viewprofileby").hide();
        $("#sidebar_viewproviderby").hide();
        $("#provider_name_text").hide();
        $("#comparingwith").hide();
        $("#backarrow").hide();
        $("#pageinfotext").hide();
        $("#sidebar_networkleakage").hide();
        hidepatientprofile();

        //Controls
        $("#controls_template").hide(); //exposed when in template section
        $("#controls_template_smallicons").hide(); //exposed when in template section
        $("#controls_pageedit").hide();

        //LEGACY...I was hiding and showing the charts from 
        //$("#providercharts").hide(); //needs to be renamed
        //$("#physiciancharts").hide(); //needs to be renamed

        //Content header
        $("#mainsearchbar").hide();
        $("#contentheaderright").hide();
        $("#FilterCriteria").hide();
        $("#showadvancedfilters").hide();
        $("#filtercriteraresults").hide();
        $("#entireTemplatePop").hide();
        $("#viewingproviders").hide();
    };

    function hidepatientprofile() {
        $("#measurecompliance").hide();
        $("#patientsummary").hide();
        $("#patientepisodes").hide();
        $("#episodehistory").hide();
        $("#patientnoncompliancesummary").hide();
        $("#demographics").hide();
        $("#patientpharmacy").hide();
        $("#patientlab").hide();
    }
    function showcontrols() {
        $("#controls_template").show();
        $("#controls_template_smallicons").show(); //exposed when in template section
    };
    function hidequicksets() {
        $("#contentheaderright").show();
        $("#quick-subclient").hide();
        //$("#quick-datarange").hide();
        $("#quick-exclusion").hide();
        $("#quick-lob").hide();
        $("#quick-benchmarks").hide();
    };

    function showquicksets() {
        $("#contentheaderright").show();
        $("#quick-subclient").show();
        $("#quick-datarange").show();
        $("#quick-exclusion").show();
        $("#quick-lob").show();
        $("#quick-benchmarks").show();
        $("#entireTemplatePop").show();
    };

/****** CHANGE PAGE FUNCTIONS START *******/
    //Quick Links Create template section
    function gotoCreateTemplate() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_general.html #ContainerReportType");
        headerTitle("Create Filters: General");
        //document.getElementById("headertitle").innerHTML = "Report Type";
    };
    //Create Providers
    function gotoCreateProviders() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_provider.html #ContainerProvider");
        headerTitle("Create Filters: Providers");
    };
    //Create ReportType
    function gotoCreateReportType() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_general.html #ContainerReportType");
        headerTitle("Create Filters: General");
    };
    //Create Episode
    function gotoCondition() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_condition.html #ContainerEpisode");
        headerTitle("Create Filters: Condition");
    };
    //Create Patient 
    function gotoCreatePatient() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_patient.html #ContainerPatient");
        headerTitle("Create Filters: Patient Info");
    };

    function gotoCreateGroup() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_group.html #ContainerGroup");
        headerTitle("Create Filters: Group");
    };

    function gotoCreateSummary() {
        hideall();
        $("#FilterCriteria").show();
        $("#sidebar_creatingTemplate").show();
        $("#activetemplate").show();
        hidequicksets();
        showcontrols();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_create_summary.html #ContainerSummary");
        headerTitle("Create Filters: Summary");
    };
    
    //Home
    function gotoHome() {
        hideall();
        hidequicksets();
        $("#contentheaderrightplaceholder").show();
        //showquicksets();
        headerTitle("Home");
        $("#sidebar_ppmquicklinks").show();
        $("#sidebar_phmquicklinks").show();
        $("#FilterCriteria").show();
        $("#contentheaderright").show();
        $("#controls_pageedit").show();
        mainSectionTitle("Clinical Solutions");
        setTimeout(function () {
            homeEditControl(), InitMyTemplateTablePPM();
        }, 300);
    };

    function homeEditControl() {
        //setup home page
        $(".phmcharts").show();
        $(".editphm_charts").hide();
        $(".editppm_charts").hide();
        $("#controls_pagehelp").hide();
        // PHM edit functions
        $("#edit_phm_charts").click(function () {
            $(".editphm_charts").show();
            $(".phm_charts").hide();
        });
        $(".phmchartapply").click(function () {
            $(".editphm_charts").hide();
            $(".phm_charts").show();
        });
        $(".phmchartcancel").click(function () {
            $(".editphm_charts").hide();
            $(".phm_charts").show();
        });

        //PPM edit controls
        $("#edit_ppm_charts").click(function () {
            $(".editppm_charts").show();
            $(".ppm_charts").hide();
        });
        $(".ppmchartapply").click(function () {
            $(".editppm_charts").hide();
            $(".ppm_charts").show();
        });
        $(".ppmchartcancel").click(function () {
            $(".editppm_charts").hide();
            $(".ppm_charts").show();
        });
    }

/*
    function ppmManageHomeCharts(){
        $("#ppmchart1dropdown").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "totalcost_breakdown") {
                    $("#totalcost_breakdown").show();
                }
                else if ($(this).attr("value") != "totalcost_breakdown") {
                    $("#totalcost_breakdown").hide();
                }
                if ($(this).attr("value") == "overallefficiency") {
                    $("#overallefficiency").show();
                }
                else if ($(this).attr("value") != "overallefficiency") {
                    $("#overallefficiency").hide();
                }
                if ($(this).attr("value") == "efficiencybyspecialty") {
                    $("#efficiencybyspecialty").show();
                }
                else if ($(this).attr("value") != "efficiencybyspecialty") {
                    $("#efficiencybyspecialty").hide();
                }
                if ($(this).attr("value") == "efficiencybympc") {
                    $("#efficiencybympc").show();
                }
                else if ($(this).attr("value") != "efficiencybympc") {
                    $("#efficiencybympc").hide();
                }
            });
        }).change();

        $("#ppmchart2dropdown").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "totalcost_breakdown") {
                    $("#totalcost_breakdown").show();
                }
                else if ($(this).attr("value") != "totalcost_breakdown") {
                    $("#totalcost_breakdown").hide();
                }
                if ($(this).attr("value") == "overallefficiency") {
                    $("#overallefficiency").show();
                }
                else if ($(this).attr("value") != "overallefficiency") {
                    $("#overallefficiency").hide();
                }
                if ($(this).attr("value") == "efficiencybyspecialty") {
                    $("#efficiencybyspecialty").show();
                }
                else if ($(this).attr("value") != "efficiencybyspecialty") {
                    $("#efficiencybyspecialty").hide();
                }
                if ($(this).attr("value") == "efficiencybympc") {
                    $("#efficiencybympc").show();
                }
                else if ($(this).attr("value") != "efficiencybympc") {
                    $("#efficiencybympc").hide();
                }
            });
        }).change();
    }

    */

    /*Click on Provider Performance Main tab
    function gotoppmlanding() {
        hideall();
        showquicksets();
        showViewbyicon();
        showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").slideDown(transitionspeed);
        $("#FilterCriteria").slideDown();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        $("#providercharts").fadeIn(0, function () { loadchartsproviders() });
        //$("#datainject").load("_list_providers.html #datainject_providerlist", function () { Initprovidertable()});
        headerTitle("Overall Performance");
        mainSectionTitle("Provider Performance");
        setTimeout(function () {
            Initprovidertable();
        }, 300);
    };
    */

    //Click on Overall Performance Main tab
    function gotoCompareCost() {
        hideall();
        showquicksets();
        showViewbyicon();
        showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#providercharts").fadeIn(0);
        $("#sidebar_MenuGroup").show();
        $("#viewingproviders").show();
        //$("#datainject").load("_list_providers.html #datainject_providerlist", function () {Initprovidertable()});
        headerTitle("Compare Costs");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            Initprovidertable();
        }, 300);
    };

    function gotoCompareEfficiency() {
        hideall();
        showquicksets();
        showViewbyicon();
        showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#contentheaderright").show();
        $("#physiciancharts").fadeIn(0);
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Compare Efficiency");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            Initprovidertable();
        }, 300);
    };

    function gotoProviderList() {
        hideall();
        showquicksets();
        $("#contentheaderright").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_providers.html #datainject_providerlist", function () {Initprovidertable() });
        headerTitle("Provider List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            Initprovidertable();
        }, 300);
    };

    //Provider Performance / Physician
    function gotoCompareProviders() {
        hideall();
        showquicksets();
        showGroupByicon();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_overallscores.html #datainject_providerlist", function () { InitoverallScoreTable() });
        headerTitle("Compare Providers");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitoverallScoreTable();
        }, 300);
    };

    function gotoEpisodeList() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_episode.html #datainject_episodelist", function () { InitEpisodeTable() });
        headerTitle("Episode List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitEpisodeTable();
        }, 300);
    };

    function gotoOpenAndOutliers() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_episode.html #datainject_episodelist", function () { InitEpisodeTable() });
        headerTitle("Open and Outliers");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitOpenAndOutliersEpisodeTable(), InitOpenAndOutliersETGTable(), showepisodesoutlier()
        }, 300);
        gotoTopofPage();
    };

    function gotoPatientList() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_patient.html #datainject_patientlist", function () { InitPatientTable() });
        headerTitle("Patient List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitPatientTable();
        }, 300);
    };

    function gotoPatientProfile() {
        $("#viewingproviders").show();
        //$("#datainject").load("_page_patient_profile.html #containerpatientprofile", function () { hideall(), showquicksets(), patientProfileShow() });
        setTimeout(function () {
            hideall(), showquicksets(), patientProfileShow()
        }, 300);
    };

    function patientProfileShow() {
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_viewprofileby").show();
        $("#demographics").show();
        $("#patientnoncompliancesummary").show();
        $("#backarrow").show();
        $("#patientsummary").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Patient Profile - Overview");
        mainSectionTitle("Provider Performance Monitor");
    }

    function gotoPatientPharmacy() {
        hideall();
        showquicksets();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_viewprofileby").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#patientpharmacy").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Patient Profile - Pharmacy");
        mainSectionTitle("Provider Performance Monitor");
    };

    function gotoPatientLab() {
        hideall();
        showquicksets();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_viewprofileby").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#patientlab").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Patient Profile - Lab Services");
        mainSectionTitle("Provider Performance Monitor");
    };

    function gotoPatientMeasureCompliance() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        //$("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_viewprofileby").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#measurecompliance").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_patient_profile.html #containerpatientprofile");
        headerTitle("Patient Profile - Measure Compliance");
        mainSectionTitle("Provider Performance Monitor");
    };

    function gotoPatientEpisodes() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        //$("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#patientsummary").show();
        $("#sidebar_viewprofileby").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#patientepisodes").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_patient_profile.html #containerpatientprofile");
        headerTitle("Patient Profile - Episodes");
        mainSectionTitle("Provider Performance Monitor");
    };

    function gotoPatientEpisodeHistory() {
        hideall();
        //showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        //$("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_viewprofileby").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#episodehistory").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_patient_profile.html #containerpatientprofile");
        headerTitle("Patient Profile - Timeline");
        mainSectionTitle("Provider Performance Monitor");
    };

// Provider Profile Start
    function gotoProviderProfile() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#backarrow").show();
        $("#provider_name_text").show();
        $("#comparingwith").show();
        headerTitle("Provider Profile - Overview");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

    function gotoProvProfCostBreakdown() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Cost Breakdown");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

    function gotoProvProfPopulation() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Patient Population");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
        setTimeout(function () {
            SetChart("Patient", "Population", "#patient_population_svg", 50, 51, 50, 51, 52, 53, 54);
            SetChart("Overall", "Population", "#overall_population_svg", 900, 123, 403, 287, 32, 424, 333);
            SetChart("Chronic", "Episodes", "#chronic_population_svg", 345, 34, 4545, 5536, 6354, 424, 333);
            SetChart("Acute", "Episodes", "#acute_population_svg", 200, 444, 23, 56, 543, 44, 234);
        }, 300);
    };

    function gotoProvProfETGlist() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - ETG List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitETGTable();
        }, 300);
        gotoTopofPage();
    };

    function gotoProvProfEpisodeList() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Episode List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitEpisodeTable();
        }, 300);
        gotoTopofPage();
    };

    function gotoProvProfReferralPatterns() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Referral Patterns");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

    function gotoProvProfPatientList() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Patient List");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitPatientTable();
        }, 300);
        gotoTopofPage();
    };

    function gotoProvProfMeasureCompliance() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Measure Compliance");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitMeasureComplianceTable(), InitMeasureComplianceDetailsTable(), InitMeasureCompliance()
        }, 300);
        gotoTopofPage();
    };

    function gotoProvProfComparisonPG() {
        hideall();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#sidebar_MenuGroup").show();
        $("#sidebar_viewproviderby").show();
        $("#provider_name_text").show();
        //$("#comparingwith").show();
        $("#backarrow").show();
        headerTitle("Provider Profile - Comparison Peer Group");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            $(document.body).scrollTop(0);
        }, 15);
        gotoTopofPage();
    };

//Provider Profile end

    function gotoReferralPatterns() {
        hideall();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Referral Patterns");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

    function gotoPerformancebyEpisode() {
        hideall();
        //showquicksets();
        //showViewbyicon();
        //showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_performance_by_episode.html #ContainerPerformancebyEpisode");
        headerTitle("ETG Performance");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

    function gotoMeasureCompliance() {
        hideall();
        //showquicksets();
        //showViewbyicon();
        //showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_measure_compliance.html #datainject_measurecompliance", function () { InitMeasureComplianceTable(), InitMeasureComplianceDetailsTable(), InitMeasureCompliance() });
        headerTitle("Measure Compliance");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitMeasureComplianceTable(), InitMeasureComplianceDetailsTable(), InitMeasureCompliance()
        }, 600);
        gotoTopofPage();
    };

    function gotoMeasureCompliancePatients() {
        hideall();
        //showquicksets();
        //showViewbyicon();
        //showGroupByicon();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#FilterCriteria").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        headerTitle("Patient Compliance");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitMeasureCompliancePatientsTable(), InitPatientCompliance();
        }, 600);
        gotoTopofPage();
    };

    function InitPatientCompliance() {
        $("#measuredropdown_patientcompliance").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "allcategories") {
                    $("#compliancedetails").hide();
                    //$("#ppmpc2").hide();
                    //$("#ppmpc1").show();
                }
                else if ($(this).attr("value") != "all") {
                    $("#compliancedetails").show();
                    $("#measuredropdown_patientcompliancedetails").val("all");
                }
            });
        }).change();

        $("#measuredropdown_patientcompliancedetails").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "all") {
                    $("#compliancedetails").hide();
                    //$("#ppmpc2").hide();
                    //$("#ppmpc1").show();
                }
                else if ($(this).attr("value") != "all") {
                    //$(".measuredetails").not(".asthmadetails").hide();
                    $("#compliancedetails").show();
                    //$("#ppmpc2").show();
                    //$("#ppmpc1").hide();
                }
            });
        }).change();
    }

//Manages the dropdowns for measure compliance
    function InitMeasureCompliance() {
        $("#measurebydropdown").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "measurecat") {
                    $("#measurecategoriescontainer").show();
                    $("#measuredetailscontainer").hide();
                }
                else if ($(this).attr("value") == "measuredetail") {
                    $("#measurecategoriescontainer").hide();
                    $("#measuredetailscontainer").show();
                }
            });
        }).change();

        $("#measuregroupdropdown").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "allmeasures") {
                    $(".measurebars").show();
                }
                else if ($(this).attr("value") == "chronicmeasures") {
                    $(".measurebars").not(".chronicmeasures").hide();
                    $(".chronicmeasures").show();
                }
                else if ($(this).attr("value") == "preventativemeasures") {
                    $(".measurebars").not(".preventativemeasures").hide();
                    $(".preventativemeasures").show();
                }
                else if ($(this).attr("value") == "othermeasures") {
                    $(".measurebars").not(".othermeasures").hide();
                    $(".othermeasures").show();
                }
            });
        }).change();

        $("#measuredropdown").change(function () {
            $(this).find("option:selected").each(function () {
                if ($(this).attr("value") == "allmeasures") {
                    $(".measurebars").show();
                }
                else if ($(this).attr("value") == "asthma") {
                    $(".measurebars").not(".Asthma_Bar").hide();
                    $(".Asthma_Bar").show();
                }
                else if ($(this).attr("value") == "cad") {
                    $(".measurebars").not(".CAD_Bar").hide();
                    $(".CAD_Bar").show();
                }
                else if ($(this).attr("value") == "copd") {
                    $(".measurebars").not(".COPD_Bar").hide();
                    $(".COPD_Bar").show();
                }

            });

        }).change();

        $(".Asthma_Bar").click(function () {
            $(".measurebars").not(".Asthma_Bar").hide();
            $(".Asthma_Bar").show();
        });
    };

/**PEER GROUP START**/
    function gotoManagePeerGroup() {
        hideall();
        hidequicksets();
        $("#contentheaderrightplaceholder").show();
        $("#overallscores_groupbyonly").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_peergroup_manage.html #datainject_peergroupsmanage", function () { InitAvailablePeerGroupTable() });
        headerTitle("Manage Peer Group");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            InitAvailablePeerGroupTable();
        }, 300);
        gotoTopofPage();
    };

    function gotoViewPeerGroupDetails() {
        hideall();
        $("#overallscores_groupbyonly").show();
        hidequicksets();
        $("#contentheaderrightplaceholder").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_peergroup_edit.html #ContainerCreatePeerGroup", function () { viewPGdetails() });
        headerTitle("Manage Peer Group - Details");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            viewPGdetails();
        }, 300);
        gotoTopofPage();
    };

    function gotoCreateNewPeerGroup() {
        hideall();
        $("#overallscores_groupbyonly").show();
        hidequicksets();
        $("#contentheaderrightplaceholder").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_page_peergroup_edit.html #ContainerCreatePeerGroup", function () { createEditPG() });
        headerTitle("Manage Peer Group - Create New Peer Group");
        mainSectionTitle("Provider Performance Monitor");
        setTimeout(function () {
            createEditPG();
        }, 300);
        gotoTopofPage();
    };

    function viewPGdetails() {
        $("#pg-general-static").show();
        $("#pg-general").hide();
        $("#pg-providers").hide();
        $("#pg-providers-static").show();
        $("#pg-findprovider").hide();
        $("#pg-search").hide();
        $("#button_pg-deletegroup").show();
        $("#button_pg-editgroup").show();
        $("#button_pg-cancel").hide();
        $("#button_pg-save").hide();
        gotoTopofPage();
    };

    function createEditPG() {
        $("#pg-general-static").hide();
        $("#pg-general").show();
        $("#pg-providers").show();
        $("#pg-providers-static").hide();
        $("#pg-findprovider").show();
        $("#pg-search").show();
        $("#button_pg-deletegroup").hide();
        $("#button_pg-editgroup").hide();
        $("#button_pg-cancel").show();
        $("#button_pg-save").show();
        gotoTopofPage();
    };

    function gotoComparisonPeerGroup() {
        hideall();
        showquicksets();
        //showGroupByicon();
        $("#FilterCriteria").show();
        $("#overallscores_groupbyonly").show();
        $("#activetemplate").show();
        $("#contentheaderright").show();
        $("#sidebar_ProviderPerformanceGroup").show();
        $("#viewingproviders").show();
        $("#sidebar_MenuGroup").show();
        //$("#datainject").load("_list_comparison.html #datainject_ComparisonList");
        headerTitle("Comparison Peer Group");
        mainSectionTitle("Provider Performance Monitor");
        gotoTopofPage();
    };

/**PEER GROUP END**/

        function gotoETGList() {
            hideall();
            //showquicksets();
            $("#activetemplate").show();
            $("#contentheaderright").show();
            $("#FilterCriteria").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            //$("#datainject").load("_etglist_basic.html #datainject_etglistbasic", function () { InitETGTable() });
            headerTitle("ETG List");
            setTimeout(function () {
                InitETGTable();
            }, 300);
            gotoTopofPage();
        };

        function gotoEpisodeDetails() {
            hideall();
            //showquicksets();
            $("#activetemplate").show();
            $("#contentheaderright").show();
            $("#FilterCriteria").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            //$("#datainject").load("_page_episode_details.html #ContainerPerformancebyEpisode");
            headerTitle("Episode Details");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage()
        };

        function gotoETGPerformance() {
            hideall();
            //showquicksets();
            $("#activetemplate").show();
            $("#contentheaderright").show();
            $("#FilterCriteria").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            //$("#datainject").load("_page_episode_details.html #ContainerPerformancebyEpisode");
            headerTitle("ETG Performance");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage()
        };

        function gotoMyTemplates() {
            hideall();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            //$("#activetemplate").show();
            hidequicksets();
            //$("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#contentheaderrightplaceholder").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("My Templates");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                InitMyTemplateTable();
            }, 400);
            gotoTopofPage();
        };

        function gotoTemplateLibrary() {
            hideall();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            //$("#activetemplate").show();
            hidequicksets();
            //$("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#contentheaderrightplaceholder").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("My Templates");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                //InitTemplateLibrary();
            }, 400);
            gotoTopofPage();
        };

        function gotoCostAndUtilization() {
            hideall();
            showquicksets();
            showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("Cost & Utilization");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
        };

        function gotoSurgicalInterventions() {
            hideall();
            showquicksets();
            showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("Surgical Interventions");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                InitETGTable_Surgical();
            }, 400);
            gotoTopofPage();
        };

        function gotoPharmacy() {
            hideall();
            showquicksets();
            //showViewbyicon();
            $("#pageinfotext").show();
            showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("Pharmacy");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                InitPharmacyProviderList();
            }, 400);
            gotoTopofPage();
        };

        function gotoPharmacyPatients() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("Pharmacy: Patients");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                InitPharmacyPatientList();
            }, 400);
            gotoTopofPage();
        };

        function gotoProviderPharmacyPatients() {
            hideall();
            $("#FilterCriteria").show();
            $("#activetemplate").show();
            $("#contentheaderright").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_viewproviderby").show();
            $("#provider_name_text").show();
            $("#backarrow").show();
            headerTitle("Provider Profile - Pharmacy");
            mainSectionTitle("Provider Performance Monitor");
            setTimeout(function () {
                InitPharmacyPatientList();
            }, 400);
            gotoTopofPage();
        };

        function gotoPreferences() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            headerTitle("Preferences");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
        };

        function gotonetworkleakage() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            $("#nl-overviewcharts").show();
            $("#backarrow").show();
            //document.getElementById("viewbyentry1").innerHTML = "Cost";
            //document.getElementById("viewbyentry2").innerHTML = "Claims";
            headerTitle("Network Leakage - Overview");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
            }, 400);
            
        };
              
        function GotoNetworkLeakageByLocation() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            $("#networktree").show();
            $("#backarrow").show();
            headerTitle("Network Leakage - By Location");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                loadtree(); loadmap(); CreateLegend();
            }, 400);
        };

        function GotoNetworkLeakageByProvider() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            $("#networktree").show();
            $("#backarrow").show();
            headerTitle("Network Leakage - By Provider");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();

            setTimeout(function () {
                InitProviderListNetwork();
            }, 400);
        };
            
        function GotoNetworkLeakageByService() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            $("#networktree").show();
            $("#backarrow").show();
            headerTitle("Network Leakage - Services");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                InitServiceListNetwork();
            }, 400);
        };

        function GotoNetworkLeakageByPatient() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            $("#networktree").show();
            $("#backarrow").show();
            headerTitle("Network Leakage - Patients");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                InitPatientListNetwork();
            }, 400);
        };


        function GotoProcedure_Frequency() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            //$("#sidebar_networkleakage").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
            }, 400);
        };

        function GotoProcedureFrequencyProviders() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Providers");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
        };

        function GotoProcedureFrequencyProviderView() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Provider Name");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                InitPFProviderView();
            }, 400);
        };

        function GotoProcedureFrequencyEpisodes() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Episodes");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
        };

        function GotoProcedureFrequencyEpisodeView() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Episode Name");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                InitPFEpisodeView();
            }, 400);
        };

        function GotoProcedureFrequencyProcedures() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Procedures");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
        };

        function GotoProcedureFrequencyProcedureView() {
            hideall();
            showquicksets();
            //showViewbyicon();
            //showGroupByicon();
            $("#FilterCriteria").show();
            //$("#sidebar_creatingTemplate").show();
            $("#activetemplate").show();
            $("#sidebar_ProviderPerformanceGroup").show();
            $("#viewingproviders").show();
            $("#sidebar_MenuGroup").show();
            $("#overallscores_groupbyonly").show();
            //$("#backarrow").show();
            headerTitle("Procedure Frequency - Procedure Name");
            mainSectionTitle("Provider Performance Monitor");
            gotoTopofPage();
            setTimeout(function () {
                InitPFProcedureView();
            }, 400);
        };


//Temp for episode outliers
        function showepisodesoutlier () {
            $("#episodesoutlierwithsummary").show();
            $("#etgoutlierwithsummary").hide();
        };
        function showetgoutlier() {
            $("#episodesoutlierwithsummary").hide();
            $("#etgoutlierwithsummary").show();
        };
        /****** CHANGE PAGE FUNCTIONS END *******/

        function CreateLegend() {
            $('#legendkey').popover({
                //title: "<h1><strong>HTML</strong> inside <code>the</code><em>popover</em></h1>",
                content: '<div class="pull-left col-xs-6"><i class="fa fa-circle-o pull-left fa-lg legendcolor1"></i><span class="pull-left">Network</span></div><div class="pull-left col-xs-6"><i class="fa fa-circle-o pull-left fa-lg legendcolor2"></i><span class="pull-left">Specialty</span></div><div class="pull-left col-xs-6"><i class="fa fa-circle-o pull-left fa-lg legendcolor3"></i><span class="pull-left ln-margin-2px">Condition</span></div><div class="pull-left col-xs-6"><i class="fa fa-circle-o pull-left fa-lg legendcolor4"></i><span class="pull-left ln-margin-2px">Provider</span></div>', html: true, placement: "left"
            });
        };

        function gotoTopofPage() {
            setTimeout(function () {
                $(document.body).scrollTop(0);
            }, 15);
        };

        //Icons for sidebar
        function openviewbymenu() {
            $("#provider_op_viewby").slideToggle(transitionspeed);
        };
        function opengroupbymenu() {
            $("#provider_group_viewby").slideToggle(transitionspeed);
        };
        function showViewbyicon() {
            $("#provider_viewby_icon").fadeIn();
        };
        function showGroupByicon() {
            $("#providergroup_viewby_icon").fadeIn();
        };

        //Filter Criteria
        function togglefiltercriteria() {
            $("#filtercriteraresults").slideToggle();
        };

        function togglequickinfo() {
            $("#quickinfo1").slideToggle();
            $("#quickinfo2").slideToggle();
        };

        //toggle measurecompliance measures
        function togglemeasures() {
            //$("#measurecompliance-bars").toggleClass("ln-measurecompliance-height");
            $("#measurecompliance-bars").toggleClass('ln-measurecompliance-height_off ln-measurecompliance-height_on');
            $("#measuresizetoggler").toggleClass('fa-rotate-180');
            };

