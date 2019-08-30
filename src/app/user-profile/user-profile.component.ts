import { Component, OnInit } from '@angular/core';

// import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  // providers: [UserRequestService],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  arrayRepo:Repo[];

  constructor() { }

  ngOnInit() {
  }

}
