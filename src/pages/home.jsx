import { useEffect, useState } from "react";
import { getTrendingMovies, getPopularMovies } from "../utils/api";
import Preloader from "../components/Preloader/Preloader";
import Carrusel from "../components/Carrusel/Carrusel";
import MovieGrid from "../components/MovieGrid/MovieGrid";


function Home() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getTrendingMovies(), getPopularMovies()])
      .then(([trendingRes, popularRes]) => {
        setTrending(trendingRes.data.results);
        setPopular(popularRes.data.results);
      })
      .catch((err) => {
        console.error("Error cargando películas:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main>
      <section>
        <Carrusel movies={trending} />
      </section>

      <section>
        <MovieGrid movies={popular} />
      </section>
    </main>
  );
}

export default Home;

