import React, { Component } from 'react';
import CheckBox from './CheckBox';
import Switch from './Switch';

const TableRow = ({row, changeActiveStatus}) => {
    return (
        <tr className={!row.active ? "not-active": ""}>
            <td className="first-cell" key={row.field_name}><CheckBox/>{row.field_name}</td>
            <td>{row.cultivation_id}</td>
            <td>{row.company_name}</td>
            <td>{row.area_in_hectares}</td>
            <td key={row.active}><Switch rowData={row} changeActiveStatus={changeActiveStatus}/></td>
            <td>{row.crop_name}</td>
            <td>{row.harvest_year}</td>
        </tr>
    )
}

export default TableRow;