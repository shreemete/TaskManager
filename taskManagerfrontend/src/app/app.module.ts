import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FootersComponent } from './components/footers/footers.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './pages/task/task.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { PopupViewComponent } from './components/popup-view/popup-view.component';
import { PopupUpdateComponent } from './components/popup-update/popup-update.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    AddTaskComponent,
    ViewTaskComponent,
    FootersComponent,
    RegisterComponent,
    LoginComponent,
    TaskComponent,
    UserLoginComponent,
    PopupViewComponent,
    PopupUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
