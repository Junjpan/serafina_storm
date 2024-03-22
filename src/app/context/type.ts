export type Theme = 'light' | 'dark';

export interface ThemeContextType<T> {
    theme: T,
    setTheme: React.Dispatch<React.SetStateAction<T>> | null
}