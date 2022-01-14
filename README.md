# Sample Angular authentication with Keycloak server

Angular sample authentication project using [keycloak-angular](https://github.com/mauriciovigolo/keycloak-angular) adapter

## Requisites

A running keycloak server.

Refer to Keycloak [doccumentation](https://www.keycloak.org/getting-started) to find out how to run your own server.

## Configuration

Change the **src/app/helpers/app.init.ts** file to point to your Keycloak server configuration:

Change the values of url, real and clientId to reflect your Keycloak configuration, view Keycloak docs if you don't know how to configure this.

This code expect users with roles **Financeiro** and **RH** change the code of file **src/app/app-routting.module.ts** to adjust to your own roles.
