import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from 'react-icons/lib/md/close';
import EditIcon from 'react-icons/lib/md/create';
import MdHdrStrong from 'react-icons/lib/md/hdr-strong';
import MdHdrWeak from 'react-icons/lib/md/hdr-weak';
import MdDehaze from 'react-icons/lib/md/dehaze';
import {ChartForm} from './ChartForm';
import {disableChart, insertChart} from './Api';

export class ControlBar extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.onCloseIconClicked = this.onCloseIconClicked.bind(this);
        this.onLargeClicked = this.onLargeClicked.bind(this);
        this.onMediumClicked = this.onMediumClicked.bind(this);
        this.onSmallClicked = this.onSmallClicked.bind(this);
        this.onOptionsClicked = this.onOptionsClicked.bind(this);

        this.state = {
            id: props.id
        }
    }
    onOptionsClicked() {
        var show = true;
        this.setState({show});
    }
    onCloseIconClicked() {
        disableChart(this.state.id);
        this.props.chartRemoved(this.state.id);
    }
    onLargeClicked() {
        this.props.largeClicked();
    }
    onMediumClicked() {
        this.props.mediumClicked();
    }
    onSmallClicked() {
        this.props.smallClicked();
    }
    render(){
        return  (
                    <div className="controlBar">
                        <ChartForm show={this.state.show}/>
                        <MdHdrWeak className="controlBarIcon shy" onClick={this.onSmallClicked} />
                        <MdHdrWeak className="controlBarIcon shy" onClick={this.onMediumClicked} />
                        <MdHdrStrong className="controlBarIcon shy" onClick={this.onLargeClicked} />
                        <MdDehaze className="controlBarIcon controlBarIcon-left" onClick={this.onOptionsClicked} />
                        <CloseIcon className="controlBarIcon" onClick={this.onCloseIconClicked} />
                    </div>
                );
            }
}