# Desafio NodeJS e MySQL - Full Cycle 2.0

## Logo abaixo irei definir alguns pontos sobre o funcionamento da atividade.

### Criação da base de dados:

A base de dados é criada através de um script. Na raiz do projeto existe uma pasta chamada *sql-scripts*, que é utilizada como um volume para a pasta de scripts do mysql, sendo assim, só foi preciso adicionar o seguinte comando *--init-file /docker-entrypoint-initdb.d/database.sql* na tag command do *docker-composer*, para o mysql iniciar o script sql, o script verifica se a tabela existe, caso não exista ele à cria.

### Sobre a inicialização do NodeJS:

Não é preciso entrar dentro do container para iniciar iniciar o nodejs, o mesmo ja é iniciado automaticamente.

### Sobre as imagens utilizadas.

As imagens utilizadas estão disponíveis no Docker Hub, sendo assim, basta utiliza-las, ou fazer o build do projeto.

### Como utilizar ?

Existem duas formas de iniciar o projeto, a primeira é utilizando as imagens do Docker Hub, e a segunda é fazendo o build das imagens. O *docker-compose* do meu projeto esta preparado para trabalhar das duas formas, ou seja você tem a opção de utilizar o *docker-compose up -d* ou *docker-compose up -d --build*.

Depois de iniciar o projeto com o *docker-compose* é possível acessar o projeto através do navegador, utilizando o *localhost:8080*. É possível criar um nome de forma dinâmica na tabela *peoples*. Ao acessar a url padrão sem acrescentar nada é criado um registro com o nome "Lucas". Caso queria criar qualquer outro nome basta passar um query string na url, siga o exemplo: *localhost:8080?name=Matheus*, desta forma será criado o usuário Matheus.
