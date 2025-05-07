import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavComponent } from "./components/nav/nav.component";


export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home-page/home-page.component').then(m => m.HomePageComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)}
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'french-school';

  constructor(private translate: TranslateService) {
    translate.addLangs(['fr', 'en', 'ja', 'ru']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang() ?? 'fr';
    translate.use(['fr', 'en', 'ja', 'ru'].includes(browserLang) ? browserLang : 'fr');
  }
}
