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
    let minTemp = d3.min(data, function(d){ return parseInt(d.TMIN);});
    let maxTemp = d3.max(data, function(d){ return parseInt(d.TMAX);});
    let yScale = d3.scaleLinear()
                        .domain([minTemp, maxTemp])
                        .range([height-100, 0])
    ;

    
    chartGroup.selectAll("circle")
                .data(data)
                .enter()
                .filter(function(d) { return d.TMAX != "" }) 
                .append("circle")
                    .attr("cx", function(d){
                        return xScale( parseTime( d.DATE) );
                    })
                    .attr("cy", function(d){
                        return height-100;
                    })
                    .attr("r", 1)
                    .on("mouseover", function(d){
                        console.log(d);
                        d3.select(this).attr("r", 10);
                    })
                    .on("mouseout", function(d){
                        d3.select(this).attr("r", 1);
                    })
                    .transition()
                    .duration(2000)
                    .attr("cy", function(d){
                        return yScale( d.TMAX );
                    })

    ;

    
    let xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b'));
    chartGroup.append("g")
                .attr("transform", "translate(0,"+(height-100)+")")
                .call(xAxis);
    let yAxis = d3.axisLeft(yScale);

    chartGroup.append("g")
                .call(yAxis);
});
