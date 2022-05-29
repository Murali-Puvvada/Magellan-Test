/* eslint-disable max-len */
import React from 'react';

export default function Boat({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path d="M4.64 2.694V.682c0-.377.306-.682.683-.682h5.458c.377 0 .682.305.682.682v2.012h.586c.714 0 1.327.53 1.454 1.225l.019.132.22 3.792 1.71.557c.407.107.634.53.517.922l-.033.09-2.806 6.418H2.916L.061 9.412c-.171-.384.035-.828.415-.982l1.853-.604.22-3.775a1.498 1.498 0 011.34-1.35l.132-.007h.62zm1.365 0H10.1v-1.33H6.005v1.33zm6.144 4.63l-.191-2.347a.882.882 0 00-.795-.823l-.102-.006H5.009a.897.897 0 00-.88.72l-.017.109-.18 2.327 2.455-.8a6.476 6.476 0 012.955-.069l.29.069 2.517.82zm-2.861.5a5.09 5.09 0 00-2.216-.08L6.81 7.8 1.593 9.5l2.214 4.974 7.952-.006.476-.002 2.175-4.972-5.122-1.67z" fill={color} fillRule="evenodd" />
    </svg>
  );
}
