import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  providers: [RequestService],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  arrayRepo:Repo[];

  constructor(private userService: RequestService) {}

  getResponse(username) {
    this.userService.userRequest(username);
    this.user = this.userService.user;
    this.user.showRepos = false;

    console.log("Got User Response");
    console.log(this.user);

    this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;
  }

  getRepos() {
    // this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;

    console.log("Got Repos Response");
    console.log(this.arrayRepo);

  }
  toggleRepos(){
    this.user.showRepos = !this.user.showRepos;
    console.log("Toggle Repos");
  }

  ngOnInit() {
  }

}
