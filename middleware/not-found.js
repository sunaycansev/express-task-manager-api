const notFound = (req, res) => {
  res.status(404).send(`<h1>404 - Not Found</h1>`);
};

export default notFound;
