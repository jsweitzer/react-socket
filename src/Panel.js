import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'canvasjs';
import { subscribeToCharts, insertChart } from './Api';
import { HeimdallChart } from './HeimdallChart';

export class Panel extends React.Component {
    constructor(props){
        super(props);
        subscribeToCharts((err, charts) => 
        {
          var chartarray = [];
          for(var i = 0; i < charts.length; i++){
              chartarray.push(charts[i]);
          }
          this.setState({chartarray});
        });
        this.chartRemoved = this.chartRemoved.bind(this);
        this.chartAdded = this.chartAdded.bind(this);
    }
    state = {
        addlock: false
    }
    componentWillReceiveProps(props) 
    {
        if(props.action === 'add' && !this.state.addlock){
            this.setState({addlock: true});
            console.log(props.type);
            insertChart(props.type);
            this.chartAdded();
            props.setAction('none');
            var addlock = false;
            this.setState({addlock});
        }
    }
    chartRemoved(id){
        console.log('removing id ' + id);
        console.log('from');
        console.log(JSON.stringify(this.state.chartarray));
        var chartarray = this.state.chartarray.filter((val, index) => {
            return val._id !== id;
        });
        console.log('result');
        console.log(JSON.stringify(chartarray));
        this.setState({chartarray});
        this.forceUpdate();
    }
    chartAdded(){
        subscribeToCharts((err, charts) => 
        {
          var chartarray = [];
          for(var i = 0; i < charts.length; i++){
              chartarray.push(charts[i]);
          }
          this.setState({chartarray});
        });
    }
    render() {
        if(this.state != null && this.state.chartarray != null){
            var charts = this.state.chartarray;
            var e_chartRemoved = this.chartRemoved;
            var e_chartAdded = this.chartAdded;
            var chartComponents = charts.map(function(c, i){
                                return <div><HeimdallChart key={c._id} _id={c._id} chart={c.options} options={c} class={c.class} height={c.height} width={c.width} _id={c._id} chartRemoved={e_chartRemoved} chartAdded={e_chartAdded} /></div>
                                    
                                });

            return (
                    <div className={'row'} >{ chartComponents }</div>
                    );
        }else{
            return (
                    <div>asda</div>
                    );
            }

        }
}