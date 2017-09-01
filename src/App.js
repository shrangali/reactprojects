import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount(){
        var url = 'http://192.168.1.47:7080/Cybersn/jobs'
        Request.get(url).then((response) => {
            this.setState({
                data: response.body
            })
        })
    }

    render(){
        var data = _.map(this.state.data, (datas) => {
            return <li>id:-  {datas.id}  JobName:-  {datas.jobName}</li>
        })
        return(
         <div><ul>{data}</ul></div>
        )
    }
}
