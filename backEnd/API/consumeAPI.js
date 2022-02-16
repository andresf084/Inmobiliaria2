const https = require("https");

const getColombianCitys = () => {
    //Cómo carajos consulto un servicio de terceros?
    return new Promise((resolve, reject) => {
        try {
            https.get("https://www.datos.gov.co/resource/xdk5-pm3f.json/?$$app_token=UrGWHnoScMwOOvRZZJh18NyJr", (res) => {
                let x = ""
                res.on("data", (chunk) => {
                    x += chunk
                }).on("end", () => {
                    let dataJSON2 = JSON.parse(x)
                    const dataJSON = dataJSON2.sort();
                    resolve(dataJSON)
                })
            })
        } catch {
            reject("Ocurrió error en la obtención del body")
            }
    }).then((data)=>{return data}).catch((err)=>{return err})
}

module.exports = {
    getColombianCitys
}