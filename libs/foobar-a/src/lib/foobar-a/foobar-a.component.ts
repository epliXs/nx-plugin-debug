import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-foobar-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foobar-a.component.html',
  styleUrl: './foobar-a.component.css',
})
export class FoobarAComponent {}
