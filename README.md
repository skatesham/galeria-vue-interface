# galeria-vue-interface
Programa Vue com typescript que funciona como a interface de um projeto [Spring boot RESTful API](https://github.com/skatesham/galeria-spring-boot). Esse possui login, cadastro e funcionalidade armazenar images em seu perfil pessoal via url com requisições HTTP. Os envios são feitos com requisições POST de JSON.

A galeria-vue-interface está implantada no [github pages](https://skatesham.github.io/galeria-vue-interface/), porem ser a API RESTful não será possível fazer o login.


### Requisitos
1. Login recebendo um Token
2. Cadastro de novo Usuário
3. Acesso por requisições com o header Authorization e o Token 
4. Logout para excluir a sessão Vue.
5. Gerenciar Imagens

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
### Login
![alt text](https://raw.githubusercontent.com/skatesham/galeria-vue-interface/master/src/assets/img/readme/Login.png)

### Cadastro
![alt text](https://raw.githubusercontent.com/skatesham/galeria-vue-interface/master/src/assets/img/readme/cadastro.png)

### Imagens
![alt text](https://raw.githubusercontent.com/skatesham/galeria-vue-interface/master/src/assets/img/readme/imagens.png)
