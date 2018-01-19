let width = 370;
let height = 700;
let dataArray = [];
let ranWidth = d3.randomUniform(15, width-15);
let ranHeight = d3.randomUniform(15, height-15);
let ranRadius = d3.randomUniform(5, 15);
for(let i = 0; i < 100; i++){
    dataArray.push( {x: ranWidth(), y: ranHeight(), r: ranRadius()} );
}
console.log(dataArray);

let svg = d3.select("body").append("svg");
svg.attr("width", width).attr("height", height);
let chartGroup = svg.append("g").attr("class", "chartGroup");
chartGroup.append("rect")
    .attr("x", 0)
    .attr("y", height/2)
    .attr("width", width)
    .attr("height", height/2)
    .attr("fill", "black")
;

chartGroup.selectAll("circle")
            .data(dataArray)
            .enter()
            .append("circle")
                .attr("cx", function(d){
                    return d.x;
                })
                .attr("cy", function(d){
                    return d.y;
                })
                .attr("r", function(d){
                    return d.r;
                })
                .attr("fill", function(d){
                    if(d.y > height/2){
                        return "white";
                    }else{
                        return "black";
                    }
                })
;

function update(){
    for(let i = 0; i < 100; i++){
        dataArray[i] = {x: ranWidth(), y: ranHeight(), r: ranRadius()};
    }
    let circles = chartGroup.selectAll("circle").data(dataArray)
    circles.transition()
                .duration(1500)
                .attr("cx", function(d){
                    return d.x;
                })
                .attr("cy", function(d){
                    return d.y;
                })
                .attr("r", function(d){
                    return d.r;
                })
                .attr("fill", function(d){
                    if(d.y > height/2){
                        return "white";
                    }else{
                        return "black";
                    }
                })
    ;

}
setInterval(update, 2000);

svg.on("click", function(){
    console.log("click");
    update();
});
