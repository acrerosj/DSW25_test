import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.4.estructuras/";

test.describe('Ejercicio 1: Condicional Simple (if)', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.1.php`);
    p = page.locator('#estadoAcceso');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('Acceso permitido.');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'estadoAcceso');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 2: Condicional Doble (if...else)', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.2.php`);
    p = page.locator('#climaActual');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('La temperatura es agradable.');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'climaActual');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 3: Condicional Múltiple (if...elsif...else)', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.3.php`);
    p = page.locator('#resultadoCalificacion');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('Bueno');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'resultadoCalificacion');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 4: Estructura de Control switch', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.4.php`);
    p = page.locator('#infoDia');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('Día de semana.');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'infoDia');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 5: Bucle while', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.5.php`);
    p = page.locator('#ultimoNumero');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('5');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'ultimoNumero');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 6: Bucle for', () => {
  let p;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.6.php`);
    p = page.locator('#numeroCentral');
  });

  test('El párrafo es visible', async () => {
    await expect(p).toBeVisible();
  });

  test('El texto del párrafo es correcto', async () => {
    await expect(p).toHaveText('6');
  });

  test('El id del párrafo es correcto', async () => {
    await expect(p).toHaveAttribute('id', 'numeroCentral');
  });

  test('La etiqueta del elemento es P', async () => {
    const tagName = await p.evaluate(el => el.tagName);
    expect(tagName).toBe('P');
  });
});

test.describe('Ejercicio 7: Bucles for anidados', () => {
  let paragraphs;

  test.beforeEach(async ({ page }) => {
    await page.goto(`${PATH}ej1.4.7.php`);
    paragraphs = page.locator('p');
  });

  test('Todos los párrafos son visibles', async () => {
    await expect(paragraphs.first()).toBeVisible();
    await expect(paragraphs.last()).toBeVisible();
  });

  test('Se han creado 3 párrafos', async () => {
    await expect(paragraphs).toHaveCount(3);
  });

  test('El texto de todos los párrafos es correcto', async () => {
    await expect(paragraphs).toHaveText(['* * *', '* * *', '* * *']);
  });

  test('La etiqueta de los elementos es P', async () => {
    const firstTagName = await paragraphs.first().evaluate(el => el.tagName);
    expect(firstTagName).toBe('P');
    const lastTagName = await paragraphs.last().evaluate(el => el.tagName);
    expect(lastTagName).toBe('P');
  });
});