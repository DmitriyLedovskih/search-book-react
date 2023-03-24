import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Book from "./pages/Book";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
