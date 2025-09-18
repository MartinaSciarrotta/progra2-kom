const localData = {
  usuario: {
    id: 1,
    nombre: "Carlos López",
    email: "carlos.lopez@gmail.com",
    contrasenia: "qwerty789",
    fotoPerfil: "carlos.jpg"
  },
  productos: [
    // Audi
    {
      id: 1,
      imagenArchivo: "s3.png",
      nombreProducto: "Audi S3",
      descripcion: "Compacto deportivo con tracción quattro.",
      usuario_id: 4,
      usuario_nombre: "Carlos"
    },
    {
      id: 2,
      imagenArchivo: "rs3.png",
      nombreProducto: "Audi RS3",
      descripcion: "Versión extrema del A3, muy rápida.",
      usuario_id: 2,
      usuario_nombre: "Brian"
    },
    {
      id: 3,
      imagenArchivo: "s5.png",
      nombreProducto: "Audi S5",
      descripcion: "Coupé deportivo con estilo.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 4,
      imagenArchivo: "a6allroad.png",
      nombreProducto: "Audi A6 Allroad",
      descripcion: "Versión off-road del A6.",
      usuario_id: 4,
      usuario_nombre: "Brian"
    },
    {
      id: 5,
      imagenArchivo: "rsq3.jpg",
      nombreProducto: "Audi RSQ3",
      descripcion: "SUV deportivo con un diseño impresionante.",
      usuario_id: 2,
      usuario_nombre: "Carlos"
    },
    {
      id: 6,
      imagenArchivo: "q7.png",
      nombreProducto: "Audi Q7",
      descripcion: "SUV grande y de lujo con capacidad para siete personas.",
      usuario_id: 1,
      usuario_nombre: "Maria"
    },
    {
      id: 7,
      imagenArchivo: "rsq8.png",
      nombreProducto: "Audi RSQ8",
      descripcion: "SUV de lujo con alto rendimiento.",
      usuario_id: 5,
      usuario_nombre: "Carlos"
    },
    {
      id: 8,
      imagenArchivo: "q8.png",
      nombreProducto: "Audi Q8",
      descripcion: "SUV premium con diseño moderno.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 9,
      imagenArchivo: "sq5.png",
      nombreProducto: "Audi SQ5",
      descripcion: "SUV deportivo con motor potente.",
      usuario_id: 4,
      usuario_nombre: "Maria"
    },
    {
      id: 10,
      imagenArchivo: "r8.png",
      nombreProducto: "Audi R8",
      descripcion: "Superdeportivo icónico con diseño agresivo.",
      usuario_id: 1,
      usuario_nombre: "Brian"
    },

    // BMW
    {
      id: 11,
      imagenArchivo: "m3.png",
      nombreProducto: "BMW M3",
      descripcion: "Sedán deportivo con gran potencia y estilo.",
      usuario_id: 1,
      usuario_nombre: "Brian"
    },
    {
      id: 12,
      imagenArchivo: "m2.png",
      nombreProducto: "BMW M2",
      descripcion: "Coupé compacto ágil y veloz.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 13,
      imagenArchivo: "140.png",
      nombreProducto: "BMW 140",
      descripcion: "Hatchback compacto con gran desempeño.",
      usuario_id: 2,
      usuario_nombre: "Pedro"
    },
    {
      id: 14,
      imagenArchivo: "240.png",
      nombreProducto: "BMW 240",
      descripcion: "Coupé compacto con diseño deportivo.",
      usuario_id: 5,
      usuario_nombre: "Maria"
    },
    {
      id: 15,
      imagenArchivo: "m5.png",
      nombreProducto: "BMW M5",
      descripcion: "Sedán de lujo con espíritu deportivo.",
      usuario_id: 3,
      usuario_nombre: "Brian"
    },
    {
      id: 16,
      imagenArchivo: "x1.png",
      nombreProducto: "BMW X1",
      descripcion: "SUV compacto de lujo.",
      usuario_id: 2,
      usuario_nombre: "Brian"
    },
    {
      id: 17,
      imagenArchivo: "x2.png",
      nombreProducto: "BMW X2",
      descripcion: "SUV deportivo con diseño moderno.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 18,
      imagenArchivo: "x3.png",
      nombreProducto: "BMW X3",
      descripcion: "SUV intermedio con grandes características.",
      usuario_id: 4,
      usuario_nombre: "Pedro"
    },
    {
      id: 19,
      imagenArchivo: "x5.png",
      nombreProducto: "BMW X5",
      descripcion: "SUV premium con espacio y confort.",
      usuario_id: 1,
      usuario_nombre: "Juan"
    },
    {
      id: 20,
      imagenArchivo: "x7.png",
      nombreProducto: "BMW X7",
      descripcion: "SUV de lujo con 7 plazas.",
      usuario_id: 5,
      usuario_nombre: "Maria"
    },

    // Mercedes Benz
    {
      id: 21,
      imagenArchivo: "A45s.png",
      nombreProducto: "Mercedes Benz A45s",
      descripcion: "Hatchback AMG con alto rendimiento.",
      usuario_id: 5,
      usuario_nombre: "Brian"
    },
    {
      id: 22,
      imagenArchivo: "c63s.png",
      nombreProducto: "Mercedes Benz C63s",
      descripcion: "Sedán AMG con motor potente.",
      usuario_id: 4,
      usuario_nombre: "Juan"
    },
    {
      id: 23,
      imagenArchivo: "e450.png",
      nombreProducto: "Mercedes Benz E450",
      descripcion: "Sedán elegante con tecnología avanzada.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 24,
      imagenArchivo: "slc43.png",
      nombreProducto: "Mercedes Benz SLC43",
      descripcion: "Coupé convertible de lujo.",
      usuario_id: 2,
      usuario_nombre: "Brian"
    },
    {
      id: 25,
      imagenArchivo: "s500.png",
      nombreProducto: "Mercedes Benz S500",
      descripcion: "Sedán de lujo con gran comodidad.",
      usuario_id: 1,
      usuario_nombre: "Brian"
    },
    {
      id: 26,
      imagenArchivo: "cle53.png",
      nombreProducto: "Mercedes Benz CLE53",
      descripcion: "Coupé deportivo de gran desempeño.",
      usuario_id: 4,
      usuario_nombre: "Juan"
    },
    {
      id: 27,
      imagenArchivo: "g500.png",
      nombreProducto: "Mercedes Benz G500",
      descripcion: "SUV clásico con lujo y fuerza.",
      usuario_id: 5,
      usuario_nombre: "Juan"
    },
    {
      id: 28,
      imagenArchivo: "gle63.png",
      nombreProducto: "Mercedes Benz GLE63",
      descripcion: "SUV de gran rendimiento y lujo.",
      usuario_id: 3,
      usuario_nombre: "Pedro"
    },
    {
      id: 29,
      imagenArchivo: "glc43.png",
      nombreProducto: "Mercedes Benz GLC43",
      descripcion: "SUV compacto con motor potente.",
      usuario_id: 2,
      usuario_nombre: "Maria"
    },
    {
      id: 30,
      imagenArchivo: "gla250.png",
      nombreProducto: "Mercedes Benz GLA250",
      descripcion: "SUV compacto con tecnología avanzada.",
      usuario_id: 1,
      usuario_nombre: "Maria"
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
