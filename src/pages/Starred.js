/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`shows/${showId}`));

      Promise.all(promises)
        .then(apiData =>
          apiData.map(show => ({
            show,
          }))
        )
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <MainPageLayout>
        {isLoading && <div>Loading Shows...</div>}
        {error && <div>Error : {error} </div>}
        {!isLoading && !shows && <div>No shows added</div>}
        {!isLoading && shows && !error && <ShowGrid data={shows} />}
      </MainPageLayout>
    </div>
  );
};

export default Starred;
