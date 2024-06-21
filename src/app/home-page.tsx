import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home-page.scss";

export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  return (
    
    <div className="home-page">
      <img src="/logo2.jpg" alt="Logo" className="app-logo" />
      <h1>Films</h1>
      <h2>Studio Ghibli, founded in 1985 by Hayao Miyazaki and Isao Takahata, is a renowned Japanese animation film studio known for its captivating storytelling, breathtaking animation, and memorable characters. The studio has produced numerous beloved films that have captured the hearts of audiences worldwide. Dive into the magical worlds created by Studio Ghibli. From the enchanting forests of "My Neighbor Totoro" to the bustling bathhouse in "Spirited Away," each film offers a unique journey filled with wonder, adventure, and profound messages. Click on a film to learn more about its story.</h2><br></br>

      <div className="films-container">
        {films.map((film) => (
          <div
            key={film.id}
            className="film-item"
            onClick={() => handleNavigate(film.id)}
          >
            <img src={film.image} alt={film.title} className="film-image" />
            <div className="film-details">
              <p className="film-title">{film.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;