class Charts {
  generateData () {
    let arr = []
    let counts = {};
    let obj = {
      data: {
          labels: [],
            datasets: [{
              backgroundColor: "#3F51B5",
                data: [],
                label: "numeros",
                fill: "start"
            }]
        }
    }

    times(500) (() => {
      arr.push(Math.ceil(Math.random().toFixed(2) * 100) / 100)
    })
    arr.forEach((x) => { 
      counts[x] = (counts[x] || 0)+1
    })
    this.datos = counts
    for (let key in counts ) {
      let value = counts[key]
        let prom = value / 500

      obj.data.labels.push(key)
        obj.data.datasets[0].data.push(prom)
    }
    return obj.data;
  }
  GenerateChart () {
    const data = this.generateData()
    const options = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
    const ctx = document.getElementById('chart'); // .getContext('2d')
    const myLinesChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    })
  }
}



const times = n => f => {
  let iter = i => {
    if (i === n) return
    f (i)
    iter (i + 1)
  }
  return iter (0)
}

const charts = new Charts
charts.GenerateChart()

document.getElementById('generar').onclick = () => {
  charts.GenerateChart(val)
}