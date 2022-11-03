import { useMemo, useState } from 'react'
import { PFCRadarChartComponent } from '../PFCRadarChart/PFCRadarChartComponent'
import { ButtonGroupComponent } from '../../abstract/ButtonGroup/ButtonGroupComponent'
import { Nutrient, Nutrition } from '../../../types/foodstuff'
import { SingleBarChartComponent } from '../SingleBarChart/SingleBarChartComponent'
import { recordMap } from '../../../../shared/libs/recordMap'
import { HeadingComponent } from '../../abstract/Heading/HeadingComponent'
import {
  getRecommendedNutrition,
  nutrientJapaneseName,
  nutrientUnit,
} from '../../../services/NutritionService'

type TermSelectorComponentProps = {
  value: 'per_meal' | 'per_day'
  onChange: (value: 'per_meal' | 'per_day') => void
}
const TermSelectorComponent = ({
  value,
  onChange,
}: TermSelectorComponentProps) => {
  return (
    <ButtonGroupComponent
      value={value}
      items={[
        {
          label: '1日あたり',
          value: 'per_day',
        },
        {
          label: '1食あたり',
          value: 'per_meal',
        },
      ]}
      onChange={onChange}
    />
  )
}

type NutrientDetail = {
  name: string
  data: number
  recommended: number
  unit: string
}

type NutrientBarChartListProps = {
  nutrientDetails: NutrientDetail[]
}
const NutrientBarChartList = ({
  nutrientDetails,
}: NutrientBarChartListProps) => {
  return (
    <div>
      {nutrientDetails.map((nutrientDetail, index) => (
        <SingleBarChartComponent
          key={index}
          title={nutrientDetail.name}
          max={nutrientDetail.recommended}
          data={nutrientDetail.data}
          unit={nutrientDetail.unit}
        />
      ))}
    </div>
  )
}

const mainNutrients: Nutrient[] = [
  'energy_kcal',
  'protein',
  'fat',
  'carbohydrate',
]
const vitaminNutrients: Nutrient[] = [
  'vitamin_a',
  'vitamin_d',
  'vitamin_e',
  'vitamin_k',
  'vitamin_b1',
  'vitamin_b2',
  'vitamin_b6',
  'vitamin_b12',
  'vitamin_c',
]
const mineralNutrients: Nutrient[] = [
  'k',
  'ca',
  'mg',
  'phosphorus',
  'iron',
  'zn',
  'copper',
  'mn',
  'salt',
]

const getNutrientDetail = (
  nutrient: Nutrient,
  nutrition: Nutrition,
  recommendedNutrition: Nutrition
): NutrientDetail => {
  return {
    name: nutrientJapaneseName[nutrient],
    data: nutrition[nutrient],
    recommended: recommendedNutrition[nutrient],
    unit: nutrientUnit[nutrient],
  }
}

const getNutrientDetails = (
  nutrients: Nutrient[],
  nutrition: Nutrition,
  recommendedNutrition: Nutrition
): NutrientDetail[] => {
  return nutrients.map((nutrient) =>
    getNutrientDetail(nutrient, nutrition, recommendedNutrition)
  )
}

type NutritionAnalysisComponentProps = {
  nutrition: Nutrition
  recommendedNutrition: Nutrition
}
const NutritionAnalysisComponent = ({
  nutrition,
  recommendedNutrition,
}: NutritionAnalysisComponentProps) => {
  const mainNutrientDetails = useMemo(
    () => getNutrientDetails(mainNutrients, nutrition, recommendedNutrition),
    [nutrition, recommendedNutrition]
  )
  const vitaminNutrientDetails = useMemo(
    () => getNutrientDetails(vitaminNutrients, nutrition, recommendedNutrition),
    [nutrition, recommendedNutrition]
  )
  const mineralNutrientDetails = useMemo(
    () => getNutrientDetails(mineralNutrients, nutrition, recommendedNutrition),
    [nutrition, recommendedNutrition]
  )

  return (
    <div>
      <div>
        <PFCRadarChartComponent
          nutrition={nutrition}
          recommendedNutrition={recommendedNutrition}
        />
      </div>
      <div>
        <NutrientBarChartList nutrientDetails={mainNutrientDetails} />
      </div>
      <div className="sm:grid grid-cols-2 gap-8 mt-16">
        <div>
          <p className="text-xl font-bold">ビタミン</p>
          <div className="mt-8">
            <NutrientBarChartList nutrientDetails={vitaminNutrientDetails} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">ミネラル・その他</p>
          <div className="mt-8">
            <NutrientBarChartList nutrientDetails={mineralNutrientDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  nutrition: Nutrition
}
export const NutritionDetailComponent = ({ nutrition }: Props) => {
  const [term, setTerm] = useState<'per_meal' | 'per_day'>('per_day')
  const recommendedNutrition = useMemo(() => getRecommendedNutrition(), [])
  const actualRecommendedNutrition = useMemo(() => {
    return recordMap(recommendedNutrition, (key, value) => {
      if (term === 'per_meal') {
        return value / 3
      }

      return value
    })
  }, [recommendedNutrition, term])

  return (
    <div>
      <div className="sm:flex justify-between">
        <div>
          <HeadingComponent size={'sub'}>栄養詳細</HeadingComponent>
        </div>
        <div className="flex items-center">
          <p className="text-sm">栄養目安</p>
          <div className="ml-1">
            <TermSelectorComponent value={term} onChange={setTerm} />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <NutritionAnalysisComponent
          nutrition={nutrition}
          recommendedNutrition={actualRecommendedNutrition}
        />
      </div>
    </div>
  )
}
