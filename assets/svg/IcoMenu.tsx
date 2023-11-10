import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function IcoMenu({ active }: { active?: boolean }) {
  return (
    <Svg width="29" height="22" viewBox="0 0 29 22" fill="none">
      <Path d="M1.92585 22C1.47462 22 1.09611 21.824 0.790331 21.472C0.484554 21.12 0.332196 20.6849 0.333257 20.1667C0.333257 19.6472 0.486146 19.2115 0.791924 18.8595C1.0977 18.5075 1.47568 18.3321 1.92585 18.3333H27.4073C27.8586 18.3333 28.2371 18.5093 28.5428 18.8613C28.8486 19.2133 29.001 19.6484 28.9999 20.1667C28.9999 20.6861 28.847 21.1218 28.5412 21.4738C28.2355 21.8258 27.8575 22.0012 27.4073 22H1.92585ZM1.92585 12.8333C1.47462 12.8333 1.09611 12.6573 0.790331 12.3053C0.484554 11.9533 0.332196 11.5182 0.333257 11C0.333257 10.4806 0.486146 10.0448 0.791924 9.69283C1.0977 9.34083 1.47568 9.16545 1.92585 9.16667H27.4073C27.8586 9.16667 28.2371 9.34267 28.5428 9.69467C28.8486 10.0467 29.001 10.4818 28.9999 11C28.9999 11.5194 28.847 11.9552 28.5412 12.3072C28.2355 12.6592 27.8575 12.8346 27.4073 12.8333H1.92585ZM1.92585 3.66667C1.47462 3.66667 1.09611 3.49067 0.790331 3.13867C0.484554 2.78667 0.332196 2.35156 0.333257 1.83334C0.333257 1.31389 0.486146 0.878173 0.791924 0.526173C1.0977 0.174173 1.47568 -0.00121588 1.92585 6.3437e-06H27.4073C27.8586 6.3437e-06 28.2371 0.176006 28.5428 0.528006C28.8486 0.880006 29.001 1.31512 28.9999 1.83334C28.9999 2.35278 28.847 2.7885 28.5412 3.1405C28.2355 3.4925 27.8575 3.66789 27.4073 3.66667H1.92585Z" fill="white" />
    </Svg>
  )
}