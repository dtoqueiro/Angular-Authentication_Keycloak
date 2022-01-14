import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css'],
})
export class FinancasComponent implements OnInit {
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {}

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }
}
