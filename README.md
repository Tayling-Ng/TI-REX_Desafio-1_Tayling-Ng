# Estágio Compass UOL - Desafio 01

## Descrição

Recriar essas três páginas do [Figma](<https://www.figma.com/proto/xI5w2yq0KIK83xuxKsWrQ3/Challenge-1---Nov24-(Copy)?node-id=2-3&node-type=canvas&t=GrHP1OrlLfAULGru-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1>), mantendo-se fiel ao design original, utilizando `HTML, CSS e JS`.

## Requisitos Obrigatórios

### 🔶 Gerais

-   Utilizar **apenas HTML, CSS e JS**. **Não é permitido usar bibliotecas externas**.
-   Criar um repositório **privado** no GitHub e adicionar os instrutores como colaboradores do projeto.
-   Todas as páginas devem conter **header** e **footer** (como não estamos trabalhando com componentização ainda, podem replicar os códigos de header e footer nos arquivos HTML de cada página).
-   Adicionar corretamente os links nos botões e ícones (como os de redes sociais no footer).
-   Validar **todos os campos de formulário** com **JavaScript**.
-   Separar os códigos em arquivos distintos: `.html`, `.css` e `.js`.
-   Utilizar tags semânticas no HTML.
-   Adicionar um **README** ao projeto.
-   Realizar **pequenos commits** seguindo o padrão de **Commits Convencionais**.

---

### 🔶 Home

-   O botão **Subscribe** deve validar os campos:
    -   **Email**: Verificar se o campo está preenchido e se contém um e-mail válido (exemplo: via RegEx).
    -   **Nome**: Não pode estar vazio.
-   Caso os requisitos sejam atendidos:
    -   As informações do formulário devem ser armazenadas no **LocalStorage**.
-   Exibir erros de validação de forma visível na tela.

---

### 🔶 Login

-   O botão **Login** deve validar os campos:
    -   **Email**: Verificar se o campo está preenchido e se contém um e-mail válido (exemplo: via RegEx).
    -   **Senha**: Não pode estar vazio.
-   Caso os requisitos sejam atendidos:
    -   A aplicação deve redirecionar para a página do **Kanban**.
-   A página não deve possuir **scroll**.

---

### 🔶 Kanban

-   A página deve conter ao menos três colunas:
    -   **To Do**
    -   **In Progress**
    -   **Complete**
-   O design deve seguir fielmente o **Figma**.
-   Não há necessidade de implementar funcionalidades adicionais.

---

## Exigências

### Header

-   A Header deve estar presente em todas as páginas.
-   O botão **"Login"** e o botão **"Get started"** devem redirecionar para a página de login.
-   O botão **“Home”** deve redirecionar para a página inicial.

### Footer

-   O Footer deve estar presente em todas as páginas, com o design fiel ao Figma.
-   Os ícones de **Facebook**, **Instagram** e **LinkedIn** devem ser clicáveis e redirecionar para a página inicial de cada rede social.

---
