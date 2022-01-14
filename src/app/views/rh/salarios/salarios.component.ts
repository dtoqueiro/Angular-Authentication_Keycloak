import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css'],
})
export class SalariosComponent implements OnInit {
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {}

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }
}
