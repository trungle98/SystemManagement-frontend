import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStaffComponent } from './board-staff/board-staff.component';
import { BoardDeptComponent } from './board-dept/board-dept.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CategoryMgtComponent } from './category-mgt/category-mgt.component';
import { ViewIdeaComponent } from './components/view-idea/view-idea.component';
import { DetailIdeaComponent } from './components/detail-idea/detail-idea.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ViewTopicComponent } from './components/view-topic/view-topic.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { UserComponent } from './components/user/user.component';
import { TestComponent } from './test/test.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardStaffComponent,
    BoardDeptComponent,
    BoardManagerComponent,
    CategoryMgtComponent,
    ViewIdeaComponent,
    DetailIdeaComponent,
    CommentComponent,
    CreateIdeaComponent,
    CreateCategoryComponent,
    ViewTopicComponent,
    CreateTopicComponent,
    AnalyticsPageComponent,
    UserComponent,
    TestComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
