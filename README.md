# Desafio NodeJS e MySQL - Full Cycle 2.0

## Logo abaixo irei definir alguns pontos sobre o funcionamento da atividade.

### Criação da base de dados:

A base de dados é criada através de um script. Na raiz do projeto existe uma pasta chamada *sql-scripts*, que é utilizada como um volumente para a pasta de scripts do mysql, sendo assim, só foi preciso adicionar o seguinte comando *--init-file /docker-entrypoint-initdb.d/database.sql* na tag command do docker composer, para o mysql iniciar o script sql, o script basicamente verifica se a tabela existe, caso não exista ele à cria.

### Criação da base de dados:

Não é preciso entrar dentro do container para iniciar iniciar o nodejs, o mesmo ja é iniciado automaticamente.

### Sobre as imagens utilizada.

As imagens utilizadas estao disponíveis no Docker Hub, sendo assim, basta utiliza-las, ou fazer o build do projeto.

### Como utilizar ?

Existe duas forma de iniciar o projeto, a primeira é utilizando as imagens do Docker Hub, e a segunda fazendo o build das imagens. O *docker-compose* do meu projeto já esta preparado para trabalhar da duas formas, ou seja você tem a opção de utilizar apenas um *docker-compose up -d* ou *docker-compose up -d --build*.

Depois de iniciar o projeto com o *docker-compose* é possível acessar o mesmo através do navegador, utilizando o *localhost:8080*. É possível criar um nome de forma dinámica na tabela *people*, sendo que ao acessar a url padrão sem acrescentar nada é criado um registro com o nome "Lucas". Caso queria criar qualquer outro nome basta passar um query string na url, siga o exemplo: *localhost:8080?name=Matheus*. Desta forma será criado o usuário Matheus.