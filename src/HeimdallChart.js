import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'canvasjs';
import {subscribeToData,updateChart} from './Api'
import {ControlBar} from './ControlBar';

export class HeimdallChart extends React.Component {
  constructor(props) {
    super(props);
    this.smallClicked = this.smallClicked.bind(this);
    this.mediumClicked = this.mediumClicked.bind(this);
    this.largeClicked = this.largeClicked.bind(this);
    var x = true;
    var getData = subscribeToData(props._id, (err, res) => 
    {
      var dataPoints = res.options.data[0].dataPoints;
      if(this.state.init){
        var chart = new Chart(props._id, props.chart);

        var init = false;
        chart.render();

        this.setState({chart,init,props});
      }else if(this.state != null && this.state.chart != null){
        this.state.chart.options.data[0].dataPoints = dataPoints;
        this.state.chart.render();
      }
    });
    this.state =  
    {
      _id: props._id,
      options: props.options,
      chart: props.chart,
      init: true,
      class: props.class,
      height: props.height,
      width: props.width
    }
  }
  getData(){

  }
  chartCb(){
    console.log('called back');
  }
  smallClicked(){
    var newClass = 'col col-lg-4 col-md-4 card';
    this.setState({class:newClass,height:200});
    var chartData = {};
    chartData.options = this.state.chart.options;
    chartData.size = 'small';
    chartData.class = 'col col-lg-4 col-md-4 card';
    chartData._id = this.state._id;
    chartData.is_active = true;
    chartData.height = 200;
    chartData.width = 95;
    updateChart(chartData, function(){
    });
  }
  mediumClicked(){
    var newClass = 'col col-lg-6 col-md-6 card';
    this.setState({class:newClass,height:400});
    var chartData = {};
    chartData.options = this.state.chart.options;
    chartData.size = 'medium';
    chartData.class = 'col col-lg-6 col-md-6 card';
    chartData._id = this.state._id;
    chartData.is_active = true;
    chartData.height = 400;
    chartData.width = 95;
    updateChart(chartData, function(){
    });
  }
  largeClicked(){

    var newClass = 'col col-lg-12 col-md-12 card';
    
    //var init = false;
    //var size = props.size;
    var chart = this.state.chart;
    this.setState({chart});
    chart.render(function(){
      this.setState({class:newClass,height:500});
    });
    
    chart.options.data[0].dataPoints[4].y = 1;
    
    var chartData = {};
    chartData.options = this.state.chart.options;
    chartData.size = 'medium';
    chartData.class = 'col col-lg-12 col-md-12 card';
    chartData._id = this.state._id;
    chartData.is_active = true;
    chartData.height = 500;
    chartData.width = 95;
    updateChart(chartData, function(){
    });
  }
  componentWillReceiveProps(nextProps){
    
  }
  
  render() {
    return (
      <div className={this.state.class}>
        <ControlBar 
        id={this.state._id} 
        chartRemoved={this.props.chartRemoved} 
        chartAdded={this.props.chartAdded}
        smallClicked={this.smallClicked}
        mediumClicked={this.mediumClicked}
        largeClicked={this.largeClicked}
        />
        <div id={this.state._id}  style={{height: this.state.height + "px", width: this.state.width + "%"}}>
        </div>
      </div>
    );
  }
}