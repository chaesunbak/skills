---
name: e2e-testing
description: Write E2E tests using Playwright. Use when writing E2E tests.
---

# E2E-testing

## Quick Start

Use Playwright.

If you are setting up E2E tests in the repository for the first time read `references/setup.md`.

### Use Test Fixture

Create a Test Fixture for each page and use it.

```ts
// src/tests/e2e/fixtures/todo-page.ts
import type { Page, Locator } from "@playwright/test";

export class TodoPage {
  private readonly inputBox: Locator;
  private readonly todoItems: Locator;

  constructor(public readonly page: Page) {
    this.inputBox = this.page.locator("input.new-todo");
    this.todoItems = this.page.getByTestId("todo-item");
  }

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc/");
  }

  async addToDo(text: string) {
    await this.inputBox.fill(text);
    await this.inputBox.press("Enter");
  }

  async remove(text: string) {
    const todo = this.todoItems.filter({ hasText: text });
    await todo.hover();
    await todo.getByLabel("Delete").click();
  }

  async removeAll() {
    while ((await this.todoItems.count()) > 0) {
      await this.todoItems.first().hover();
      await this.todoItems.getByLabel("Delete").first().click();
    }
  }
}
```

```ts
// src/tests/e2e/fixtures/index.ts
import { test as base } from "@playwright/test";
import { TodoPage } from "./todo-page";
import { SettingsPage } from "./settings-page";

// Declare the types of your fixtures.
type Fixtures = {
  todoPage: TodoPage;
  settingsPage: SettingsPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<Fixtures>({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo("item1");
    await todoPage.addToDo("item2");

    // Use the fixture value in the test.
    await use(todoPage);

    // Clean up the fixture.
    await todoPage.removeAll();
  },

  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page));
  },
});
export { expect } from "@playwright/test";
```

If part of a fixture is repeated across multiple pages (e.g., sidebar), extract it to a separate fixture and combine them.

More about this check [Playwright Test Fixtures](https://playwright.dev/docs/test-fixtures).
