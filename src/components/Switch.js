import React, { Component } from 'react';
import './Switch.css';

class Switch extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.changeActiveStatus(this.props.rowData.cultivation_id);
    }

    render () {
        return (
            <label className="switch">
                <input type="checkbox" defaultChecked={this.props.rowData.active} onChange={this.handleChange}/>
                <span className="slider round"></span>
            </label>
        )
    }
}

export default Switch;