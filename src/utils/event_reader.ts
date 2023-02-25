import { ClientEvents } from "discord.js";
import HktonBot from "./bot";

export default class ClientEvent<Key extends keyof ClientEvents> {
    constructor(options: ClientEventOptions<Key>) {
        this.event = options.event
        this.type = options.type ?? "on"
        this.run = options.run
        this.error = options.error
    }
    public event: string
    public type: EventType
    public run: RunFunc<Key>
    public error?: Error
}

interface ClientEventOptions<Key extends keyof ClientEvents> {
    event: Key
    type?: EventType
    run: RunFunc<Key>
    error?: Error
}

type RunFunc<Key extends keyof ClientEvents> = (client: HktonBot, ...args: ClientEvents[Key]) => any;
type Error = (client: HktonBot, error: unknown) => any;
type EventType = "on"|"once"|"off"