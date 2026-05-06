import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function fetchJokes() {
      setStatus("loading");

      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomjokes"
        );

        if (!response.ok) {
          throw new Error(
            `Fetch error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        // API structure same type → nested
        const items = data?.data?.data ?? [];

        setJokes(items);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    fetchJokes();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>😂 Jokes Viewer</h1>

      {status === "loading" && <p>Jokes are loading...</p>}
      {status === "error" && <p>Something went wrong...</p>}

      {status === "success" && (
        <div className="Quotes-container">
          {jokes.map((joke) => (
            <div key={joke.id} className="quote-card">
              <h3>Joke #{joke.id}</h3>
               <p>{joke.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;