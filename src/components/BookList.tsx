import type { Book, Category } from "../types/book";
import BookTable from "./BookTable";

type Props = {
  books: Book[];
  categories: Category[];
};

function BookList({ books, categories }: Props) {
  const getCategory = (categoryId: number) => {
    const category = categories.find((category) => category.id === categoryId);
    return category?.name ?? "未分類";
  };

  if (books.length === 0) {
    return <p>書籍がありません</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>著者</th>
          <th>カテゴリ</th>
          <th>価格</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <BookTable
            key={book.id}
            book={book}
            category={getCategory(book.categoryId)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
