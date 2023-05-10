# YouTube Mix Scraper

Este projeto tem como objetivo desenvolver um script utilizando Typescript e Puppeteer capaz de realizar a raspagem de dados do YouTube Mix e retornar uma lista de objetos que contém titulo, url e descrição de cada vídeo encontrado no mix.

## Pré-requisitos

Antes de utilizar este projeto, é necessário possuir os seguintes pré-requisitos:

- Node.js
- npm

## Instalação

Para instalar e utilizar este projeto, siga os seguintes passos:

1 - Clone o repositório em sua máquina:

```
git clone https://github.com/codehiga/yt-scrap-node-ts.git
cd yt-scrap-node-ts
```

2 - Instale as dependências do projeto:

```
npm install
```

## Utilização

Para utilizar este projeto, siga os seguintes passos:

1 - Execute o script com o seguinte comando:

```
npm run dev
```

2 - Será aberto um server com express.

Rotas:

```
/lista-info?url=URL_PLAYLIST [GET]
```

Response:

```
[
    titulo_playlist: string,
    {
        titulo: string,
        url: string
    }
]
```

3 - Aguarde o script terminar de executar. Ao final, o script irá exibir a lista de objetos contendo o titulo e url de cada vídeo encontrado no YouTube Mix.

## Observações

- Este script é apenas para fins educacionais e não deve ser utilizado para raspar dados sem a permissão do proprietário do site.
- O script utiliza a biblioteca Puppeteer para realizar a raspagem de dados do YouTube Mix.
- Certifique-se de ter o Node.js instalado em sua máquina antes de utilizar este script.
