import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.2.operadores/";

test.describe('Ejercicio 1.2.1: Coerción de Tipos y Operaciones Aritméticas', () => {
  test('debe mostrar la suma y la concatenación correctamente', async ({ page }) => {
    // Asegúrate de que el servidor web esté sirviendo el archivo PHP en esta URL.
    await page.goto(PATH + '/ej1.2.1.php');

    // Verifica el resultado de la suma
    await expect(page.locator('body')).toContainText('Resultado de la suma: 125, Tipo: integer');

    // Verifica el resultado de la concatenación
    await expect(page.locator('body')).toContainText('Resultado de la concatenación: 10025, Tipo: string');
  });
});

test.describe('Ejercicio 1.2.2: Operadores de Incremento/Decremento y Precedencia', () => {
  test('debe manejar correctamente los operadores y la precedencia', async ({ page }) => {
    await page.goto(PATH + '/ej1.2.2.php');

    // Verifica el resultado del pre-incremento
    await expect(page.locator('body')).toContainText('Valor de $pre_incremento: 6, Valor de $contador: 6');

    // Verifica el resultado del post-incremento
    await expect(page.locator('body')).toContainText('Valor de $post_incremento: 5, Valor de $contador: 6');

    // Verifica el resultado de la precedencia de operadores
    await expect(page.locator('body')).toContainText('Resultado de la precedencia: 16');

    // Verifica el resultado con paréntesis
    await expect(page.locator('body')).toContainText('Resultado con paréntesis: 26');
  });
});
test.describe('Ejercicio 1.2.3: Operadores de Asignación Combinados', () => {
  let resultados;

  test.beforeEach(async ({ page }) => {
    await page.goto(PATH + '/ej1.2.3.php');
    resultados = page.locator('p.resultado');
  });

  test('debe sumar 5 correctamente', async () => {
    await expect(resultados.nth(0)).toHaveText('15');
  });

  test('debe multiplicar por 2 correctamente', async () => {
    await expect(resultados.nth(1)).toHaveText('30');
  });

  test('debe restar 3 correctamente', async () => {
    await expect(resultados.nth(2)).toHaveText('27');
  });

  test('debe dividir por 4 correctamente', async () => {
    await expect(resultados.nth(3)).toHaveText('6.75');
  });
});

test.describe('Ejercicio 1.2.4: Operadores de Comparación Estricta y Lógicos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PATH + '/ej1.2.4.php');
  });

  test('debe evaluar la comparación estricta de igualdad correctamente', async ({ page }) => {
    await expect(page.locator('#comparacionEstrictaIgual')).toHaveText('false');
  });

  test('debe evaluar la comparación estricta de diferencia correctamente', async ({ page }) => {
    await expect(page.locator('#comparacionEstrictaDiferente')).toHaveText('true');
  });

  test('debe evaluar la operación lógica AND correctamente', async ({ page }) => {
    await expect(page.locator('#logicoAnd')).toHaveText('true');
  });

  test('debe evaluar la operación lógica OR correctamente', async ({ page }) => {
    await expect(page.locator('#logicoOr')).toHaveText('false');
  });
});

test.describe('Ejercicio 1.2.5: Operador Ternario y de Incremento', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PATH + '/ej1.2.5.php');
  });

  test('debe mostrar el valor correcto para $a (pre-incremento)', async ({ page }) => {
    await expect(page.locator('#valorA')).toHaveText('6');
  });

  test('debe mostrar el valor correcto para $b (post-incremento)', async ({ page }) => {
    await expect(page.locator('#valorB')).toHaveText('5');
  });

  test('debe mostrar el resultado correcto del operador ternario', async ({ page }) => {
    await expect(page.locator('#resultadoTernario')).toHaveText('A es mayor');
  });
});