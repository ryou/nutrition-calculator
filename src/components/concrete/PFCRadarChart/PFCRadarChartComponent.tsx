import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Nutrition } from '../../../types/foodstuff'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = {
  nutrition: Nutrition
  recommendedNutrition: Nutrition
}
export const PFCRadarChartComponent = ({
  nutrition,
  recommendedNutrition,
}: Props) => {
  const carbon =
    (nutrition.carbohydrate / recommendedNutrition.carbohydrate) * 100
  const protein = (nutrition.protein / recommendedNutrition.protein) * 100
  const fat = (nutrition.fat / recommendedNutrition.fat) * 100

  const options = useMemo(() => {
    return {
      stroke: {
        colors: ['#5BBBC1'],
      },
      fill: {
        opacity: 0.3,
        colors: ['#5BBBC1'],
      },
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
        parentHeightOffset: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['炭水化物', 'タンパク質', '脂質'],
      },
      yaxis: {
        max: 100,
        labels: {
          formatter: function (val: number) {
            if (val === 100) {
              return '100%'
            }

            return ''
          },
        },
      },
      markers: {
        size: 0,
      },
      tooltip: {
        enabled: false,
      },
    }
  }, [])

  const series = useMemo(() => {
    return [
      {
        name: '摂取量',
        data: [carbon, protein, fat],
      },
    ]
  }, [carbon, protein, fat])

  return <Chart options={options} series={series} type="radar" height="300" />
}
