import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Placeholder, Spinner } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  const [newsLoaded, setNewsLoaded] = useState(false);

  const [handleSearch, setHandleSearch] = useState("all");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${handleSearch}&apiKey=fbf946781b5a4fe3986c9fa7e3c09200`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setNewsLoaded(true);
      });
  }, [handleSearch]);
  return (
    <div className="App">
      <Header setHandleSearch={setHandleSearch} news={news} />
      {newsLoaded === false && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div className="news-container">
        {newsLoaded === false && Array.from({length: 3}).map(() =>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        )}
        {news.map((singleNews) => (
          <News singleNews={singleNews} />
        ))}
      </div>
    </div>
  );
}

// function newsLoaded(bool){
//   if(bool === false) {
//     return(
//       <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     )
//   }
// }

export default App;
