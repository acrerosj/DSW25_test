import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.5.arrays/";

test.describe('Ejercicios 1.5.Arrays - Ejercicio 1', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.1.php`);
    divs = page.locator('div');
  });

  test('Imprime el array completo', async () => {
    await expect(divs.nth(0)).toContainText('array(5) { [0]=> string(7) "Manzana" [1]=> string(8) "Plátano" [2]=> string(7) "Naranja" [3]=> string(5) "Fresa" [4]=> string(3) "Uva" }');
  });

  test('Accede e imprime el tercer elemento', async () => {
    await expect(divs.nth(1)).toContainText('Naranja');
  });

  test('Añade "Mango" al final del array', async () => {
    await expect(divs.nth(2)).toContainText('array(6) { [0]=> string(7) "Manzana" [1]=> string(8) "Plátano" [2]=> string(7) "Naranja" [3]=> string(5) "Fresa" [4]=> string(3) "Uva" [5]=> string(5) "Mango" }');
  });

  test('Elimina "Plátano" del array', async () => {
    await expect(divs.nth(3)).toContainText('array(5) { [0]=> string(7) "Manzana" [2]=> string(7) "Naranja" [3]=> string(5) "Fresa" [4]=> string(3) "Uva" [5]=> string(5) "Mango" }');
  });

  test('Actualiza "Manzana" por "Pera"', async () => {
    await expect(divs.nth(4)).toContainText('array(5) { [0]=> string(4) "Pera" [2]=> string(7) "Naranja" [3]=> string(5) "Fresa" [4]=> string(3) "Uva" [5]=> string(5) "Mango" }');
  });
});

test.describe('Ejercicios 1.5.Arrays - Ejercicio 2', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.2.php`);
    divs = page.locator('pre');
  });

  test('Imprime el array completo', async () => {
    await expect(divs.nth(0)).toContainText(`Array ( [nombre] => Ana [apellido] => García [edad] => 20 [curso] => Programación Web )`);
  });

  test('Accede e imprime el nombre del alumno', async () => {
    await expect(divs.nth(1)).toContainText('Ana');
  });

  test('Añade un email al array', async () => {
    await expect(divs.nth(2)).toContainText(`Array\n(\n\t\t[nombre] => Ana\n\t\t[apellido] => García\n\t\t[edad] => 20\n\t\t[curso] => Programación Web\n\t\t[email] => ana.garcia@example.com\n)`);
  });

  test('Actualiza la edad del alumno', async () => {
    await expect(divs.nth(3)).toContainText(`Array\n(\n\t\t[nombre] => Ana\n\t\t[apellido] => García\n\t\t[edad] => 21\n\t\t[curso] => Programación Web\n\t\t[email] => ana.garcia@example.com\n)`);
  });

  test('Elimina el curso del array', async () => {
    await expect(divs.nth(4)).toContainText(`Array\n(\n\t\t[nombre] => Ana\n\t\t[apellido] => García\n\t\t[edad] => 21\n\t\t[email] => ana.garcia@example.com\n)`);
  });
});