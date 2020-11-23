import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  buttonText = 'Hello button'

  changeButtonText() {
    this.buttonText = 'Changed button text'
  }
}
