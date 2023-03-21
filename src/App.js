import React from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";
import Skeleton from "./components/Skeleton";

function App() {
  const value = useSelector((state) => state.search.value);
  const sortType = useSelector((state) => state.filter.sortType);
  const category = useSelector((state) => state.filter.category);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (value) {
      setIsLoading(true);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&subject:computers&orderBy=${sortType}&key=AIzaSyB5dXdMKV_X-kZZsfkQvvhBEhCosx15A0I&maxResults=40`
      )
        .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
    }
  }, [value, sortType, category]);
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="container">
          <section className="cards">
            <h2 className="cards__title">
              {data.length !== 0
                ? `Найдено ${data.totalItems} результат`
                : "Какую книгу ищете?"}
            </h2>
            <div className="cards__row">
              {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : data.length !== 0 &&
                  data.items.map((item) => <Card key={item.id} data={item} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
