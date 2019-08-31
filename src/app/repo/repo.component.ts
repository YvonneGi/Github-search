import { Component, OnInit,Input } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers: [UserRequestService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo:Repo;

  constructor(private userService: UserRequestService) { }

  ngOnInit() {
  }

}
