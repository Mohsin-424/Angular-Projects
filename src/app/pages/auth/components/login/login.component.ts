import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthOptions, NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  rememberMe: boolean = true;
  loading: boolean = false;
  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: NbAuthOptions,
    cd: ChangeDetectorRef,
    router: Router,
    private _auth: AuthService ) {
    super(service, options, cd, router);
  }

  ngOnInit(): void {
    console.log('login')
  }
  login(): void {
    this.loading = true;
    // setInterval(()=> {
    //   this.loading = false;
    // },3000)
    this._auth.login(this.user.email, this.user.password).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.showMessages = true;
      this.submitted = false;
      this.messages.push('Login Successful')
    })

  }
}
