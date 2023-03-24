import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import { setItems } from "../Redux/slices/cardSlice";

function Home() {
  const value = useSelector((state) => state.search.value);
  const sortType = useSelector((state) => state.filter.sortType);
  const category = useSelector((state) => state.filter.category);
  const items = useSelector((state) => state.card.items);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0);
  const API_KEY = "AIzaSyB5dXdMKV_X-kZZsfkQvvhBEhCosx15A0I";
  React.useEffect(() => {
    if (value) {
      setIsLoading(true);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}+${
          category !== "all" ? `subject:${category}` : ""
        }&orderBy=${sortType}&key=${API_KEY}&maxResults=30&startIndex=${startIndex}`,
        {
          "Content-Type": "application/json;charset=UTF-8",
        }
      )
        .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
        .then((data) => {
          setTotalItems(data.totalItems);
          dispatch(setItems(data.items));
          setIsLoading(false);
        });
    }
  }, [value, sortType, startIndex, category]);

  function onClickMore() {
    setStartIndex(startIndex + 30);
    dispatch(setItems([...items, ...items]));
  }
  return (
    <section className="cards">
      <h2 className="cards__title">
        {items && items.length !== 0
          ? `Found ${totalItems} results`
          : "What book are you looking for?"}
      </h2>
      {items && (
        <div className="cards__row">
          {isLoading
            ? [...new Array(30)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <Card key={item.id} data={item} />)}
        </div>
      )}
      {items && items.length !== 0 && items.length < totalItems && (
        <button
          className="button button_type_outline cards__more"
          type="button"
          onClick={onClickMore}
        >
          Load More
        </button>
      )}
    </section>
  );
}

export default Home;
