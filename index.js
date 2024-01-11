const express = require("express");

const PORT = 5000;

const app = express();

const routerMovies = express.Router();

// 1. Crear un endpoint get que devuelva todas las películas.

routerMovies.get("/", (req, res) => {
  const movies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
    },
  ];
  console.log(req.params);
  res.send(movies);
});

// 2. Crear un endpoint get que devuelva una película según su _id

routerMovies.get("/id/:id", (req, res) => {
  const movies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
      id: 1,
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
      id: 2,
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
      id: 3,
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
      id: 4,
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
      id: 5,
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
      id: 6,
    },
  ];

  // normalmente todas las respuesta que me da rep.params son strings y yo lo estaba intentando comparar con un int (integer) por lo que me daba error
  let parametros = req.params.id;

  let movie = movies.find((elemnt) => elemnt.id == parametros);

  res.send(movie);
});

// 3.Crear un endpoint get que devuelva un valor por su titulo.

routerMovies.get("/title/:title", (req, res) => {
  const movies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
      id: 1,
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
      id: 2,
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
      id: 3,
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
      id: 4,
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
      id: 5,
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
      id: 6,
    },
  ];

  let parametros = req.params.title;

  let movie = movies.find((elemnt) => elemnt.title == parametros);

  res.send(movie);
});

// 4. Crear un endpoint get que devuelva los documentos según su género.

routerMovies.get("/genero/:genre", (req, res) => {
  const movies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
      id: 1,
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
      id: 2,
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
      id: 3,
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
      id: 4,
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
      id: 5,
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
      id: 6,
    },
  ];

  let parametros = req.params.genre;

  let movie = movies.filter((elemnt) => elemnt.genre == parametros);

  res.send(movie);
});

// 5. Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010.

routerMovies.get("/year", (req, res) => {
  const movies = [
    {
      title: "The Matrix",
      director: "Hermanas Wachowski",
      year: 1999,
      genre: "Acción",
      id: 1,
    },
    {
      title: "The Matrix Reloaded",
      director: "Hermanas Wachowski",
      year: 2003,
      genre: "Acción",
      id: 2,
    },
    {
      title: "Buscando a Nemo",
      director: "Andrew Stanton",
      year: 2003,
      genre: "Animación",
      id: 3,
    },
    {
      title: "Buscando a Dory",
      director: "Andrew Stanton",
      year: 2016,
      genre: "Animación",
      id: 4,
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción",
      id: 5,
    },
    {
      title: "50 primeras citas",
      director: "Peter Segal",
      year: 2004,
      genre: "Comedia romántica",
      id: 6,
    },
  ];

  console.log(req.params);

  let movie = movies.filter((elemnt) => elemnt.year > 2010);

  res.send(movie);
});

app.use("/movies", routerMovies);

app.listen(PORT, () => {
  console.log(`se ha iniciado el puerto: http://localhost:${PORT}`);
});
