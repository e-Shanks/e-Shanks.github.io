import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } // ne peut pas déclarer authservice ici car circular depedency

  ngOnInit(): void {
  }

  GetAllVisiteurs() {
    return this.http.get('http://172.20.122.2:90//api/Employe/GetAllVisiteurs');
  }

  GetAllPresenters(){
    return this.http.get('http://172.20.122.2:90/api/Medicament/GetAllPresenters');
  }

  GetAllMedicaments(){
    return this.http.get('http://172.20.122.2:90/api/Medicament/GetAllMedicaments');
  }

  GetAllMedecins(){
    return this.http.get('http://172.20.122.2:90/api/Medecin/GetAllMedecins');
  }

  GetMedecinLocation(sMedecinAdresse: string){
    return this.http.get('https://nominatim.openstreetmap.org/search?format=json&limit=3&q='+sMedecinAdresse);
  }
}