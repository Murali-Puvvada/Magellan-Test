/* eslint-disable max-len */
import React from 'react';

export default ({ className, ...rest }) => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className={className} {...rest}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#006635" fillRule="nonzero" cx="75" cy="75" r="75" />
      <g fill="#FFF">
        <path d="M126.268 86.637c-.84-1.163-1.261-2.85-1.261-5.064 0-2.213.42-3.897 1.261-5.05a3.978 3.978 0 013.37-1.717c1.61 0 2.82.563 3.632 1.688.812 1.126 1.217 2.917 1.216 5.373-.048 4.345-1.646 6.518-4.794 6.518a4.002 4.002 0 01-3.424-1.748zm4.274 5.147c.505-.11.996-.274 1.467-.49.395-.192.76-.443 1.081-.744.278-.248.532-.522.76-.817.173-.235.36-.518.564-.843l.517 2.722H139V64l-4.694.31v6.444a34.4 34.4 0 00.18 3.43c-1.154-2.01-3.128-3.014-5.92-3.012-2.565 0-4.576.94-6.036 2.821-1.46 1.881-2.189 4.37-2.189 7.466 0 3.196.733 5.75 2.198 7.661 1.465 1.912 3.484 2.868 6.056 2.868a8.59 8.59 0 001.947-.204zm-25.637-.172V81.9c0-1.961.113-3.413.34-4.356a4.765 4.765 0 011.832-1.99 5.15 5.15 0 012.782-.788c1.298 0 2.2.4 2.7 1.197.499.797.756 2.005.77 3.614v12.035h4.702V78.991c0-2.54-.57-4.48-1.709-5.82-1.14-1.339-2.853-2.007-5.142-2.004-2.444 0-4.667 1.004-6.668 3.013l-.52-2.523h-3.772v19.951l4.685.004zm-19.28-3.675c-.488-.456-.733-1.106-.733-1.952 0-1.234.441-2.13 1.324-2.688.883-.558 2.271-.924 4.166-1.098.048 0 .368-.024.956-.072.589-.049.904-.073.939-.073v3.85a4.586 4.586 0 01-1.73 1.914 5.058 5.058 0 01-2.836.79c-.902.006-1.597-.218-2.086-.671zm4.23 3.375a10.955 10.955 0 002.87-2.133c0 .049.125.454.376 1.217.251.763.382 1.168.394 1.216h3.46V78.596c0-2.613-.601-4.504-1.805-5.672-1.205-1.168-3.13-1.754-5.776-1.757a18.665 18.665 0 00-7.51 1.506c.013.025.216.57.59 1.634l.59 1.651c2.347-.906 4.32-1.36 5.92-1.361 1.12 0 1.954.276 2.502.828.548.552.823 1.43.824 2.635v1.054c-.311.035-.733.079-1.27.127a66.855 66.855 0 00-2.647.29c-2.694.265-4.709.897-6.044 1.897s-2.003 2.537-2.003 4.611c0 1.924.563 3.397 1.69 4.42 1.126 1.024 2.6 1.536 4.425 1.538 1.174.034 2.34-.2 3.413-.685zm-11.422-3.06c-1.205 0-2.016-.317-2.431-.952-.415-.635-.625-1.848-.627-3.639V64l-4.686.31V83.75c-.02 1.212.082 2.422.305 3.613.177.905.546 1.76 1.082 2.505a4.349 4.349 0 002.1 1.537 9.99 9.99 0 003.353.48c.361-.002.722-.023 1.082-.063.389-.046-.003-3.57-.178-3.57zM56.277 75.839a4.098 4.098 0 013.047-1.272c1.29 0 2.299.44 3.029 1.318.73.878 1.09 2.122 1.081 3.733h-8.579c.12-1.672.594-2.932 1.422-3.78zM67.092 90.14l-.662-3.377a12.239 12.239 0 01-6.186 1.706c-1.68 0-3-.512-3.961-1.537-.96-1.025-1.465-2.468-1.514-4.33h13.065v-1.017-.997c0-2.845-.748-5.127-2.245-6.844-1.497-1.717-3.591-2.575-6.282-2.573-2.861.013-5.12.957-6.777 2.832s-2.485 4.398-2.485 7.57c0 3.256.879 5.806 2.636 7.65 1.758 1.842 4.217 2.765 7.377 2.768 2.72 0 5.062-.617 7.028-1.85h.006zm-24.644 1.471l7.432-19.95h-4.934c-.203.557-.844 2.494-1.923 5.81a947.697 947.697 0 01-1.635 5.008c-.05.145-.165.56-.35 1.245-.187.685-.38 1.412-.58 2.196-.201.784-.305 1.168-.305 1.18-.299-1.026-.788-2.544-1.467-4.557-.333-1.025-1.01-2.958-2.029-5.8-1.02-2.84-1.624-4.532-1.815-5.074h-4.975L37.7 91.621l4.748-.009zm-14.813-1.68c1.765-1.36 2.648-3.306 2.648-5.836 0-2.117-.516-3.769-1.547-4.956-1.031-1.187-2.745-2.18-5.142-2.977l-2.182-.707a63.044 63.044 0 01-2.11-.707c-1.441-.448-2.162-1.41-2.162-2.888.044-1.197.434-2.054 1.17-2.57.735-.514 1.823-.771 3.264-.77 1.93 0 4.022.496 6.273 1.487l1.475-3.617c-2.238-1.23-4.883-1.845-7.936-1.846-2.79 0-5.026.653-6.706 1.96-1.68 1.308-2.524 3.165-2.53 5.573 0 3.44 1.758 5.787 5.275 7.045.273.11.723.264 1.35.463.627.199 1.298.405 2.012.617.713.22 1.15.343 1.297.39 2.194.642 3.29 1.798 3.29 3.468 0 1.258-.393 2.222-1.178 2.894-.786.672-1.949 1.008-3.487 1.008a13.585 13.585 0 01-3.855-.582 17.44 17.44 0 01-3.656-1.524L12 89.75c2.503 1.479 5.335 2.217 8.494 2.216 2.993.006 5.37-.672 7.134-2.033h.007zM95.429 69.016c0-.35.232-.69.245-.73.062.502.144 1.07.557 1.377.042-.115.15-.5.176-.586.11.357.34.666.652.875a.31.31 0 00.179.047c.04-.012 1.922-1.303 2.481-2.18.578-.911.164-2.192-.342-3.075-.565-.99-.825-2.05-1.297-3.061-.084-.178-.705-1.679-.988-1.679a.068.068 0 00-.022 0c-.306.099-.487.485-.62.742-.11.211-.216.809-.533.831h-.033c-.198 0-.322-.132-.432-.23-.418-.371-1.198-1.347-1.198-1.347.074.622.225 1.233.45 1.819a2.34 2.34 0 00-.274.23c-.354.345-.81.835-.884 1.153-.125.528.063.57-.125.936-.188.367-.46.55-.417.814.043.264.104.571.312.733.207.162.085.354.48.574.21.12.45.182.694.177.117 0 .236-.01.37-.021h.06a.297.297 0 01.327.201c.133.421-.266.792-.29 1.178-.019.447.142.946.472 1.222z" />
        <path d="M107.952 61.608a37.174 37.174 0 00-.782-3.158 3.417 3.417 0 01-.183-.613c-.065-.702.153-1.178-.23-1.852a4.952 4.952 0 00-.917-1.206c.273-.514.694-1.051.708-1.653 0-.27-.915.364-1.04.467-.124.102-.331.234-.44.345.09-.537.273-1.16.314-1.826.019-.288-.485.06-.577.144-.456.388-1.04 1.047-1.316 1.23-.275.183-1.14.48-1.762.605-.748.144-1.822.27-2.456.75a.094.094 0 00-.036.087.091.091 0 00.055.074c.068.04.985.169.69.276 0 0-1.5.367-2.319.959-.084.062-.198.144-.203.239 0 .043.049.054.07.059.095.02.418.033.537.05.01.002.019.01.022.02a.03.03 0 01-.007.03c-.477.526-1.708 1.583-2.102 2.315v.16c-.108-.144-.221-.3-.336-.444-.738-.927-1.35-1.9-2.007-2.88.037.205.062.412.074.62.014.22.016.441.016.659.008.23-.017.46-.072.684-.118.456-.372.86-.726 1.152a2.251 2.251 0 01-1.239.511h-.045a.25.25 0 01-.1-.017.319.319 0 01-.114-.08.735.735 0 01-.117-.16 2.436 2.436 0 01-.146-.31 8.325 8.325 0 01-.213-.621c-.127-.413-.233-.838-.348-1.244a.13.13 0 01.083-.159c.064-.02.13.017.152.082.136.42.243.828.378 1.233.067.202.136.402.218.593.04.093.085.182.136.268.02.036.044.07.071.1h.024c.783-.064 1.5-.654 1.679-1.44.048-.196.067-.399.059-.601 0-.215-.007-.432-.022-.636-.033-.415-.082-.846-.281-1.163a1.484 1.484 0 00-.696-.602l-.23-.079-.118-.034a5.108 5.108 0 00-.818-.108 3.737 3.737 0 00-1.704.44c-.606.321-1.354.624-1.588 1.295-.189.53-.08 1.13-.639 1.44-.04.02-.075.048-.112.07-.667.417-1.335.832-2.001 1.25-.128.081-.23.195-.186.365.041.24.164.458.345.61.051.04.09.095.112.157.175.453.44.86.78 1.194.529.535 1.596.368 2.246.368.254-.003.507.015.757.056.819.164.912 1.008.955 1.754.08 1.296.376 1.94.9 2.716.012.019.033.03.055.027a.06.06 0 00.048-.04c.043-.105.085-.412.127-.533a.513.513 0 00.02-.05c.224.547.295.848.584 1.36.12.216.468.797.722.964.017.01.037.012.056.004a.064.064 0 00.036-.045l.064-.475c.264.432 1.68 1.459 1.84 1.564.02.013.074.039.149.075a2.263 2.263 0 01-.197-1.04c.024-.222.087-.438.189-.635.1-.232.16-.386.124-.53h-.078c-.136.01-.273.022-.41.022a1.61 1.61 0 01-.864-.233 1.002 1.002 0 01-.474-.552c-.03-.073-.035-.085-.058-.104-.325-.27-.395-.747-.433-1.008-.046-.31.113-.544.255-.75.076-.105.143-.216.202-.333a.466.466 0 00.055-.306c-.017-.216 0-.434.049-.644.027-.125.112-.506.988-1.414.044-.046.09-.09.136-.13a8.786 8.786 0 01-.41-1.853.32.32 0 01.214-.316.303.303 0 01.356.102c.008.01.787 1.048 1.19 1.432l.036.035c.089.083.137.126.2.13.09-.138.157-.291.2-.453.029-.094.063-.186.102-.275l.025-.05c.149-.31.374-.778.791-.922a.34.34 0 01.12-.02c.313 0 .579.288 1.246 1.905l.047.115c.204.464.37.94.531 1.397.213.662.477 1.305.789 1.923.285.53.818 1.702.648 2.812l.04-.059c1.47-1.957 2.227-5.256 2.568-5.956a.352.352 0 00.011-.101 5.596 5.596 0 01-.461-.6 2.748 2.748 0 01-.41-1.009 2.99 2.99 0 01.03-1.097.127.127 0 01.146-.107.133.133 0 01.102.155c-.05.325-.041.657.026.979.072.314.206.608.393.864.186.27.394.522.62.756.017.019.034.035.052.053.018.019.061.038.094.055.546.274.87.245 1.3.906.235.361.253.834.493 1.152.394.517 1.445.606 1.978.243.577-.403.735-1.245.595-1.93z" />
        <path d="M93.015 59.002h-.03c.02-.01.032.002.03 0z" />
      </g>
    </g>
  </svg>
);
