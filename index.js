//1. servdor
// importar módulo express
const express = require("express");

// crear un objeto servidor
const servidor = express();

// activar el servidor en el puerto 3000
// método listen: tiene 2 parámetros: un puerto y una función para dar un mensaje
servidor.listen(3000,
    function () {
        console.log("Servidor activo");
    }
);

// Definir que entienda formato json y html
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

//para permitir acceso desde otros puertos
//lo instalamos con:npm install cors
const cors = require("cors");
servidor.use(cors());

// importar módulo MySQL
const mysql = require("mysql2");

// crear la conexión a MySQL
var conexion = mysql.createConnection({
    host: "mysql-bocajuniors-bocajuniorsfacu.d.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_j3wAY8iRlR49mDRrab4",
    database: "bocajuniors",
    port: 15780
});

// avisar si hay error
conexion.connect(
    function (err) {
        if (err)
            console.log(err.message);
        else
            console.log("Conectado!");
    }
);

// responder al post del boton, la URL es /ingresar
// el método POST tiene 2 parámetros: la URL y la función que atiende la solicitud
servidor.post("/ingreso",
    function (req, respuesta) {
        // leer el body completo
        const datos = req.body;

        // leer datos del formulario usando la propiedad "name"
        let nombre = datos.nombre;
        let contrasenia = datos.pwd;

        // escribir un query
        const sql = "SELECT * FROM usuarios where nombreusuario=? and contrasenia=?";

        // ejecutar el query con los datos leídos como parámetros
        conexion.query(sql, [nombre, contrasenia],
            function (err, lista) {
                if (err)
                    respuesta.send(err.message);
                else
                    if (lista.length == 1) {
                        respuesta.send("Datos correctos");
                        //respuesta.redirect("http://localhost:5500/******.html");  // muestra otro html
                    }
                    else {
                        respuesta.send("Usuario o contraseña incorrectos");
                    }
            }
        );
    }
)

servidor.post("/listar",
    function (req, respuesta) {
        // escribir un query
        const sql = "SELECT * FROM *******";

        // ejecutar el query con parámetros
        conexion.query(sql,
            function (err, lista) {
                if (err)
                    respuesta.send(err.message);
                else
                    respuesta.send(lista);
            }
        );
    }
)

servidor.post("/guardar",
    function (req, respuesta) {
        // escribir el query para insertar
        const sql = "insert into usuarios (codigo , descripcion , precio , imagen) values (?,?,?,?)";

        // leer datos del formulario
        let { codigo, descripcion, precio, imagen } = req.body;

        // ejecutar el query con esos parámetros
        conexion.query(sql, [codigo, descripcion, precio, imagen],
            function (error) {
                if (error)
                    respuesta.send(error.message);
                else
                    respuesta.send("Dato insertado correctamente");
            });

    }
)

//responde ala peticion /articulos
servidor.get("/articulos",
    function (req, respuesta) {
        // escribir un query con lo que queremos como respuesta
        const sql = "SELECT * FROM articulos";
        // ejecutar el query sin parámetros
        conexion.query(sql,
            function (err, lista) {
                if (err)
                    respuesta.send(err.message);
                else
                    respuesta.send(lista);

            }
        );
    }
)

servidor.get("/articulosdelrubro",
    function (req, respuesta) {
        // el parámetro rubro está en la urldel requerimiento, lo averiguo con un query
        let rubro = req.query.rubro;
        // escribir un querycon lo que queremos como respuesta
        const sql = "SELECT * FROM articulos where idrubro=?";
        // ejecutar el querysinparámetros
        conexion.query(sql, [rubro],
            function (err, lista) {
                if (err)
                    respuesta.send(err.message);
                else
                    respuesta.send(lista);
            }
        );
    }
)