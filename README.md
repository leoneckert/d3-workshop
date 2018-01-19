# d3-workshop

These are notes for a workshop on d3.js. The workshop is meant for people unfamiliar with the framework, however it sgoes pretty fast. 

- What is d3?
- Select and Create HTML elements
- Chaining
- SVG
- Setting up a d3 environment
- Coding exercise 1 - basics and data binding
- Coding exercise 2 - scales, axis and real data
- Coding exercise 3 - transitions

## What is d3?

d3.js is a JavaScript library. Like other JavaScript libraries (e.g. p5.js that students I work with might be familiar with) it makes specific things easier. D3 makes a lot of things easier; on a very basic level it is very good in selecting and creating and changing DOM elements/HTML elements on your page. More specifically it is designed to make visualizing data using SVGs in your browser. SVG is a specific kind of HTML element, it's vector graph elements to draw visuals.

You want to use d3 because it uses only HTML elements which makes it super fast and reliable. Above that scalable vector graphs in you browser just always look nice. 

screenshot of inspector of moving svg

The web is full of d3 examples, many of which are by d3 creator Mike Bostock on his web platform that is designed to share d3 examples: [https://bl.ocks.org](https://bl.ocks.org)

(The documentation on github)[https://github.com/d3/d3/wiki] ( (actual functions etc are here)[https://github.com/d3/d3/blob/master/API.md] ) is also great (and extensive) explaining the latest v4 of d3 as well as older versions. V4 differs from older version and I recommend using it and not going back.
