import React from 'react';
import useFetch from "use-http";
import {Link} from "react-router-dom";

export default function Dashboard() {
  const { data } = useFetch("api/v1/dbrevs", {}, []);

  return (
    <div>
      <ul>
        {
          data && data.map(dbrev => {
            const id = dbrev.streak.split("|").join("");
            return (
              <li key={id}><Link to={`/db/${id}`}>{id}</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}