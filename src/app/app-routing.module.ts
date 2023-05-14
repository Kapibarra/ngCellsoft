import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartnerspageComponent } from './pages/partnerspage/partnerspage.component';
import { SupportpageComponent } from './pages/supportpage/supportpage.component';
import { ContactspageComponent } from './pages/contactspage/contactspage.component';
import { BuypageComponent } from './pages/buypage/buypage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'partners',
    component: PartnerspageComponent,
  },
  {
    path: 'about',
    component: AboutpageComponent,
  },
  {
    path: 'support',
    component: SupportpageComponent,
  },
  {
    path: 'contacts',
    component: ContactspageComponent,
  },
  {
    path: 'buy',
    component: BuypageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
