let data = [];
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
        {
            data = JSON.parse(xhr.responseText).data;
            console.log(data);

            d3.select("#chart")
              .selectAll("div")
              .data(data)
              .enter()
              .append("div")
              .style("height", function(d) { return d[1]+"px"})
              .style("width", "1px")
        }
}

xhr.send();