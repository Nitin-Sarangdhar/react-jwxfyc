import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './Population.css'; // Import the CSS file for styling

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Population = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('https://cs464p564-frontend-api.vercel.app/api/countries')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          const countryNames = response.data.map(country => country.name);
          const populations = response.data.map(country => country.population);

          setChartData({
            labels: countryNames,
            datasets: [
              {
                label: 'Population',
                data: populations,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Population of Countries</h2>
      {chartData.labels ? (
        <div className="chart-container" style={{ height: '600px', width: '1200px' }}>
          <Bar
            data={chartData}
            options={{
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 45
                  }
                },
                y: {
                  beginAtZero: true,
                  max: 240000000,  // Maximum value of 240 million
                  stepSize: 20000000,  // Step size of 20 million
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Population;


