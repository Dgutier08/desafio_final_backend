const ventasController = require('./ventasController');

describe('ventasController', () => {
  // Test Case 1
  test('debe devolver 200 si la venta se crea con éxito', async () => {
    const req = {\n body: {
        /* Agregue los datos necesarios para el cuerpo de la solicitud */
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    await ventasController.createVenta(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  // Test Case 2
  test('debe devolver 404 si no se encuentra la venta', async () => {
    const req = {
      params: {
        id: "/* Add an id that does not exist on the app */"
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    await ventasController.getVenta(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  // Test Case 3
  test('debería devolver 400 si el campo del nombre del cliente está vacío', async () => {
    const req = {
      body: {
        /* Agregar un cuerpo de solicitud incompleto */
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    await ventasController.createVenta(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

//Se deben completar los campos que se indican en los comentarios según los requerimientos del código.