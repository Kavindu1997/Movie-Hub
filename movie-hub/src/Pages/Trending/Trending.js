import React,{ useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import "./Trending.css";

const Trending = () => {
    const [content, setContent] = useState([]);


    const fetchTrending = async () => {
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/trending/all/day?api_key=08e1abc6768a765341b7a73fcb22d4bd"
        );
   // console.log(data);
      setContent(data.results);
      };

      useEffect(() => {
        //window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
      }, []);
    return (
        <div>
              <span className="pageTitle">Trending</span>
              <div className="trending">
                      {content && content.map((c) => (
                          <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                          />
                        ))}
              </div>
        </div>
    );
};

export default Trending;

