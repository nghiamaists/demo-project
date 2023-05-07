import { Injectable } from "@angular/core";
import { WhetherInterface } from "../interfaces/whether-widget.interface";
import { Observable, of } from "rxjs";
import { MOCK_WHETHER } from "../constants/mock-data";


@Injectable({
    providedIn: 'root'
})
export class WidgetDataProvider {
    public getAllData(): Observable<WhetherInterface[]> {
        return of(MOCK_WHETHER);
    }

    public dataCount(): Observable<number> {
        return of(MOCK_WHETHER.length);
    }

    public getDataById(id: number): Observable<WhetherInterface> {
        return of(MOCK_WHETHER.find(item => item.id === id)!); 
    }
}