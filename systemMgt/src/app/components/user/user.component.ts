import { Component } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/user-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users?: UserDto[];
  user: User = new User();
  editMode = false;
  selector = 1;
  roles!: Role[];
  constructor(private userService: UserService,
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.roleService.getRoles().subscribe(
      data => {
        this.roles = data;
      },
      error => {
        console.log(error);
      }
    )
    this.userService.getUser().subscribe(
      data => {
        this.users = data;
        console.log(data);
        
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
          this.showSuccessAlert("user is saved!", "alert-success")
        },
        error => {
          console.log(error);
          this.showSuccessAlert("error when save user!", "alert-danger")
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
  private showSuccessAlert(msg:String, type:string): void {
    const successMessage = msg;
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', type, 'alert-dismissible', 'fade', 'show');
    alertElement.innerHTML = `
      ${successMessage}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    document.body.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 5000);
  }
}
