import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss";

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => {
        // Simulate adding a price to each film
        const filmData = response.data;
        filmData.price = "$19.99"; // Add price manually or fetch it from a real source
        setFilmDetails(filmData);
      });
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  const handleAddToCart = () => {
    alert("The film has been added to cart.");
  };

  return (
    <div className="about-page">
      <form className="about-form">
        {filmDetails?.movie_banner && (
          <img
            src={filmDetails.movie_banner}
            alt={filmDetails.title}
            className="film-movie-banner"
          />
        )}
        <h1>{filmDetails?.title}</h1>
        <div className="film-content">
          {filmDetails?.image && (
            <div className="film-image-container">
              <img
                src={filmDetails.image}
                alt={filmDetails.title}
                className="film-image"
              />
              <p className="film-price">{filmDetails?.price}</p>
            </div>
          )}
          <div className="film-details">
            <h2>Release Date: {filmDetails?.release_date}</h2>
            <h3>Director: {filmDetails?.director}</h3>
            <h3>Original Title: {filmDetails?.original_title}</h3>
            <h3>Romanised Title: {filmDetails?.original_title_romanised}</h3>
            <h3>Running Time: {filmDetails?.running_time}</h3>
            <h3>Audience Score: {filmDetails?.rt_score}</h3>
            <p>{filmDetails?.description}</p>
          </div>
        </div>
        <button type="button" className="add-cart" onClick={handleAddToCart}>Add to Cart</button>
        <h2 className="go-back" onClick={handleBack}>Back</h2>
      </form>
    </div>
  );
}

export default AboutPage;
