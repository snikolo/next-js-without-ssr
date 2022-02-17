import React from 'react';
import {useParams} from "react-router-dom";
import { useFetch } from "use-http";

export default function DbRev() {

  const params = useParams();
  const { data } = useFetch(`api/v1/dbrevs/${streakSlugtoID(params.streak)}`, {}, [params.streak]);
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

// eslint-disable-next-line no-shadow
export const streakSlugtoID = (streakSlug) => {
  if (!streakSlug) return null;
  const items = streakSlug.length / 8;
  const ids = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < items; index++) {
    ids.push(streakSlug.substr(index * 8, 8));
  }
  return ids.join("|");
};