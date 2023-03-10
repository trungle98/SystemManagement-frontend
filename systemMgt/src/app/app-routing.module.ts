import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStaffComponent } from './board-staff/board-staff.component';
import { BoardDeptComponent } from './board-dept/board-dept.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'staff', component: BoardStaffComponent },
  { path: 'dept', component: BoardDeptComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
