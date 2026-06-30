import "./App.css";
import BookList from "./components/BookList";
import type { Book, Category } from "./types/book";

/**
 * スキルチェックのスタート地点です。
 * ここから README.md の課題に沿って、書籍管理アプリを実装していきます。
 *
 * 進め方の例:
 *   基礎: src/types/book.ts の型を整える → 一覧表示コンポーネントを作る
 *   応用: useState で CRUD・フィルタ・React Hook Form で登録フォーム
 *   発展: axios でモック API（npm run mock）と通信・カスタムフック・型ガード
 */

const categories: Category[] = [
  { id: 1, name: "技術書" },
  { id: 2, name: "小説" },
  { id: 3, name: "ビジネス" },
  { id: 4, name: "デザイン" },
];

const books: Book[] = [
  {
    id: 1,
    title: "はじめてのTypeScript",
    author: "山田 太郎",
    categoryId: 1,
    price: 2800,
  },
  {
    id: 2,
    title: "実践Reactフック",
    author: "鈴木 花子",
    categoryId: 1,
    price: 3200,
  },
  {
    id: 3,
    title: "型で考える設計",
    author: "田中 次郎",
    categoryId: 1,
    price: 3000,
  },
  {
    id: 4,
    title: "やさしいWeb API",
    author: "佐藤 三郎",
    categoryId: 1,
    price: 2600,
  },
];

function App() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>📚 書籍管理</h1>
      <BookList books={books} categories={categories} />
    </main>
  );
}

export default App;
