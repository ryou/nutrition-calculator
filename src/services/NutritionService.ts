import { Foodstuff, Nutrient, Nutrition } from '../types/foodstuff'
import { recordMap } from '../../shared/libs/recordMap'

export const getEmptyNutrition = (): Nutrition => {
  return {
    energy_kcal: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    vitamin_a: 0,
    vitamin_d: 0,
    vitamin_e: 0,
    vitamin_k: 0,
    vitamin_b1: 0,
    vitamin_b2: 0,
    niacin: 0,
    vitamin_b6: 0,
    vitamin_b12: 0,
    folic_acid: 0,
    pantothenic_acid: 0,
    vitamin_c: 0,
    k: 0,
    ca: 0,
    mg: 0,
    phosphorus: 0,
    iron: 0,
    zn: 0,
    copper: 0,
    mn: 0,
    salt: 0,
  }
}

export const calcNutritionFromAmount = (
  nutrition: Nutrition,
  amount: number
): Nutrition => {
  return recordMap(nutrition, (key, value) => value * amount)
}

export const calcTotalNutrition = (
  items: { foodstuff: Foodstuff; amount: number }[]
) => {
  const nutritionList = items.map((item) =>
    calcNutritionFromAmount(item.foodstuff.nutrition, item.amount)
  )

  const emptyNutrition = getEmptyNutrition()

  return nutritionList.reduce((prev, current) => {
    return recordMap(prev, (key, value) => value + current[key])
  }, emptyNutrition)
}

export const getRecommendedNutrition = (): Nutrition => {
  // TODO: とりあえず一旦30歳男性の前提で作るが、後々年齢性別指定出来るようにする
  return {
    energy_kcal: 2700,
    protein: 65,
    // https://jp.glico.com/navi/e07.htmlを元に算出。((%/100)*kcal)/9 = f。%は中間の25%、kcalは2700kcalとして計算
    fat: 75,
    // https://jp.glico.com/navi/e07.htmlを元に算出。((%/100)*kcal)/4 = f。%は中間の57.5%、kcalは2700kcalとして計算
    carbohydrate: 388,
    vitamin_a: 900,
    vitamin_d: 8.5,
    vitamin_e: 6,
    vitamin_k: 150,
    vitamin_b1: 1.4,
    vitamin_b2: 1.6,
    niacin: 15,
    vitamin_b6: 1.4,
    vitamin_b12: 2.4,
    folic_acid: 240,
    pantothenic_acid: 5,
    vitamin_c: 100,
    k: 2500,
    ca: 750,
    mg: 370,
    phosphorus: 1000,
    iron: 7.5,
    zn: 11,
    copper: 0.9,
    mn: 4.0,
    salt: 7.5,
  }
}

export const nutrientJapaneseName: Record<Nutrient, string> = {
  energy_kcal: 'エネルギー',
  protein: 'タンパク質',
  fat: '脂質',
  carbohydrate: '炭水化物',
  vitamin_a: 'ビタミンA',
  vitamin_d: 'ビタミンD',
  vitamin_e: 'ビタミンE',
  vitamin_k: 'ビタミンK',
  vitamin_b1: 'ビタミンB1',
  vitamin_b2: 'ビタミンB2',
  niacin: 'ナイアシン',
  vitamin_b6: 'ビタミンB6',
  vitamin_b12: 'ビタミンB12',
  folic_acid: '葉酸',
  pantothenic_acid: 'パントテン酸',
  vitamin_c: 'ビタミンC',
  k: 'カリウム',
  ca: 'カルシウム',
  mg: 'マグネシウム',
  phosphorus: 'リン',
  iron: '鉄',
  zn: '亜鉛',
  copper: '銅',
  mn: 'マンガン',
  salt: '食塩相当量',
}

export const nutrientUnit: Record<Nutrient, string> = {
  energy_kcal: 'kcal',
  protein: 'g',
  fat: 'g',
  carbohydrate: 'g',
  vitamin_a: 'μg',
  vitamin_d: 'μg',
  vitamin_e: 'mg',
  vitamin_k: 'μg',
  vitamin_b1: 'mg',
  vitamin_b2: 'mg',
  niacin: 'mg',
  vitamin_b6: 'mg',
  vitamin_b12: 'μg',
  folic_acid: 'μg',
  pantothenic_acid: 'mg',
  vitamin_c: 'mg',
  k: 'mg',
  ca: 'mg',
  mg: 'mg',
  phosphorus: 'mg',
  iron: 'mg',
  zn: 'mg',
  copper: 'mg',
  mn: 'mg',
  salt: 'g',
}
