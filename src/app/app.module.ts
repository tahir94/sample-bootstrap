import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// angularfire imports

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from "./providers/auth-service.service";
import { PasswordComponent } from './password/password.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { CancelTaskComponent } from './cancel-task/cancel-task.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AlexaComponent } from './alexa/alexa.component';
import { DeactiveComponent } from './deactive/deactive.component';
import { ProfileComponent } from './profile/profile.component';
import { RootHomeComponent } from './root-home/root-home.component';
import { AlexaEditComponent } from './alexa-edit/alexa-edit.component';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		LoginComponent,
		HomeComponent,
		PasswordComponent,
		NotificationsComponent,
		BillingInfoComponent,
		GiftCardsComponent,
		CancelTaskComponent,
		AccountBalanceComponent,
		TransactionsComponent,
		AlexaComponent,
		DeactiveComponent,
		ProfileComponent,
		RootHomeComponent,
		AlexaEditComponent
	],
	imports: [
		BrowserModule,
		AppRoutes,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
