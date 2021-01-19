import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'tailwindcss-demo';

  constructor(private myservice: CommonService, private authService: AuthService) { }
  
}
