
var simulateProgress = require('simulate-progress');
var loaderEl = document.querySelector('.loader');
var progressEl = document.querySelector('.progress');
function progressCallback(percent) {

  progressEl.style.width = percent;

}

function finishCallback() {

  loaderEl.classList.addClass('finished');


}

function startSimulation() {

  loaderEl.classList.removeClass('finished');

  simulateProgress(progressCallback ,finishCallback);


}

startSimulation()



