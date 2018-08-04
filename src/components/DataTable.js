import React, { Component } from 'react';
import './DataTable.css';
import TableRow from './TableRow';
import TableHeadCell from './TableHeadCell';


class DataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }

        this.changeActiveStatus = this.changeActiveStatus.bind(this);
    }

    changeActiveStatus(rowId) {
        let indexObject = this.state.data.findIndex(e => e.cultivation_id === rowId);
        this.state.data[indexObject].active = !this.state.data[indexObject].active;

        this.forceUpdate();
    }

    render() {
        return (
            <div className="grid-container">
                <div className="grid">
                    <table className="data-table" cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>{this.props.columns.map((labelCell, i) => <TableHeadCell key={i} headCell={labelCell} inx={i}/>)}</tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((data) => <TableRow key={data.cultivation_id} row={data} changeActiveStatus={this.changeActiveStatus}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DataTable;