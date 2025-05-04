import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['fr', 'en', 'ja', 'ru']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang() ?? 'fr';
    translate.use(['fr', 'en', 'ja', 'ru'].includes(browserLang) ? browserLang : 'fr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
