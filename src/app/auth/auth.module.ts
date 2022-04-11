import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthMockService } from './services/auth-mock.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [AuthGuard, AuthMockService, AuthService],
})
export class AuthModule {}
