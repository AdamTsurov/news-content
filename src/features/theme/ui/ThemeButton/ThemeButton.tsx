import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcons } from '@/shared/assets';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme-icon"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
