import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ListingComponent.css";

const ListingComponent = ({ documents }) => {
  return (
    <div className="row">
      {documents.map((document) => (
        <div class="column">
          <div
            class="card"
            style={{
              width: "18rem",
              backgroundImage: `url(${process.env.REACT_APP_HOST}/${document.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: 'relative'
            }}
          >
            <p className="title">{document.title}</p>
          </div>
        </div>
      ))}
      {documents.length === 0 &&
      <div className="no-data">
        <h1>No Data</h1>

      </div>
      }
    </div>
  );
};

export default ListingComponent;
