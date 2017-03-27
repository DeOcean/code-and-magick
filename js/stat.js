'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var COL_WIDTH = 40;
var COL_MAX_HEIGHT = 150;
var COL_SPACE = 50;

var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = 'black';
var YOU = 'Вы';

var drawCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура, вы победили!', CLOUD_X + 30, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 30, CLOUD_Y + 50);
};

var drawHist = function (ctx, names, times) {
  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i <= names.length; i++) {
    var colHeight = times[i] / maxTime * COL_MAX_HEIGHT;
    var colLeft = CLOUD_X + 30 + i * (COL_SPACE + COL_WIDTH);
    var colTop = CLOUD_Y + 85 + COL_MAX_HEIGHT - colHeight;

    ctx.fillStyle = names[i] === YOU ? 'rgba(255, 0, 0, 1)' : ('rgba(0, 0, 255, ' + Math.random() + ')');
    ctx.fillRect(colLeft, colTop, COL_WIDTH, colHeight);

    ctx.font = TEXT_FONT;
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(times[i]), colLeft, colTop - 10);
    ctx.fillText(names[i], colLeft, colTop + colHeight + 20);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  drawHist(ctx, names, times);
};
