- instalado nodejs no windows
- executar o cmd como admin
    - executar o comando "corepack enable" para desbloquear o yarn. Ele será usado para instalar framewors no projeto, similar ao npm
- executar "yarn init -y" para criar o package.json 
    PS: O arquivo package.json serve para configurar o projeto e salva as dependências de bibliotecas baixadas.
- criar o arquivo ".gitignore" na raiz do projeto para listar os arquivos que não devem ser comitados, como o arquivo ".env" que contem variáveis especificar do local que o app está sendo executado. Ex: a porta da aplicação.
- criar o arquivo ".env"
- executar o comando "yarn add dotenv" para importar as variáveis do arquivo ".env" dento do js com a linha "require('dotenv').config()"
- instalar o git no windows: [text](https://git-scm.com/downloads)
- e o gh(github cli): [text](https://cli.github.com)
    PS: Comandos uteis git: [text](https://www.youtube.com/watch?v=pmXfvd6Zqg4&t=419s)
        - "git init" (inicializa o git na pasta atual)
        - "git add ." (add todos os arquivos do projeto para serem versionados)
        - "git remote add origin [url aqui]" (vincula o versionamento do repositório local com a url passada. Obs: criar repositório git pelo site para obter a url)
        - 'git commit -m "[mensagem ]" ' (agrupa as modificações do repositório local para serem enviadas para github)
        - é possível criar o repositório por linha de comando:
            -- "gh auth login" (fazer login no github pelo navegador com o código gerado)
            -- "gh remo create" (é possivel fazer push do commit nesse momento)
- executar "yarn add express" para instalar o framework de gerenciamento de rotas
- criar o arqivo "index.js"