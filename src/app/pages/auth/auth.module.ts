import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { PagesModule } from '../pages.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        RequestPasswordComponent,
        ResetPasswordComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        NbInputModule,
        NbButtonModule,
        NbAlertModule,
        AuthRoutingModule,
        NbCheckboxModule,
    ],
    exports: [AuthRoutingModule]
})
export class AuthModule {}