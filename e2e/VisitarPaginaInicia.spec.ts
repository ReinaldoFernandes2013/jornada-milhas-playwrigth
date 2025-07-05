import test, { expect } from "@playwright/test";

test.describe("Página Inicial", () => {
    test("Deve visitar a página inicial", async ({page}) => {
        await page.goto("/"); // ação
        await expect(page).toHaveTitle("Jornada Milhas"); //asserção

        // const tituloPassagens = page.getByRole('heading', { name: 'Passagens' });
        // await expect(tituloPassagens).toBeVisible(); // asserção
        
        const tituloPassagens = page.getByTestId('titulo-passagens')
        const tituloPromocoes = page.getByTestId('titulo-promocoes')
        const tituloDepoimentos = page.getByTestId('titulo-depoimentos')
        
        await expect(tituloPassagens).toBeVisible(); // asserção
        await expect(tituloPromocoes).toBeVisible(); // asserção
        await expect(tituloDepoimentos).toBeVisible(); // asserção
    });
});