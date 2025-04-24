
# Data API - Quem é esse campeão?

Uma API desenvolvida com o objetivo de ser a responsável por buscar, agrupar e retornar o conteúdo necessário para o funcionamento do jogo de adivinhação *[Quem é esse campeão?](https://github.com/isaquesv/who-is-that-champion)*, que desafia os jogadores a adivinhar os campeões do *League of Legends* com base em suas características.

---

## Documentação da API

```
GET /api/
```

Retorna um `json` que contém a versão mais recente da API DataDragon e todas as informações (características dos campeões) relevantes e necessárias para o funcionamento do *[Quem é esse campeão](https://github.com/isaquesv/who-is-that-champion)* nos 3 idiomas suportados pelo jogo (**pt_BR**, **en_US** e **es_ES**).

### Explicação dos campos do JSON:

| **Campo**               | **Descrição**                                                |
| ----------------------- | ------------------------------------------------------------ |
| `"latest_version"`      | Versão mais recente da API Data Dragon.                      |
| `"pt_br"`, `"en_us"` ou `"es_es"` | O campo contém um array com os dados dos campeões. |
| `"id"`                  | ID do campeão.                                               |
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

## Demonstração `GET /api/`

```javascript
{
  "latest_version": "15.8.1",
  "pt_br": [
    {
      "id": "Aatrox",
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
      "release_year": "2013",
      "passive_name": "Postura do Arauto da Morte",
      "ultimate_name": "Aniquilador de Mundos",
      "icon_path": "https://ddragon.leagueoflegends.com/cdn/15.8.1/img/champion/Aatrox.png",
      "splash_art_path": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
    },
    ...
  ],
  "en_us": [
    ...
  ],
  "es_es": [
    ...
  ]
}
```

---

## Stack utilizada

### **Back-end:** JavaScript e Node.js
[![My Skills](https://skillicons.dev/icons?i=js,nodejs)](https://skillicons.dev)

---

## Deploy

Para acessar o deploy desse projeto basta [clicar aqui](https://who-is-that-champion-data-api.vercel.app/api) ou acessar a seguinte URL:

```
https://who-is-that-champion-data-api.vercel.app/api
```

---

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

---

## Autores

- [isaquesv](https://github.com/isaquesv)

---

## Referência

 - [Data Dragon API](https://developer.riotgames.com/docs/lol)
 - [Kerrders LoLdle Data](https://github.com/Kerrders/LoLdleData)
 - Universe Meeps LoL
 
