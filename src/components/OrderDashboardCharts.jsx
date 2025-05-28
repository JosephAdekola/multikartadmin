import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  RadialBarChart, RadialBar
} from 'recharts';

// Transformed data
const chartData = [
  { name: 'Paid Orders', value: 10 },
  { name: 'Pending Orders', value: 2 },
  { name: 'Low Stock Alerts', value: 8 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const OrderDashboardCharts = () => {
  const totalOrders = 4603;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Total Orders Summary */}
      <div style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: 'bold' }}>
        Total Orders: {totalOrders}
      </div>

      {/* Charts Container */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>

        {/* Pie Chart */}
        <div>
          <h3>Order Distribution (Pie Chart)</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <RechartsTooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div>
          <h3>Order Comparison (Bar Chart)</h3>
          <BarChart width={400} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <RechartsTooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Radial Bar Chart */}
        <div>
          <h3>Order Metrics (Radial Bar Chart)</h3>
          <RadialBarChart
            width={300}
            height={300}
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="90%"
            barSize={15}
            data={chartData}
          >
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <RechartsTooltip />
          </RadialBarChart>
        </div>

      </div>
    </div>
  );
};

export default OrderDashboardCharts;
