import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
    constructor() {
        this.log('Logger service init')
    }

    log(content: string): void {
        console.log(`%c${content}`, 'font-size: 30px; color: blue;')
    }
}