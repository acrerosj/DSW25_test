import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.8.modulacion/";

test.describe('Ejercicio 1: Cabecera y pie de página reutilizables', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.8.1.php`);
  });

  test('El titulo de la página es correcto', async ({ page }) => {
    await expect(page).toHaveTitle('Modulación');
  });

  test('Debe mostrar la cabecera en un h1', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Cabecera de la página');
  });

  test('Debe mostrar "Vva la modulación" en un h2', async ({ page }) => {
    await expect(page.locator('h2')).toHaveText('Viva la modulación');
  });

  test('Debe mostrar el pie en un párrafo', async ({ page }) => {
    await expect(page.locator('p')).toHaveText('Esto es el pie');
  });
});

test.describe('Ejercicio 2: Tabla de datos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.8.2.php`);
  });

  test('El titulo de la página es correcto', async ({ page }) => {
    await expect(page).toHaveTitle('Modulación');
  });

  test('Debe mostrar la cabecera en un h1', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Cabecera de la página');
  });

  test('Debe mostrar el pie en un párrafo', async ({ page }) => {
    await expect(page.locator('p')).toHaveText('Esto es el pie');
  });

  test('Debe mostrar una tabla con los datos correctos', async ({ page }) => {
    const expectedData = [
      "Juan", "Pérez", "28", "Madrid",
      "María", "García", "32", "Barcelona",
      "Carlos", "Rodríguez", "25", "Sevilla",
      "Laura", "Martínez", "35", "Valencia"
    ];

    const tableCells = page.locator('td');
    await expect(tableCells).toHaveCount(16);

    const actualData = await tableCells.allTextContents();
    expect(actualData.map(s => s.trim())).toEqual(expectedData);
  });
});