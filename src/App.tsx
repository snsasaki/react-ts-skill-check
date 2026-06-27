import './App.css'

/**
 * スキルチェックのスタート地点です。
 * ここから README.md の課題に沿って、書籍管理アプリを実装していきます。
 *
 * 進め方の例:
 *   基礎: src/types/book.ts の型を整える → 一覧表示コンポーネントを作る
 *   応用: useState で CRUD・フィルタ・React Hook Form で登録フォーム
 *   発展: axios でモック API（npm run mock）と通信・カスタムフック・型ガード
 */
function App() {
  return (
    <main style={{ maxWidth: 880, margin: '40px auto', padding: '0 16px', fontFamily: 'sans-serif' }}>
      <h1>📚 書籍管理 スキルチェック</h1>
      <p>
        <code>README.md</code> の課題に沿って、このアプリを実装してください。
        まずは <code>src/App.tsx</code> をこの画面から書き換えていきます。
      </p>
      <p style={{ color: '#888' }}>
        発展課題の API 通信を試すときは、別ターミナルで <code>npm run mock</code> を起動してください
        （<code>http://localhost:3001/books</code> が使えるようになります）。
      </p>
    </main>
  )
}

export default App
