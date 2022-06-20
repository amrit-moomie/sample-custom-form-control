import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
	declarations: [
		AppComponent,
		RegistrationFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor ( library: FaIconLibrary ) {
		library.addIconPacks( far );
	}
}
