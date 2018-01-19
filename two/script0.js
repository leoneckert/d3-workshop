// d3 is a framework, essentially to quickly 
// select and create DOM elements

let body = d3.select("body"); 
//console.log(body);
body.append("h1").text("Today is Friday");

// these chains always return a selection
// on line 4, the (very small) chain return the body selection
// when we append elments to a selection (like on line 6)
// whatever we append becomes the new selection

//body.append("div");
// that means this should return the div, not the body

let thediv = body.append("div");

// we can test by appending something to thediv

thediv.append("p").text("is it in thediv? yes");

// d3 also styles elements, lets make a div with a color

let container = body.append("div");

container.style("width", "100px").style("height", "50px").style("background-color", "black");

// mentioned d3 likes to chain a lot
// and this is not even a lot yet.. at all
// alternatives:

body.append("div").style("width", "100px").style("height", "50px").style("background-color", "red");

// or

d3.select("body").append("div").style("width", "100px").style("height", "50px").style("background-color", "green").append("p").text("green box");
//
// of course we can select whichever elements we want

//d3.selectAll("div").style("background-color", "blue");

// or select from within a selection (with the same effect)

body.selectAll("div").style("background-color", "blue");

// d3 chains (as good as) always return a selection. that can 
// be one or more elements

let redBox = d3.select("body").append("div").style("width", "100px").style("height", "50px").style("background-color", "red");


// this can be sometimes confusing

d3.select("body")
    .append("p").text("first paragraph")
    .append("p").text("second paragraph")
    .append("p").text("third paragraph")
    .append("p").text("fourth paragraph")
;

// ... looks right in the browser,but is nested in the inspector
// > that can lead to serious errors
// a better (but still ugly) solution would be:

body = d3.select("body");
body.append("p").text("first paragraph")
body.append("p").text("second paragraph")
body.append("p").text("third paragraph")
body.append("p").text("fourth paragraph")
;


// let's start using svgs now!


























