import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['fr', 'en', 'ja', 'ru']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang() ?? 'fr';
    translate.use(['fr', 'en', 'ja', 'ru'].includes(browserLang) ? browserLang : 'fr');
  }

  onGoToAbout(){
    this.router.navigateByUrl('about');
  }
}
