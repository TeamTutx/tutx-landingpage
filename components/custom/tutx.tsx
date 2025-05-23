'use client';

import React from 'react';
import { useThemeContext } from '@/context/theme-data-provider';
import { useTheme } from 'next-themes';

interface TutxBlackProps {
  className?: string;
  showText?: boolean;
  white?: boolean;
}

type ColorMap = {
  [key: string]: {
    [colorName: string]: string;
  };
};

const TutxBlack: React.FC<TutxBlackProps> = ({ className, showText, white }) => {
  const { themeColor } = useThemeContext();
  const { theme } = useTheme();

  const selectedTheme = theme || 'light';

  const colorMap: ColorMap = {
    light: {
      Zinc: '#18191c',
      Rose: '#e11d47',
      Blue: '#2661ea',
      Green: '#16a14f',
      Orange: '#f77316'
    },
    dark: {
      Zinc: '#fafafa',
      Rose: '#e11d48',
      Blue: '#407ff1',
      Green: '#22c55f',
      Orange: '#e8590d'
    }
  };

  let logoColor = colorMap[selectedTheme][themeColor];
  let pathColor = selectedTheme == 'dark' ? 'black' : 'white';

  if (white) {
    logoColor = 'white';
    pathColor = 'black';
  }

  return (
    <svg viewBox="0 0 359 157.81250000000003" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g
        id="SvgjsG7365"
        transform="matrix(2.8061368465423584, 0, 0, 2.8061368465423584, 0.000020518004049563388, 0.011712213046862985)"
        fill={logoColor}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"
        />
      </g>
      <g
        id="SvgjsG7366"
        transform="matrix(-1.1204482316970825, 0, 0, -1.1204482316970825, 126.02240753173831, 134.4425811767578)"
        fill={pathColor}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M67.6,38.1L48.5,5v44.2l-15.1,8.7L14.3,24.8v47.5l18-10.4L51.5,95V50.8l15.1-8.7l19.1,33.1V27.7L67.6,38.1z M69.1,40.7  l13.6-7.9v31.5L69.1,40.7z M65.1,39.6l-13.6,7.9V16L65.1,39.6z M34.9,60.4l13.6-7.9V84L34.9,60.4z M30.9,59.3l-13.6,7.9V35.7  L30.9,59.3z"
        />
      </g>
      {showText && (
        <g
          id="SvgjsG7367"
          transform="matrix(5.866408824920654, 0, 0, 5.866408824920654, 153.9048004150391, 8.360627174377441)"
          fill={logoColor}
        >
          <path d="M5.3906 17.9297 q-1.015625 0.546875 -1.9921875 0.087890625 q-1.19140625 -0.908203125 -1.1328125 -2.587890625 l0 -4.5313 l2.5391 0 l0 -1.1816 l-2.5488 0 l0 -5.1758 l-1.3867 0 l0 11.123 q-0.01953125 1.171875 0.537109375 2.1484375 q0.91796875 1.552734375 2.5 1.640625 q0.83984375 0.029296875 1.9140625 -0.380859375 q-0.166015625 -0.41015625 -0.4296875 -1.142578125 z M7.832075 8.477 l1.3867 0 l0 5 q0 1.8359375 0.1953125 2.51953125 q0.29296875 0.986328125 1.123046875 1.557617188 t1.9922 0.57129 q1.15234375 0 1.953125 -0.556640625 t1.1035 -1.4648 q0.21484375 -0.615234375 0.21484375 -2.626953125 l0 -5 l1.4063 0 l0 5.2637 q0 2.216796875 -0.5224609375 3.334960938 t-1.5576 1.748 t-2.5977 0.62988 q-1.572265625 0 -2.6171875 -0.6298828125 t-1.5625 -1.7676 t-0.51758 -3.4229 l0 -5.1563 z M24.111303125 17.9297 q-1.015625 0.546875 -1.9921875 0.087890625 q-1.19140625 -0.908203125 -1.1328125 -2.587890625 l0 -4.5313 l2.5391 0 l0 -1.1816 l-2.5488 0 l0 -5.1758 l-1.3867 0 l0 11.123 q-0.01953125 1.171875 0.537109375 2.1484375 q0.91796875 1.552734375 2.5 1.640625 q0.83984375 0.029296875 1.9140625 -0.380859375 q-0.166015625 -0.41015625 -0.4296875 -1.142578125 z M25.527348125 8.73 l1.6504 0 l2.832 3.9746 l2.8418 -3.9746 l1.6504 0 l-3.6719 5.0879 l4.1309 5.625 l-1.6699 0 l-3.2813 -4.502 l-3.2324 4.502 l-1.6406 0 l4.0527 -5.625 z" />
        </g>
      )}
    </svg>
  );
};

export default TutxBlack;
