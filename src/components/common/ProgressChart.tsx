import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { TooltipItem } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ProgressChartProps {
  title: string;
  data: number[];
  labels: string[];
  color?: string;
  unit?: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({
  title,
  data,
  labels,
  color = '#0EA5E9',
  unit = '',
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: color,
        backgroundColor: `${color}20`,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            return `${context.dataset.label}: ${context.raw}${unit}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: '#f3f4f6',
        },
        ticks: {
          callback: function(value: number) {
            return `${value}${unit}`;
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ProgressChart;
