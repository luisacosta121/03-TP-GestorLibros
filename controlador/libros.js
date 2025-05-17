import Servicio from "../servicio/libros.js";

class Controlador {
    #servicio

    constructor() {
        this.#servicio = new Servicio()
    }

  obtenerLibros = (req, res) => {
    const { id } = req.params;
    const libros = this.#servicio.obtenerLibros(id);
    res.json(libros);
  };

  guardarLibro = (req, res) => {
    const libro = req.body;
    const libroGuardado = this.#servicio.guardarLibro(libro);
    res.json(libroGuardado);
  };
  actualizarLibro = (req, res) => {
    const { id } = req.params;
    const libro = req.body;
    const libroActualizado = this.#servicio.actualizarLibro(id, libro);
    res
      .status(libroActualizado ? 200 : 404)
      .json(libroActualizado ? libroActualizado : {});
  };
  borrarLibro = (req, res) => {
    const { id } = req.params;
    const libroEliminado = this.#servicio.borrarLibro(id);
    res
      .status(libroEliminado ? 200 : 404)
      .json(libroEliminado ? libroEliminado : {});
  };
}

export default Controlador;

