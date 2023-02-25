import { Client } from "discord.js";

export default class HktonBot extends Client {
    constructor() {
        super({
            intents: [
                "Guilds",
            ],
            ws: { properties: { browser: "Discord Android" }},
        })
    }
}