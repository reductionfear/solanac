# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please follow these steps:

1. **Do NOT** open a public issue or pull request
2. Email the maintainers directly at the repository owner's contact information
3. Include a detailed description of the vulnerability:
   - Type of issue (e.g., SQL injection, cross-site scripting, etc.)
   - Full paths of source file(s) related to the manifestation of the issue
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

You should receive a response within 48 hours. If the issue is confirmed, we will work on a fix and release a patch as soon as possible.

## Security Best Practices for Contributors

### Environment Variables
- Never commit `.env` files or environment variables containing sensitive data
- Always use `.env.example` for documentation
- Store all sensitive configuration in environment variables
- Rotate API keys and secrets regularly

### Dependencies
- Run `npm run security:check` before committing changes
- Keep dependencies up to date
- Review security advisories for dependencies
- Use exact versions for production dependencies when possible

### Code Security
- Validate and sanitize all user inputs
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Never expose private keys or mnemonics in client-side code
- Use HTTPS for all API communications
- Implement rate limiting for sensitive operations

### Wallet Security
- Never log or expose private keys, mnemonics, or seed phrases
- Use secure randomness for key generation
- Implement proper key derivation (BIP39/BIP44)
- Validate all transaction parameters before signing
- Display transaction details clearly to users before signing
- Use hardware wallet integration when available

### Appwrite Security Configuration

When integrating Appwrite:

1. **API Keys**: Use project-scoped API keys with minimal permissions
2. **Authentication**: Implement proper session management
3. **Database**: Set appropriate collection permissions
4. **CORS**: Configure allowed origins properly
5. **Rate Limiting**: Enable rate limiting for all endpoints
6. **Encryption**: Use Appwrite's built-in encryption for sensitive data
7. **Backups**: Enable automated backups

### Development Environment Setup

1. Clone the repository
2. Copy `.env.example` to `.env`
3. Fill in your environment variables
4. Run `npm install`
5. Run `npm run security:check` to verify dependencies
6. Run `npm run dev` to start development server

### Security Checklist Before Deployment

- [ ] All dependencies are up to date
- [ ] No high/critical npm vulnerabilities
- [ ] Environment variables properly configured
- [ ] `.env` files are gitignored
- [ ] API keys are properly scoped
- [ ] CORS settings are configured
- [ ] Rate limiting is enabled
- [ ] Error messages don't expose sensitive information
- [ ] Logging doesn't contain sensitive data
- [ ] HTTPS is enforced
- [ ] Content Security Policy is configured
- [ ] Security headers are set

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Solana Security Best Practices](https://docs.solana.com/developing/programming-model/security-overview)
- [Appwrite Security Documentation](https://appwrite.io/docs/security)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

## Acknowledgments

We appreciate the security research community's efforts in responsibly disclosing vulnerabilities.
