import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function ChartDisplay({ results }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if there's an existing chart instance and destroy it before creating a new one
    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    chartRef.current.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: results.map((_, index) => `Transmission ${index + 1}`),
        datasets: [
          {
            label: 'Latency',
            data: results.map((result) => result.latency),
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Throughput',
            data: results.map((result) => result.throughput),
            borderColor: 'green',
            fill: false,
          },
          {
            label: 'Fairness Index',
            data: results.map((result) => result.fairnessIndex),
            borderColor: 'red',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Performance Metrics Over Time',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Transmission Number',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Metric Value',
            },
            beginAtZero: true,
          },
        },
      },
    });
  }, [results]);

  return <canvas ref={chartRef} />;
}

export default ChartDisplay;
