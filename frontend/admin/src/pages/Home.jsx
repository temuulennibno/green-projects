import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Ямар нэгэн статистик',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Эрэгтэй хүмүүс',
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Эмэгтэй хүмүүс',
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Хүүхэд',
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: 'rgba(53, 162, 0, 0.5)',
    },
  ],
};

export default function Home() {
  return (
    <div className="container-sm body-container">
      <div className="row">
        <div className="col-12">
          <Bar options={options} data={data} />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
