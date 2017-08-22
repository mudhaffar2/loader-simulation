/* jshint browserify: true */


var simulateProgress = require('simulate-progress');
var progressEl;
var buttonEls = document.querySelectorAll("button");

function progressCallback(percent) {

  progressEl.style.width = percent + "%" ;

}

function finishCallback() {

  progressEl.classList.add('finished');


}

function startSimulation() {

  progressEl.classList.remove('finished');

  simulateProgress(progressCallback ,finishCallback);


}

buttonEls.forEach(function(button) {

  button.addEventListener('click',function() {

    progressEl = this.parentNode.childNodes[1].childNodes[1];

    startSimulation();

  });


});

