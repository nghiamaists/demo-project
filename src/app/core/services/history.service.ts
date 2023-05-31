import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
    // providedIn: 'platform'
})
export class HistoryService {

    private readonly innerHistory$ = new BehaviorSubject<string[]>([]);
    
    public appendNewToHistory(item: string): void {
        const data = [...this.innerHistory$.value, item];
        this.innerHistory$.next(data);
    }

    get navigatedHistory$(): Observable<string[]> {
        return this.innerHistory$.asObservable();
    }
}