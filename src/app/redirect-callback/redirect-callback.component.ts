import { Component, OnInit } from '@angular/core';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-redirect-callback',
  templateUrl: './redirect-callback.component.html',
  styleUrls: ['./redirect-callback.component.scss']
})
export class RedirectCallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const webAuth = new auth0.WebAuth({
      domain:       'adri-oauth-test.auth0.com',
      clientID:     '4x7QExL8Wa91ruGHeCrxvZ2XczFmoJgV',
      responseType: 'token'
   });

    webAuth.parseHash({hash: window.location.hash}, function(err, authResult) {
      if (err) {
        return console.log(err);
      }

      webAuth.client.userInfo(authResult.accessToken, function(err, user) {
        if (err) {
          return console.log(err);
        }
        console.log('FUNCIONOU COM SUCESSO', user);
      });
    });
  }

  atualizarSenha() {
    const url = 'https://adri-oauth-test.auth0.com/api/v2/users/5c0e9573e8fd56b4e525e90f'
  }
}
