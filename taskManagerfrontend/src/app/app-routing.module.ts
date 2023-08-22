import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TaskComponent } from './pages/task/task.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "user/login",
    pathMatch: "full"
  },

  {
    component: TaskComponent,
    path: "task",
    children: [
      {
        redirectTo: "add",
        path: "",
        pathMatch: "full"
      },
      {
        component: AddTaskComponent,
        path: "add"
      },
      {
        component: ViewTaskComponent,
        path: "view"
      },
    ]
  },
  {
    component: UserLoginComponent,
    path: "user",

    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        component: LoginComponent,
        path: "login"
      },
      {
        component: RegisterComponent,
        path: "register"
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
