import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users?: User[];
  user: User = new User();
  editMode = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  submitForm() {
    if (this.editMode) {
      this.userService.updateUser(this.user).subscribe(
        data => {
          this.getUsers();
          this.user = new User();
          this.editMode = false;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.userService.createUser(this.user).subscribe(
        data => {
          this.getUsers();
          this.user = new User();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  editUser(user: User) {
    this.user = user;
    this.editMode = true;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id!).subscribe(
      data => {
        this.getUsers();
      },
      error => {
        console.log(error);
      }
    );
  }
}
