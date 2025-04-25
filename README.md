
# Who Is That Champion Data API

Uma API desenvolvida com o objetivo de ser a responsável por otimizar o fluxo de busca, agrupamento e retorno de todo o conteúdo necessário para o funcionamento do jogo de adivinhação *[Who Is That Champion?](https://github.com/isaquesv/who-is-that-champion)*, que desafia os jogadores a adivinhar os campeões do *League of Legends* com base em suas características.

---

## Deploy

Para acessar o deploy desse projeto basta *[clicar aqui](https://who-is-that-champion-data-api.vercel.app/api)* ou acessar a seguinte URL:

```
  https://who-is-that-champion-data-api.vercel.app/api
```

E aguardar alguns instantes enquanto o `json` carrega 😉

---

## Documentação da API

```
  GET /api/
```

Retorna um `json` que contém a versão mais recente da API *Data Dragon* e todas as informações relevantes dos campeões, nos três idiomas suportados: `pt-BR`, `en-US` e `es-ES`.

### Explicação dos campos do JSON:

| **Campo**               | **Descrição**                                                |
| ----------------------- | ------------------------------------------------------------ |
| `"latest_version"`      | Versão mais recente da API Data Dragon.                      |
| `"pt_br"`, `"es_es"` ou `"en_us"` | Arrays com os dados dos campeões em cada idioma.   |
| `"key"`                 | Key (ID) do campeão.                                         |
| `"name"`                | Nome do campeão.                                             |
| `"title"`               | Título do campeão.                                           |
| `"gender"`              | Gênero do campeão.                                           |
| `"lane"`                | A lane (rotas) onde o campeão é geralmente jogado.           |
| `"region"`              | Região de origem do campeão no universo de *League of Legends*. |
| `"resource"`            | Recurso utilizado pelo campeã.                               |
| `"functions"`           | Funções que o campeão desempenha.                            |
| `"range_type"`          | Tipo de alcance do campeão.                                  |
| `"skins_count"`         | Quantidade de skins disponíveis para o campeão.              |
| `"release_year"`        | Ano de lançamento do campeão.                                |
| `"passive_name"`        | Nome da habilidade passiva do campeão.                       |
| `"ultimate_name"`       | Nome da habilidade ultimate do campeão.                      |
| `"icon_path"`           | Caminho para o ícone do campeão.                             |
| `"splash_art_path"`     | Caminho para a imagem de splash art do campeão.              |

## Exemplo de resposta

```javascript
{
  "latest_version": "15.8.1",
  "pt_br": [
    {
      "key": "Aatrox",
      "name": "Aatrox",
      "title": "a Espada Darkin",
      "gender": "Masculino",
      "lane": "Topo",
      "region": "Runeterra",
      "resource": "Poço de Sangue",
      "functions": [
        "Lutador",
        "Tanque"
      ],
      "range_type": "Corpo-a-Corpo",
      "skins_count": 12,
      "release_year": 2013,
      "passive_name": "Postura do Arauto da Morte",
      "ultimate_name": "Aniquilador de Mundos",
      "icon_path": "https://ddragon.leagueoflegends.com/cdn/15.8.1/img/champion/Aatrox.png",
      "splash_art_path": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
    },
    ...
  ],
  "es_es": [
    ...
  ],
  "en_us": [
    ...
  ]
}
```

---

## Stack utilizada

### **Back-end:** JavaScript e Node.js
[![My Skills](https://skillicons.dev/icons?i=js,nodejs)](https://skillicons.dev)

### **APIs:** Data Dragon, LoLdle Data e Universe Meeps LoL  
<img src="https://img.shields.io/badge/League%20of%20Legends-C28F2C.svg?style=for-the-badge&logo=League-of-Legends&logoColor=white">

---

## Suporte

Para suporte, caso você encontre algum problema, tenha sugestões de melhorias ou algo do tipo, fique à vontade para adicionar uma **issue** [clicando aqui](https://github.com/isaquesv/who-is-that-champion-data-api/issues/new)!

---

## Autores

- *[isaquesv](https://github.com/isaquesv)*

## Licença

- Este projeto está sob a licença *[MIT](https://choosealicense.com/licenses/mit/)*


## Referência

- *[League of Legends (Riot Games)](https://www.leagueoflegends.com/)*
- *[Who Is That Champion? (isaquesv)](https://github.com/isaquesv/who-is-that-champion)*
- *[Data Dragon (Riot Games)](https://developer.riotgames.com/docs/lol)*
- *[LoLdle Data (Kerrders)](https://github.com/Kerrders/LoLdleData)*
- *Universe Meeps LoL* 
