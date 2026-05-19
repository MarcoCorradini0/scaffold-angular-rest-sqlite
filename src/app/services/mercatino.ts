import { Injectable, signal } from '@angular/core';
import { Mercatino } from '../models/mercatino';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MercatinoService {
  private apiUrl='http://localhost:8080/api/mercatini';
  mercatini=signal<Mercatino[]>([]);
  loading=signal(false);
  error=signal('');

  constructor(private http:HttpClient){}
  
  loadAll(tema?: string, search?: string){
    this.loading.set(true);
    this.error.set('');
    let params=new HttpParams();

    if(tema&&tema!==''){
      params=params.set('tema',tema);
    }
    if(search&&search!==''){
      params=params.set('search',search);
    }
    this.http.get<Mercatino[]>(this.apiUrl, {params})
      .subscribe({
        next:(data) => {
          this.mercatini.set(data);
          this.loading.set(false);
        },
        error:()=>{
          this.error.set('Errore caricamento mercatini');
          this.loading.set(false);
        }
      });
  }
}
