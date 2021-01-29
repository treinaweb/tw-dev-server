import '../src/ui/styles/globals.scss';
import StoryThemeProvider from '../src/ui/themes/StoryThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [StoryThemeProvider];
