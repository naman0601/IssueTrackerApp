import { Component } from '@angular/core';
import { IssueService } from '../issue.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {
  issues: any[] = [];

  constructor(private issueService: IssueService,private toastr: ToastrService) {}

  ngOnInit() {
    this.loadIssues();
  }

  loadIssues() {
    this.issueService.getIssues().subscribe(
      (response: any) => {
        // Handle success response
        this.issues = response;
      },
      (error) => {
        // Handle error
        console.error('Error loading issues:', error);
      }
    );
  
  }

  deleteIssue(issueId: number) {
    this.issueService.deleteIssue(issueId).subscribe(
      (response: any) => {
        // Handle success response
        this.toastr.success('Issue deleted successfully!', 'Success');
        this.loadIssues();
      },
      (error) => {
        // Handle error
        console.error('Error deleting issue:', error);
        this.toastr.error('Failed to delete issue. Please try again.', 'Error');
      }
    );
  }
}
