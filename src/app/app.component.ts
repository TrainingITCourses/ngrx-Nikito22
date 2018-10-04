import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ejercicio 1 Nicolás Jiménez!';

  constructor() { }

  ngOnInit() { }
}
