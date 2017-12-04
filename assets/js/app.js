// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

//Controller for the home page that controls the dropdown to select each chart

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/partial-home.html',
            onEnter: function () {
                gotoHome();
            },
            onExit: function () {
                $("#controls_pagehelp").show();
            }
        })

        /* I need to learn about nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partials/partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })*/

     .state('compareefficiency', {
            url: '/compareefficiency',
            templateUrl: 'partials/partial-compareefficiency.html',
            onEnter: function () {           
                gotoCompareEfficiency()
            },
        })

     .state('comparecost', {
            url: '/comparecost',
            templateUrl: 'partials/partial-comparecost.html',
            onEnter: function () {
                gotoCompareCost()
            },
        })

     .state('compareproviders', {
            url: '/compareproviders',
            templateUrl: 'partials/partial-compareproviders.html',
            onEnter: function () {
                gotoCompareProviders()
            },
     })

    .state('openandoutliers', {
        url: '/openandoutlier',
        templateUrl: 'partials/partial-openoutlier.html',
        onEnter: function () {
            gotoOpenAndOutliers()
        },
    })

    //Create Sections

    .state('create_condition', {
        url: '/create_condition',
        templateUrl: 'partials/partial_create_condition.html',
        onEnter: function () {
            gotoCondition()
        },
    })
    .state('create_general', {
        url: '/create_general',
        templateUrl: 'partials/partial_create_general.html',
        onEnter: function () {
            gotoCreateReportType()
        },
    })
    .state('create_group', {
        url: '/create_group',
        templateUrl: 'partials/partial_create_group.html',
        onEnter: function () {
            gotoCreateGroup()
        },
    })
    .state('create_patient', {
        url: '/create_patient',
        templateUrl: 'partials/partial_create_patient.html',
        onEnter: function () {
            gotoCreatePatient()
        },
    })
    .state('create_provider', {
        url: '/create_provider',
        templateUrl: 'partials/partial_create_provider.html',
        onEnter: function () {
            gotoCreateProviders()
        },
    })
    .state('create_summary', {
        url: '/create_summary',
        templateUrl: 'partials/partial_create_summary.html',
        onEnter: function () {
            gotoCreateSummary()
        },
    })
    .state('mytemplate', {
        url: '/mytemplate',
        templateUrl: 'partials/partial_mytemplate.html',
        onEnter: function () {
            gotoMyTemplates()
        },
    })
    .state('template_library', {
        url: '/template_library',
        templateUrl: 'partials/partial_template_library.html',
        onEnter: function () {
            gotoTemplateLibrary()
        },
    })
    .state('managepeergroup', {
        url: '/managepeergroup',
        templateUrl: 'partials/partial_peergroup_manage.html',
        onEnter: function () {
            gotoManagePeerGroup()
        },
    })
    .state('createpeergroup', {
        url: '/createpeergroup',
        templateUrl: 'partials/partial_peergroup_edit.html',
        onEnter: function () {
            gotoCreateNewPeerGroup()
        },
    })
    .state('peergroupdetails', {
        url: '/peergroupdetails',
        templateUrl: 'partials/partial_peergroup_edit.html',
        onEnter: function () {
            gotoViewPeerGroupDetails()
        },
    })
    .state('etglist', {
        url: '/etglist',
        templateUrl: 'partials/partial_etglist.html',
        onEnter: function () {
            gotoETGList()
        },
    })
    .state('providerscomparedtopeers', {
        url: '/providerscomparedtopeers',
        templateUrl: 'partials/partial_listcomparison.html',
        onEnter: function () {
            gotoComparisonPeerGroup()
        },
    })
    .state('episodelist', {
        url: '/episodelist',
        templateUrl: 'partials/partial_list_episode.html',
        onEnter: function () {
            gotoEpisodeList()
        },
    })
    .state('patientlist', {
        url: '/patientlist',
        templateUrl: 'partials/partial_list_patient.html',
        onEnter: function () {
            gotoPatientList()
        },
    })
    .state('patientprofile', {
        url: '/patientprofile',
        templateUrl: 'partials/partial_patient_profile.html',
        onEnter: function () {
            gotoPatientProfile()
        },
    })
    .state('episodedetails', {
        url: '/episodedetails',
        templateUrl: 'partials/partial_episode_details.html',
        onEnter: function () {
            gotoEpisodeDetails()
        },
    })
    .state('performance_by_episode', {
        url: '/performance_by_episode',
        templateUrl: 'partials/partial_etg_performance.html',
        onEnter: function () {
            gotoETGPerformance()
        },
    })
    .state('referral_patterns', {
        url: '/referral_patterns',
        templateUrl: 'partials/partial_referral_patterns.html',
        onEnter: function () {
            gotoReferralPatterns()
        },
    })
    .state('measure_compliance', {
        url: '/measure_compliance',
        templateUrl: 'partials/partial_measure_compliance.html',
        onEnter: function () {
            gotoMeasureCompliance()
        },
    })
    .state('measurecompliance_patient', {
        url: '/measurecompliance_patient',
        templateUrl: 'partials/partial_measurecompliance_patient.html',
        onEnter: function () {
            gotoMeasureCompliancePatients()
        },
    })

    .state('providerprofile', {
        url: '/providerprofile',
        templateUrl: 'partials/partial_provider_profile.html',
        onEnter: function () {
            gotoProviderProfile()
        },
    })
    .state('providerprofile_costbreakdown', {
        url: '/providerprofile_costbreakdown',
        templateUrl: 'partials/partial-providerprofile_costbreakdown.html',
        onEnter: function () {
            gotoProvProfCostBreakdown()
        },
    })
    .state('providerprofile_population', {
        url: '/providerprofile_population',
        templateUrl: 'partials/partial-providerprofile_population.html',
        onEnter: function () {
            gotoProvProfPopulation()
        },
    })
    .state('providerprofile_etglist', {
        url: '/providerprofile_etglist',
        templateUrl: 'partials/partial-providerprofile_etglist.html',
        onEnter: function () {
            gotoProvProfETGlist()
        },
    })
    .state('providerprofile_episodelist', {
        url: '/providerprofile_episodelist',
        templateUrl: 'partials/partial-providerprofile_episodelist.html',
        onEnter: function () {
            gotoProvProfEpisodeList()
        },
    })
    .state('providerprofile_referralpatterns', {
        url: '/providerprofile_referralpatterns',
        templateUrl: 'partials/partial-providerprofile_referralpatterns.html',
        onEnter: function () {
            gotoProvProfReferralPatterns()
        },
    })
    .state('providerprofile_patientlist', {
        url: '/providerprofile_patientlist',
        templateUrl: 'partials/partial-providerprofile_patientlist.html',
        onEnter: function () {
            gotoProvProfPatientList()
        },
    })
    .state('providerprofile_measurecompliance', {
        url: '/providerprofile_measurecompliance',
        templateUrl: 'partials/partial-providerprofile_measurecompliance.html',
        onEnter: function () {
            gotoProvProfMeasureCompliance()
        },
    })
    .state('providerprofile_comparisonpg', {
        url: '/providerprofile_comparisonpg',
        templateUrl: 'partials/partial-providerprofile_listcomparison.html',
        onEnter: function () {
            gotoProvProfComparisonPG();
        },
    })
    //Provider Profile End

    //
    .state('cost_utilization', {
        url: '/cost_utilization',
        templateUrl: 'partials/partial-cost_utilization.html',
        onEnter: function () {
            gotoCostAndUtilization();
        },
    })

    .state('surgical_interventions', {
        url: '/surgical_interventions',
        templateUrl: 'partials/partial-surgical_interventions.html',
        onEnter: function () {
            gotoSurgicalInterventions();
        },
    })

    .state('pharmacy', {
        url: '/pharmacy',
        templateUrl: 'partials/partial-pharmacy.html',
        onEnter: function () {
            gotoPharmacy();
        },
    })

    .state('pharmacy_patients', {
        url: '/pharmacy_patients',
        templateUrl: 'partials/partial-pharmacy_patients.html',
        onEnter: function () {
            gotoPharmacyPatients();
        },
    })

    .state('provider_pharmacy_patients', {
        url: '/provider_pharmacy_patients',
        templateUrl: 'partials/partial-pharmacy_patients.html',
        onEnter: function () {
            gotoProviderPharmacyPatients();
        },
    })
    .state('preferences', {
        url: '/preferences',
        templateUrl: 'partials/partial-preferences.html',
        onEnter: function () {
            gotoPreferences();
        },
    })
    .state('networkleakage', {
        url: '/networkleakage',
        templateUrl: 'partials/partial-networkleakage.html',
        onEnter: function () {
            gotonetworkleakage();
            document.getElementById("viewbyentry1").innerHTML = "Cost";
            document.getElementById("viewbyentry2").innerHTML = "Claims";          
        },
        onExit: function () {
            document.getElementById("viewbyentry1").innerHTML = "Episode Responsible";
            document.getElementById("viewbyentry2").innerHTML = "PCP";         
        },
    })
    .state('networkleakagebylocation', {
        url: '/networkleakagebylocation',
        templateUrl: 'partials/partial-networkleakage-by-loc.html',
        onEnter: function () {
            GotoNetworkLeakageByLocation();
            document.getElementById("viewbyentry1").innerHTML = "Cost";
            document.getElementById("viewbyentry2").innerHTML = "Claims";
        },
        onExit: function () {
            document.getElementById("viewbyentry1").innerHTML = "Episode Responsible";
            document.getElementById("viewbyentry2").innerHTML = "PCP";
        },
    })
    .state('networkleakagebyprovider', {
        url: '/networkleakagebyprovider',
            templateUrl: 'partials/partial-networkleakage-by-prov.html',
                onEnter: function () {
                GotoNetworkLeakageByProvider();
            },
    })
    .state('networkleakageservicelist', {
        url: '/networkleakageservicelist',
        templateUrl: 'partials/partial-networkleakageservicelist.html',
        onEnter: function () {
            GotoNetworkLeakageByService();
        },
    })
    .state('networkleakagepatientlist', {
        url: '/networkleakagepatientlist',
        templateUrl: 'partials/partial-networkleakagepatientlist.html',
        onEnter: function () {
            GotoNetworkLeakageByPatient();
        },
    })

     //Procedure Frequency
    .state('procedure_frequency', {
        url: '/procedure_frequency',
        templateUrl: 'partials/partial-procedure_frequency.html',
        onEnter: function () {
            ClearProcedureStart();
            GotoProcedure_Frequency();
            ShowState();
        },
    })

    .state('procedure_frequency_providers', {
        url: '/procedure_frequency_providers',
        templateUrl: 'partials/partial-procedure_frequency_providers.html',
        onEnter: function () {
            GotoProcedureFrequencyProviders();
            setTimeout(function () {
                GotoCorrectLocation();
                SetProcArrowText();
                InitPFProviders();
                SetupArrows();
                if (startAtProvider) { ShowArrow1(); }
                if (startAtEpisode) { ShowArrow2(); }
                if (startAtProcedure) { ShowArrow2(); }

                if (startAtProvList) { HideAllArrows(); }
                if (startAtEpiList) { ShowArrow2(); }
                if (startAtProcList) { ShowArrow2(); }

                ShowState();
            }, .1);
        },
    })

    .state('procedure_frequency_episodes', {
        url: '/procedure_frequency_episodes',
        templateUrl: 'partials/partial-procedure_frequency_episodes.html',
        onEnter: function () {
            GotoProcedureFrequencyEpisodes();
            setTimeout(function () {
                GotoCorrectLocation();
                SetProcArrowText();
                InitPFEpisodes();
                SetupArrows();
                if (startAtProvider) { ShowArrow1(); }
                if (startAtEpisode) { ShowArrow1(); }
                if (startAtProcedure) { ShowArrow1(); }

                if (startAtProvList) { ShowArrow1(); }
                if (startAtEpiList) { HideAllArrows(); }
                if (startAtProcList) { ShowArrow1(); }

                ShowState();
            }, .1);
        }

    })
    .state('procedure_frequency_procedures', {
        url: '/procedure_frequency_procedures',
        templateUrl: 'partials/partial-procedure_frequency_procedures.html',
        onEnter: function () {
            GotoProcedureFrequencyProcedures();
            setTimeout(function () {
                GotoCorrectLocation();
                SetProcArrowText();
                InitPFProcedures();
                SetupArrows();

                if (startAtProvider) { ShowArrow2(); }
                if (startAtEpisode) { ShowArrow1(); }
                if (startAtProcedure) { ShowArrow2(); }


                if (startAtProvList) { ShowArrow2(); }
                if (startAtEpiList) { ShowArrow1(); }
                if (startAtProcList) { HideAllArrows(); }
                ShowState();
            }, .1);
        },
    })
    .state('procedure_frequency_providerview', {
        url: '/procedure_frequency_providerview',
        templateUrl: 'partials/partial-procedure_frequency_providerview.html',
        onEnter: function () {
            GotoProcedureFrequencyProviderView();
            setTimeout(function () {
                GotoCorrectLocation();
                SetProcArrowText();

                ShowState();
            }, .1);
        },
    })
    .state('procedure_frequency_episodeview', {
        url: '/procedure_frequency_episodeview',
        templateUrl: 'partials/partial-procedure_frequency_episodeview.html',
        onEnter: function () {
            GotoProcedureFrequencyEpisodeView();
        },
    })
    .state('procedure_frequency_procedureview', {
        url: '/procedure_frequency_procedureview',
        templateUrl: 'partials/partial-procedure_frequency_procedureview.html',
        onEnter: function () {
            GotoProcedureFrequencyProcedureView();
            SetProcArrowText();
        },
    })
});

routerApp.controller("ppmcharts", function ($scope) {

    $scope.selectItemsppmchart1dropdown = [
        { id: 0, name: "Cost Breakdown" },
        { id: 1, name: "Overall Efficiency" },
        { id: 2, name: "Efficiency By Specialty" },
        { id: 3, name: "Efficiency By MPC" },
        { id: 4, name: "Measure Compliance" },
        { id: 5, name: "Referral Patterns" },
        { id: 6, name: "None" }

    ];
    $scope.selectedOption = $scope.selectItemsppmchart1dropdown[1];

    $scope.selectItemsppmchart2dropdown = [
        { id: 0, name: "Cost Breakdown" },
        { id: 1, name: "Overall Efficiency" },
        { id: 2, name: "Efficiency By Specialty" },
        { id: 3, name: "Efficiency By MPC" },
        { id: 4, name: "Measure Compliance" },
        { id: 5, name: "Referral Patterns" },
        { id: 6, name: "None" }
    ];
    $scope.selectedOption2 = $scope.selectItemsppmchart2dropdown[0];

})
