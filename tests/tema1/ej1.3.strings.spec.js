import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.3.strings/";

test.describe('Ejercicio 1.3.1: Concatenación de Strings', () => {
  const exerciseUrl = `${PATH}ej1.3.1.php`;
  let pElement;

  test.beforeEach(async ({ page }) => {
    await page.goto(exerciseUrl);
    pElement = page.locator('p#infoProducto');
  });

  test('La página debe contener un párrafo con el id "infoProducto"', async () => {
    await expect(pElement).toBeVisible();
  });
  
  test('El contenido del párrafo debe incluir el nombre del producto y el precio', async () => {
    await expect(pElement).toContainText('Libro de PHP');
    await expect(pElement).toContainText('25.99');
  });

  test('El párrafo debe tener el texto exacto esperado', async () => {
    await expect(pElement).toHaveText('El producto Libro de PHP tiene un precio de 25.99 €.');
  });
});

test.describe('Ejercicio 1.3.2: Manipulación de cadenas con funciones', () => {
  const exerciseUrl = `${PATH}ej1.3.2.php`;

  test.beforeEach(async ({ page }) => {
    await page.goto(exerciseUrl);
  });

  test('Debe mostrar la frase sin espacios en blanco al principio y al final', async ({ page }) => {
    const pElement = page.locator('p#fraseSinEspacios');
    await expect(pElement).toBeVisible();
    await expect(pElement).toHaveText('PHP es un lenguaje muy potente');
  });

  test('Debe mostrar la frase convertida a mayúsculas', async ({ page }) => {
    const pElement = page.locator('p#fraseMayusculas');
    await expect(pElement).toBeVisible();
    await expect(pElement).toHaveText('PHP ES UN LENGUAJE MUY POTENTE');
  });

  test('Debe mostrar la subcadena "LENGUAJE" extraída', async ({ page }) => {
    const pElement = page.locator('p#subcadenaExtraida');
    await expect(pElement).toBeVisible();
    await expect(pElement).toHaveText('LENGUAJE');
  });
});


test.describe('Ejercicio 1.3.3: Uso de strlen() y str_replace()', () => {
  const exerciseUrl = `${PATH}ej1.3.3.php`;

  test.beforeEach(async ({ page }) => {
    await page.goto(exerciseUrl);
  });

  test('Debe mostrar la longitud original del texto', async ({ page }) => {
    const spanElement = page.locator('span#longitudOriginal');
    await expect(spanElement).toBeVisible();
    await expect(spanElement).toHaveText('46');
  });

  test('Debe mostrar el texto con la palabra "perro" reemplazada por "gato"', async ({ page }) => {
    const pElement = page.locator('p#textoReemplazado');
    await expect(pElement).toBeVisible();
    await expect(pElement).toHaveText('El gato corre por el parque y el gato ladra.');
  });
});

test.describe('Ejercicio 1.3.4: Formateo de cadenas con printf() y sprintf()', () => {
  const exerciseUrl = `${PATH}ej1.3.4.php`;

  test.beforeEach(async ({ page }) => {
    await page.goto(exerciseUrl);
  });

  test('Debe mostrar el mensaje del producto formateado con printf()', async ({ page }) => {
    const pElement = page.locator('p#mensajeProducto');
    await expect(pElement).toBeVisible();
    await expect(pElement).toHaveText('El producto Teclado Mecánico tiene un precio final de 64.59 euros.');
  });

  test('Debe mostrar el mensaje del descuento creado con sprintf()', async ({ page }) => {
    const divElement = page.locator('div#textoDescuento');
    await expect(divElement).toBeVisible();
    await expect(divElement).toHaveText('El descuento aplicado es del 15%.');
  });
});