import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";
import { Markup, Telegraf } from "telegraf"

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }
    hande(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply("Do you like Telegram?", 
            Markup.inlineKeyboard([
                Markup.button.callback("👍", "telegram_like"),
                Markup.button.callback("👎", "telegram_dislike"),
            ]));
        });

        this.bot.action("telegram_like", (ctx) => {
            ctx.session.telegramLike = true;
            ctx.editMessageText("❤️");
        });

        this.bot.action("telegram_dislike", (ctx) => {
            ctx.session.telegramLike = false;
            ctx.editMessageText("💔");
        });
    }
}