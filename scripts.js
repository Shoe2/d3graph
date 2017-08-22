let data = [];
let title = "";
let description = "";
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
        {
            data = JSON.parse(xhr.responseText).data;
            title = JSON.parse(xhr.responseText).name;
            description = JSON.parse(xhr.responseText).description;
            console.log(data.length);

            //Title and footer
            d3.select("#title")
            .append("text")
            .text(title);

            d3.select("#description")
            .append("text")
            .text(description);

            //Save some numbers we will re use
            let numberOfItems = data.length;
            let barWidth = Math.ceil(900 / numberOfItems);
            let dateMin = new Date(data[0][0]);
            let dateMax = new Date(data[numberOfItems-1][0]);

            //Set up the Axis
            const xUnits = d3.scaleTime()
            .domain([dateMin, datemax])
            .range([0, data.length]);

            const yUnits = d3.scaleLinear()
            .domain([0, data.length])
            .range([data[0][1], data[numberOfItems-1][1]]);
            
            //set up the chart itsself
            let chart = d3.select("#chart");

            chart.style("width",1000)
            .style("height", 2000000);

            //draw the bars
            chart.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y", function(d) { return d[1]})
            .attr("x", function(d) {return (d[0]) })
            .attr("width", function () { return barWidth})
            .attr("height", function (d) {return d[1]});

        }
}

xhr.send();

