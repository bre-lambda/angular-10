import { AuthGuard } from './auth/services/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddStudentComponent } from './student/components/add-student/add-student.component';
import { IndexComponent } from './student/view/index/index.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'students',
        component: IndexComponent,
      },
      {
        path: 'add-students',
        component: AddStudentComponent,
      },
    ],
  },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
