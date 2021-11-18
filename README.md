# URL Shortener :link:

Programa encurtador de URL criado a partir de uma REST API construída em Node.js e Typescript além da utilização do MongoDB Atlas para a base de dados. 

### Para rodar o projeto é necessário:

- `npm install`
- Alterar a variável MONGO_CONNECTION com o link do banco de dados no arquivo src/config/Constants.ts
- `npm run buildwatch`
- `npm run dev`
- Um programa gerenciador de REST API como Insomnia ou Postman

#### Como utilizar

​	Em `http://localhost:5000/shorten`, inserir um POST JSON com a chave "originURL" e o valor com o link a ser encurtado como, por exemplo:

```json
{
  "originURL": "https://github.com/febatis"
}
```

​	Em caso de sucesso, o programa deverá retornar algo parecido com:

```json
{
  "hash": "loaga6MYG",
  "originURL": "https://github.com/febatis",
  "shortURL": "http://localhost:5000/loaga6MYG",
  "_id": "61961743ffcc7a7c3f1b32fe",
  "__v": 0
}
```

​	A partir da inserção destes dados no banco de dados, ao acessar o valor da chave "shortURL", o programa irá redirecionar o usuário para o link de interesse.



###### Projeto baseado na aula da [@alexiadorneles](https://github.com/alexiadorneles) na plataforma [**DIO**](https://web.dio.me).