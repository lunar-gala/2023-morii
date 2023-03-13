import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FILTERS } from '../assets/lines';

function Filter() {
  const { id } = useParams();

  useEffect(() => {
    window.location.href = FILTERS[id];
  }, []);
  return <></>;
}

export default Filter;
