import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'UserNamef';
  items=[{description:"kahvaltı",action:"No"},
  {description:"sinema",action:"No"},
  {description:"spor",action:"No"}];
}
