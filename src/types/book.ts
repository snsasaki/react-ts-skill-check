// ★基礎課題: ここに Book / Category の型を定義します（README 参照）。
// 下は最低限のスタブです。必要なプロパティを追加・修正してください。
//
// ヒント:
//   - Category は id(number) と name(string)
//   - Book は id・title・author・price(number)・categoryId(number)
//   - カテゴリ名で絞り込むためのフィルタ値に union 型やリテラル型を使ってもよい
//   - 新規登録フォームの入力値だけをまとめた型（id を含まない）を別に定義すると便利

export type Category = {
  id: number
  name: string
}

export type Book = {
  id: number
  title: string
  author: string
  price: number
  categoryId: number
  // TODO: 必要に応じてプロパティを追加する
}

// 新規登録フォームの入力（id は採番されるので含めない例）
export type BookInput = {
  title: string
  author: string
  price: number
  categoryId: number
}
