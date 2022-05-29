/* eslint-disable max-len */
import React from 'react';

export default function Family({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path fill={color} fillRule="evenodd" d="M8.654 9.397c1.791 0 3.25 1.426 3.326 3.21l.003.145v1.344c0 .368-.299.667-.667.667-.342 0-.623-.258-.662-.59l-.004-.077v-1.344c0-1.078-.833-1.957-1.879-2.018l-.117-.003H3.329c-1.061 0-1.931.84-1.992 1.902l-.004.119v1.344c0 .368-.298.667-.666.667-.342 0-.624-.258-.663-.59L0 14.097v-1.344C0 10.949 1.412 9.477 3.185 9.4l.144-.003h5.325zm4.827.11c1.42.37 2.426 1.63 2.492 3.093l.004.152v1.344c0 .368-.299.667-.667.667-.342 0-.624-.258-.662-.59l-.005-.077v-1.344c0-.922-.618-1.726-1.498-1.956-.356-.092-.57-.457-.477-.813.093-.356.457-.57.813-.477zm-7.49-8.174c1.84 0 3.33 1.504 3.33 3.355S7.83 8.043 5.99 8.043 2.662 6.539 2.662 4.688s1.49-3.355 3.33-3.355zm4.827.109c1.473.38 2.501 1.719 2.501 3.25 0 1.53-1.028 2.868-2.501 3.249-.357.092-.72-.122-.813-.479-.092-.356.122-.72.479-.812.883-.228 1.502-1.034 1.502-1.959 0-.924-.62-1.73-1.502-1.958-.357-.092-.57-.456-.479-.812.092-.357.456-.571.813-.48zM5.99 2.667c-1.1 0-1.995.903-1.995 2.021 0 1.118.895 2.021 1.995 2.021 1.101 0 1.996-.903 1.996-2.021 0-1.118-.895-2.021-1.996-2.021z" />
    </svg>
  );
}
