---
name: component-memoization
description: memoize components using memo. Use when memoizing components.
---

## 1. Style

Define pure components and wrap with `memo`.

```tsx
function PureComponent() {
  // ...
}

export const Component = memo(PureComponent);
```

## 2. Props

Avoid object props. Pass primitive values instead.

Don't

```tsx
<ItemCard item={item} />
```

Do

```tsx
<ItemCard title={item.title} description={item.description} />
```

## 3. Compare Functions

If a custom compare function is needed, use `fast-deep-equal`.
