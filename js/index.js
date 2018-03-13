// clase charts
class Charts {
  // generar datos de la aplicaccion
  generateData () {
    let arr = []
    let counts = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0
    }
    const frecuencia_observada = [1,2,3,4,5,6,5,4,3,2,1]
    let obj = {
      data: {
          labels: [],
            datasets: [
              {
                backgroundColor: "rgba(63, 81, 181, 0.51)",
                  data: [],
                  label: "Bondad de ajuste",
                  fill: "start"
              },
              {
                backgroundColor: "rgba(103, 58, 183, 0.51)",
                data: [],
                label: "Frecuencia Observada",
                fill: "start"
              }              
            ]
        }
    }

    times(500) (() => {
      arr.push(Math.ceil(Math.random().toFixed(2) * 100) / 100)
    })

    arr.forEach((n) => { 
      if (n < (1 / 36)) {
        counts[2] += 1
      } else if (n < (3 / 36)) {
        counts[3] += 1
      }else if (n < (6 / 36)) {
        counts[4] += 1
      }else if (n < (10 / 36)) {
        counts[5] += 1
      }else if (n < (15 / 36)) {
        counts[6] += 1
      }else if (n < (21 / 36)) {
        counts[7] += 1
      }else if (n < (26 / 36)) {
        counts[8] += 1
      }else if (n < (30 / 36)) {
        counts[9] += 1
      }else if (n < (33 / 36)) {
        counts[10] += 1
      }else if (n < (35 / 36)) {
        counts[11] += 1
      }else if (n < (36 / 36)) {
        counts[12] += 1
      }
    })
    this.datos = counts
    for (let key in counts ) {
      let value = counts[key]
        let prom = value / 500

      obj.data.labels.push(key)
      obj.data.datasets[0].data.push(prom)
    }
    frecuencia_observada.forEach(n => {
      let value = n / 36
      value = value.toFixed(5)
      obj.data.datasets[1].data.push(value)

    })
    return obj.data;
  }
  // genera la grafica
  GenerateChart () {
    const data = this.generateData()
    const options = {
      tooltips: {
        mode: 'index',
        intersect: false
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
  reloadTable () {
    const data = this.datos
    let html  = ""
    for (let key in data) {
      html += 
      ` <tr>
          <th scope="row" class="text-center">${key}</th>
          <td class="text-center">${data[key]}</td>
          <td class="text-center">${(data[key] / 500)}</td>
        </tr>
      `
    }
    document.getElementById("tabla").innerHTML = html
  }
}

// Funcion para las iteraciones
const times = n => f => {
  let iter = i => {
    if (i === n) return
    f (i)
    iter (i + 1)
  }
  return iter (0)
}

// ejecutando la clase charts 
const charts = new Charts

//cargando la informacion
charts.GenerateChart()
charts.reloadTable()

// generar valores aleatorios de nuevo
document.getElementById('generar').onclick = () => {
  charts.GenerateChart()
  charts.reloadTable()
}