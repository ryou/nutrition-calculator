// TODO: フロントエンドとの共通化を検討
// 栄養素
type Nutrient =
  | 'energy_kcal' // エネルギー(kcal)
  | 'protein' // たんぱく質(g)
  | 'fat' // 脂質(g)
  | 'carbohydrate' // 炭水化物(g)
  | 'vitamin_a' // ビタミン A(μg)
  | 'vitamin_d' // ビタミン D(μg)
  | 'vitamin_e' // ビタミン E(mg)
  | 'vitamin_k' // ビタミン K(μg)
  | 'vitamin_b1' // ビタミン B1(mg)
  | 'vitamin_b2' // ビタミン B2(mg)
  | 'vitamin_b6' // ビタミン B6(mg)
  | 'vitamin_b12' // ビタミン B12(μg)
  | 'vitamin_c' // ビタミン C(mg)
  | 'k' // カリウム(mg)
  | 'ca' // カルシウム(mg)
  | 'mg' // マグネシウム(mg)
  | 'phosphorus' // リン(mg)
  | 'iron' // 鉄(mg)
  | 'zn' // 亜鉛(mg)
  | 'copper' // 銅(mg)
  | 'mn' // マンガン(mg)
  | 'salt' // 食塩相当量(g)

export type Nutrition = Record<Nutrient, number>

export type Foodstuff = {
  id: string
  name: string
  subNames: string[]
  unit: {
    text?: string
    amount: number
  }
  nutrition: Nutrition
}
