import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
    log(content: string): void {
        console.log(`%c${content}`, 'font-size: 30px; color: blue;')
    }
}