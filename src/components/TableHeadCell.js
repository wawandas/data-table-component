import React, { Component } from 'react';
import CheckBox from './CheckBox';

const TableHeadCell = ({headCell, inx}) => {
    return (
        <th className={(inx === 0 ? "first-cell" : "")} key={inx}>{(inx === 0) ? <CheckBox/> : ""}{headCell.label}</th>
    )
}

export default TableHeadCell;