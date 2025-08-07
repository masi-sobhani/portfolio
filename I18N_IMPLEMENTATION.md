# Internationalization (i18n) Implementation

This document describes the internationalization implementation for the Masi Gallery project, supporting English (LTR) and Farsi/Persian (RTL) languages.

## Features

- ✅ **Bilingual Support**: English and Farsi languages
- ✅ **RTL Support**: Full right-to-left layout support for Farsi
- ✅ **Centralized Language Management**: Language state managed through React Context
- ✅ **Performance Optimized**: Lazy loading of translations
- ✅ **Persistent Language Selection**: Language preference saved in localStorage
- ✅ **Responsive Design**: Language switcher works on both desktop and mobile
- ✅ **Font Support**: Vazirmatn font for Farsi text rendering

## Architecture

### Core Files

1. **`src/i18n/index.ts`** - Main i18n configuration
2. **`src/contexts/LanguageContext.tsx`** - Language state management
3. **`src/components/LanguageSwitcher.tsx`** - Language toggle button
4. **`src/hooks/useRTL.ts`** - RTL-aware styling utilities

### Translation Files

- **`src/i18n/locales/en.json`** - English translations
- **`src/i18n/locales/fa.json`** - Farsi translations

## Usage

### Basic Translation

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('about.title')}</h1>;
};
```

### RTL Support

```tsx
import { useLanguage } from '../contexts/LanguageContext';
import { useRTL } from '../hooks/useRTL';

const MyComponent = () => {
  const { isRTL } = useLanguage();
  const { rtlClass, rtlTextAlign } = useRTL();
  
  return (
    <div className={`${rtlTextAlign()} ${rtlClass('ml-4', 'mr-4')}`}>
      Content
    </div>
  );
};
```

### Language Switching

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { currentLanguage, toggleLanguage, changeLanguage } = useLanguage();
  
  return (
    <button onClick={toggleLanguage}>
      Switch to {currentLanguage === 'en' ? 'Farsi' : 'English'}
    </button>
  );
};
```

## Adding New Translations

### 1. Add to English Translation File

```json
// src/i18n/locales/en.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}
```

### 2. Add to Farsi Translation File

```json
// src/i18n/locales/fa.json
{
  "newSection": {
    "title": "عنوان بخش جدید",
    "description": "توضیحات بخش جدید"
  }
}
```

### 3. Use in Component

```tsx
const { t } = useTranslation();
return <h2>{t('newSection.title')}</h2>;
```

## RTL Styling Guidelines

### CSS Classes

- Use `rtlClass('ltr-class', 'rtl-class')` for conditional classes
- Use `rtlTextAlign()` for text alignment
- Use `rtlFlexDirection()` for flex direction

### Tailwind Utilities

- Use `space-x-reverse` for RTL spacing
- Use `text-right` for RTL text alignment
- Use `flex-row-reverse` for RTL flex direction

### Document Attributes

The system automatically sets:
- `document.documentElement.dir` to 'rtl' or 'ltr'
- `document.documentElement.lang` to current language
- `body.rtl` or `body.ltr` classes

## Performance Considerations

- Translations are loaded statically (no HTTP requests)
- Language detection uses localStorage for persistence
- RTL styles are applied efficiently through CSS classes
- Font loading is optimized with Google Fonts

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- RTL support in all major browsers
- Font fallbacks for unsupported browsers

## Future Enhancements

- [ ] Add more languages (Arabic, Turkish, etc.)
- [ ] Implement dynamic translation loading
- [ ] Add translation management interface
- [ ] Implement pluralization rules
- [ ] Add date/time formatting per locale

## Troubleshooting

### Language Not Switching
- Check if localStorage is enabled
- Verify translation keys exist in both files
- Check browser console for errors

### RTL Layout Issues
- Ensure proper CSS classes are applied
- Check for conflicting LTR styles
- Verify font loading for Farsi text

### Performance Issues
- Check for unnecessary re-renders
- Verify translation key usage
- Monitor bundle size for large translation files 