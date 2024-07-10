import "../App.css";
const ShowBookshelf = function ({ books }) {
	return (
		<>
			<div key={books.id} className="bookCardsDiv">
				{books.map((book) => {
					return (
						<div key={book.id} className="bookCard">
							<h4>{book.title}</h4>
              <p>{book.author}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShowBookshelf;
