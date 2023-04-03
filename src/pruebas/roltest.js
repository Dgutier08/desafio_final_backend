const RolController = require('./rolController');

describe('RolController', () => {
  let rolController;

  beforeEach(() => {
    rolController = new RolController();
  });

  describe('list', () => {
    it('debe devolver una lista de roles', () => {
      const roles = rolController.list();
      expect(Array.isArray(roles)).toBe(true);
    });
  });

  describe('create', () => {
    it('debe crear un nuevo rol', () => {
      const roleName = 'Test Role';
      rolController.create(roleName);
      const roles = rolController.list();
      expect(roles.some(role => role.name === roleName)).toBe(true);
    });
  });

  describe('update', () => {
    it('debe actualizar un rol existente', () => {
      const roleName = 'Test Role';
      rolController.create(roleName);
      const newRoleName = 'Updated Test Role';
      rolController.update(roleName, newRoleName);
      const roles = rolController.list();
      expect(roles.some(role => role.name === roleName)).toBe(false);
      expect(roles.some(role => role.name === newRoleName)).toBe(true);
    });
  });

  describe('delete', () => {
    it('debe eliminar un rol existente', () => {
      const roleName = 'Test Role';
      rolController.create(roleName);
      rolController.delete(roleName);
      const roles = rolController.list();
      expect(roles.some(role => role.name === roleName)).toBe(false);
    });
  });
});


//Explicación:**

//- Primero, requerimos el archivo `rolController.js` y definimos nuestra variable `RolController` que es una clase.
//- Luego, usamos `describe` para agrupar pruebas relacionadas juntas.
//- Usamos `beforeEach` para crear una nueva instancia de `RolController` antes de cada prueba (para comenzar con un estado limpio).
//- Dentro de cada grupo de prueba, definimos una tarea específica que estamos probando (`list`, `create`, `update` y `delete`).
//- Para cada tarea, escribimos una prueba que describe el comportamiento esperado.
//- Finalmente, ejecutamos una serie de expectativas para comprobar que el comportamiento esperado de cada tarea es correcto.
