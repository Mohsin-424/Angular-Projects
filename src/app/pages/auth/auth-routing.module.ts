import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    // {
    //   path: 'pages',
    //   loadChildren: () => import('./pages/pages.module')
    //     .then(m => m.PagesModule),
    // },
    {
      path: 'auth',
      component: NbAuthComponent,
      children: [
        {
          path: '',
          component: LoginComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
        {
          path: 'logout',
          component: NbLogoutComponent,
        },
        {
          path: 'request-password',
          component: NbRequestPasswordComponent,
        },
        {
          path: 'reset-password',
          component: NbResetPasswordComponent,
        },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AuthRoutingModule {}