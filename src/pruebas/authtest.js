const { login, getUser } = require('./auth');

describe('login', () => {
  it('should return true for valid credentials', () => {
    const result = login('username', 'password');
    expect(result).toBe(true);
  });

  it('debe devolver falso para credenciales no válidas', () => {
    const result = login('invalid', 'credentials');
    expect(result).toBe(false);
  });
});

describe('getUser', () => {
  it('debe devolver el objeto de usuario para un usuario autenticado', () => {
    const user = getUser('username', 'password');
    expect(user).toEqual({ username: 'username' });
  });

  it('debe devolver nulo para un usuario no autenticado', () => {
    const user = getUser('invalid', 'credentials');
    expect(user).toBeNull();
  });
});

//En este ejemplo, se utilizan dos funciones del archivo `auth.js`, `login` y `getUser`. 
//Se crean dos bloques de pruebas, uno para cada función. Dentro de cada bloque, 
//se definen diferentes casos de prueba utilizando la función `it`, donde se espera el resultado correcto utilizando el objeto de aserción `expect`. 
//Por ejemplo, en el primer caso de prueba de `login`, se espera que la función retorne `true` para credenciales válidas, 
//mientras que en el segundo caso se espera que retorne `false` para credenciales inválidas.