import React from "react";
import './Dashboard.css';
import Table from "../../components/table/Table.js"

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

const DashBoardPage = () => {
    return (
      <div class="container-fluid" style={{padding: '20px'}}>
        <div class="row">
            <div class="col-md-8 col-sem-11 col-xs-14">
                <div class="box">
                  <div class="box-body">
                    <h2>User Summary</h2>
                  </div>
                </div>
                <div class="box">
                  <div class="box-header with-border">
                    <h2>Products Table</h2>
                  </div>
                  <div class="box-body">
                    <Table headings={headings_product} rows={rows_product}/>
                  </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <div class="box-body">
                  <h2>Graph</h2>
                </div>
              </div>
              <div class="box">
                <div class="box-header with-border">
                  <h2>Recent Activities</h2>
                </div>
                <div class="box-body">
                  <Table headings={headings_activities} rows={rows_activities}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default DashBoardPage;
