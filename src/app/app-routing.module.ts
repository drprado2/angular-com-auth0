import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RedirectCallbackComponent} from './redirect-callback/redirect-callback.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'callback', component: RedirectCallbackComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
