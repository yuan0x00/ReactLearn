import * as React from 'react'
import {
    createContext,
    type ReactNode,
    useCallback,
    useMemo,
    useState,
} from 'react'

type Theme = 'light' | 'dark'

export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
    isDark: boolean
    isLight: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialTheme = 'light',
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }, [])

    const handleSetTheme = useCallback((newTheme: Theme) => {
        setTheme(newTheme)
    }, [])

    const value = useMemo<ThemeContextType>(
        () => ({
            theme,
            toggleTheme,
            setTheme: handleSetTheme,
            isDark: theme === 'dark',
            isLight: theme === 'light',
        }),
        [theme, toggleTheme, handleSetTheme],
    )

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContext
