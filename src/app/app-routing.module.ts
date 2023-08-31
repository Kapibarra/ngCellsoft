import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartnerspageComponent } from './pages/partnerspage/partnerspage.component';
import { SupportpageComponent } from './pages/supportpage/supportpage.component';
import { ContactspageComponent } from './pages/contactspage/contactspage.component';
import { BuypageComponent } from './pages/buypage/buypage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './auth.guard';

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
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Примените AuthGuard к этому маршруту
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
