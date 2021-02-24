<p align="center">
  <img width="16%" src=".github/logo.png" alt="mobizon sms" title="mobizon sms"></a>
</p>

<h3 align="center">Backend-SMS</h3>

<div align="center">

Aplicação API para disparos de SMS e Encurtador de URL usando o Gateway - [Mobizon](https://github.com/mobizon/mobizon-php/tree/master/docs/examples)

</div>

## API Key

Necessário registrar a conta no site abaixo para obter sua key:

- [mobizon.com.br](https://mobizon.com.br)

## Iniciar aplicação

```bash
# clone
$ git clone git@github.com:caioagiani/backend-sms.git

# abrir pasta
$ cd backend-sms

# configurar vars ambiente
$ cp .env.example .env

# instalar dependências
$ yarn install

# iniciar aplicação
$ yarn dev
```

## Endpoints

- [x] Enviar SMS:

```javascript
post('/sms/create');
{
  "recipient": "5511941439844",
  "text": "Hello!"
}
```

- [x] Encurtar link / listar links:

```javascript
post('/shorts/create')
{
  "data": {
    "fullLink": "https://google.com.br"
  }
}
```

```javascript
post('/shorts/list')
{
  "criteria": {
    "status": "1",
    "moderatorStatus": "1"
  },
  "pagination": {
    "currentPage": "1",
    "pageSize": "10"
  },
  "sort": {
    "clickCnt": "DESC"
  }
}
```

Importe as rotas no seu [Insomnia](https://insomnia.rest/run/?label=backend-sms&uri=https://raw.githubusercontent.com/caioagiani/backend-sms/master/insomnia.json).

## Colaboradores

- [@juan-patrick](https://github.com/juan-patrick) - Frontend
- [@caioagiani](https://github.com/caioagiani) - Backend

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani)
- [caio.agiani14@gmail.com](mailto:caio.agiani14@gmail.com)
