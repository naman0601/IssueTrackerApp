import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl='http://localhost:3000/issues';
  constructor(private http: HttpClient) { }

  addIssue(issue: any) {
     return this.http.post(this.apiUrl, issue);
  }

  getIssues() {
    return this.http.get(this.apiUrl);
  }

  deleteIssue(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
