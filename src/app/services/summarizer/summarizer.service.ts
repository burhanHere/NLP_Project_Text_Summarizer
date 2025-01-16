import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummarizerService {
  private apiUrl = environment.summarizerApiEndpoint;
  private token = environment.summarizerApiToken;
  constructor(private http: HttpClient) { }

  public summarizeText(input: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.token,
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, { inputs: input }, { headers });
  }
}
