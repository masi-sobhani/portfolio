# RTL Spacing Implementation Guide

This guide explains how to properly handle margin, padding, and spacing in RTL (Right-to-Left) layouts for the Masi Gallery project.

## Problem

When switching between LTR (Left-to-Right) and RTL languages, the margin and padding need to be adjusted accordingly:

- **LTR**: `margin-left: 1rem` should become `margin-right: 1rem` in RTL
- **RTL**: `padding-right: 0.5rem` should become `padding-left: 0.5rem` in LTR

## Solution

### 1. CSS-Based RTL Utilities

We've added comprehensive RTL utilities to `src/index.css`:

```css
/* RTL margin utilities */
[dir="rtl"] .ml-1 { margin-left: 0; margin-right: 0.25rem; }
[dir="rtl"] .ml-2 { margin-left: 0; margin-right: 0.5rem; }
[dir="rtl"] .ml-4 { margin-left: 0; margin-right: 1rem; }
/* ... and more */

/* RTL padding utilities */
[dir="rtl"] .pl-1 { padding-left: 0; padding-right: 0.25rem; }
[dir="rtl"] .pl-2 { padding-left: 0; padding-right: 0.5rem; }
[dir="rtl"] .pl-4 { padding-left: 0; padding-right: 1rem; }
/* ... and more */

/* RTL space utilities */
[dir="rtl"] .space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
[dir="rtl"] .space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
/* ... and more */
```

### 2. React Hook-Based RTL Utilities

Use the `useRTL` hook for dynamic RTL-aware spacing:

```tsx
import { useRTL } from '../hooks/useRTL';

const MyComponent = () => {
  const { rtlMargin, rtlPadding, rtlSpace } = useRTL();
  
  return (
    <div className={`flex items-center ${rtlSpace.x('4')}`}>
      <button className={`${rtlMargin.right('2')} px-4 py-2`}>
        Button
      </button>
    </div>
  );
};
```

## Usage Examples

### 1. Basic RTL Spacing

```tsx
// ❌ Wrong - Hardcoded spacing
<div className="flex items-center space-x-4 ml-2">
  <Icon />
  <Text />
</div>

// ✅ Correct - RTL-aware spacing
<div className={`flex items-center ${rtlSpace.x('4')} ${rtlMargin.left('2')}`}>
  <Icon />
  <Text />
</div>
```

### 2. Navigation Items

```tsx
// ❌ Wrong
<div className="flex items-center space-x-8">
  <NavItem />
  <NavItem />
  <LanguageSwitcher />
</div>

// ✅ Correct
<div className={`flex items-center ${rtlSpace.x('8')}`}>
  <NavItem />
  <NavItem />
  <LanguageSwitcher />
</div>
```

### 3. Contact Information

```tsx
// ❌ Wrong
<div className="flex items-center space-x-3">
  <MailIcon />
  <Email />
</div>

// ✅ Correct
<div className={`flex items-center ${rtlSpace.x('3')}`}>
  <MailIcon />
  <Email />
</div>
```

### 4. Buttons with Icons

```tsx
// ❌ Wrong
<button className="flex items-center space-x-2">
  <DownloadIcon />
  <span>Download</span>
</button>

// ✅ Correct
<button className={`flex items-center ${rtlSpace.x('2')}`}>
  <DownloadIcon />
  <span>Download</span>
</button>
```

## Available RTL Utilities

### Margin Utilities
```tsx
const { rtlMargin } = useRTL();

// Left margin in LTR, right margin in RTL
rtlMargin.left('4') // 'ml-4' in LTR, 'mr-4' in RTL

// Right margin in LTR, left margin in RTL
rtlMargin.right('2') // 'mr-2' in LTR, 'ml-2' in RTL

// Horizontal margins
rtlMargin.x('6') // 'ml-6 mr-6' in LTR, 'mr-6 ml-6' in RTL
```

### Padding Utilities
```tsx
const { rtlPadding } = useRTL();

// Left padding in LTR, right padding in RTL
rtlPadding.left('4') // 'pl-4' in LTR, 'pr-4' in RTL

// Right padding in LTR, left padding in RTL
rtlPadding.right('2') // 'pr-2' in LTR, 'pl-2' in RTL

// Horizontal padding
rtlPadding.x('6') // 'pl-6 pr-6' in LTR, 'pr-6 pl-6' in RTL
```

