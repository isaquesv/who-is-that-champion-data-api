import fetch from "node-fetch";
import { fetchDataDragonLatestVersion } from "./fetchDataDragonVersion.js";
import { formatRegion, formatRange, formatLanes, formatFunctions, formatGender } from "./formatCharacteristics.js";

async function fetchApiJSON(url) {
    const response = await fetch(url);
    return response.json();
}

async function buildChampionObject(dataDragonApiBasicChampionData, dataDragonApiLatestVersion, locale, kerrdersApiChampionsData) {
    const championId = dataDragonApiBasicChampionData.id;
    const championName = dataDragonApiBasicChampionData.name;
    const championTitle = dataDragonApiBasicChampionData.title;
    const championPartype = dataDragonApiBasicChampionData.partype;
    const championRange = dataDragonApiBasicChampionData.stats.attackrange;

    const universeMeepsApiLocale = locale.toLowerCase();
    let universeMeepsApiChampionId = championId.toLowerCase();;
    if (championId == "Renata") {
        universeMeepsApiChampionId = "renataglasc";
    }

    const [dataDragonApiChampionData, universeMeepsApiChampionData] = await Promise.all([
        fetchApiJSON(`https://ddragon.leagueoflegends.com/cdn/${dataDragonApiLatestVersion}/data/${locale}/champion/${championId}.json`),
        fetchApiJSON(`https://universe-meeps.leagueoflegends.com/v1/${universeMeepsApiLocale}/champions/${universeMeepsApiChampionId}/index.json`)
    ]);

    const championSkinsCount = dataDragonApiChampionData.data[championId].skins.length - 1;
    const championPassiveName = dataDragonApiChampionData.data[championId].passive.name;
    const championUltimateName = dataDragonApiChampionData.data[championId].spells[3].name;

    const kerrdersChamp = kerrdersApiChampionsData.find(champion => champion.id == championId);
    let championLanes = kerrdersChamp?.lane || "unknown";
    if (championId == "Ambessa") {
        championLanes = "top";
    } else if (championId == "Mel") {
        championLanes = "mid,support";
    } else if (championId == "Talon") {
        championLanes = "mid,jungle";
    }
    const championGender = kerrdersChamp?.gender || "unknown";

    const universeChamp = universeMeepsApiChampionData.champion;
    const championRegion = universeChamp["associated-faction-slug"];
    const championReleaseYear = parseInt(universeChamp["release-date"].slice(0, 4));
    const championFunctions = formatFunctions(universeChamp.role);

    return {
        id: championId,
        name: championName,
        title: championTitle,
        gender: formatGender(championGender, championId, locale),
        lane: formatLanes(championLanes, locale),
        region: formatRegion(championRegion, locale),
        resource: championPartype,
        functions: championFunctions,
        range_type: formatRange(championRange, championId, locale),
        skins_count: championSkinsCount,
        release_year: championReleaseYear,
        passive_name: championPassiveName,
        ultimate_name: championUltimateName,
        icon_path: `https://ddragon.leagueoflegends.com/cdn/${dataDragonApiLatestVersion}/img/champion/${championId}.png`,
        splash_art_path: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`,
    };
}

export async function getChampionsDataFromApis(dataDragonApiLatestVersion, locale) {
    try {
        const basicDataDragonApiChampionsData = await fetchApiJSON(`https://ddragon.leagueoflegends.com/cdn/${dataDragonApiLatestVersion}/data/${locale}/champion.json`);
        const kerrdersApiChampionsData = await fetchApiJSON("https://gist.githubusercontent.com/Kerrders/0067d88dfd982c272e20dcb496f4dbc7/raw/e0d39fec90a590dc934cd6e60a257a079c15473b/champions.json");

        const championsData = await Promise.all(
            Object.values(basicDataDragonApiChampionsData.data).map(dataDragonApiBasicChampionData =>
                buildChampionObject(dataDragonApiBasicChampionData, dataDragonApiLatestVersion, locale, kerrdersApiChampionsData)
            )
        );

        return championsData;
    } catch (error) {
        console.error(`Erro ao buscar campeões com a API Data Dragon (${locale}): ${error}`);
        return [];
    }
}

export async function getChampionsData() {
    try {
        const latestVersion = await fetchDataDragonLatestVersion();
        if (!latestVersion) {
            throw new Error("Versão inválida");
        }

        const pt_br = await getChampionsDataFromApis(latestVersion, "pt_BR");
        const en_us = await getChampionsDataFromApis(latestVersion, "en_US");
        const es_es = await getChampionsDataFromApis(latestVersion, "es_ES");

        return {
            latest_version: latestVersion,
            pt_br: pt_br,
            en_us: en_us,
            es_es: es_es
        };
    } catch (error) {
        console.error(`Erro ao buscar dados dos campeões: ${error}`);
        return {};
    }
}
