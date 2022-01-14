import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'aprime',
        clientId: 'angular',
      },
      loadUserProfileAtStartUp: true,
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
    });
}
