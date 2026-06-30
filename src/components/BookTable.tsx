import type { Book } from "../types/book";

type Props = {
  book: Book;
  category: string;
};

function BookTable({ book, category }: Props) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{category}</td>
      <td>¥{book.price.toLocaleString()}</td>
    </tr>
  );
}

export default BookTable;
