import { getChampionsData } from "../services/champions.js";

export async function getApisData(req, res) {
    const champions_data = await getChampionsData();
    res.json({ champions_data });
}