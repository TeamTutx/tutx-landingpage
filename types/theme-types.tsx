type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ThemeColorStateParams{
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}
