import React, { Fragment, useState, useEffect } from 'react';

export default function ResultsPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = new URLSearchParams(window.location.search);
      const filter = url.get('filter');
      const response = await fetch(`/api/filter-data?filter=${filter}`);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading results...</p>
      ) : data && (
        <div>
          {/* Display the fetched results here */}
          {/* ... */}
        </div>
      )}
    </>
  );
}