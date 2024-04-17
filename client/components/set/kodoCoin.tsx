import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

export default function KodoCoin() {
  const [data, setData] = useState({ description: '', coming: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/set/kodoCoin.py')
      .then(response => {
        setData({ description: response.data.description, coming: response.data.coming });
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Fragment>
      <p>{data.description}</p>
      <p>{data.coming}</p>
    </Fragment>
  );
}