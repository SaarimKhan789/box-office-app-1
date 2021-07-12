import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  let isMount = true;

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMount) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMount) {
          setError(err.message);
          isLoading(false);
        }
      });

    return () => {
      isMount = false;
    };
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }

  return <div>This is show</div>;
};
export default Show;
