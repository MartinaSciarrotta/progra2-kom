const localData = {
    usuario: {
      id: 1,
      nombre: "Carlos López",
      email: "carlos.lopez@gmail.com",
      contrasenia: "qwerty789",
      fotoPerfil: "carlos.jpeg"
    },
    
    productos: [
    {
      id: 1,
      imagenArchivo: "bmw_m3.jpg",
      nombreProducto: "BMW M3",
      descripcion: "Sedán deportivo con gran potencia y estilo.",
      usuario_id: 1,
      usuario_nombre: "brian"
    },
    {
      id: 2,
      imagenArchivo: "bmw_m2.jpg",
      nombreProducto: "BMW M2",
      descripcion: "Coupé compacto ágil y veloz.",
      usuario_id: 3,
      usuario_nombre: "brian"
    },
    {
      id: 3,
      imagenArchivo: "mercedes_a45s.jpg",
      nombreProducto: "Mercedes A45s",
      descripcion: "Hatchback AMG con alto rendimiento.",
      usuario_id: 5,
      usuario_nombre: "brian"
    },
    {
      id: 4,
      imagenArchivo: "mercedes_c63s.jpg",
      nombreProducto: "Mercedes C63s",
      descripcion: "Sedán AMG con motor potente.",
      usuario_id: 4,
      usuario_nombre: "brian"
    },
    {
      id: 5,
      imagenArchivo: "audi_s3.jpg",
      nombreProducto: "Audi S3",
      descripcion: "Compacto deportivo con tracción quattro.",
      usuario_id: 4,
      usuario_nombre: "brian"
    },
    {
      id: 6,
      imagenArchivo: "audi_rs3.jpg",
      nombreProducto: "Audi RS3",
      descripcion: "Versión extrema del A3, muy rápida.",
      usuario_id: 2,
      usuario_nombre: "brian"
    },
    {
      id: 7,
      imagenArchivo: "bmw_m5.jpg",
      nombreProducto: "BMW M5",
      descripcion: "Sedán de lujo con espíritu deportivo.",
      usuario_id: 3,
      usuario_nombre: "brian"
    },
    {
      id: 8,
      imagenArchivo: "audi_r8.jpg",
      nombreProducto: "Audi R8",
      descripcion: "Superdeportivo icónico con diseño agresivo.",
      usuario_id: 1,
      usuario_nombre: "brian"
    },
    {
      id: 9,
      imagenArchivo: "mercedes_g500.jpg",
      nombreProducto: "Mercedes G500",
      descripcion: "SUV clásico con lujo y fuerza.",
      usuario_id: 5,
      usuario_nombre: "brian"
    },
    {
      id: 10,
      imagenArchivo: "bmw_x5.jpg",
      nombreProducto: "BMW X5",
      descripcion: "SUV premium con espacio y confort.",
      usuario_id: 1,
      usuario_nombre: "brian"
    }
  ],
  comentarios: [
    {
        comentario: "hola",
        foto: "",
        nombreusuarioComento: "Luis"
    }
  ]
};

module.exports = localData;