import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { Container } from './Chart.styles'

export const LineChart = (props) => {
  return (
    <Container>
      <Line data={data} options={options}/>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: null,
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#FCD900',
      borderColor: '#FCD900',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          display: false
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          display: false
        },
      },
    ],
  },
}


export default connect(mapStateToProps, mapDispatchToProps)(LineChart)
