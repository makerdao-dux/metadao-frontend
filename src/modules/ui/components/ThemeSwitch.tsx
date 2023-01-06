import React, { useContext } from 'react';
import { useColorMode, IconButton } from 'theme-ui';
import { ConfigContext } from '../../config/context/ConfigContext';
import Icon from './Icon';

const ThemeSwitch = (): React.ReactElement => {
  const [mode, setMode] = useColorMode();
  const onToggleTheme = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    const html = document.getElementsByTagName('html');
    if (html) html[0].style.colorScheme = next;
    setMode(next);
  };

  return (
    <IconButton
      sx={{
        cursor: 'pointer'
      }}
      title="Toggle theme"
      aria-label="Dark mode toggle"
      onClick={() => onToggleTheme()}
    >
      <Icon name="darkMode" color="text" size={30} />
    </IconButton>
  );
};

export default ThemeSwitch;
