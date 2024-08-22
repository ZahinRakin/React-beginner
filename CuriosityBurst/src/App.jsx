import Book from "./Books.jsx";
import RenderList from './RenderList.jsx';

function App() {
  const book = [];
  book[0] = new Book('Harry Potter', 'J. K. Rowling', '9780545069670');
  book[1] = new Book('One Piece', 'Echiro Oda', '48205830353320');
  book[2] = new Book("Naruto", "Masasi Kishimoto", "2953495086688");
  book[3] = new Book('Game Of Thrones', 'Tolkein', '6840006840048');
  book[4] = new Book('One Piece', 'Echiro Oda', '135260684p684');
  book[5] = new Book("Naruto", "Masasi Kishimoto", "5368869536048");
  book[6] = new Book('Game Of Thrones', 'Tolkein', '3536893896938');
  book[7] = new Book('One Piece', 'Echiro Oda', '58386038603867');
  book[8] = new Book("Naruto", "Masasi Kishimoto", "58596839684058");
  book[9] = new Book('Game Of Thrones', 'Tolkein', '35306830688396');

  return (
    <>
      <RenderList category="Books" items={book}/>
    </>
  )
}

export default App
