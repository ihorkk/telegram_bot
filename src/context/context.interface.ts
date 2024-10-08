import { Context } from "telegraf"

export interface SessionData {
    telegramLike: boolean;
}

export interface IBotContext extends Context {
    session: SessionData
}