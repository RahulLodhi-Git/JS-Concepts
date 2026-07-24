### how do you ensure the security of API calls from UI ?

There are many ways likes :-

1. **Sanitized the payload** before calling the Apis( like sql script/js script).
2. **Encrypt API Requests and Responses**: All data exchanged through APIs must be encrypted using strong transport layer encryption to prevent interception or tampering during transit.
3. **Enable HTTP Strict Transport Security (HSTS)**: HSTS ensures clients always connect over HTTPS, eliminating downgrade risks and blocking plaintext access.
4. **Granular Access Rules:** Ensure that every API call is authenticated and bound to a verified identity, enforcing strict permission boundaries using the principle of least privilege.
5. **Centralized OAuth Token Management:** A centralized OAuth server simplifies token handling across services and enables rapid credential revocation

### what are the authentication and authorization technique you are aware ?

**Authentication:** Confirms the user’s identity.
**Authorization: **Determines what the verified user is allowed to access or perform.

#### Authentication technique

| Technique                                     | Description                                                                                             | Example Use          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **Password-based**                            | Username + password verification.                                                                       | Website login        |
| **Multi-Factor Authentication (MFA)**         | Combines password + OTP/biometric/hardware key.                                                         | Banking apps         |
| **Biometric Authentication**                  | Fingerprint, face, iris, voice.                                                                         | Smartphone unlock    |
| **Token-based (JWT, OAuth)**                  | Server issues tokens after login.                                                                       | APIs                 |
| **Session-Cookie Authentication**             | Session ID stored in cookie.                                                                            | Web apps             |
| **Single Sign-On (SSO)**                      | One login → multiple apps.                                                                              | Google Workspace     |
| **Federated Login (IDP)**                     | Authentication delegated to an **Identity Provider** (Google, Facebook, Azure AD).                      | Social login         |
| **Central Identity Provider (CIDP)**          | A centralized system managing authentication across multiple services, often enterprise-wide.           | Corporate IAM        |
| **Kerberos**                                  | Ticket-based protocol.                                                                                  | Enterprise networks  |
| **LDAP Authentication**                       | Directory-based login.                                                                                  | Active Directory     |
| **Modern (FIDO2/WebAuthn/Passkeys)**          | Passwordless authentication.                                                                            | Browsers, enterprise |
| **SAML (Security Assertion Markup Language)** | XML-based standard for exchanging authentication/authorization data between IDPs and service providers. | Enterprise SSO       |
| **WebAuthn (FIDO2/Passkeys)**                 | Passwordless authentication using hardware keys, biometrics, or synced passkeys.                        | Browsers, enterprise |
| **Device/QR-based Login**                     | Trusted device or QR scan.                                                                              | WhatsApp Web         |

<br>

#### Authentication technique

| Technique                                 | Description                                               | Example Use              |
| ----------------------------------------- | --------------------------------------------------------- | ------------------------ |
| **Role-Based Access Control (RBAC)**      | Access by role (admin, editor, viewer).                   | Enterprise apps          |
| **Attribute-Based Access Control (ABAC)** | Access based on attributes (user, resource, environment). | Cloud IAM                |
| **Policy-Based Access Control (PBAC)**    | Rules/policies define access.                             | Compliance systems       |
| **Discretionary Access Control (DAC)**    | Owner decides access.                                     | File sharing             |
| **Mandatory Access Control (MAC)**        | Central authority enforces strict rules.                  | Military systems         |
| **OAuth 2.0 Scopes**                      | Delegated authorization with limited permissions.         | Third-party integrations |
| **Access Control Lists (ACLs)**           | Explicit allow/deny lists.                                | Routers, file systems    |
| **Capability-based Access Control**       | Tokens/capabilities grant rights.                         | Distributed systems      |
