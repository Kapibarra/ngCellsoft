import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartnerspageComponent } from './pages/partnerspage/partnerspage.component';
import { SupportpageComponent } from './pages/supportpage/supportpage.component';

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
    path: 'support',
    component: SupportpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
