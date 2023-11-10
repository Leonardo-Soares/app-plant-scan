import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function IcoHome({ active }: { active?: boolean }) {
  return (
    <Svg width="29" height="32" viewBox="0 0 29 32" fill="none">
      <Path
        fill={active ? "#8CEC8A": "#fff" }
        d="M3.625 28.0937H9.0625V17.2187H19.9375V28.0937H25.375V11.7812L14.5 3.625L3.625 11.7812V28.0937ZM3.625 31.7187C2.62813 31.7187 1.77444 31.3635 1.06394 30.653C0.35344 29.9425 -0.00120526 29.0894 3.07725e-06 28.0937V11.7812C3.07725e-06 11.2073 0.12869 10.6635 0.386065 10.15C0.64344 9.63646 0.998086 9.21354 1.45 8.88125L12.325 0.725C12.6573 0.483333 13.0047 0.302083 13.3672 0.18125C13.7297 0.0604165 14.1073 0 14.5 0C14.8927 0 15.2703 0.0604165 15.6328 0.18125C15.9953 0.302083 16.3427 0.483333 16.675 0.725L27.55 8.88125C28.0031 9.21354 28.3584 9.63646 28.6157 10.15C28.8731 10.6635 29.0012 11.2073 29 11.7812V28.0937C29 29.0906 28.6447 29.9443 27.9342 30.6548C27.2237 31.3653 26.3707 31.72 25.375 31.7187H16.3125V20.8437H12.6875V31.7187H3.625Z"
      />
    </Svg>
  )
}