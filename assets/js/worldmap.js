function loadmap() {
    d3.json('assets/js/points.js', function (error, incidents) {

        var geoData = incidents;
        var cscale = d3.scale.linear().domain([1, 3]).range(["#ff0000", "#ff6a00", "#ffd800", "#b6ff00", "#00ffff", "#0094ff"]); //"#00FF00","#FFA500"
        var mymap = L.map('mapid').setView([28.4874, -81.44015], 14);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);


        L.marker([28.48769, -81.44007]).addTo(mymap)
            .bindPopup("<b> 4901 Vineland Rd Suite #450</b><br>Orlando, FL 32811 <br>(407) 587-0425").openPopup();

        L.circle([51.508, -0.11], 500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(mymap).bindPopup("I am a circle.");

        L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(mymap).bindPopup("I am a polygon.");


        //var popup = L.popup();

        //function onMapClick(e) {
            //popup
              //  .setLatLng(e.latlng)
                //.setContent("You clicked the map at " + e.latlng.toString())
                //.openOn(mymap);
        //}

        //mymap.on('click', onMapClick);

        var svg = d3.select(mymap.getPanes().overlayPane).append("svg");
        var g = svg.append("g").attr("class", "leaflet-zoom-hide");

        // Use Leaflet to implement a D3 geometric transformation.
        function projectPoint(x, y) {
            var point = mymap.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        }

        var transform = d3.geo.transform({
            point: projectPoint
        });
        var path = d3.geo.path().projection(transform);
        mymap.on('moveend', mapmove);


        //redrawSubset(geoData.features)

        function redrawSubset(subset) {
            path.pointRadius(3); // * scale);

            var bounds = path.bounds({
                type: "FeatureCollection",
                features: subset
            });
            var topLeft = bounds[0];
            var bottomRight = bounds[1];


            svg.attr("width", bottomRight[0] - topLeft[0])
                .attr("height", bottomRight[1] - topLeft[1])
                .style("left", topLeft[0] + "px")
                .style("top", topLeft[1] + "px");


            g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

            var start = new Date();


            var points = g.selectAll("path")
                .data(subset, function (d) {
                    return d.geometry.coordinates;
                });
            points.enter().append("path");

            points.attr("d", path).attr("class", "points");

            points.style("fill-opacity", function (d) {
                if (d.group) {
                    return (d.group * 0.1) + 0.2;
                }
            });

        }

        function mapmove(e) {
            //remove all points
            //d3.selectAll(".points").remove();
            //redrawSubset(geoData.features);
        }


    });
};