// TODO: この不可解な動作に関して理解する
// 参考：https://qiita.com/sugoroku_y/items/150b5e564ca4a8570e43
export const isArray = (arg: unknown): arg is readonly unknown[] => {
  return Array.isArray(arg)
}
