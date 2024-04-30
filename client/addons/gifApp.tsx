import React from 'react';

function GifApp({ gifs }) {
  // Use the provided 'gifs' data here (fetched by getStaticPaths)
  return (
    <div>
      <GifPicker gifs={gifs} tenorApiKey={"2ccc56fc5eb0d0e4ba2781c99e457c41cf7b60f8"} />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch data to determine which paths to pre-render
  // Example: fetch categories of gifs
  const categories = await fetch('https://api.example.com/categories');
  const categoriesData = await categories.json();

  const paths = categoriesData.map(category => ({
    params: { category: category.slug },
  }));

  return {
    paths,
    fallback: false, // Adjust fallback behavior as needed
  };
}

export default GifApp;
