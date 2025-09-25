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

test.describe('Ejercicios 1.5.Arrays - Ejercicio 3', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.3.php`);
    divs = page.locator('div');
  });

  test('Imprime el número de elementos en el array', async () => {
    await expect(divs.nth(0)).toContainText('Número de elementos: 5');
  });

  test('Elimina el último elemento del array', async () => {
    await expect(divs.nth(1)).toContainText(`Array ( [0] => Madrid [1] => Barcelona [2] => Sevilla [3] => Valencia )`);
  });

  test('Añade "Zaragoza" al final del array', async () => {
    await expect(divs.nth(2)).toContainText(`Array ( [0] => Madrid [1] => Barcelona [2] => Sevilla [3] => Valencia [4] => Zaragoza )`);
  });

  test('Elimina el primer elemento del array', async () => {
    await expect(divs.nth(3)).toContainText(`Array ( [0] => Barcelona [1] => Sevilla [2] => Valencia [3] => Zaragoza )`);
  });

  test('Añade "Málaga" al principio del array', async () => {
    await expect(divs.nth(4)).toContainText(`Array ( [0] => Málaga [1] => Barcelona [2] => Sevilla [3] => Valencia [4] => Zaragoza )`);
  });
});

test.describe('Ejercicios 1.5.Arrays - Ejercicio 4', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.4.php`);
    divs = page.locator('div');
  });

  test('Imprime el array completo', async () => {
    await expect(divs.nth(0)).toContainText(`Array ( [0] => Perro [1] => Gato [2] => Pájaro [3] => Hamster [4] => Pez [5] => Serpiente [6] => Tortuga )`);
  });

  test('Extrae los elementos desde la posición 2 hasta la 4', async () => {
    await expect(divs.nth(1)).toContainText(`Array ( [0] => Pájaro [1] => Hamster [2] => Pez )`);
  });

  test('Extrae los últimos 3 elementos del array', async () => {
    await expect(divs.nth(2)).toContainText(`Array ( [0] => Pez [1] => Serpiente [2] => Tortuga )`);
  });

  test('Extrae 2 elementos desde la posición 1 manteniendo claves', async () => {
    await expect(divs.nth(3)).toContainText(`Array ( [1] => Gato [2] => Pájaro )`);
  });
});

test.describe('Ejercicios 1.5.Arrays - Ejercicio 5', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.5.php`);
    divs = page.locator('div');
  });

  test('Imprime el array completo', async () => {
    await expect(divs.nth(0)).toContainText(`Array ( [0] => Rojo [1] => Verde [2] => Azul [3] => Amarillo [4] => Naranja )`);
  });

  test('Elimina "Azul" del array', async () => {
    await expect(divs.nth(1)).toContainText(`Array ( [0] => Rojo [1] => Verde [2] => Amarillo [3] => Naranja )`);
  });

  test('Inserta "Violeta" y "Blanco" a partir de la posición 2', async () => {
    await expect(divs.nth(2)).toContainText(`Array ( [0] => Rojo [1] => Verde [2] => Violeta [3] => Blanco [4] => Amarillo [5] => Naranja )`);
  });

  test('Reemplaza "Verde" y "Amarillo" por "Marrón"', async () => {
    await expect(divs.nth(3)).toContainText(`Array ( [0] => Rojo [1] => Marrón [2] => Naranja )`);
  });
});

test.describe('Ejercicios 1.5.Arrays - Ejercicio 6', () => {
  let divs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.5.6.php`);
    divs = page.locator('div');
  });

  test('Imprime la cadena original', async () => {
    await expect(divs.nth(0)).toContainText('Manzana,Plátano,Naranja,Fresa,Uva');
  });

  test('Convierte la cadena en un array', async () => {
    await expect(divs.nth(1)).toContainText(`Array ( [0] => Manzana [1] => Plátano [2] => Naranja [3] => Fresa [4] => Uva )`);
  });

  test('Une el array con guiones', async () => {
    await expect(divs.nth(2)).toContainText('Manzana-Plátano-Naranja-Fresa-Uva');
  });

  test('Une el array modificado con " / "', async () => {
    await expect(divs.nth(3)).toContainText('Manzana / Naranja / Uva');
  });
});