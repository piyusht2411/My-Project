export const data = {
  labels: [
    'Jul 21',
    'Aug 21',
    'Sep 21',
    'Oct 21',
    'Nov 21',
    'Dec 21',
    'Jan 22',
    'Feb 22',
    'Mar 22',
    'Apr 22'
  ],
  datasets: [
    {
      label: '',
      data: [500, 750, 900, 1000, 1200, 1500, 1800, 1700, 1600, 1900],
      fill: false,
      borderColor: '#0A97E0',
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barPercentage: 20,
      categoryPercentage: 20,
      beginAtZero: false,
      display: false
    },
    y: {
      display: true,
      beginAtZero: true,
      ticks: {
        stepSize: 500,
        max: 2000
      },
      grid: {
        color: 'rgb(20,39,57)'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

export const data2 = {
  labels: ['Jul 21', 'Aug 21', 'Sep 21', 'Oct 21'],
  datasets: [
    {
      label: '',
      data: [500, 1500, 600, 1000, 1200, 1500, 1800, 1700, 1600, 2000],
      fill: false,
      borderColor: '#1A77FF',
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1
    }
  ]
};

export const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      position: 'top',
      barPercentage: 20,
      categoryPercentage: 20,
      beginAtZero: false,
      display: true,
      ticks: {
        font: {
          size: 15
        }
      }
    },
    y: {
      display: false,
      beginAtZero: true,
      ticks: {
        font: {
          size: 10
        }
      },
      grid: {
        color: 'rgb(20,39,57)'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};
