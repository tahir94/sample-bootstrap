import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// redux imports
import { NgRedux, NgReduxModule } from 'ng2-redux'
import { IAppState, rootReducer, INITIAL_STATE } from "./store2"
import { AppComponent } from './app.component';

// angularfire imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
		ProfileComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		NgReduxModule,
		AppRoutes,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE)
	}
}
