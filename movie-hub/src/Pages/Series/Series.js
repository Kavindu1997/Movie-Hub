import React from 'react';
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from '../../components/Genres';
import useGenre from "../../hooks/useGenre";
import axios from "axios";


const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=08e1abc6768a765341b7a73fcb22d4bd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
      }, [page,genreforURL]);
    return (
        <div>
              <span className="pageTitle">TV Series</span>
              <Genres
                    type="tv"
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setPage={setPage}
              />
               <div className="trending">
                        {content && content.map((c) => (
                            <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="tv"
                            vote_average={c.vote_average}
                            />
                        ))}
                </div>
                        {numOfPages > 1 && (
                            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                        )}
        </div>
    );
};

export default Series;