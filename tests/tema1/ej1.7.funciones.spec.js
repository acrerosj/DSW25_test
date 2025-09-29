import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.7.funciones/";

test.describe('Ejercicio 1: Saludo personalizado', () => {
  const URL = PATH + 'ej1.7.1.php';

  test.beforeEach(async ({ page }) => {
      await page.goto(URL);
  });

  test('debe mostrar un saludo personalizado con un nombre en el primer h1', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toHaveText('¡Hola, Juan!');
  });

  test('debe mostrar un saludo a "Invitado" en el segundo h1', async ({ page }) => {
    const h1 = page.locator('h1').nth(1);
    await expect(h1).toHaveText('¡Hola, Invitado!');
  });
});
test.describe('Ejercicio 2: Invertir cadena de texto', () => {
  const URL = PATH + 'ej1.7.2.php';

  test.beforeEach(async ({ page }) => {
      await page.goto(URL);
  });

  test('debe mostrar la cadena original', async ({ page }) => {
    const p = page.locator('p').first();
    await expect(p).toHaveText('La cadena original es: hola');
  });

  test('debe mostrar la cadena invertida', async ({ page }) => {
    const p = page.locator('p').nth(1);
    await expect(p).toHaveText('La cadena invertida es: aloh');
  });
});
test.describe('Ejercicio 3: Calculadora simple', () => {
  const URL = PATH + 'ej1.7.3.php';

  test.beforeEach(async ({ page }) => {
      await page.goto(URL);
  });

  test('debe mostrar el resultado de la suma', async ({ page }) => {
    const p = page.locator('p').first();
    await expect(p).toHaveText('El resultado de 10 + 5 es: 15');
  });

  test('debe mostrar el resultado de la resta', async ({ page }) => {
    const p = page.locator('p').nth(1);
    await expect(p).toHaveText('El resultado de 10 - 5 es: 5');
  });

  test('debe mostrar el resultado de la multiplicación', async ({ page }) => {
    const p = page.locator('p').nth(2);
    await expect(p).toHaveText('El resultado de 10 * 5 es: 50');
  });

  test('debe mostrar el resultado de la división', async ({ page }) => {
    const p = page.locator('p').nth(3);
    await expect(p).toHaveText('El resultado de 10 / 5 es: 2');
  });

  test('debe mostrar un error al dividir por cero', async ({ page }) => {
    const p = page.locator('p').nth(4);
    await expect(p).toHaveText('El resultado de 10 / 0 es: Error: División por cero no permitida.');
  });

  test('debe mostrar un error para un operador no válido', async ({ page }) => {
    const p = page.locator('p').nth(5);
    await expect(p).toHaveText('El resultado de 10 $ 5 es: Error: Operador no válido.');
  });
});
test.describe('Ejercicio 4: Lista HTML desde Array', () => {
  const URL = PATH + 'ej1.7.4.php';

  test.beforeEach(async ({ page }) => {
      await page.goto(URL);
  });

  test('debe mostrar el print_r del array numérico', async ({ page }) => {
    const pre = page.locator('pre').first();
    await expect(pre).toContainText('Array');
    await expect(pre).toContainText('[0] => 10');
    await expect(pre).toContainText('[1] => 5');
    await expect(pre).toContainText('[2] => 20');
    await expect(pre).toContainText('[3] => 1');
  });
  
  test('debe mostrar una lista no ordenada para el array numérico', async ({ page }) => {
    const ul = page.locator('ul');
    await expect(ul).toBeVisible();
    const listItems = ul.locator('li');
    await expect(listItems).toHaveCount(4);
    await expect(listItems.nth(0)).toHaveText('10');
    await expect(listItems.nth(1)).toHaveText('5');
    await expect(listItems.nth(2)).toHaveText('20');
    await expect(listItems.nth(3)).toHaveText('1');
  });

  test('debe mostrar el print_r del array de strings', async ({ page }) => {
    const pre = page.locator('pre').nth(1);
    await expect(pre).toContainText('Array');
    await expect(pre).toContainText('[0] => Manzana');
    await expect(pre).toContainText('[1] => Pera');
    await expect(pre).toContainText('[2] => Uva');
    await expect(pre).toContainText('[3] => Naranja');
  });


  test('debe mostrar una lista ordenada para el array de strings', async ({ page }) => {
    const ol = page.locator('ol');
    await expect(ol).toBeVisible();
    const listItems = ol.locator('li');
    await expect(listItems).toHaveCount(4);
    await expect(listItems.nth(0)).toHaveText('Manzana');
    await expect(listItems.nth(1)).toHaveText('Pera');
    await expect(listItems.nth(2)).toHaveText('Uva');
    await expect(listItems.nth(3)).toHaveText('Naranja');
  });

});

test.describe('Ejercicio 5: Estadísticas básicas de un array', () => {
  const URL = PATH + 'ej1.7.5.php';

  test.beforeEach(async ({ page }) => {
      await page.goto(URL);
  });

  test('debe mostrar las estadísticas para el primer array', async ({ page }) => {
    const preArray = page.locator('pre').first();
    await expect(preArray).toContainText('Array');
    await expect(preArray).toContainText('[0] => 10');
    await expect(preArray).toContainText('[1] => 2');
    await expect(preArray).toContainText('[2] => 7');
    await expect(preArray).toContainText('[3] => 15');
    await expect(preArray).toContainText('[4] => 3');

    const preResult = page.locator('pre').nth(1);
    await expect(preResult).toContainText('Array');
    await expect(preResult).toContainText('[menor] => 2');
    await expect(preResult).toContainText('[mayor] => 15');
    await expect(preResult).toContainText('[media] => 7.4');
  });

  test('debe mostrar las estadísticas para el segundo array', async ({ page }) => {
    const preArray = page.locator('pre').nth(2);
    await expect(preArray).toContainText('Array');
    await expect(preArray).toContainText('[0] => 1');
    await expect(preArray).toContainText('[1] => 1');
    await expect(preArray).toContainText('[2] => 1');
    await expect(preArray).toContainText('[3] => 1');
    await expect(preArray).toContainText('[4] => 1');

    const preResult = page.locator('pre').nth(3);
    await expect(preResult).toContainText('Array');
    await expect(preResult).toContainText('[menor] => 1');
    await expect(preResult).toContainText('[mayor] => 1');
    await expect(preResult).toContainText('[media] => 1');
  });
});