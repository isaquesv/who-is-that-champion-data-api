export function formatRegion(region, locale) {
    if (region == "unaffiliated") {
        if (locale == "pt_BR" || locale == "en_US") {
            return "Runeterra";
        } else {
            return "Runaterra";
        }
    }

    return region[0].toUpperCase() + region.slice(1);
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
    let lanes = "";

    for (let i = 0; i < rawLanes.split(",").length; i++) {
        let lane = rawLanes.split(",")[i][0].toUpperCase() + rawLanes.split(",")[i].substring(1);

        if (i > 0) {
            lanes += " / ";
        }
        if (locale == "pt_BR") {
            if (lane == "Top") {
                lanes += "Topo";
            } else if (lane == "Jungle") {
                lanes += "Selva";
            } else if (lane == "Mid") {
                lanes += "Meio";
            } else if (lane == "Bottom") {
                lanes += "Atirador";
            } else {
                lanes += "Suporte";
            }
        } else if (locale == "es_ES") {
            if (lane == "Top") {
                lanes += "Superior";
            } else if (lane == "Jungle") {
                lanes += "Jungla";
            } else if (lane == "Mid") {
                lanes += "Central";
            } else if (lane == "Bottom") {
                lanes += "Inferior";
            } else {
                lanes += "Soporte";
            }
        } else {
            lanes += lane;
        }
    }

    return lanes;
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