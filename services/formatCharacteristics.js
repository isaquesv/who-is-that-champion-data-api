export function formatRegion(region, locale) {
    region = region[0].toUpperCase() + region.slice(1);

    if (region == "Unaffiliated") {
        if (locale == "pt_BR" || locale == "en_US") {
            return "Runeterra";
        } else {
            return "Runaterra";
        }
    }

    if (locale == "pt_BR") {
        if (region == "Mount-targon") {
            return "Monte Targon";
        } else if (region == "Void") {
            return "Vazio";
        } else if (region == "Bandle-city") {
            return "Bandópolis";
        } else if (region == "Shadow-isles") {
            return "Ilhas das Sombras";
        } else if (region == "Bilgewater") {
            return "Águas de Sentina";
        }
    } else if (locale == "es_ES") {
        if (region == "Mount-targon") {
            return "Monte Targon";
        } else if (region == "Void") {
            return "El Vacío";
        } else if (region == "Bandle-city") {
            return "Ciudad de Bandle";
        } else if (region == "Shadow-isles") {
            return "Islas de la Sombra";
        } else if (region == "Bilgewater") {
            return "Aguas Estancadas";
        }
    }

    return region;
}

export function formatRange(range, id, locale) {
    if (id == "Samira") {
        if (locale == "pt_BR") {
            return "Corpo-a-Corpo / Longo Alcance";
        } else if (locale == "en_US") {
            return "Melee / Ranged";
        }
        return "Cuerpo a Cuerpo / Alcance Largo";
    }

    if (locale == "pt_BR") {
        if (range < 350) {
            return "Corpo-a-Corpo";
        } else {
            return "Longo Alcance";
        }
    } else if (locale == "en_US") {
        if (range < 350) {
            return "Melee";
        } else {
            return "Ranged";
        }
    } else if (locale == "es_ES") {
        if (range < 350) {
            return "Cuerpo a Cuerpo";
        } else {
            return "Alcance Largo";
        }
    }

    return "Unknown";
}

export function formatLanes(rawLanes, locale) {
    const lanes = [];

    for (let i = 0; i < rawLanes.split(",").length; i++) {
        let lane = rawLanes.split(",")[i][0].toUpperCase() + rawLanes.split(",")[i].substring(1);

        if (locale == "pt_BR") {
            if (lane == "Top") {
                lanes.push("Topo");
            } else if (lane == "Jungle") {
                lanes.push("Selva");
            } else if (lane == "Mid") {
                lanes.push("Meio");
            } else if (lane == "Bottom") {
                lanes.push("Atirador");
            } else {
                lanes.push("Suporte");
            }
        } else if (locale == "es_ES") {
            if (lane == "Top") {
                lanes.push("Superior");
            } else if (lane == "Jungle") {
                lanes.push("Jungla");
            } else if (lane == "Mid") {
                lanes.push("Central");
            } else if (lane == "Bottom") {
                lanes.push("Inferior");
            } else {
                lanes.push("Soporte");
            }
        } else {
            lanes.push(lane);
        }
    }

    return lanes.join(" / ");
}

export function formatFunctions(rawRoles) {
    const roles = [];

    for (let i = 0; i < rawRoles.length; i++) {
        let role = rawRoles[i];

        roles.push(role.name);
    }

    return roles.join(" / ");
}

export function formatGender(rawGender, id, locale) {
    if (id == "Mel") {
        if (locale == "pt_BR") {
            return "Feminino";
        } else if (locale == "en_US") {
            return "Female"
        }
        return "Femenino";
    }

    const gender = rawGender?.[0].toUpperCase() + rawGender?.slice(1) || "Unknown";

    if (gender == "Female") {
        if (locale == "pt_BR") {
            return "Feminino";
        } else if (locale == "es_ES") {
            return "Femenino";
        }
    } else if (gender == "Male") {
        if (locale == "pt_BR" || locale == "es_ES") {
            return "Masculino";
        }
    } else {
        if (locale == "pt_BR") {
            return "Outro";
        } else if (locale == "es_ES") {
            return "Otro";
        } else {
            return "Other";
        }
    }
    
    return gender;
}