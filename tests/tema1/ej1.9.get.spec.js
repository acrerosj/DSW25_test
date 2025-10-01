import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.9.get/";

test.describe('Ejercicio 1: Saludo personalizado', () => {
  test('debe mostrar "Hola, invitado" si no se proporciona un nombre', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.1.php`);
    const heading = page.locator('h1');
    await expect(heading).toContainText('Hola, invitado');
  });

  test('debe mostrar "Hola, Andrés" si se proporciona el nombre "Andrés"', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.1.php?nombre=Andrés`);
    const heading = page.locator('h1');
    await expect(heading).toContainText('Hola, Andrés');
  });
});

test.describe('Ejercicio 2: Listado de números', () => {
  test('debe mostrar una lista de números del 3 al 6', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=3&fin=6`);
    const listItems = page.locator('ol > li');
    await expect(listItems).toHaveCount(4);
    await expect(listItems.nth(0)).toHaveText('3');
    await expect(listItems.nth(1)).toHaveText('4');
    await expect(listItems.nth(2)).toHaveText('5');
    await expect(listItems.nth(3)).toHaveText('6');
  });

  test('debe mostrar una lista de números del 5 al 7', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=5&fin=7`);
    const listItems = page.locator('ol > li');
    await expect(listItems).toHaveCount(3);
    await expect(listItems.nth(0)).toHaveText('5');
    await expect(listItems.nth(1)).toHaveText('6');
    await expect(listItems.nth(2)).toHaveText('7');
  });

  test('debe mostrar una lista de números del 2 al 2', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=2&fin=2`);
    const listItems = page.locator('ol > li');
    await expect(listItems).toHaveCount(1);
    await expect(listItems.nth(0)).toHaveText('2');
  });

    test('debe mostrar una lista de números del 2 al 0', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=2&fin=0`);
    const listItems = page.locator('ol > li');
    await expect(listItems).toHaveCount(0);
  });


  test('debe mostrar "Parámetros no válidos" si no se proporcionan parámetros', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php`);
    await expect(page.locator('body')).toContainText('Parámetros no válidos');
  });

  test('debe mostrar "Parámetros no válidos" si falta el parámetro "fin"', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=3`);
    await expect(page.locator('body')).toContainText('Parámetros no válidos');
  });

  test('debe mostrar "Parámetros no válidos" si un parámetro no es un número', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.2.php?inicio=a&fin=5`);
    await expect(page.locator('body')).toContainText('Parámetros no válidos');
  });
});

test.describe('Ejercicio 3: Mostrar usuario por posición', () => {
  test('debe mostrar los datos del usuario en la posición 1', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.3.php?indice=1`);
    const body = page.locator('body');
    await expect(body).toContainText('Has seleccionado el índice: 1');
    await expect(body).toContainText('[nombre] => María');
    await expect(body).toContainText('[apellido] => García');
    await expect(body).toContainText('[edad] => 32');
    await expect(body).toContainText('[ciudad] => Barcelona');
  });

  test('debe mostrar los datos del usuario en la posición 3', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.3.php?indice=3`);
    const body = page.locator('body');
    await expect(body).toContainText('Has seleccionado el índice: 3');
    await expect(body).toContainText('[nombre] => Laura');
    await expect(body).toContainText('[apellido] => Martínez');
    await expect(body).toContainText('[edad] => 35');
    await expect(body).toContainText('[ciudad] => Valencia');
  });
  test('debe mostrar "Índice no válido" si el índice es 4', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.3.php?indice=4`);
    const body = page.locator('body');
    await expect(body).toContainText('Has seleccionado el índice: 4');
    await expect(body).toContainText('Índice no válido. Debe ser entre 0 y 3');
  });

  test('debe mostrar "Parámetro \'indice\' no válido o no proporcionado" si el índice es "dos"', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.3.php?indice=dos`);
    const body = page.locator('body');
    await expect(body).toContainText("Parámetro 'indice' no válido o no proporcionado");
  });
  test('debe mostrar "Parámetro \'indice\' no válido o no proporcionado" si no se proporciona el índice', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.3.php`);
    const body = page.locator('body');
    await expect(body).toContainText("Parámetro 'indice' no válido o no proporcionado");
  });
});

// Ejercicio 4: Crear listado enlaces de usuario.
// Descripción del problema:
// Vamos a crear en un script “ej1.9.4.php” un listado de los usuarios del array anterior donde se muestren los nombres de los usuarios (solo los nombres) y sean enlaces al ejercicio anterior para que muestre todos sus datos. 
// Salida esperada:
// Listado de usuarios
// Juan
// María
// Carlos
// Laura
// Si se pulsa en alguno de los nombres se debe cargar el archivo “ej1.9.3.php” con los datos de cada uno. Por ejemplo, al pulsar en “Juan”, se mostrará:
// Has seleccionado el índice: 0
// Array
// (
//     [nombre] => Juan
//     [apellido] => Pérez
//     [edad] => 28
//     [ciudad] => Madrid
// )

test.describe('Ejercicio 4: Listado de enlaces de usuario', () => {
  test('debe mostrar una lista con los nombres de los usuarios', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.4.php`);
    const listItems = page.locator('ul > li > a');
    await expect(listItems).toHaveCount(4);
    await expect(listItems.nth(0)).toHaveText('Juan');
    await expect(listItems.nth(1)).toHaveText('María');
    await expect(listItems.nth(2)).toHaveText('Carlos');
    await expect(listItems.nth(3)).toHaveText('Laura');
  });

  test('cada nombre debe tener su enlace correspondiente', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.4.php`);
    const listItems = page.locator('ul > li > a');
    await expect(listItems).toHaveCount(4);
    await expect(listItems.nth(0)).toHaveText('Juan');
    await expect(listItems.nth(0)).toHaveAttribute('href', /ej1\.9\.3\.php\?indice=0/);
    await expect(listItems.nth(1)).toHaveText('María');
    await expect(listItems.nth(1)).toHaveAttribute('href', /ej1\.9\.3\.php\?indice=1/);
    await expect(listItems.nth(2)).toHaveText('Carlos');
    await expect(listItems.nth(2)).toHaveAttribute('href', /ej1\.9\.3\.php\?indice=2/);
    await expect(listItems.nth(3)).toHaveText('Laura');
    await expect(listItems.nth(3)).toHaveAttribute('href', /ej1\.9\.3\.php\?indice=3/);
  });

  test('debe navegar a ej1.9.3.php con el índice correcto al hacer clic en un nombre', async ({ page }) => {
    await page.goto(`${PATH}ej1.9.4.php`);
    const firstUserLink = page.locator('ul > li > a').first();
    await firstUserLink.click();
    await expect(page).toHaveURL(/ej1\.9\.3\.php\?indice=0/);
    const body = page.locator('body');
    await expect(body).toContainText('Has seleccionado el índice: 0');
    await expect(body).toContainText('[nombre] => Juan');
    await expect(body).toContainText('[apellido] => Pérez');
    await expect(body).toContainText('[edad] => 28');
    await expect(body).toContainText('[ciudad] => Madrid');
  });
});