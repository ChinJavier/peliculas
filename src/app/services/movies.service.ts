import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaMdb } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient ) {

  }

  private ejecutarQuery<T>(query:string){
    query = URL + query;
    query += `&api_key=${apiKey}`
    console.log(query)
    return this.http.get<T>(query);
  }

  getFeature(){
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1,0).getDate();
    const mes = hoy.getMonth()+1;

    let mesString;

    if( mes < 10 ){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`

    return this.ejecutarQuery<RespuestaMdb>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPopulares(){
    const query = '/discover/movie?sort_by=popularity.desc';
    return this.ejecutarQuery<RespuestaMdb>(query)
  }

}
