import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  loginOption: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSignup = () => {
    this.visible = true;
  }

  openLogin = () => {
    this.loginOption = true;
  }
}