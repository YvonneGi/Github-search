import { Component, OnInit,Input } from '@angular/core';
import { RequestService } from '../request.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers: [RequestService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo:Repo;

  constructor(private userService: RequestService) { }

  ngOnInit() {
  }

}
