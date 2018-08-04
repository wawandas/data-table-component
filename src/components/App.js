import React, { Component } from 'react';
import DataTable from './DataTable';

const data = [{
    "field_name": "test1",
    "area_in_hectares": 0.1,
    "active": true,
    "company_name": "Company1",
    "cultivation_id": 1,
    "crop_name": "...",
    "harvest_year": 2016
}, {
    "field_name": "test1",
    "area_in_hectares": 0.1,
    "active": true,
    "company_name": "Company1",
    "cultivation_id": 2,
    "crop_name": "...",
    "harvest_year": 2016
}, {
    "field_name": "test1",
    "area_in_hectares": 0.1,
    "active": false,
    "company_name": "Company1",
    "cultivation_id": 3,
    "crop_name": "...",
    "harvest_year": 2016
}, {
    "field_name": "test2",
    "area_in_hectares": 0.1,
    "active": true,
    "company_name": "Company2",
    "cultivation_id": 4,
    "crop_name": "...",
    "harvest_year": 2017
}, {
    "field_name": "test3",
    "area_in_hectares": 0.1,
    "active": true,
    "company_name": "Company3",
    "cultivation_id": 5,
    "crop_name": "...",
    "harvest_year": 2018
}, {
    "field_name": "test3",
    "area_in_hectares": 0.1,
    "active": true,
    "company_name": "Company3",
    "cultivation_id": 6,
    "crop_name": "...",
    "harvest_year": 2018
}];

const columns = [{
    "attribute": "field_name",
    "label": "Name"
}, {
    "attribute": "cultivation_id",
    "label": "Nummer"
}, {
    "attribute": "company_name",
    "label": "Betrieb"
}, {
    "attribute": "area_in_hectares",
    "label": "Fläche"
}, {
    "attribute": "active",
    "label": "Aktiv"
}, {
    "attribute": "crop_name",
    "label": "Kultur"
}, {
    "attribute": "harvest_year",
    "label": "Ernte"
}];

class App extends Component {
  render() {
    return (
        <DataTable data={data} columns={columns}/>
    );
  }
}

export default App;
