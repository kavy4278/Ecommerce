import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-back-button',
  imports: [MatButton, RouterLink, MatIcon],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {
  label = input('');
  navigate = input<string>();
}
