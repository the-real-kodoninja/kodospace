export default async function handler(req, res) {
  const filter = req.query.filter;
  // Replace with your logic to fetch data based on the filter
  const fetchedData = await fetch(`your-external-api/${filter}`); // Example using an external API
  const data = await fetchedData.json();
  res.status(200).json(data);
}