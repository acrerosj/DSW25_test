const { test, expect } = require('@playwright/test');
const URL = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.1.php";

test.describe('ej1.1.1', () => {
  test('Debería estar "hola mundo" en la página', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('text=hola mundo')).toBeVisible();
  });

  test('El texto "hola mundo" debe estar dentro de un h1', async ({ page }) => {
    await page.goto(URL);
    const h1 = page.locator('h1', { hasText: 'hola mundo' });
    await expect(h1).toBeVisible();
  });
});

test.describe('ej1.1.2', () => {
  const URL_EJ2 = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.2.php";

  test('Debería mostrar el mensaje sobre la bebida y la edad', async ({ page }) => {
    await page.goto(URL_EJ2);
    const expectedText = "Al profe le gusta el ron Arehucas con 18 años en barrica";
    await expect(page.locator(`text=${expectedText}`)).toBeVisible();
  });

  test('El mensaje debe estar dentro de un h2', async ({ page }) => {
    await page.goto(URL_EJ2);
    const expectedText = "Al profe le gusta el ron Arehucas con 18 años en barrica";
    const h2 = page.locator('h2', { hasText: expectedText });
    await expect(h2).toBeVisible();
  });
});

test.describe('ej1.1.3', () => {
  const URL_EJ3 = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.3.php";

  test('Debería mostrar la versión de PHP', async ({ page }) => {
    await page.goto(URL_EJ3);
    await expect(page.locator('text=Versión de PHP: 8.4')).toBeVisible();
  });

  test('Debería mostrar el modo de test', async ({ page }) => {
    await page.goto(URL_EJ3);
    await expect(page.getByText('Test mode: ')).toBeVisible();
    
  });

  test('El modo test es falso, por tanto, no debe mostrar "1"', async ({ page }) => {
    await page.goto(URL_EJ3);
    await expect(page.getByText('Test mode: ', { exact: true })).toBeVisible();
    
  });

  test('El mensaje de la versión debe estar dentro de un párrafo', async ({ page }) => {
    await page.goto(URL_EJ3);
    const p = page.locator('p', { hasText: 'Versión de PHP: 8.4' });
    await expect(p).toBeVisible();
  });

  test('El mensaje del modo de test debe estar dentro de un párrafo', async ({ page }) => {
    await page.goto(URL_EJ3);
    const p = page.locator('p', { hasText: /^Test mode: / });
    await expect(p).toBeVisible();
  });
});

test.describe('ej1.1.4', () => {
  const URL_EJ4 = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.4.php";

  test.beforeEach(async ({ page }) => {
    await page.goto(URL_EJ4);
  });

  // Tests for the integer variable
  test('Debería mostrar el valor del entero', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Valor: 10,/ })).toBeVisible();
  });

  test('Debería mostrar el tipo del entero', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Tipo: integer/ })).toBeVisible();
  });

  test('El entero debe estar en un li dentro de un ul', async ({ page }) => {
    const li = page.locator('ul > li', { hasText: 'Valor: 10, Tipo: integer' });
    await expect(li).toBeVisible();
  });

  // Tests for the float variable
  test('Debería mostrar el valor del flotante', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Valor: 10.5,/ })).toBeVisible();
  });

  test('Debería mostrar el tipo del flotante', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Tipo: double/ })).toBeVisible();
  });

  test('El flotante debe estar en un li dentro de un ul', async ({ page }) => {
    const li = page.locator('ul > li', { hasText: 'Valor: 10.5, Tipo: double' });
    await expect(li).toBeVisible();
  });

  // Tests for the string variable
  test('Debería mostrar el valor de la cadena', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Valor: PHP,/ })).toBeVisible();
  });

  test('Debería mostrar el tipo de la cadena', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Tipo: string/ })).toBeVisible();
  });

  test('La cadena debe estar en un li dentro de un ul', async ({ page }) => {
    const li = page.locator('ul > li', { hasText: 'Valor: PHP, Tipo: string' });
    await expect(li).toBeVisible();
  });

  // Tests for the boolean variable
  test('Debería mostrar el valor del booleano (false)', async ({ page }) => {
    // echo false results in an empty string
    await expect(page.locator('li', { hasText: /Valor: 1,/ })).toBeVisible();
  });

  test('Debería mostrar el tipo del booleano', async ({ page }) => {
    await expect(page.locator('li', { hasText: /Tipo: boolean/ })).toBeVisible();
  });

  test('El booleano debe estar en un li dentro de un ul', async ({ page }) => {
    const li = page.locator('ul > li', { hasText: 'Valor: 1, Tipo: boolean' });
    await expect(li).toBeVisible();
  });
});

test.describe('ej1.1.5', () => {
  const URL_EJ5 = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.5.php";

  test.beforeEach(async ({ page }) => {
    await page.goto(URL_EJ5);
  });

  test('Debería mostrar el entero convertido desde un float', async ({ page }) => {
    const div = page.locator('#entero1');
    await expect(div).toHaveText('int(99)');
  });

  test('Debería mostrar el entero convertido desde un string', async ({ page }) => {
    const div = page.locator('#entero2');
    await expect(div).toHaveText('int(50)');
  });

  test('Debería mostrar el booleano convertido desde cero', async ({ page }) => {
    const div = page.locator('#booleano');
    await expect(div).toHaveText('bool(false)');
  });
});
test.describe('ej1.1.6', () => {
  const URL_EJ6 = "http://localhost:8080/tema1/ej1.1.variables/ej1.1.6.php";

  test.beforeEach(async ({ page }) => {
    await page.goto(URL_EJ6);
  });

  test('Debería mostrar la información de la variable de tipo string', async ({ page }) => {
    await expect(page.getByText('string(14) "Teclado Gaming"')).toBeVisible();
  });

  test('Debería mostrar la información de la variable de tipo float', async ({ page }) => {
    await expect(page.getByText('float(75.99)')).toBeVisible();
  });

  test('Debería mostrar la información del array asociativo', async ({ page }) => {
    // var_dump for arrays can have variable whitespace, so we check for the essential parts.
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('array(2)');
    expect(bodyText).toContain('["tema"]=>');
    expect(bodyText).toContain('string(6) "oscuro"');
    expect(bodyText).toContain('["idioma"]=>');
    expect(bodyText).toContain('string(2) "es"');
  });
});