### Space Utilities
```tsx
const { rtlSpace } = useRTL();

// Horizontal spacing between elements
rtlSpace.x('4') // 'space-x-4' in LTR, 'space-x-reverse space-x-4' in RTL
```

### Border Utilities
```tsx
const { rtlBorder } = useRTL();

// Left border in LTR, right border in RTL
rtlBorder.left() // 'border-l' in LTR, 'border-r' in RTL

// Right border in LTR, left border in RTL
rtlBorder.right() // 'border-r' in LTR, 'border-l' in RTL
```

### Rounded Utilities
```tsx
const { rtlRounded } = useRTL();

// Left rounded in LTR, right rounded in RTL
rtlRounded.left() // 'rounded-l' in LTR, 'rounded-r' in RTL

// Right rounded in LTR, left rounded in RTL
rtlRounded.right() // 'rounded-r' in LTR, 'rounded-l' in RTL
```

## Best Practices

### 1. Always Use RTL-Aware Utilities
```tsx
// ❌ Don't use hardcoded spacing
className="ml-4 mr-2 space-x-4"

// ✅ Use RTL-aware utilities
className={`${rtlMargin.left('4')} ${rtlMargin.right('2')} ${rtlSpace.x('4')}`}
```

### 2. Use CSS Classes When Possible
For static layouts, prefer CSS classes over dynamic utilities:

```tsx
// ✅ Good - CSS handles RTL automatically
<div className="space-x-4 ml-4">
  <Item />
  <Item />
</div>
```

### 3. Use Dynamic Utilities for Conditional Spacing
```tsx
// ✅ Good - Dynamic spacing based on state
<div className={`${rtlMargin.left(isActive ? '4' : '2')}`}>
  <Content />
</div>
```

### 4. Test Both Languages
Always test your components in both LTR and RTL modes:

```tsx
// Test in both languages
const { changeLanguage } = useLanguage();

// Test LTR
changeLanguage('en');

// Test RTL
changeLanguage('fa');
```

## Common Patterns

### 1. Navigation Bars
```tsx
<nav className={`flex items-center ${rtlSpace.x('8')}`}>
  <Logo />
  <NavItems />
  <LanguageSwitcher />
</nav>
```

### 2. Form Fields
```tsx
<div className={`flex items-center ${rtlSpace.x('3')}`}>
  <Label />
  <Input className={`${rtlMargin.left('2')}`} />
</div>
```

### 3. Cards with Actions
```tsx
<div className={`flex items-center justify-between ${rtlPadding.x('6')}`}>
  <Content />
  <Actions className={`${rtlSpace.x('2')}`} />
</div>
```

### 4. Lists with Icons
```tsx
<ul className="space-y-2">
  {items.map(item => (
    <li key={item.id} className={`flex items-center ${rtlSpace.x('3')}`}>
      <Icon />
      <Text />
    </li>
  ))}
</ul>
```

## Troubleshooting

### 1. Spacing Not Working
- Check if you're using the correct RTL utility
- Verify the CSS classes are being applied
- Test in both LTR and RTL modes

### 2. Inconsistent Spacing
- Use consistent spacing values (2, 4, 6, 8, etc.)
- Avoid mixing different spacing systems
- Use the same spacing throughout similar components

### 3. Performance Issues
- Prefer CSS classes over dynamic utilities when possible
- Use the `useRTL` hook only when needed
- Cache RTL utilities if used frequently

## Migration Guide

### From Hardcoded Spacing
```tsx
// Before
<div className="ml-4 mr-2 space-x-4">
  <Item />
  <Item />
</div>

// After
<div className={`${rtlMargin.left('4')} ${rtlMargin.right('2')} ${rtlSpace.x('4')}`}>
  <Item />
  <Item />
</div>
```

### From Conditional Classes
```tsx
// Before
<div className={isRTL ? 'mr-4' : 'ml-4'}>

// After
<div className={rtlMargin.left('4')}>
```

This implementation ensures consistent and proper spacing across both LTR and RTL layouts, providing a seamless user experience in both languages. 