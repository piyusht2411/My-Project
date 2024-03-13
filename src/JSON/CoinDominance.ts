export const CoinData = {
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
      data: [5, 4, 9, 15, 8, 6, 4, 2, 10, 18],
      fill: true,
      backgroundColor: '#E26842',
      borderColor: 'transparent',
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1,
      borderWidth: 3
    },
    {
      label: '',
      data: [20, 30, 40, 35, 45, 27, 36, 41, 50, 39],
      fill: true,
      backgroundColor: '#5DA15D',
      borderColor: 'transparent',
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1,
      borderWidth: 3
    },

    {
      label: '',
      data: [50, 75, 90, 60, 70, 65, 80, 70, 60, 55],
      fill: true,
      borderColor: 'transparent',
      backgroundColor: 'rgba(41, 117, 183, 0.469)',
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1
    }
  ]
};
export const CoinOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      barPercentage: 20,
      categoryPercentage: 20,
      beginAtZero: false,
      display: false
      //   ticks: {
      //     stepSize: 500,
      //     max: 2000
      //   }
    },
    y: {
      beginAtZero: true,
      display: true,
      ticks: {
        stepSize: 25,
        max: 100
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

export const CoinData2 = {
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

export const CoinOptions2 = {
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
