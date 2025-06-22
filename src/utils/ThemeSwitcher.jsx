import { LuSun, LuMoon } from 'react-icons/lu';
import { useModeAnimation } from 'react-theme-switch-animation';

export const ThemeSwitcher = (props) => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  const renderIcon = () => {
    const Icon = isDarkMode ? LuSun : LuMoon;
    return (
      <button ref={ref} onClick={toggleSwitchTheme}>
        <Icon size={40} className={ (props.className || "") + " text-zinc-800 dark:text-zinc-100 active:translate-y-1 transition-[transform]"} />
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center">
      {renderIcon()}
    </div>
  );
};
