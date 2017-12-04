
function SetChart(chartnametopline, chartnamebottomline, ID, males, females, agerange1, agerange2, agerange3, agerange4, agerange5) {
    //This is the overall layout for the Provider Population Chart 
    //Set these Variables to change the charts
    //maleVsFemalePopData shows the number of Males(1000) and the number of females(9000). The piechart is create from this 
    var maleVsFemalePopData = [males, females];
    var maleVsFemalePopDataBreakdown = [agerange1, agerange2, agerange3, agerange4, agerange5];
    var fontsize = "16px";
    var strokeWidth = 2;
    //Variables END

    var WIDTH = 186, HEIGHT = 186;

    var svg = d3.select("" + ID + "").append("svg")
            .attr("viewBox", "0 0 " + WIDTH + " " + HEIGHT + "")

    //Left Panel Start
    var panelleft = svg.append("g")
          .attr("id", "#panel_left")

    panelleft.append("text")
      //.attr("class", "cls-13")
      .attr("class", "ln-darkGreyText")
      .attr("text-anchor", "middle")
      .attr("font-size", fontsize)
      .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2.2 + ")")
      .text(chartnametopline);

    panelleft.append("text")
      .attr("class", "ln-darkGreyText")
      .attr("text-anchor", "middle")
      .attr("font-size", fontsize)
      .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 1.8 + ")")
      .text(chartnamebottomline);

    //piechart Outer Start
    var r = WIDTH / 2;

    var color = d3.scale.ordinal()
            .range(["#ED509D", "#2AADE4"]);

    var group = panelleft.append("g")
           .attr("transform", "translate(" + r + "," + r + ")")

    var arc = d3.svg.arc()
            //.innerRadius(r/1.5)
            //.outerRadius(r);
            .innerRadius(r / 1.3)
            .outerRadius(r / 1.9);

    var pie = d3.layout.pie()
            .sort(null)
            .startAngle(1.1 * Math.PI)
            .endAngle(3.1 * Math.PI)
            .value(function (d) { return d; });

    var arcs = group.selectAll(".arc")
            .data(pie(maleVsFemalePopData))
            .enter()
            .append("g")
            .attr("class", "arc")

    arcs.append("path")
         //.attr("d", arc2)
        .attr("stroke", "white")
        .attr("stroke-width", strokeWidth)
        .attr("fill", function (d) { return color(d.data); })
        .transition().delay(function (d, i) { return i * 30; }).ease("sin").duration(600)
        .attrTween('d', function (d) {
            var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            }
        })
    //piechart outer End

    //piechart2 Inner Start
    //var r = 70;

    var color2 = d3.scale.ordinal()
            .range(["#00778b", "#00af66", "#f3de4c", "#f89b49", "#754c90"]);

    var group2 = panelleft.append("g")
           .attr("transform", "translate(" + r + "," + r + ")")

    var arc2 = d3.svg.arc()
            //.innerRadius(r /1.3)
            //.outerRadius(r / 1.9);
            .innerRadius(r / 1.5)
            .outerRadius(r);

    var pie2 = d3.layout.pie()
            .sort(null)
            .startAngle(1.1 * Math.PI)
            .endAngle(3.1 * Math.PI)
            .value(function (d) { return d.value; });

    var arcs2 = group2.selectAll(".arc")
            .data(pie(maleVsFemalePopDataBreakdown))
            .enter()
            .append("g")
            .attr("class", "arc")

    arcs2.append("path")
         //.attr("d", arc2)
        .attr("stroke", "white")
        .attr("stroke-width", strokeWidth)
        .attr("fill", function (d) { return color2(d.data); })
        .transition().delay(function (d, i) { return i * 10; }).ease("sin").duration(500)
        .attrTween('d', function(d) {
                var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
                return function(t) {
                     d.endAngle = i(t);
                    return arc2(d);
                }
    })

    //piechart2 inner End

    //Left Panel End
}