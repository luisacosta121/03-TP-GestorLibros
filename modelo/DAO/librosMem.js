
class ModelMem {
  #libros;

  constructor() {
    this.#libros = [
      { id: "1", titulo: "Frankenstein", autor: "Mary Shelley", anio: 1818 },
      { id: "2", titulo: "Moby Dick", autor: "Herman Melville", anio: 1851 },
      { id: "3", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
    ];
  }

  obtenerLibros = () => this.#libros;

  obtenerLibro = (id) => {
    const libro = this.#libros.find((p) => p.id === id);
    return libro || {};
  };

  guardarLibro = (libro) => {
    libro.id = String(
      parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1
    );
    this.#libros.push(libro);
    return libro;
  };
  actualizarLibro = (id, libro) => {
    const index = this.#libros.findIndex((p) => p.id === id);
    if (index != -1) {
      const libroAnt = this.#libros[index];
      const libroAct = { ...libroAnt, ...libro };
      this.#libros.splice(index, 1, libroAct);
      return libroAct;
    } else {
      return null;
    }
  };

  borrarLibro = (id) => {
    const index = this.#libros.findIndex((p) => p.id === id);
    if (index != -1) {
      const libro = this.#libros.splice(index, 1)[0];
      return libro;
    } else {
      return null;
    }
  };
}

export default ModelMem;
