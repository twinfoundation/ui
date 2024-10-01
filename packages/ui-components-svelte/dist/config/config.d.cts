/**
 * Generate the tailwind config theme.
 * @returns The tailwind config theme.
 */
export function getTheme(): {
    colors: {
        white: string;
        black: string;
        'deep-midnight': string;
        'vivid-tangerine': string;
        'ocean-breeze': string;
        'misty-sky': string;
        'cosmic-indigo': string;
        'cosmic-indigo-600': string;
        'cosmic-indigo-700': string;
        'sunset-glow': string;
        'skyline-blue': string;
        'soft-frost': string;
        neutral: {
            25: string;
            50: string;
            100: string;
            150: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            850: string;
            900: string;
            950: string;
            975: string;
        };
        primary: {
            25: string;
            50: string;
            100: string;
            150: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            850: string;
            900: string;
            950: string;
            975: string;
        };
        secondary: {
            25: string;
            50: string;
            100: string;
            150: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            850: string;
            900: string;
            950: string;
            975: string;
        };
        red: {
            25: string;
            50: string;
            100: string;
            150: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            850: string;
            900: string;
            950: string;
            975: string;
        };
        green: {
            25: string;
            50: string;
            100: string;
            150: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            850: string;
            900: string;
            950: string;
            975: string;
        };
    };
    fontFamily: {
        sans: string[];
        aeonik: string[];
        hdcoltonwidesemibold: string[];
    };
};
/**
 * Get the content.
 * @param includeLib Include the lib.
 * @returns The content.
 */
export function getContent(includeLib?: boolean): string[];
/**
 * Get the plugins.
 * @returns The plugins.
 */
export function getPlugins(): any[];
