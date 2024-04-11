/* eslint-disable react/prop-types */
// PieChart.js

import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [{
      data: data.map(item => item.value),
      backgroundColor: [
        '#4F46E5',
        '#22C55E',
        '#FF6B6B',
        '#F59E0B',
        '#10B981',
        '#3B82F6',
      ],
    }],
  };

  return (
    <div className="relative" style={{ maxWidth: '400px', maxHeight: '400px' }}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
