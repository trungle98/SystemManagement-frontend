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
import { CategoryMgtComponent } from './category-mgt/category-mgt.component';
import { ViewIdeaComponent } from './components/view-idea/view-idea.component';
import { DetailIdeaComponent } from './components/detail-idea/detail-idea.component';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ViewTopicComponent } from './components/view-topic/view-topic.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'staff', component: BoardStaffComponent },
  { path: 'dept', component: BoardDeptComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'category', component: CategoryMgtComponent },
  {path: 'viewIdea/:topicId', component:ViewIdeaComponent},
  {path: 'detailIdea/:ideaId', component:DetailIdeaComponent},
  {path: 'idea/create', component:CreateIdeaComponent},
  {path: 'category/create', component:CreateCategoryComponent},
  {path: 'topic/view', component:ViewTopicComponent},
  {path: 'topic/create', component:CreateTopicComponent},
  {path: 'analytics', component:AnalyticsPageComponent},
  {path: 'userManager', component:UserComponent},
  {path: 'roleManager', component:RoleComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
