import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class HeimdallChart extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
            var canvas = this.canvas;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 5, 5);
        return (
            <canvas ref={(canvas) => {this.canvasNode = canvas;}}></canvas>
    )}

}
