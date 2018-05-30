import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  LineChart,
  Line,
  BarChart,
  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'


const data = [
  { name: 'มะม่วง', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'มะพร้าว', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'ส้มโอ', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'แตงโม', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'พริก', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'ขนุน', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'ทุเรียน', uv: 3490, pv: 4300, amt: 2100 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LineChart width={600} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        );

        <BarChart width={600} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

export default App;
