import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal_api } from '../Animal_api';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(animais: Animal[], animal: Animal) {
    return animais.filter((a) => animal.nome !== a.nome);
  }

  delete(id: number) {
    return this.http.delete<Animal_api>(`${this.apiUrl}/${id}`)
  }

  add(animais: Animal[], animal: Animal) {
    return animais.push(animal);
  }

  getAll(): Observable<Animal_api[]> {
    return this.http.get<Animal_api[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal_api>{
    return this.http.get<Animal_api>(`${this.apiUrl}/${id}`)
  }
}
