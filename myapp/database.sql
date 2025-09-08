CREATE SCHEMA database1;
USE database1;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, 
    contrasena VARCHAR(100) NOT NULL,
    fotoPerfil VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    id_usuario INT UNSIGNED
);

INSERT INTO usuarios (email, contrasena, fotoPerfil, id_usuario) VALUES
    ('juan.perez@gmail.com', 'clave123', 'juan.jpg', 1),
    ('maria.garcia@gmail.com', 'pass456', 'maria.png', 2),
    ('carlos.lopez@gmail.com', 'qwerty789', 'carlos.jpeg', 3),
    ('ana.sanchez@gmail.com', 'abc123', 'ana.jpg', 4),
    ('lucas.fernandez@gmail.com', 'secreto987', 'lucas.png', 5);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,
    imagenArchivo VARCHAR(100) NOT NULL, 
    nombreProducto VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO productos (imagenArchivo, nombreProducto, descripcion, usuario_id) VALUES
    ('bmw_m3.jpg', 'BMW M3', 'Sedán deportivo con gran potencia y estilo.', 1),
    ('bmw_m2.jpg', 'BMW M2', 'Coupé compacto ágil y veloz.', 3),
    ('mercedes_a45s.jpg', 'Mercedes A45s', 'Hatchback AMG con alto rendimiento.', 5),
    ('mercedes_c63s.jpg', 'Mercedes C63s', 'Sedán AMG con motor potente.', 4),
    ('audi_s3.jpg', 'Audi S3', 'Compacto deportivo con tracción quattro.', 4),
    ('audi_rs3.jpg', 'Audi RS3', 'Versión extrema del A3, muy rápida.', 2),
    ('bmw_m5.jpg', 'BMW M5', 'Sedán de lujo con espíritu deportivo.', 3),
    ('audi_r8.jpg', 'Audi R8', 'Superdeportivo icónico con diseño agresivo.', 1),
    ('mercedes_g500.jpg', 'Mercedes G500', 'SUV clásico con lujo y fuerza.', 5),
    ('bmw_x5.jpg', 'BMW X5', 'SUV premium con espacio y confort.', 1);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_post INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    textoComentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_post) REFERENCES productos(id), 
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
); 

INSERT INTO comentarios (textoComentario, id_post, id_usuario) VALUES
    ('Excelente auto, gran comodidad.', 1, 2),
    ('Diseño muy imponente.', 1, 3),
    ('Muy potente en ruta.', 1, 4),
    ('Ideal para uso diario y familiar.', 2, 1),
    ('El motor responde increíble.', 2, 5),
    ('Compacto pero rápido.', 2, 3),
    ('La versión AMG es impresionante.', 3, 2),
    ('Muy buen sonido del escape.', 3, 4),
    ('Se siente muy deportivo.', 3, 5),
    ('Lujo y potencia juntos.', 4, 1),
    ('Un clásico de Mercedes.', 4, 2),
    ('Interior espectacular.', 4, 3),
    ('Buen equilibrio entre confort y deportividad.', 5, 4),
    ('Muy comodo.', 5, 1),
    ('Gran relación precio-calidad.', 5, 2),
    ('Gran aceleración.', 6, 3),
    ('De los mejores compactos deportivos.', 6, 5),
    ('El sonido del motor es único.', 6, 4),
    ('Perfecto para viajar cómodo y rápido.', 7, 1),
    ('Muy buen nivel de lujo.', 7, 2),
    ('Un sedán con carácter deportivo.', 7, 3),
    ('Superdeportivo soñado.', 8, 4),
    ('Diseño agresivo y elegante.', 8, 5),
    ('Siempre fue mi auto favorito.', 8, 2),
    ('Imponente en ciudad.', 9, 1),
    ('Mucha presencia, de mis auto favoritos.', 9, 3),
    ('La conducción es muy sólida.', 9, 5),
    ('Espacioso y cómodo para la familia.', 10, 2),
    ('Un SUV muy completo.', 10, 4),
    ('Ideal para viajes largos.', 10, 1);