import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const routes: Routes =[
  { path: 'add', component: AddIssueComponent },
  { path: 'list', component: IssueListComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
