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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
