import "https://cdn.jsdelivr.net/npm/chart.js"

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      datasets: [{
        label: 'Суточный объём',
        data: [11, 33, 3, 5, 2, 3, 11, 33, 3, 5, 2, 3, 11, 33, 3, 5, 2, 3, 11, 33, 3, 5, 2, 3, 11, 33, 3, 5, 2, 3, 5],
        borderWidth: 1,
        backgroundColor: "rgba(0, 0, 255, 50%)",
        responsive: true,
        maintainAspectRatio: false
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });