let width = window.innerWidth;
let height = 400;

let svg = d3.select("body").append("svg").attr("width", width).attr("height", 400);

let background = svg.append("rect")
                        .attr("x", 0)
                        .attr("y", 0)
                        .attr("width", width)
                        .attr("height", height)
                        .attr("fill", "grey")
;

let chartGroup = svg.append("g").attr("transform", "translate(50, 50)");
let background2 = chartGroup.append("rect")
                        .attr("x", 0)
                        .attr("y", 0)
                        .attr("width", width-100)
                        .attr("height", height-100)
                        .attr("fill", "white")
;



var parseTime = d3.timeParse("%Y-%m-%d");

d3.csv("NY2017.csv", function(data){
    console.log(data);    
    let minDate = d3.min(data, function(d){ return parseTime(d.DATE); });
    let maxDate = d3.max(data, function(d){ return parseTime(d.DATE); });

    console.log(minDate, maxDate);
    let xScale = d3.scaleTime()
                    .domain([minDate, maxDate])
                    .range([0, width-100])
    ;
    
    let xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b'));
    chartGroup.append("g")
                .attr("transform", "translate(0,"+(height-100)+")")
                .call(xAxis);
});
