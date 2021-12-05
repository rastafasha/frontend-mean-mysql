import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = '/api';

  constructor(
    private http: HttpClient
  ) { }

  //get equipos
  getEquipos(){
    return this.http.get(this.url);
  }

  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  agregarEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }

  eliminarEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  modificarEquipo(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }



}

export interface Equipo{
  id:string;
  nombre?:string;
  logo?:string;
}
