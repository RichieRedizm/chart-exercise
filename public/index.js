var ctx = document.getElementById('myChart').getContext('2d')
$.get('/survey', function(data, status) {
  var labels = [...new Set(data.map(item => item.age))].sort()
  const secRef = [...new Set(data.map(item => item.second_referendum))]

  const men = data.filter(item => item.gender === 'Male')
  const women = data.filter(item => item.gender === 'Female')

  const age65Plus = data.filter(item => item.age === '65+')
  const age5564 = data.filter(item => item.age === '55-64')
  const age4554 = data.filter(item => item.age === '45-54')
  const age3544 = data.filter(item => item.age === '35-44')
  const age2534 = data.filter(item => item.age === '25-34')
  const age1824 = data.filter(item => item.age === '18-24')

  const menAge65Plus = men.filter(item => item.age === '65+')
  const menAge5564 = men.filter(item => item.age === '55-64')
  const menAge4554 = men.filter(item => item.age === '45-54')
  const menAge3544 = men.filter(item => item.age === '35-44')
  const menAge2534 = men.filter(item => item.age === '25-34')
  const menAge1824 = men.filter(item => item.age === '18-24')

  const womenAge65Plus = women.filter(item => item.age === '65+')
  const womenAge5564 = women.filter(item => item.age === '55-64')
  const womenAge4554 = women.filter(item => item.age === '45-54')
  const womenAge3544 = women.filter(item => item.age === '35-44')
  const womenAge2534 = women.filter(item => item.age === '25-34')
  const womenAge1824 = women.filter(item => item.age === '18-24')

  const values = [
    age1824.length,
    age2534.length,
    age4554.length,
    age5564.length,
    age3544.length,
    age65Plus.length
  ]

  const menValues = [
    menAge1824.length,
    menAge2534.length,
    menAge4554.length,
    menAge5564.length,
    menAge3544.length,
    menAge65Plus.length
  ]

  const womenValues = [
    womenAge1824.length,
    womenAge2534.length,
    womenAge4554.length,
    womenAge5564.length,
    womenAge3544.length,
    womenAge65Plus.length
  ]
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Combined Results',
          data: values,
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'orange',
          borderWidth: 1
        },
        {
          label: 'Men Results',
          data: menValues,
          backgroundColor: 'transparent',
          borderColor: 'blue',
          borderWidth: 1
        },
        {
          label: 'Women Results',
          data: womenValues,
          backgroundColor: 'transparent',
          borderColor: 'red',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Age'
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'number of votes'
            },
            labels: secRef
          }
        ]
      }
    }
  })
})
