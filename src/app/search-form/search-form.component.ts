import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username = "YvonneGi";
  @Output() addUser = new EventEmitter<any>();

  submitUser() {
    this.addUser.emit(this.username);
  }


  constructor() { }

  ngOnInit() {
    this.submitUser();
  }

}
