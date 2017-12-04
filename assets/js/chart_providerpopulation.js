
function SetChart(string, string) {
    //This is the overall layout for the Provider Population Chart 
    //Set these Variables to change the charts
    //maleVsFemalePopData shows the number of Males(1000) and the number of females(9000). The piechart is create from this 
    var maleVsFemalePopData = [1000, 9000];

    //Shows the number of Males(10%) and the number of females(90%). Currently this is manually entered and needs to be calculated. 
    var maleVs_FemalePopPercents = ["10%", "90%"];

    //Provider population Percentages is a breakdown of each percentage in this order [0-1, 2-18, 19-49, 50-64, 65+]
    var provPopPercents = ["30%", "20%", "10%", "10%", "20%"];

    //Overall population Percentages is a breakdown of each percentage in this order [0-1, 2-18, 19-49, 50-64, 65+]
    var overallPopPercents = ["50%", "40%", "20%", "10%", "20%"];

    //This is self explanatory. It is the text on the right side. I added this variable to make it easy to change rather then dig through the code
    var rightsidetitles = ["Provider Population", "Overall Population"];

    //Variables END

    var WIDTH = 600, HEIGHT = 220;
    var svg = d3.select("#prov_population_svg").append("svg")
                        .attr("width", WIDTH)
                        .attr("height", HEIGHT);

    //Left Panel Start
    var panelleft = svg.append("g")
          .attr("id", "#panel_left")

    //Female Set Start
    var femaleGroupPercent = panelleft.append("g")
            .attr("id", "#femalegroup")

    femaleGroupPercent.append("text")
            .attr("class", "cls-19")
            .attr("transform", "translate(200.12 168.12) ")
            .text(maleVs_FemalePopPercents[0]);

    femaleGroupPercent.append("path")
            .attr("d", "M183.7,166.6s-5.2-1.5-11.1,8.2c-5.2,8.5-16.3,12.6-16.3,12.6l25.4-9.3,15.8-3.2Z")
            .attr("transform", "translate(-7.27)")
            .attr("class", "cls-17")

    femaleGroupPercent.append("rect")
            .attr("x", "185.77")
            .attr("y", "172.73")
            .attr("width", "93")
            .attr("height", "2.54")
            .attr("class", "cls-17")
    //Female Set End

    //Male Set Start
    var maleGroupPercent = panelleft.append("g")
            .attr("id", "#malegroup")

    maleGroupPercent.append("text")
            .attr("class", "cls-19")
            .attr("transform", "translate(198.47 72.55)")
            .text(maleVs_FemalePopPercents[1]);

    maleGroupPercent.append("path")
            .attr("d", "M183.7,47.2s-5.2,1.5-11.1-8c-5.2-8.4-16.3-12.4-16.3-12.4l25.4,9.1L197.5,39Z")
            .attr("transform", "translate(-7.27)")
            .attr("class", "cls-16")

    maleGroupPercent.append("rect")
            .attr("x", "185.77")
            .attr("y", "38.13")
            .attr("width", "93")
            .attr("height", "2.54")
            .attr("class", "cls-16")
    //Male Set End

    //Checkboxes in center of piechart

    //Male Checks Start
    var maleGroupChecks = panelleft.append("g")
            .attr("id", "#malegroupchecks")

    maleGroupChecks.append("path")
            .attr("id", "iconmale")
            .attr("class", "cls-20")
            .attr("d", "M77.7,89.8h0c0-1.3,0-2.5.1-3.7a4.87,4.87,0,0,0-.1-1.2,5,5,0,0,0-.9-2.1,1.46,1.46,0,0,0-.9-0.6,3.55,3.55,0,0,1-.9-0.4c-1.5-.6-3-1.2-4.6-1.8a2.84,2.84,0,0,1-1.1-.8,2.7,2.7,0,0,0-.8-0.7l-0.1-.1a1.9,1.9,0,0,1,.1-1.3,6.36,6.36,0,0,0,.6-1.8V75.2c0.2,0.2.3,0.2,0.5-.1a1.47,1.47,0,0,0,.2-0.4,3.08,3.08,0,0,0,.3-1.3c0.1-.3.2-0.7,0.3-1a0.44,0.44,0,0,0-.5-0.6h0V71.7a5,5,0,0,0-.2-3.8,4.37,4.37,0,0,0-2.8-2.5,12.59,12.59,0,0,0-2.7-.4H64.1V64.9c0.4,0,.8-0.1,1.2-0.1a4.59,4.59,0,0,0-2.6.3l0.2-.2h0a4.35,4.35,0,0,1-.7.4,0.92,0.92,0,0,0-.4.6l-0.1.1a2.28,2.28,0,0,0-1.2.6l-0.1.1h0c0.1,0,.2-0.1.3-0.1a1.38,1.38,0,0,0-.5,1.2l0.1-.1a6.69,6.69,0,0,0,.2,4.2,0.4,0.4,0,0,0-.5.4,1.64,1.64,0,0,0,.1,1,3.58,3.58,0,0,1,.4,1.1c0.1,0.2.1,0.4,0.2,0.6a0.53,0.53,0,0,0,.2.3,0.3,0.3,0,0,0,.4.1v0.1a6.36,6.36,0,0,0,.6,1.8c0,0.1.1,0.2,0.1,0.3v1.2a0.35,0.35,0,0,1-.1.2,2.18,2.18,0,0,0-.9.7,2.09,2.09,0,0,1-.6.4c-1.2.5-2.5,1-3.8,1.5a10.2,10.2,0,0,0-2.2.9,3,3,0,0,0-1.5,1.8,5.82,5.82,0,0,0-.3,1.9c0,1.1,0,2.3-.1,3.4v0.3C60.9,89.8,69.3,89.8,77.7,89.8Z")
            .attr("transform", "translate(-7.27)")

    maleGroupChecks.append("path")
            .attr("id", "malechecked")
            .attr("class", "cls-16")
            .attr("d", "M94.3,79.7V90.3h-11v-11H93.9c0.4-.3.7-0.5,1-0.7L95.1,79A2.7,2.7,0,0,1,94.3,79.7Zm-5.8,7.9-0.3.2c-0.3.2-.5,0.4-0.7,0.5a2.3,2.3,0,0,0-.3-0.9L87,87.1a18.4,18.4,0,0,0-.9-1.9,1.16,1.16,0,0,0-.8-0.6,1.53,1.53,0,0,1,1.1-.5c0.4,0,.9.6,1.3,1.7L88,86.4a23.14,23.14,0,0,1,5.1-6.2H84.2v9.5h9.5V80.4a21,21,0,0,0-3.1,3.5A12.8,12.8,0,0,0,88.5,87.6Z")
            .attr("transform", "translate(-7.27)")

    maleGroupChecks.append("path")
            .attr("id", "maleunchecked")
            .attr("class", "cls-16")
            .attr("d", "M94.3,79.3v11h-11v-11h11Zm-10.1.9v9.5h9.5V80.2H84.2Z")
            .attr("transform", "translate(-7.27)")

    maleGroupChecks.append("text")
            .attr("class", "cls-21")
            .attr("transform", "translate(90 90.05)")
            .text("Male")
    //Male Checks End

    //Female Checks Start
    var femaleGroupChecks = panelleft.append("g")
            .attr("id", "#femalegroupchecks")

    femaleGroupChecks.append("path")
            .attr("id", "iconfemale")
            .attr("class", "cls-22")
            .attr("d", "M57.9,116.1l0.9,0.9a0.1,0.1,0,0,0,.1.1,1.09,1.09,0,0,1-.4,1.2,1.8,1.8,0,0,1-.9.4,0.65,0.65,0,0,0-.6.9,3.55,3.55,0,0,0,.2,1,0.37,0.37,0,0,1-.1.3c-0.3.2-.7,0.5-1,0.7-0.6.3-1.2,0.5-1.7,0.7s-1,.5-1.5.7a1.6,1.6,0,0,0-.7.9c-0.1.4-.3,0.9-0.4,1.3-0.2,1-.3,2-0.4,2.9a2.77,2.77,0,0,1-.1.9H76.6a4.87,4.87,0,0,0-.1-1.2c-0.1-1.1-.2-2.1-0.4-3.2a4,4,0,0,0-2.6-3.1c-0.3-.1-0.6-0.2-1-0.3a16.27,16.27,0,0,1-3.7-1.3l-0.6-.3c0.5,0.1,1.1.3,1.6,0.4h0l-0.9-.3h0c0.4,0.1.8,0.1,1.2,0.2h0c-0.1,0-.3-0.1-0.4-0.1h0c0.3,0,.6.1,0.9,0.1a0.9,0.9,0,0,0-.5-0.1,2.24,2.24,0,0,1-1.5-.8,0.37,0.37,0,0,1-.1-0.3,16,16,0,0,1,1-2.3,3.81,3.81,0,0,0,.5-1.5,3.75,3.75,0,0,1,.1-1c0.1,0.1.3,0.1,0.4,0.2h0l-0.2-.2h0a1.69,1.69,0,0,0,.5.2h0c-0.1,0-.1-0.1-0.2-0.1h0.2a3,3,0,0,1-1.2-1.3c-0.3-.8-0.6-1.5-0.9-2.3s-0.6-1.9-.9-2.9a6.63,6.63,0,0,0-.9-1.9,3.32,3.32,0,0,0-2.7-1.4,0.37,0.37,0,0,1-.3-0.1,1.47,1.47,0,0,0-1.3-.1h0.3a0.37,0.37,0,0,1,.3.1H62.9a4,4,0,0,0-2.8,1,17.41,17.41,0,0,0-1.2,1.4c-0.2.3-.3,0.6-0.5,0.9a10.46,10.46,0,0,0-1.9,5.6,4.2,4.2,0,0,0,.6,2.1,1.47,1.47,0,0,1,.2.4c0.2,0.4.4,0.7,0.6,1.1h0c0.2-.1.1-0.3,0-0.5h0Z")
            .attr("transform", "translate(-7.27)")

    femaleGroupChecks.append("path")
            .attr("id", "femalechecked")
            .attr("class", "cls-17")
            .attr("d", "M94.3,118.7v10.6h-11v-11H93.9c0.4-.3.7-0.5,1-0.7l0.2,0.4A2.7,2.7,0,0,1,94.3,118.7Zm-5.8,7.9-0.3.2c-0.3.2-.5,0.4-0.7,0.5a2.3,2.3,0,0,0-.3-0.9l-0.2-.3a18.4,18.4,0,0,0-.9-1.9,1.16,1.16,0,0,0-.8-0.6,1.53,1.53,0,0,1,1.1-.5c0.4,0,.9.6,1.3,1.7l0.3,0.6a23.14,23.14,0,0,1,5.1-6.2H84.2v9.5h9.5v-9.3a21,21,0,0,0-3.1,3.5A12.8,12.8,0,0,0,88.5,126.6Z")
            .attr("transform", "translate(-7.27)")

    femaleGroupChecks.append("path")
            .attr("id", "femaleunchecked")
            .attr("class", "cls-17")
            .attr("d", "M94.3,118.3v11h-11v-11h11Zm-10.1.9v9.5h9.5v-9.5H84.2Z")
            .attr("transform", "translate(-7.27)")

    femaleGroupChecks.append("text")
            .attr("class", "cls-23")
            .attr("transform", "translate(90 129.05)")
            .text("Female")
    //Female Checks End

    //piechart Start
    var r = 90;

    var color = d3.scale.ordinal()
            .range(["#ED509D", "#2AADE4"]);

    var group = panelleft.append("g")
           .attr("transform", "translate(90,106)")

    var arc = d3.svg.arc()
            .innerRadius(70)
            .outerRadius(r);

    var pie = d3.layout.pie()
            .value(function (d) { return d; });

    var arcs = group.selectAll(".arc")
            .data(pie(maleVsFemalePopData))
            .enter()
            .append("g")
            .attr("class", "arc")

    arcs.append("path")
            .attr("d", arc)
        .attr("stroke", "white")
        .attr("fill", function (d) { return color(d.data); });
    //piechart End

    //Left Panel End

    //Panel Center Start                   
    var panelcenter = svg.append("g")
          .attr("id", "#panel_center")
    //Bar group_barset_0-1 START
    var container_barset_0_1 = panelcenter.append("svg")
          .attr("id", "#container_bar_0_1")
          .attr("x", 299.73)
          .attr("y", 23.6)
          .attr("width", 80)
          .attr("height", 21.26)

    container_barset_0_1.append("rect")
         .attr("id", "barset_0_1")
         .attr("class", "cls-11")
         .attr("width", provPopPercents[0])
         .attr("height", "100%")

    panelcenter.append("text")
          .attr("class", "cls-13")
          .attr("transform", "translate(382.48 34.02)")
          .text(provPopPercents[0]);

    panelcenter.append("text")
          .attr("class", "cls-12")
          .attr("transform", "translate(384.9 44.86)")
          .text("0-1");
    //Bar 0-1 END

    //Bar group_barset_2_18 START
    var container_barset_2_18 = panelcenter.append("svg")
          .attr("id", "#container_bar_2_18")
          .attr("x", 299.73)
          .attr("y", 60.79)
          .attr("width", 80)
          .attr("height", 21.26)

    container_barset_2_18.append("rect")
         .attr("id", "barset_2_18")
         .attr("class", "cls-10")
         .attr("width", provPopPercents[1])
         .attr("height", "100%")

    panelcenter.append("text")
          .attr("class", "cls-13")
          .attr("transform", "translate(383.55 71.42)")
          .text(provPopPercents[1]);

    panelcenter.append("text")
          .attr("class", "cls-12")
          .attr("transform", "translate(384.53 82.26)")
          .text("2-18");
    //Bar 2-18 END

    //Bar group_barset_19_49 START
    var container_barset_19_49 = panelcenter.append("svg")
          .attr("id", "#container_bar_19_49")
          .attr("x", 299.73)
          .attr("y", 97.34)
          .attr("width", 80)
          .attr("height", 21.26)

    container_barset_19_49.append("rect")
         .attr("id", "barset_19_49")
         .attr("class", "cls-9")
         .attr("width", provPopPercents[2])
         .attr("height", "100%")

    panelcenter.append("text")
          .attr("class", "cls-13")
          .attr("transform", "translate(382.48 107.97)")
          .text(provPopPercents[2]);

    panelcenter.append("text")
          .attr("class", "cls-12")
          .attr("transform", "translate(383.65 118.79)")
          .text("19-49");
    //Bar 19_49 END

    //Bar group_barset_50_64 START
    var container_barset_50_64 = panelcenter.append("svg")
          .attr("id", "#container_bar_50_64")
          .attr("x", 299.73)
          .attr("y", 133.82)
          .attr("width", 80)
          .attr("height", 21.26)

    container_barset_50_64.append("rect")
         .attr("id", "barset_50_64")
         .attr("class", "cls-8")
         .attr("width", provPopPercents[3])
         .attr("height", "100%")

    panelcenter.append("text")
          .attr("class", "cls-13")
          .attr("transform", "translate(382.09 144.81)")
          .text(provPopPercents[3]);

    panelcenter.append("text")
          .attr("class", "cls-12")
          .attr("transform", "translate(383.78 155.65)")
          .text("50-64");
    //Bar 50_64 END

    //Bar 65+ START
    var container_barset_65 = panelcenter.append("svg")
          .attr("id", "#container_barset_65_plus")
          .attr("x", 299.73)
          .attr("y", 170.77)
          .attr("width", 80)
          .attr("height", 21.26)

    container_barset_65.append("rect")
         .attr("id", "barset_65_plus")
         .attr("class", "cls-7")
         .attr("width", provPopPercents[4])
         .attr("height", "100%")

    panelcenter.append("text")
          .attr("class", "cls-13")
          .attr("transform", "translate(383.07 181.69)")
          .text(provPopPercents[4]);

    panelcenter.append("text")
          .attr("class", "cls-12")
          .attr("transform", "translate(384.73 192.52)")
          .text("65+");
    //Bar 65+ END

    panelcenter.append("path")
            .attr("d", "M306.8,16.9s0.1,11.3.3,28.2c0,8.5.1,18.4,0.2,29s0,21.9.1,33.2,0,22.6-.1,33.2-0.1,20.5-.2,29c-0.2,16.9-.3,28.2-0.3,28.2s-0.1-11.3-.3-28.2c0-8.5-.1-18.4-0.2-29s0-21.9-.1-33.2,0-22.6.1-33.2,0.1-20.5.2-29C306.7,28.2,306.8,16.9,306.8,16.9Z")
            .attr("id", "VerticalLine")
            .attr("class", "cls-14")
            .attr("transform", "translate(-7.27)")
    //Panel Center End

    //Panel Right Start
    var panelright = svg.append("g")
          .attr("id", "#panel_right")

    //Grey background
    panelright.append("rect")
            .attr("class", "cls-12")
            .attr("x", "433.33")
            .attr("width", "167.2")
            .attr("height", "100%")


    //overall_population_rightside bar chart START

    var chart_overall_population = panelright.append("g")
          .attr("id", "#chart_overall_population")
            .attr("transform", "translate(0 0)")

    chart_overall_population.append("line")
        .attr("id", "#overall_population_line")
        .attr("class", "cls-5")
        .attr("x1", 435)
        .attr("y1", 182)
        .attr("x2", 598)
        .attr("y2", 182)

    chart_overall_population.append("text")
        .attr("class", "cls-2")
        .attr("transform", "translate(476.38 194.13)")
        .text(rightsidetitles[1])

    chart_overall_population.append("circle")
        .attr("id", "bullet_unchecked")
        .attr("class", "cls-3")
        .attr("cx", 468.43)
        .attr("cy", 190)
        .attr("r", 4.4)

    chart_overall_population.append("circle")
        .attr("id", "bullet_checked")
        .attr("class", "cls-4")
        .attr("cx", 468.43)
        .attr("cy", 190)
        .attr("r", 3.5)

    var overallPop_yPos = 110;

    var rootbars = chart_overall_population.append("g")
        .attr("id", "#rootbars")

    //Age 0 - 1 Start
    var root_0_1 = rootbars.append("g")
        .attr("id", "#root_0_1")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_0_1 = root_0_1.append("svg")
        .attr("x", "440")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_0_1.append("rect")
         .attr("id", "#0_1_fill")
         .attr("class", "cls-11")
         .attr("height", overallPopPercents[0])
         .attr("width", "100%")
    //Age 0 - 1 End

    //Age 2 - 18 Start
    var root_2_18 = rootbars.append("g")
        .attr("id", "#root_2_18")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_2_18 = root_2_18.append("svg")
        .attr("x", "410")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_2_18.append("rect")
         .attr("id", "#2_18_fill")
         .attr("class", "cls-10")
         .attr("height", overallPopPercents[1])
         .attr("width", "100%")
    //Age 2 - 18 End

    //Age 19 - 49 Start
    var root_19_49 = rootbars.append("g")
        .attr("id", "#root_19_49")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_19_49 = root_19_49.append("svg")
        .attr("x", "380")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_19_49.append("rect")
         .attr("id", "#19_49_fill")
         .attr("class", "cls-9")
         .attr("height", overallPopPercents[2])
         .attr("width", "100%")
    //Age 19 - 49 End

    //Age 50 - 64 Start
    var root_50_64 = rootbars.append("g")
        .attr("id", "#root_50_64")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_50_64 = root_50_64.append("svg")
        .attr("x", "350")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_50_64.append("rect")
         .attr("id", "#50_64_fill")
         .attr("class", "cls-8")
         .attr("height", overallPopPercents[3])
         .attr("width", "100%")
    //Age 50 - 64 End

    //Age 65 - plus Start
    var root_65_plus = rootbars.append("g")
        .attr("id", "#root_65_plus")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_65_plus = root_65_plus.append("svg")
        .attr("x", "320")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_65_plus.append("rect")
         .attr("id", "#65_plus_fill")
         .attr("class", "cls-7")
         .attr("height", overallPopPercents[4])
         .attr("width", "100%")
    //Age 65 - plus End

    //overall_population_rightside bar chart END

    //provider_population_rightside bar chart START

    var chart_provider_population = panelright.append("g")
          .attr("id", "#chart_provider_population")
            .attr("transform", "translate(0 -90)")

    chart_provider_population.append("line")
        .attr("id", "#provider_population_line")
        .attr("class", "cls-5")
        .attr("x1", 435)
        .attr("y1", 182)
        .attr("x2", 598)
        .attr("y2", 182)

    chart_provider_population.append("text")
        .attr("class", "cls-2")
        .attr("transform", "translate(476.38 194.13)")
        .text(rightsidetitles[0])

    chart_provider_population.append("circle")
        .attr("id", "bullet_unchecked")
        .attr("class", "cls-3")
        .attr("cx", 468.43)
        .attr("cy", 190)
        .attr("r", 4.4)

    chart_provider_population.append("circle")
        .attr("id", "bullet_checked")
        .attr("class", "cls-4")
        .attr("cx", 468.43)
        .attr("cy", 190)
        .attr("r", 3.5)

    var provPop_yPos = 110;

    var rootbars = chart_provider_population.append("g")
        .attr("id", "#rootbars")

    //Age 0 - 1 Start
    var root_0_1 = rootbars.append("g")
        .attr("id", "#root_0_1")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_0_1 = root_0_1.append("svg")
        .attr("x", "440")
        .attr("y", overallPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_0_1.append("rect")
         .attr("id", "#0_1_fill")
         .attr("class", "cls-11")
         .attr("height", provPopPercents[0])
         .attr("width", "100%")
    //Age 0 - 1 End

    //Age 2 - 18 Start
    var root_2_18 = rootbars.append("g")
        .attr("id", "#root_2_18")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_2_18 = root_2_18.append("svg")
        .attr("x", "410")
        .attr("y", provPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_2_18.append("rect")
         .attr("id", "#2_18_fill")
         .attr("class", "cls-10")
         .attr("height", provPopPercents[1])
         .attr("width", "100%")
    //Age 2 - 18 End

    //Age 19 - 49 Start
    var root_19_49 = rootbars.append("g")
        .attr("id", "#root_19_49")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_19_49 = root_19_49.append("svg")
        .attr("x", "380")
        .attr("y", provPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_19_49.append("rect")
         .attr("id", "#19_49_fill")
         .attr("class", "cls-9")
         .attr("height", provPopPercents[2])
         .attr("width", "100%")
    //Age 19 - 49 End

    //Age 50 - 64 Start
    var root_50_64 = rootbars.append("g")
        .attr("id", "#root_50_64")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_50_64 = root_50_64.append("svg")
        .attr("x", "350")
        .attr("y", provPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_50_64.append("rect")
         .attr("id", "#50_64_fill")
         .attr("class", "cls-8")
         .attr("height", provPopPercents[3])
         .attr("width", "100%")
    //Age 50 - 64 End

    //Age 65 - plus Start
    var root_65_plus = rootbars.append("g")
        .attr("id", "#root_65_plus")
        .attr("transform", "translate(910 292) rotate(180)")

    var svg_65_plus = root_65_plus.append("svg")
        .attr("x", "320")
        .attr("y", provPop_yPos)
        .attr("height", "71")
        .attr("width", "27.6")

    svg_65_plus.append("rect")
         .attr("id", "#65_plus_fill")
         .attr("class", "cls-7")
         .attr("height", provPopPercents[4])
         .attr("width", "100%")
    //Age 65 - plus End

    //provider_population_rightside bar chart END

    //Panel Right END

}