const productsController = require('./productsController'); // Importar el controlador de productos
const { Pool } = require("pg");
const { credenciales } = require("../db/credentials");

const pool = new Pool(credenciales);

const { obtenerProducto, agregarproducto, modificarlikes } = require('./nombre-del-archivo'); // Importar el archivo con las funciones a probar

describe('Pruebas unitarias para obtenerProducto', () => {
  test('Debe retornar un array de productos', async () => {
    const productos = await obtenerProducto();
    expect(Array.isArray(productos)).toBe(true);
  });

  test('Debe lanzar un error cuando falla la conexión con la base de datos', async () => {
    jest.spyOn(pool, 'query').mockRejectedValueOnce(new Error('Ha fallado la conexión con los datos'));

    await expect(obtenerProducto()).rejects.toThrow('Ha fallado la conexión con los datos');
  });
});

describe('Pruebas unitarias para agregarproducto', () => {
  test('Debe agregar un producto a la base de datos', async () => {
    const sku = '1234';
    const nombre_producto = 'Producto de prueba';
    const descripcion_producto = 'Descripción de prueba';
    const precio = 1000;
    const imagen = 'imagen-de-prueba.jpg';

    const result = await agregarproducto(sku, nombre_producto, descripcion_producto, precio, imagen);

    expect(result.rowCount).toBe(1);
  });

  test('Debe lanzar un error cuando falla la consulta', async () => {
    jest.spyOn(pool, 'query').mockRejectedValueOnce(new Error('Ha fallado la consulta'));

    await expect(agregarproducto('', '', '', '')).rejects.toThrow('Ha fallado la consulta');
  });
});

describe('Pruebas unitarias para modificarlikes', () => {
  test('Debe modificar un producto en la base de datos', async () => {
    const sku = '5678';
    const nombre_producto = 'Producto modificado';
    const descripcion_producto = 'Descripción modificada';
    const precio = 2000;
    const imagen = 'imagen-modificada.jpg';
    const id = 1;

    const result = await modificarlikes(sku, nombre_producto, descripcion_producto, precio, imagen, id);

    expect(result.rowCount).toBe(1);
  });

  test('Debe lanzar un error cuando no se encuentra un producto con el id dado', async () => {
    jest.spyOn(pool, 'query').mockResolvedValueOnce({ rowCount: 0 });

    await expect(modificarlikes('', '', '', '', '', 1)).rejects.toEqual({ code: 404, message: 'No existe ningún producto con este id' });
  });

  test('Debe lanzar un error cuando falla la consulta', async () => {
    jest.spyOn(pool, 'query').mockRejectedValueOnce(new Error('Ha fallado la consulta'));

    await expect(modificarlikes('', '', '', '', '', '')).rejects.toThrow('Ha fallado la consulta');
  });
});

