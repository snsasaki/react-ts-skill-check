# React + TypeScript スキルチェック課題 📚 書籍管理

React + TypeScript（Vite）で **書籍管理アプリ**を作るスキルチェックです。
「React基礎」「React+TS」「TypeScript基礎入門」で学んだ範囲（コンポーネント・props・useState/useEffect・
イベント・リスト/フィルタ・React Hook Form・fetch/axios・カスタムフック・型注釈/union/型ガード 等）で解けます。

- **想定時間**: 約 3〜4 時間（半日）
- **採点**: 各課題末尾の「✅ 自己採点チェックリスト」＋ 画面/DevTools での動作確認
- **進め方**: 課題ごとにブランチ → 実装 → Pull Request（画面スクショを添付）

---

## 1. 環境構築（最小手順）

Node.js 20 以上が必要です。

```bash
npm install
npm run dev        # http://localhost:5173 でスタート画面が開く
```

発展課題（API 通信）では、**別ターミナル**でモック API を起動します。

```bash
npm run mock       # http://localhost:3001 で json-server が起動
# 例: http://localhost:3001/books / http://localhost:3001/categories
```

### 用意済みのもの（スターター）
- Vite + React + TypeScript（`axios`・`react-hook-form` 導入済み）
- `db.json` … モック API のデータ（books 16 件 / categories 4 件）。`npm run mock` で配信
- `src/types/book.ts` … 型のスタブ（基礎課題で整える）
- `.env` … `VITE_API_BASE_URL=http://localhost:3001`（`import.meta.env.VITE_API_BASE_URL` で参照）
- Vitest 設定済み（追加課題のテスト用。`npm test`）

### よく使うコマンド
| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー（画面確認） |
| `npm run mock` | モック API（json-server） |
| `npm run build` | 型チェック＋本番ビルド（`tsc -b && vite build`） |
| `npm test` | テスト実行（追加課題） |

---

## 2. 基礎課題 ⭐ — 型設計 ＋ 一覧表示

**要件**
- `src/types/book.ts` に `Book` / `Category` の型を整える（`interface` または `type`。カテゴリ等にリテラル/union 型を使ってもよい）
- 書籍データ（最初は `db.json` の中身をコピーした定数や、用意した配列でよい）を **一覧表示**するコンポーネントを作る
- `map` でリスト描画（`key` を付ける）／ 0 件のときは「書籍がありません」を表示（条件付きレンダリング）
- 一覧の行コンポーネントを分け、**props で型付き**にデータを渡す

**✅ 自己採点チェックリスト**
- [ ] `Book` / `Category` 型が定義され、`any` を使っていない
- [ ] 一覧が表示され、`key` が設定されている
- [ ] 行コンポーネントを分け、props に型を付けている
- [ ] 0 件のときの表示がある

---

## 3. 応用課題 ⭐⭐ — CRUD（useState）＋ フィルタ ＋ 登録フォーム（RHF）

**要件**
- `useState` で書籍配列を管理し、**追加・削除・更新**ができる（この時点ではブラウザ内の状態だけでOK）
- **カテゴリで絞り込み**（フィルタUI。「すべて」＋各カテゴリ）
- **React Hook Form** で登録フォームを作る（`title`・`author`・`category`・`price`）
  - バリデーション（必須、`price` は数値）とエラーメッセージ表示
  - 送信すると一覧に追加される

**ヒント**
- フィルタ後の配列は state に持たず**計算で求める**（`books.filter(...)`）
- RHF: `useForm<BookInput>()` の `register` / `handleSubmit` / `formState.errors`
- イベントの型（`onChange` など）も適切に付ける

**✅ 自己採点チェックリスト**
- [ ] 追加・削除・（任意で）更新ができる
- [ ] カテゴリフィルタで表示が切り替わる
- [ ] フォームのバリデーションエラーが表示される
- [ ] 送信で一覧に反映される

---

## 4. 発展課題 ⭐⭐⭐ — モック API と通信（axios）＋ カスタムフック ＋ 型ガード

> 別ターミナルで `npm run mock` を起動してから取り組みます。

**要件**
- 起動時に `GET http://localhost:3001/books` から一覧を取得して表示（`useEffect` + axios/fetch）
- **ローディング表示**と**エラー表示**を実装
- 登録は `POST /books`、削除は `DELETE /books/:id` でモック API に反映する
- データ取得ロジックを **カスタムフック**（例: `useBooks`）に切り出す
- API レスポンスを **型ガード**で検証してから使う（`unknown` で受けて、`Book` の形か確認してから state にセット）

**ヒント**
- ベース URL は `import.meta.env.VITE_API_BASE_URL`
- json-server は `categoryId` を持つので `GET /books?_expand=category` でカテゴリを展開取得することも可能
- 型ガード例: `function isBook(v: unknown): v is Book { ... typeof チェック ... }`

**✅ 自己採点チェックリスト**
- [ ] 一覧が API から取得されて表示される
- [ ] ローディング/エラーの状態が画面に出る
- [ ] 登録・削除が API に反映され、画面も更新される
- [ ] 取得ロジックがカスタムフックに分離されている
- [ ] レスポンスを型ガードで検証している（`any` 任せにしない）

---

## 5. 追加課題（早く終わった人向け）

- **A. useContext**: フィルタ条件や書籍一覧をグローバル状態にして prop バケツリレーを解消
- **B. 検索＋デバウンス**: タイトル検索を付け、入力が止まってから API/フィルタを実行
- **C. Vitest**: 一覧コンポーネントやカスタムフックのテストを書く（`npm test`）
- **D. UI**: 並び替え（価格順）、ダークモード、簡単なスタイリング

---

## 6. 提出方法
1. 課題ごとにブランチ（例: `git switch -c kadai/basic`）
2. 実装 → コミット → Pull Request
3. PR 説明に **画面スクショ**（一覧・フォーム・API通信時の Network タブ等）と **自己採点チェックリストの結果** を貼る

---

## 7. 出題範囲について
学習済みの範囲（コンポーネント/props・useState/useEffect・イベント・リスト/フィルタ・React Hook Form・
fetch/axios・カスタムフック・useContext・型注釈/union/type・interface・型ガード/unknown・Vitest）で解けます。
React Router（ページ遷移）や Redux 等の状態管理ライブラリは使いません（単一画面で作ります）。
