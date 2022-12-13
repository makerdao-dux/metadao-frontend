import React from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';
import icons from './icons';
export default function Icon({
  name,
  size = 15,
  color = 'currentColor',
  role = 'presentation',
  sx,
  ...rest
}: {
  name: string;
  size: number;
  color?: string;
  role?: string;
  sx: ThemeUIStyleObject;
}): React.ReactElement | null {
  if (!icons[name]) {
    console.error(`No icon found with name ${name}`);
    return null;
  }

  return (
    <Box
      as="svg"
      sx={{ ...sx, size: size }}
      viewBox={icons[name].viewBox || '0 0 24 24'}
      color={color}
      display="inline-block"
      verticalAlign="middle"
      role={role}
      {...rest}
    >
      {icons[name].path}
    </Box>
  );
}
