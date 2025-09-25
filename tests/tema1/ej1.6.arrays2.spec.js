import { test, expect } from '@playwright/test';
const PATH = "http://localhost:8080/tema1/ej1.6.arrays2/";

test.describe('Ejercicio 1.6.1: Arrays numéricos con bucle for', () => {
    const URL = PATH + 'ej1.6.1.php';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Muestra el array inicial con print_r', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[0]).toContainText('Array\n(\n    [0] => 10\n    [1] => 20\n    [2] => 30\n    [3] => 40\n    [4] => 50\n)\n');
    });

    test('Muestra los elementos en una lista ordenada', async ({ page }) => {
        const listItems = await page.locator('ol > li').all();
        expect(listItems.length).toBe(5);
        const expectedValues = ['10', '20', '30', '40', '50'];
        for (let i = 0; i < listItems.length; i++) {
            await expect(listItems[i]).toHaveText(expectedValues[i]);
        }
    });

    test('Añade el número 60 y muestra el array', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[1]).toContainText('Array\n(\n    [0] => 10\n    [1] => 20\n    [2] => 30\n    [3] => 40\n    [4] => 50\n    [5] => 60\n)\n');
    });

    test('Divide cada elemento por 5 y muestra el array', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[2]).toContainText('Array\n(\n    [0] => 2\n    [1] => 4\n    [2] => 6\n    [3] => 8\n    [4] => 10\n    [5] => 12\n)\n');
    });
});

test.describe('Ejercicio 1.6.2: Arrays asociativos con bucle foreach', () => {
    const URL = PATH + 'ej1.6.2.php';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Muestra el array inicial con print_r', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[0]).toContainText('Array\n(\n    [manzana] => 1.5\n    [plátano] => 0.75\n    [naranja] => 1.2\n    [fresa] => 2\n)\n');
    });

    test('Añade el aguacate y muestra el array', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[1]).toContainText('Array\n(\n    [manzana] => 1.5\n    [plátano] => 0.75\n    [naranja] => 1.2\n    [fresa] => 2\n    [aguacate] => 5.99\n)\n');
    });

    test('Modifica el plátano y muestra el array', async ({ page }) => {
        const preElements = await page.locator('pre').all();
        await expect(preElements[2]).toContainText('Array\n(\n    [manzana] => 1.5\n    [plátano] => 1.75\n    [naranja] => 1.2\n    [fresa] => 2\n    [aguacate] => 5.99\n)\n');
    });

    test('Muestra los elementos en una lista no ordenada', async ({ page }) => {
        const listItems = await page.locator('ul > li').all();
        expect(listItems.length).toBe(5);
        const expectedValues = [
            'manzana: 1.50€',
            'plátano: 1.75€',
            'naranja: 1.20€',
            'fresa: 2.00€',
            'aguacate: 5.99€'
        ];
        for (let i = 0; i < listItems.length; i++) {
            await expect(listItems[i]).toHaveText(expectedValues[i]);
        }
    });
});

test.describe('Ejercicio 1.6.3: Combinación de arrays numéricos y asociativos con bucles', () => {
    const URL = PATH + 'ej1.6.3.php';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('La tabla tiene el encabezado correcto', async ({ page }) => {
        const headerCells = await page.locator('thead th').all();
        expect(headerCells.length).toBe(2);
        await expect(headerCells[0]).toHaveText('Producto');
        await expect(headerCells[1]).toHaveText('Precio');
    });

    test('La tabla muestra los productos y precios correctos', async ({ page }) => {
        const rows = await page.locator('tbody tr').all();
        expect(rows.length).toBe(4);

        const expectedData = [
            ['manzana', '1.50€'],
            ['plátano', '0.75€'],
            ['naranja', '1.20€'],
            ['fresa', '2.00€']
        ];

        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].locator('td').all();
            expect(cells.length).toBe(2);
            await expect(cells[0]).toHaveText(expectedData[i][0]);
            await expect(cells[1]).toHaveText(expectedData[i][1]);
        }
    });
});

test.describe('Ejercicio 1.6.4: Arrays multidimensionales', () => {
    const URL = PATH + 'ej1.6.4.php';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Muestra el array construido con print_r', async ({ page }) => {
        const preElement = await page.locator('pre').first();
        // Check first and last rows to confirm structure
        await expect(preElement).toContainText('Array\n(\n    [0] => Array\n        (\n            [0] => 1\n');
        await expect(preElement).toContainText('[9] => 10\n        )\n\n');
        await expect(preElement).toContainText('[15] => Array\n        (\n            [0] => 151\n');
        await expect(preElement).toContainText('[9] => 160\n        )\n\n)\n');
    });

    test('La tabla muestra los números del 1 al 160', async ({ page }) => {
        const rows = await page.locator('tbody tr').all();
        expect(rows.length).toBe(16);

        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].locator('td').all();
            expect(cells.length).toBe(10);
            for (let j = 0; j < cells.length; j++) {
                const expectedNumber = i * 10 + j + 1;
                await expect(cells[j]).toHaveText(String(expectedNumber));
            }
        }
    });
});