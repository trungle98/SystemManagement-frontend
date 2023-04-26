import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-dept',
  templateUrl: './board-dept.component.html',
  styleUrls: ['./board-dept.component.css']
})
export class BoardDeptComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
}