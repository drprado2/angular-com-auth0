import { Component, OnInit } from '@angular/core';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  email: string;
  senha: string;

  constructor() { }

  private webAuth: any = null;
  login: string;
  password: string;

  criarConta() {

    this.webAuth.signup({
      connection: 'Username-Password-Authentication',
      email: this.email,
      password: this.senha,
      user_metadata: { plan: 'silver', team_id: 'a111' }
    }, function (err) {
      if (err)
        return alert('Something went wrong: ' + err.message);

      return alert('success signup without login!');
    });
  }

  esqueciMinhaSenha() {

    this.webAuth.passwordlessStart({
      connection: 'email',
      send: 'link',
      email: 'drprado2@gmail.com',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile email user_id'
    }, function (err, res) {
      // handle errors or continue
      if (err) {
        console.log('Ocorreu um erro', err);
      } else {
        console.log('tudo ok', res);
      }
    });
  }

  ngOnInit(): void {
    this.webAuth = new auth0.WebAuth({
      domain:       'adri-oauth-test.auth0.com',
      clientID:     '4x7QExL8Wa91ruGHeCrxvZ2XczFmoJgV',
      redirectUri: 'http://localhost:4200/callback',
      responseType: 'token',
      scope: 'openid profile email user_id'
    });
  }

  logarComGoogle() {
    this.webAuth.authorize({
      connection: 'google-oauth2'
    });
  }

  logarComGithub() {
    this.webAuth.authorize({
      connection: 'github'
    });
  }

  logarComFace() {
    this.webAuth.authorize({
      connection: 'facebook'
    });
  }

  logarComUsuarioCadastrado() {
    this.webAuth.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username: this.login,
      password: this.password
    });

  }

  resetarSenha() {
    this.webAuth.changePassword({
      connection: 'Username-Password-Authentication',
      email:   'drprado2@gmail.com'
    }, function (err, resp) {
      if(err){
        console.log(err.message);
      }else{
        console.log(resp);
      }
    });
  }
}
