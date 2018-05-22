# Aptagrafica

Novo site institucional Apta Gráfica.


### Pré-requisitos

NodeJs, Grunt Cli, Bower

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina o Node.Js. Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

### Instalando as Dependências

Abra o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, digite no cmd a seguinte instrução:

```
npm install
```
Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.Json e mais o bower.Json para o projeto. Criando assim, duas pastas no projeto:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.
* `components` - contêm os arquivos de dependências do desenvolvedor(AngularJS, Bootstrap...).



## Executando localmente

No cmd, execute a seguinte opção:

```
grunt live
```

Se estiver tudo ok, abra seu navegador de preferência e digite: http://localhost:9000. Pronto, seu projeto ira rodar localmente.



## Recursos utilizados no desenvolvimento:

* [Grunt.Js](https://gruntjs.com/);
* [Bower](https://bower.io/);
* [Bootstrap](http://getbootstrap.com/);
* [jQuery](https://jquery.com/);
* [Sass](http://sass-lang.com/);
* [Normalize](https://necolas.github.io/normalize.css/);
* [AngularJS](https://angularjs.org/);


## Autor

* **Frederic Chien** - *Initial work* - [fredchien](https://github.com/fredchien)
