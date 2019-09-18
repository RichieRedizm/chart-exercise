/*
/ get the element from document for the chart to render
*/
var ctx = document.getElementById('myChart').getContext('2d')

/*
/ get the json data from survey path
*/
$.get('/survey', function(data, status) {
  /*
	/ crete unique labels axis
	*/
  const labels = [...new Set(data.map(item => item.age))].sort()
  /*
	/ get all possible results
	*/
  const results = [...new Set(data.map(item => item.second_referendum))]

  /*
	/ create instance and configure chart
	*/
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Combined Results',
          data: Values(data, results[0]),
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'orange',
          borderWidth: 1
        },
        {
          label: 'Men Results',
          data: MenValues(data, results[0]),
          backgroundColor: 'transparent',
          borderColor: 'blue',
          borderWidth: 1
        },
        {
          label: 'Women Results',
          data: WomenValues(data, results[0]),
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
              labelString: `number of ${results[0]} votes`
            }
          }
        ]
      }
    }
  })
})

/*
/ calculate number of votes by age range
*/
const Values = (data, result) => {
  const age65Plus = data.filter(
    item => item.age === '65+' && item.second_referendum === result
  )
  const age5564 = data.filter(
    item => item.age === '55-64' && item.second_referendum === result
  )
  const age4554 = data.filter(
    item => item.age === '45-54' && item.second_referendum === result
  )
  const age3544 = data.filter(
    item => item.age === '35-44' && item.second_referendum === result
  )
  const age2534 = data.filter(
    item => item.age === '25-34' && item.second_referendum === result
  )
  const age1824 = data.filter(
    item => item.age === '18-24' && item.second_referendum === result
  )

  return [
    age1824.length,
    age2534.length,
    age4554.length,
    age5564.length,
    age3544.length,
    age65Plus.length
  ]
}

/*
/ calculate number of votes by age range for only men
*/
const MenValues = (data, result) => {
  const men = data.filter(item => item.gender === 'Male')
  const menAge65Plus = men.filter(
    item => item.age === '65+' && item.second_referendum === result
  )
  const menAge5564 = men.filter(
    item => item.age === '55-64' && item.second_referendum === result
  )
  const menAge4554 = men.filter(
    item => item.age === '45-54' && item.second_referendum === result
  )
  const menAge3544 = men.filter(
    item => item.age === '35-44' && item.second_referendum === result
  )
  const menAge2534 = men.filter(
    item => item.age === '25-34' && item.second_referendum === result
  )
  const menAge1824 = men.filter(
    item => item.age === '18-24' && item.second_referendum === result
  )

  return [
    menAge1824.length,
    menAge2534.length,
    menAge4554.length,
    menAge5564.length,
    menAge3544.length,
    menAge65Plus.length
  ]
}

/*
/ calculate number of votes by age range for only Women
*/
const WomenValues = (data, result) => {
  const women = data.filter(item => item.gender === 'Female')
  const womenAge65Plus = women.filter(
    item => item.age === '65+' && item.second_referendum === result
  )
  const womenAge5564 = women.filter(
    item => item.age === '55-64' && item.second_referendum === result
  )
  const womenAge4554 = women.filter(
    item => item.age === '45-54' && item.second_referendum === result
  )
  const womenAge3544 = women.filter(
    item => item.age === '35-44' && item.second_referendum === result
  )
  const womenAge2534 = women.filter(
    item => item.age === '25-34' && item.second_referendum === result
  )
  const womenAge1824 = women.filter(
    item => item.age === '18-24' && item.second_referendum === result
  )

  return [
    womenAge1824.length,
    womenAge2534.length,
    womenAge4554.length,
    womenAge5564.length,
    womenAge3544.length,
    womenAge65Plus.length
  ]
}
