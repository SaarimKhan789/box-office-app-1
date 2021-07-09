import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => (
  <div>
    {data.map(({ person }) => (
      <ActorCard
        key={person.id}
        id={person.id}
        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        name={person.name}
        gender={person.gender}
        country={person.country}
        brithday={person.brithday}
        deathday={person.deathday}
        // image, name, gender, country, birthday, deathday
      />
    ))}
  </div>
);

export default ActorGrid;
