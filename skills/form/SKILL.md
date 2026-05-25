---
name: form
description: Build forms. Use when creating or managing forms.
---

## 1. Validation

Use `react-hook-form` with `zod` for form state and schema validation.

## 2. Submission

Disable the submit button while submitting to prevent duplicate submissions.

## 3. Accessibility

Use `useId` to link inputs with their labels.

```tsx
const id = useId();
<label htmlFor={id}>Email</label>
<input id={id} {...register("email")} />
```

Use `useId` to link inputs with their hints via `aria-describedby`.

```tsx
const hintId = useId();
<input aria-describedby={hintId} {...register("email")} />
<p id={hintId}>Enter your work email address.</p>
```

Use `useId` to link a `<form>` with an external submit button.

```tsx
const formId = useId();
<form id={formId} onSubmit={handleSubmit(onSubmit)} />
<button form={formId} type="submit">Submit</button>
```
