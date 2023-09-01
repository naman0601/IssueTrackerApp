import { Component } from '@angular/core';
import { IssueService } from '../issue.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  issue={
    title:'',
    description:''
  }

  constructor(private issueService: IssueService, private toastr:ToastrService) {}
  
  addIssue() {
    if (this.issue.title.trim() === '' || this.issue.description.trim() === '') {
      this.toastr.error('Title and description are required.', 'Error');
      return;
    }

    this.issueService.addIssue(this.issue).subscribe(
      (response: any) => {
        // Assuming the API response includes the newly added issue with an ID
        console.log('Issue added:', response);
        this.toastr.success('Issue added successfully!', 'Success');
        this.issue = { title: '', description: '' };
      },
      (error) => {
        console.error('Error adding issue:', error);
        this.toastr.error('Failed to add issue. Please try again.', 'Error');
      }
    );
  }
}
