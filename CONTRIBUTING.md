# Contributing to OpenFlow

Thank you for your interest in contributing to OpenFlow! This document provides guidelines and instructions for contributing to our project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/openflow.git
cd openflow
```

3. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

## 💻 Development Setup

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Copy the environment variables:
```bash
cp .env.example .env.local
```

3. Start the development server:
```bash
npm run dev
```

## 📝 Coding Standards

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Write unit tests for new features
- Use Next.js App Router conventions

## 🏗️ Project Structure

```
openflow/
├── app/                  # Next.js app directory
├── components/          # Reusable components
├── lib/                # Utility functions
└── public/            # Static assets
```

## 🔄 Pull Request Process

1. Update documentation if needed
2. Update tests if required
3. Ensure all tests pass
4. Follow the PR template
5. Request review from maintainers
6. Add relevant labels

## 📋 Pull Request Guidelines

- Keep PRs focused and atomic
- Write clear PR descriptions
- Link related issues
- Update tests and documentation
- Follow the commit message format

## 💬 Commit Message Format

```
type(scope): subject

body
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

Example:
```
feat(auth): implement OAuth authentication

- Add OAuth provider integration
- Implement token refresh logic
- Update user authentication flow
```

## 🐛 Bug Reports

When filing an issue, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details

## 🛠️ Development Process

1. **Pick an Issue**: Start with issues labeled "good first issue" or "help wanted"
2. **Discuss**: Comment on the issue before starting work
3. **Branch**: Create a feature branch from `main`
4. **Develop**: Write code and tests
5. **Test**: Ensure all tests pass
6. **PR**: Submit a pull request
7. **Review**: Address review comments
8. **Merge**: Wait for maintainer approval

## 🧪 Testing

Run tests:
```bash
npm test
```

Types of tests:
- Unit tests
- Integration tests
- E2E tests (using Cypress)

## 📚 Documentation

- Update README.md for major changes
- Add JSDoc comments to functions
- Update API documentation
- Include usage examples

## 🔗 Additional Resources

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Project Roadmap](ROADMAP.md)
- [Security Policy](SECURITY.md)

## ❓ Questions?

- Join our [Discord](https://discord.gg/openflow)
- Ask in [Discussions](https://github.com/openflow/discussions)
- Email: contributors@openflow.dev

## 📜 License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
