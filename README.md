<p align="center">
  <img width="16%" src=".github/logo.png" alt="mobizon sms" title="mobizon sms"></a>
</p>

<h3 align="center">Backend-SMS</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caioagiani/backend-sms">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caioagiani/backend-sms">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/caioagiani/backend-sms">
  <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

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

## Testes

```javascript
$ jest --setupFiles dotenv/config --detectOpenHandles --forceExit
 PASS  __tests__/short.test.js
  API Requests
    ✓ should send an sms (865 ms)
    ✓ should create a shortened link (477 ms)
    ✓ should list all shortened links (317 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.871 s, estimated 3 s
Ran all test suites.
Done in 3.29s.
```

## Colaboradores

- [@juan-patrick](https://github.com/juan-patrick) - Frontend
- [@caioagiani](https://github.com/caioagiani) - Backend

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani)
- [caio.agiani14@gmail.com](mailto:caio.agiani14@gmail.com)
