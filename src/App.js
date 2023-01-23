import React, { useState, useEffect } from "react";
import Details from "./Details";
import paginate from "./utils";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);
  const [displayPeople, setDisplayPeople] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const people = await response.json();
    setPeople(paginate(people));
    setLoading(false);
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > people.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = people.length - 1;
      }
      return prevPage;
    });
  };

  useEffect(() => {
    if (loading) return;
    setDisplayPeople(people[page]);
  }, [loading, page]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Search Result"}</h1>
        <div className="underline"></div>
        <div className="section">
          {displayPeople.map((person) => {
            return <Details key={person.id} {...person} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {people.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
