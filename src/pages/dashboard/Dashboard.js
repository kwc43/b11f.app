import React, {Component} from "react";
import './Dashboard.css';
import Table from "../../components/table/Table.js"
import Box from "../../components/box/Box.js"
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

  state = {
    test: []
  }

  componentDidMount(){
    document.body.style.paddingTop="50px";
    fetch('http://localhost:3001/invoke')
    .then(res=>res.json())
    .then((data)=>{
	     this.setState({test : data})
       console.log(this.state.test  )
    })
    .catch(console.log)
  }

  componentWillUnmount(){
    document.body.style.paddingTop="0px";
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: '20px'}}>
        <div className="row">
            <div className="col-md-8 col-sem-11 col-xs-14">
              <Box>
                <User user={user}/>
              </Box>
              <Box header={"Products Table"}>
                <Table headings={headings_product} rows={rows_product}/>
              </Box>
            </div>
            <div className="col-md-4">
              <Box>
                <h2>Graph goes here</h2>
              </Box>
              <Box header={"Recent Activities"}>
                <Table headings={headings_activities} rows={rows_activities}/>
              </Box>
            </div>
        </div>
      </div>
    );
  }
}
