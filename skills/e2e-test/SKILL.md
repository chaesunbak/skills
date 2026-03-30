---
name: e2e-testing
description: Write E2E tests using Playwright. Use whenever the user asks for e2e tests.
---

# E2E-testing

## Quick Start

Use Playwright.

If you are setting up E2E tests in the repository for the first time read `references/setup.md`.

### What to Test & Avoid

- Do not test simple things like simple navigation.

### Test Fixture

Create a Test Fixture for each page and prioritize its usage ([docs](https://playwright.dev/docs/test-fixtures#creating-a-fixture)).

If part of a fixture is repeated across multiple pages (e.g., sidebar), extract it to a separate fixture and combine them.
