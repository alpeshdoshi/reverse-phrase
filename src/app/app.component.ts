import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = '';
  reversedText = '';

  onChangeText (value: string){
    this.text = value;
  }
  onClickReverse()
  {
   this.reversedText = this.text.split('').reverse().join('');
  }}
