import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-foobar-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foobar-b.component.html',
  styleUrl: './foobar-b.component.css',
})
export class FoobarBComponent {}
