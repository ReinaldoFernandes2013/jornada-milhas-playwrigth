import { test } from "./page-objects/PaginaLogin";

test.describe("Página de Login", () => {
    test("Deve conseguir fazer login com email e senha válidos", async ({ paginaLogin }) => {
        
        await paginaLogin.fazerLogin('reinaldo.fernandes.2013@gmail.com', 'r31n@ld@');
        await paginaLogin.loginFeitoComSucesso();
    });

    test("Não deve conseguir fazer login com e-mail inválido", async ({ paginaLogin }) => {
        
        await paginaLogin.fazerLogin('reinaldo.errado@gmail.com', 'r31n@ld@');
        await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
    });

    test("Não deve conseguir fazer login com senha inválida", async ({ paginaLogin }) => {
        
        await paginaLogin.fazerLogin('reinaldo.fernandes.2013@gmail.com', '123456');
        await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
    });

    test("Não deve conseguir fazer login e-mail em branco", async ({ paginaLogin }) => {
        
        await paginaLogin.preencherEmailEmBrancoESenha('123456');
        await paginaLogin.estaMostrandoMensagemDeErro('E-mail é obrigatório');
    });

    test("Não deve conseguir fazer login com senha em branco", async ({ paginaLogin }) => {
        
        await paginaLogin.preencherEmailEdeixarSenhaEmBranco('reinaldo.fernandes.2013@gmail.com');
        await paginaLogin.estaMostrandoMensagemDeErro('Senha é obrigatória');

    });

});