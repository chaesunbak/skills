## Folder Structure

```
src/
tests/e2e/
```

## Test Results

Configure Playwright to output test results (e.g., `playwright-report/`, `test-results/`) inside the `tests/e2e/` directory, and make sure to add them to `.gitignore`.

## Cross Browser Testing

Test across multiple browsers (e.g., Chromium, Firefox, WebKit) to prevent cross-browsing issues.

## Set Up Test Workers Based on Computer Specifications

Run script to check specs and recommended workers (default `workers: 1`):

```bash
node scripts/check_specs.js
```
