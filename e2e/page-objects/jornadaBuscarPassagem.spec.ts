import test from "@playwright/test";
import PaginaPrincipal from "./PaginaPrincipal";

test.describe('Buscar Passagem', () => {
    test('Deve buscar passagem de somente ida', async ({ page }) => {
        const paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar();
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(1);
        await paginaPrincipal.definirPasseirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('minas gerais' , 'rio de janeiro');
        await paginaPrincipal.definirData(new Date());
        await paginaPrincipal.buscarPassagen();

        await paginaPrincipal.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro');

    });
});