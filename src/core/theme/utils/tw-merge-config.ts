import type { Config } from 'tailwind-merge'

export const COMMON_UNITS = ['small', 'medium', 'large']

export const twMergeConfig: Partial<Config<string, string>> = {
  theme: {
    spacing: ['divider'],
    radius: COMMON_UNITS,
  },
  classGroups: {
    'shadow': [{ shadow: COMMON_UNITS }],
    'opacity': [{ opacity: ['disabled'] }],
    'font-size': [{ text: ['tiny', ...COMMON_UNITS] }],
    'border-w': [{ border: COMMON_UNITS }],
  },
}
