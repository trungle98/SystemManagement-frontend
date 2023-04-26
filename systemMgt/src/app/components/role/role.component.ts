import { Component } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  roles!: Role[];
  selectedRole: Role = { id: -1, name: '' };
  isNewRole?: boolean;
  error: any;

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(
      roles => this.roles = roles,
      error => this.error = error
    );
  }

  selectRole(role: Role): void {
    this.selectedRole = role;
    this.isNewRole = false;
  }

  createRole(): void {
    this.selectedRole = { id: 0, name: '' };
    this.isNewRole = true;
  }

  saveRole(): void {
    if (this.isNewRole) {
      this.roleService.createRole(this.selectedRole).subscribe(
        role => {
          this.roles.push(role);
          this.selectedRole = role;
          this.isNewRole = false;
        },
        error => this.error = error
      );
    } else {
      this.roleService.updateRole(this.selectedRole).subscribe(
        role => {
          const index = this.roles.findIndex(r => r.id === role.id);
          this.roles[index] = role;
          this.selectedRole = role;
        },
        error => this.error = error
      );
    }
  }

  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(
      () => {
        this.roles = this.roles.filter(role => role.id !== id);
        this.selectedRole = { id: -1, name: '' };
        this.isNewRole = false;
      },
      error => this.error = error
    );
  }
}
