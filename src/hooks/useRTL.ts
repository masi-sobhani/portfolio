import { useLanguage } from '../contexts/LanguageContext';

export const useRTL = () => {
  const { isRTL } = useLanguage();

  const rtlClass = (ltrClass: string, rtlClass: string) => {
    return isRTL ? rtlClass : ltrClass;
  };

  const rtlStyle = (ltrStyle: React.CSSProperties, rtlStyle: React.CSSProperties) => {
    return isRTL ? rtlStyle : ltrStyle;
  };

  const rtlValue = <T>(ltrValue: T, rtlValue: T): T => {
    return isRTL ? rtlValue : ltrValue;
  };

  const rtlSpacing = (ltrSpacing: string, rtlSpacing: string) => {
    return isRTL ? rtlSpacing : ltrSpacing;
  };

  const rtlDirection = () => {
    return isRTL ? 'rtl' : 'ltr';
  };

  const rtlTextAlign = () => {
    return isRTL ? 'text-right' : 'text-left';
  };

  const rtlFlexDirection = () => {
    return isRTL ? 'flex-row-reverse' : 'flex-row';
  };

  // RTL-aware margin utilities
  const rtlMargin = {
    left: (size: string) => isRTL ? `mr-${size}` : `ml-${size}`,
    right: (size: string) => isRTL ? `ml-${size}` : `mr-${size}`,
    x: (size: string) => isRTL ? `mr-${size} ml-${size}` : `ml-${size} mr-${size}`,
  };

  // RTL-aware padding utilities
  const rtlPadding = {
    left: (size: string) => isRTL ? `pr-${size}` : `pl-${size}`,
    right: (size: string) => isRTL ? `pl-${size}` : `pr-${size}`,
    x: (size: string) => isRTL ? `pr-${size} pl-${size}` : `pl-${size} pr-${size}`,
  };

  // RTL-aware space utilities
  const rtlSpace = {
    x: (size: string) => isRTL ? `space-x-reverse space-x-${size}` : `space-x-${size}`,
  };

  // RTL-aware border utilities
  const rtlBorder = {
    left: () => isRTL ? 'border-r' : 'border-l',
    right: () => isRTL ? 'border-l' : 'border-r',
  };

  // RTL-aware rounded utilities
  const rtlRounded = {
    left: () => isRTL ? 'rounded-r' : 'rounded-l',
    right: () => isRTL ? 'rounded-l' : 'rounded-r',
  };

  return {
    isRTL,
    rtlClass,
    rtlStyle,
    rtlValue,
    rtlSpacing,
    rtlDirection,
    rtlTextAlign,
    rtlFlexDirection,
    rtlMargin,
    rtlPadding,
    rtlSpace,
    rtlBorder,
    rtlRounded,
  };
}; 