// src/App.jsx
import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import ShowBookshelf from "./components/ShowBookshelf";

const App = () => {
	//set states for books and newBook
	const [books, setBooks] = useState([
		{ title: "Fourth Wing", author: "Rebecca Yarros" },
		{ title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
		{ title: "There and Back Again", author: "Philip" },
	]);
	const [newBook, setNewBook] = useState({ title: "", author: "" });

	//trigger when input field is changed
	function handleInputChange(event) {
		setNewBook({ ...newBook, [event.target.name]: event.target.value });
	}
	//trigger when submit is clicked
	function handleSubmit(event) {
		event.preventDefault();

		setBooks([...books, newBook]);
		setNewBook({ title: "", author: "" });
	}

	return (
		<>
			<h1>Bookshelf</h1>

			<AddBook
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				newBook={newBook}
			/>
			<ShowBookshelf books={books} />
		</>
	);
};

export default App;
