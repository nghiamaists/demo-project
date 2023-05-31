import { NgModule } from "@angular/core";
import { AppHistoryComponent } from "./app-history.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppHistoryComponent],
    imports: [BrowserModule, CommonModule],
    bootstrap: [AppHistoryComponent],
})
export class AppHistoryModule {}