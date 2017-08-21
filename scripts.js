var data = {};
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
        {
            data = xhr.responseText.data;
            console.log(data);

            d3.select("#chart")
              .selectAll("div")
              .data(data)
              .enter()
              .append("div")
              .style("height", function(d) { return})
        }
}

xhr.send();