//// d3 is a framework, essentially to quickly select and create DOM elements

//let body = d3.select("body");
//body.append("h1").text("Hello");

//let container = body.append("div");
//container.style("width", "100px").style("height", "50px").style("background-color", "black");

//// also d3 is a strange strange thing (that in the end seems to make a lot of sense the way it is
//// it chains.chains.chains, it's wild!

//body.append("div").style("width", "100px").style("height", "50px").style("background-color", "red");

//// or even

//d3.select("body").append("div").style("width", "100px").style("height", "50px").style("background-color", "green").append("p").text("green box");

//// chains always (always?) return the last element or group of elements appended to it

//let blueBox = d3.select("body").append("div").style("width", "100px").style("height", "50px").style("background-color", "blue");

//// chaining be aware what you are dealing with at any given time

//d3.select("body")
    //.append("p").text("First paragraph")
    //.append("p").text("Second paragraph")
    //.append("p").text("Third paragraph")
    //.append("p").text("Fourth paragraph")
//;
//// -> looks right in the browser, is not well structured in the DOM and will certainly lead to errors

//body = d3.select("body");
//body.append("p").text("First paragraph");
//body.append("p").text("Second paragraph");
//body.append("p").text("Third paragraph");
//body.append("p").text("Fourth paragraph");
//// -> better

//// SVG world
//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");
//chartGroup.append("rect")
    //.attr("x", 10)
    //.attr("y", 10)
    //.attr("width", 30)
    //.attr("height", 100)
    //.attr("fill", "black")
//;
//chartGroup.append("rect")
    //.attr("x", 50)
    //.attr("y", 10)
    //.attr("width", 30)
    //.attr("height", 50)
    //.attr("fill", "black")
//;
//chartGroup.append("rect")
    //.attr("x", 90)
    //.attr("y", 10)
    //.attr("width", 30)
    //.attr("height", 80)
    //.attr("fill", "black")
//;


//// binding data

//let dataArray = [100, 50, 80];

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");
//chartGroup.selectAll("rect")
            //.data(dataArray)
            //.enter()
            //.append("rect")
                //.attr("x", 10)
                //.attr("y", 10)
                //.attr("width", 30)
                //.attr("height", 100)
                //.attr("fill", "black")
//;

//// -> all on one (inspector)

//// data point retrieval

//let dataArray = [100, 50, 80];

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");
//chartGroup.selectAll("rect")
            //.data(dataArray)
            //.enter()
            //.append("rect")
                //.attr("x", 10)
                //.attr("y", 10)
                //.attr("width", 30)
                //.attr("height", function(d){
                    //console.log(d);
                    //return d;
                //})
                //.attr("fill", "black")
//;

//// x value, and flip vertically

//let dataArray = [100, 50, 80];

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");
//chartGroup.selectAll("rect")
            //.data(dataArray)
            //.enter()
            //.append("rect")
                //.attr("x", function(d, i){
                    //console.log(d,i);
                    //return 10 + i * 40;
                //})
                //.attr("y", function(d, i){
                    //return 100 - d;
                //})
                //.attr("width", 30)
                //.attr("height", function(d){
                    //console.log(d);
                    //return d;
                //})
                //.attr("fill", "black")
//;


///// array of objects
//let dataArray = [{x:20, y:40, r:20}, {x:60, y:15, r:12}, {x:110, y:20, r:17}];

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g").attr("class", "chartGroup");

//chartGroup.selectAll("circle")
            //.data(dataArray)
            //.enter()
            //.append("circle")
                //.attr("cx", function(d){
                    //return d.x;
                //})
                //.attr("cy", function(d){
                    //return d.y;
                //})
                //.attr("r", function(d){
                    //return d.r;
                //})
//;

//// more data:

let width = 400;
let height = 400;
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
;


