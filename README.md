🚀 Começando com Testes End-to-End no Playwright
Bem-vindo(a) ao projeto de testes End-to-End (E2E) utilizando Playwright! Este README.md serve como um guia rápido para você configurar seu ambiente, entender a estrutura do projeto e executar os testes.

🛠️ O que você precisa ter instalado
Antes de começar, certifique-se de ter o seguinte em sua máquina:

Node.js: O Playwright é executado com Node.js.

Verifique se já tem: Abra seu terminal e digite node -v.

Se não tiver, baixe e instale a versão LTS (Long Term Support) em nodejs.org.

📦 Instalação e Configuração Inicial
Para colocar o projeto de pé, siga estes passos:

Clone o repositório (se ainda não fez):

Bash

git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_SEU_PROJETO>
Instale as dependências do Node.js:
Este comando lê o arquivo package.json e instala todas as bibliotecas necessárias para o projeto, incluindo o Playwright.

Bash

npm install
Instale os navegadores do Playwright:
O Playwright precisa dos executáveis dos navegadores (Chromium, Firefox, WebKit) para rodar os testes. Este comando baixa e configura-os automaticamente.

Bash

npx playwright install
Comando: npx playwright install

O que faz: Instala os browsers padrão (Chromium, Firefox, WebKit) necessários para o Playwright.

Quando usar: Na primeira configuração do ambiente ou se precisar garantir que os navegadores estão atualizados.

⚙️ Comandos Essenciais do Playwright
Aqui estão os comandos mais importantes para você interagir com seus testes:

🏃 Rodando os Testes
Para executar seus testes, você usará o comando npx playwright test. Ele possui várias opções para personalizar a execução:

Rodar todos os testes:

Bash

npx playwright test
Comando: npx playwright test

O que faz: Executa todos os arquivos de teste (.spec.ts) encontrados no seu projeto.

Quando usar: Para uma execução completa de toda a suíte de testes.

Rodar um arquivo de teste específico:
Se você quer testar apenas um cenário ou um grupo de testes em um arquivo específico.

Bash

npx playwright test tests/PaginaPrincipal.spec.ts
Comando: npx playwright test <caminho/do/seu/arquivo.spec.ts>

O que faz: Executa apenas os testes contidos no arquivo especificado.

Quando usar: Quando você está desenvolvendo ou depurando um teste específico.

Rodar testes em um navegador específico:
Você pode querer focar os testes em um navegador.

Bash

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
Comando: npx playwright test --project=<nome_do_navegador>

O que faz: Executa os testes apenas no navegador indicado (configurado no playwright.config.ts).

Quando usar: Para verificar o comportamento em um navegador específico.

Rodar testes com interface de usuário (UI Mode):
Abre uma interface gráfica interativa para você ver os testes rodando, depurar e inspecionar elementos.

Bash

npx playwright test --ui
Comando: npx playwright test --ui

O que faz: Inicia o Playwright Test Runner em modo UI, permitindo visualizar, depurar e inspecionar testes interativamente.

Quando usar: Excelente para depuração e para entender o fluxo de execução dos testes.

Rodar testes em modo "watch" (observar mudanças):
O Playwright monitora seus arquivos de teste e os executa automaticamente sempre que você faz uma alteração e salva.

Bash

npx playwright test --ui --watch
Comando: npx playwright test --watch (pode ser combinado com --ui)

O que faz: Fica "escutando" por alterações nos arquivos de teste e executa-os novamente automaticamente.

Quando usar: Durante o desenvolvimento ativo, para feedback rápido sobre suas mudanças.

Gerar um relatório HTML dos testes:
Após a execução, o Playwright pode gerar um relatório detalhado com os resultados, incluindo screenshots e vídeos (se configurado).

Bash

npx playwright show-report
Comando: npx playwright show-report

O que faz: Abre o relatório HTML interativo dos testes da última execução.

Quando usar: Para analisar os resultados dos testes após uma execução completa, especialmente em ambientes de CI/CD.

🕵️ Ferramentas de Depuração e Geração de Código
O Playwright oferece ferramentas poderosas para te ajudar a escrever e depurar testes:

Gerar testes automaticamente (Codegen):
Abre um navegador e uma janela de inspector. Suas interações no navegador são gravadas e convertidas em código de teste Playwright.

Bash

npx playwright codegen
Comando: npx playwright codegen

O que faz: Abre um navegador e uma ferramenta de gravação que gera código Playwright em tempo real com base nas suas interações na página.

Quando usar: Para iniciar a criação de um teste, gerar seletores automaticamente ou aprender a sintaxe do Playwright.

Modo de depuração passo a passo:
Abre o navegador e pausa a execução dos testes, permitindo que você inspecione o estado da página e execute os testes passo a passo.

Bash

npx playwright test --debug
Comando: npx playwright test --debug

O que faz: Permite depurar testes passo a passo, abrindo o navegador e destacando as ações do Playwright.

Quando usar: Para entender exatamente o que está acontecendo durante a execução do teste e diagnosticar problemas.

📂 Estrutura do Projeto (Exemplos)
Abaixo, alguns exemplos da estrutura de arquivos do seu projeto, seguindo o Page Object Model (POM):

seu-projeto-playwright/
├── tests/
│   ├── PaginaPrincipal.spec.ts  # Arquivo de teste para a página principal
│   └── Login.spec.ts            # Arquivo de teste para o fluxo de login
├── page-objects/
│   ├── PaginaLogin.ts           # Page Object para a página de login
│   └── PaginaPrincipal.ts       # Page Object para a página principal
├── playwright.config.ts         # Configurações do Playwright
├── package.json                 # Dependências do projeto
└── README.md                    # Este arquivo!
Sinta-se à vontade para explorar os arquivos de teste (.spec.ts) e os Page Objects (.ts) para entender como os testes foram construídos! Se tiver alguma dúvida ou precisar de ajuda, é só perguntar.
