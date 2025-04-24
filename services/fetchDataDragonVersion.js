import fetch from "node-fetch";

export async function fetchDataDragonLatestVersion() {
    try {
        const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
        const data = await response.json();
        
        return data[0];
    } catch (error) {
        console.error(`Erro ao buscar a versão recente: ${error}`);
        
        return null;
    }
}