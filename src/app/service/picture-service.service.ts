import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=nkOKl3ublsM5YDOdzCd7epaxxWa1Mgfsbg8exMWv'

const KEY = '?api_key=nkOKl3ublsM5YDOdzCd7epaxxWa1Mgfsbg8exMWv'

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getPicTheDay(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}`)
  }

  getPicByDate(date: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}&start_date=${date}&end_date=${date}`)
  }

}
