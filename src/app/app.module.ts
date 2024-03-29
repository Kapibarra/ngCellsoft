import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { CtaComponent } from './shared/components/cta/cta.component';
import { BuyComponent } from './shared/components/buy/buy.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormComponent } from './shared/components/form/form.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ButtonPrimaryComponent } from './shared/components/button-primary/button-primary.component';
import { BurgerComponent } from './shared/components/burger/burger.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { FeaturesItemComponent } from './shared/components/features/features-item/features-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupportComponent } from './shared/components/support/support.component';
import { PartnerspageComponent } from './pages/partnerspage/partnerspage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './shared/directives/phoneMask.directive';
import { SupportpageComponent } from './pages/supportpage/supportpage.component';
import { PopUpComponent } from './shared/components/pop-up/pop-up.component';
import { DialogDirective } from './shared/directives/dialog.directive';
import { ContactspageComponent } from './pages/contactspage/contactspage.component';
import { BuypageComponent } from './pages/buypage/buypage.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { NewsComponent } from './shared/components/news/news.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NewsItemComponent } from './shared/components/news-item/news-item.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { TruncatePipe } from './shared/pipe/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ContactsComponent,
    ProjectsComponent,
    ServicesComponent,
    CtaComponent,
    BuyComponent,
    FooterComponent,
    FormComponent,
    MenuComponent,
    ButtonPrimaryComponent,
    BurgerComponent,
    HomepageComponent,
    FeaturesComponent,
    FeaturesItemComponent,
    SupportComponent,
    PartnerspageComponent,
    PhoneMaskDirective,
    SupportpageComponent,
    PopUpComponent,
    DialogDirective,
    ContactspageComponent,
    BuypageComponent,
    PageNotFoundComponent,
    AboutpageComponent,
    NewsComponent,
    AdminComponent,
    LoginComponent,
    NewsItemComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [DialogDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
