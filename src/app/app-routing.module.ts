import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {UserListComponent} from './user-list/user-list.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full'},
  { path: 'main-page', component: MainPageComponent},
  { path: 'user-list', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
