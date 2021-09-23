import React from 'react';
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <div className="media">
               <Badge
                    badgeContent={vote_average}
                    color={vote_average > 6 ? "primary" : "error"}
               />
               <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title}  className="poster"/>
               <b className="title">{title}</b>
               <span className="subTitle">
                     {media_type === "tv" ? "TV Series" : "Movie"}
                      <span className="subTitle">{date}</span>
              </span>
              
        </div>
    );
};

export default SingleContent;