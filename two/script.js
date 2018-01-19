// SVG world

// append and svg element (the ~canvas~ for our work)
// to the body

//d3.select("body").append("svg");

// this return? the svg element

//let svg = d3.select("body").append("svg");
// it's comming to use another wrapper for graphs
// svg has sub element, like shapes, text, or grouping structures
// a bit like layers in illustrator

//let chartGroup = svg.append("g");

// now we append shapes
// shapes require some basic attributes

//chartGroup.append("rect")
            //.attr("x", 10)
            //.attr("y", 10)
            //.attr("width", 30)
            //.attr("height", 100)
            //.attr("fill", "black")
//;

// tadaa! lets draw more shapes!

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

// looks like a bar graph
// but of course we don't normally want to 
// draw every bar by hand
// normally, we work with data
// let's start with fake data

//let dataArray = [100, 50, 80]; 
// data always comes in arrays...

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");

// now watch out, it gets really strange:

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

// we make an empty selection, selecting 
// an unknown number of elements that
// don't exist yet 😱 
// then we supply data, in array form, and d3 knows
// how many elements we are planing to create:
// there are 0 existing, and 3 needed, therefore
// d3 creates 3 elements - what kind of elements?
// 'append("rect")' -> now we have 3 rectangles 
// and to each apply the same style (see in inspector)
// the lines between 63 and 67 are excuted for each
// item in the selection (the 3 rectangles) and 
// we can proragammatically treat each of them different
                
//let dataArray = [100, 50, 80]; 
//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");

//chartGroup.selectAll("rect")
            //.data(dataArray)
            //.enter()
            //.append("rect")
                //.attr("x", function(d,i){
                    //return 10 + i * 40; //this second 2
                //})
                //.attr("y", function(d){
                    //return 100 - d; //and this last 3    
                //})
                //.attr("width", 30)
                //.attr("height", function(d){
                    //return d; //include this first 1
                //})
                //.attr("fill", "black")
//;

// for each element we go over, 
// we can retrive the value (d) of the correspondong data point
// as well as its index within the data set (i)


// data can be more or much more complex

//let dataArray = [{x:20, y:40, r:20}, {x:60, y:15, r:12}, {x:110, y:20, r:17}];

//let svg = d3.select("body").append("svg");
//let chartGroup = svg.append("g");

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

// we have access to all the data point brings with it
// and can use it to style our graph


// to end this section, we make a graph that uses more data
// no real data yet, but data we randomly generate:

// lets treat this like a canvas in p5js:
let width = 400;
let height = 400;

// empty data array:
let dataArray = [];

// d3 allows us to initiate generator functions
// that we can use later to generate random numbers
// lets make one for each of our parameters:
let ranWidth = d3.randomUniform(15, width-15);
let ranHeight = d3.randomUniform(15, height-15);
let ranRadius = d3.randomUniform(5, 15);

// now lets fill the data array:
for(let i = 0; i < 100; i++){
    dataArray.push( {x: ranWidth(), y: ranHeight(), r: ranRadius()} );
}
console.log(dataArray);

let svg = d3.select("body").append("svg");
// this time, like with a canvas, we give and explicit
// size to our svg element:
svg.attr("width", width).attr("height", height);
let chartGroup = svg.append("g");

// and now we use the exact same code that we used
// to draw three circles above:

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


