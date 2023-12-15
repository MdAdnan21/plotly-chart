import React from 'react';
import { Bar } from 'react-chartjs-2';

const BestReactWebsitesChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Website A', 'Website B', 'Website C', 'Website D', 'Website E'],
    datasets: [
      {
        label: 'Rating (Out of 10)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [9, 8, 7.5, 9.5, 8.5],
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  };

  return (
    <div>
      <h2>Best React.js Websites</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BestReactWebsitesChart;
