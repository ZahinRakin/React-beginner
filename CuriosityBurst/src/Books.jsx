class Book{
  constructor(name, author, ISBN) {
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
  }
  getInfo(){
    return(
      <div className="base">
        <div>
          <b>name</b>: {this.name}
        </div>
        <div>
          <b>author</b>: {this.author}
        </div>
        <div>
          <b>ISBN</b>: {this.ISBN}
        </div>
      </div>
    );
  }
}


export default Book;