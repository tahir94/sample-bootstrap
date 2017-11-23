import { RouterModule,Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent  } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PasswordComponent } from "./password/password.component";

const routing : Routes = [
  { path : '', component : HomeComponent,children : [
	  {path : 'password',component : PasswordComponent},
 

  ]},

//   {path : 'app-home',component : HomeComponent}
]

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routing)
export default AppRoutes;