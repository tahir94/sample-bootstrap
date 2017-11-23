import { RouterModule,Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ProfileComponent } from "./profile/profile.component";
import { GiftCardsComponent } from "./gift-cards/gift-cards.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { BillingInfoComponent } from "./billing-info/billing-info.component";
import { CancelTaskComponent } from "./cancel-task/cancel-task.component";
import { PasswordComponent } from "./password/password.component";
import { DeactiveComponent } from "./deactive/deactive.component";
import { AlexaComponent } from "./alexa/alexa.component";
import { AccountBalanceComponent } from "./account-balance/account-balance.component";
import { RootHomeComponent } from "./root-home/root-home.component";


const routing : Routes = [
      {path:'' , redirectTo:'home' , pathMatch:'full'},
      { path : 'home', component : HomeComponent, children : [
	//   {path : 'home',component : HomeComponent},
	  {path : 'password',component : PasswordComponent},
	  {path : 'app-profile',component : ProfileComponent},
	  {path : 'app-billing-info',component : BillingInfoComponent},
	  {path : 'app-gift-cards',component : GiftCardsComponent},
	  {path : 'app-cancel-task',component : CancelTaskComponent},
	  {path : 'app-account-balance',component : AccountBalanceComponent},
	  {path : 'app-transactions',component : TransactionsComponent},
	  {path : 'app-alexa',component : AlexaComponent},
	  {path : 'app-deactive',component : DeactiveComponent}
 

  ]},

]

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routing)
export default AppRoutes;