import { getTheme } from '@shoutem/ui';

const themeWithCustomFont = {
  ...getTheme(),
  defaultFont: {
    fontFamily: 'System',
  },
};