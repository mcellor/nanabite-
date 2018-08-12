/********************************************************************
  *                                                                *
  * Apollo&丸子君原创作品，代码仅供技术交流及学习使用                     *
  * 切勿用于商业环境中，如发生任何法律相关问题本人概不负责                  *
  *                                                                *
  * 此项目也是我的一个小程序组件化学习项目                               *
  * 如果你有相关问题想一起探讨的，欢迎加我微信：totorohost 【备注：小独】    *
  *                                                                *
  * 另外如果你有好的项目或者idea，需要找人合作，欢迎call me                *
  *                                                                *
**********************************************************************/

"use strict";

function drawText(t, x, y, w) {
    var c = document.getElementById("shareCanvas");
    var ctx = c.getContext("2d");
    var chr = t.split("");
    var temp = "";
    var row = [];

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";

    for (var a = 0; a < chr.length; a++) {
        if (ctx.measureText(temp).width < w) {
            ;
        } else {
            row.push(temp);
            temp = "";
        }
        temp += chr[a];
    }

    row.push(temp);

    for (var b = 0; b < row.length; b++) {
        ctx.fillText(row[b], x, y + (b + 1) * 20);
    }
}

module.exports = {
    drawText: drawText
};