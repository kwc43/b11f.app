import React, {Component} from "react";
import './Dashboard.css';
import Table from "../../components/table/Table.js"
import User from "../../components/userBox/User.js"

const headings_product = [
      'Product name',
      'Selling Price',
      'Budget',
      'Profit'
    ];
const rows_product = [
  [
    'Banana',
    '$1.50',
    '$1.20',
    '25%'
  ],
  [
    'Apple',
    '$1.00',
    '0.90',
    '0.11%'
  ],
  [
    'Coffee',
    '$2.00',
    '$1.70',
    '25%'
  ],
  [
    'Wheat',
    '$1.65',
    '$1.50',
    '10%'
  ],
  [
    'Strawberries',
    '$2.20',
    '$2.00',
    '10%'
  ],
];

const headings_activities = [
      'Product name',
      'Percentage Change',
      'When'
    ];
const rows_activities = [
    [
        'Apple',
        '+0.15%',
        '21/01/2020'
    ],
    [
        'Orange',
        '-.0.05%',
        '18/01/2020'
    ],
    [
        'Coco',
        '+0.25%',
        '01/02/2020'
    ],
    [
        'Banana',
        '0.50%',
        '09/02/2020'
    ],
];

const user = {
  name: 'Farm A',
  image: 'https://www.nationalgeographic.com/content/dam/environment/photos/future_of_food/organic_farming_rough/01_organic_farming_i8860_20181003_11260.adapt.1900.1.jpg'
}

export default class Modal extends Component {
  componentDidMount(){
    document.body.style.paddingTop="50px";
  }

  componentWillUnmount(){
    document.body.style.paddingTop="0px";
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: '20px'}}>
        <div className="row">
            <div className="col-md-8 col-sem-11 col-xs-14">
                <div className="box">
                  <div className="box-body">
                    <User user={user}/>
                  </div>
                </div>
                <div className="box">
                  <div className="box-header with-border">
                    <h2>Products Table</h2>
                  </div>
                  <div className="box-body">
                    <Table headings={headings_product} rows={rows_product}/>
                  </div>
                </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="box-body">
                  <h2>Graph</h2>
                </div>
              </div>
              <div className="box">
                <div className="box-header with-border">
                  <h2>Recent Activities</h2>
                </div>
                <div className="box-body">
                  <Table headings={headings_activities} rows={rows_activities}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
