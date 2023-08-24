import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private baseURL = 'http://localhost:8000'; //updated baseURL
  constructor(private http: HttpClient) {}

  // createEmployee(employee: ExpressPanel): Observable<Object> {
  //   return this.httpClient.post(`${this.baseURL}/user/create`, employee); //updated create employee endpoint
  // }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseURL}/user/getAll`);
  }
  // getEmployeesList(): Observable<ExpressPanel[]> {
  //   return this.httpClient
  //     .get<{ data: ExpressPanel[] }>(`${this.baseURL}/user/getAll`)
  //     .pipe(map((response) => response.data));
  // }

  // // getEmployeeById(id: string): Observable<ExpressPanel>{
  // //   return this.httpClient.get<ExpressPanel>(`${this.baseURL}/user/get/${id}`); //updated get employee by id endpoint
  // // }

  // getEmployeeById(id: string): Observable<ExpressPanel> {
  //   return this.httpClient
  //     .get<{ data: ExpressPanel }>(`${this.baseURL}/user/get/${id}`)
  //     .pipe(map((response) => response.data));
  // }

  // deleteEmployee(id: string): Observable<Object> {
  //   return this.httpClient.delete(`${this.baseURL}/user/delete/${id}`); //updated delete employee endpoint
  // }

  // updateEmployee(id: string, employee: ExpressPanel): Observable<Object> {
  //   return this.httpClient.put(`${this.baseURL}/user/get/${id}`, employee); //updated update employee endpoint
  // }

  // searchEmployeeBySkills(skills: string): Observable<ExpressPanel[]> {
  //   return this.httpClient.get<ExpressPanel[]>(
  //     `${this.baseURL}/user/search/${skills}`
  //   ); //updated search employee by skills endpoint
  // }
}
