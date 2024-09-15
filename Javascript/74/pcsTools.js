window.pcsTools = (function () {
  'use strict';

  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    return getComputedStyle(element)[property];
  }

  function on(element, event, callback) {
    element.addEventListener(event, callback);
  }
  function click(element, callback) {
    element.addEventListener('click', callback);
  }
  function hide(element) {
    element.style.display = 'none';
  }
  function show(element) {
    element.style.display = 'inline-block';
  }
  function changeColor(element, time, change) {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    let i = 0;
    const interval = setInterval(function colorCycle() {
      element.style.backgroundColor = colorArray[i];
      i = (i + 1) % colorArray.length; // I found how to do this on chat gpt because I wasn't sure how to get it to wrap around to the first item in the array. 
    }, change);
    setTimeout(function () {
      clearInterval(interval);
    },
      time);
  }

  return {
    get,
    setCss,
    getCss,
    on,
    click,
    hide,
    show,
    changeColor
  };
}());
