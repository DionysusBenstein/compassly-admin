import style from "../../styles/components/Successfull.module.scss";

export const Successfull = ({ enabled = false }: { enabled: boolean }) => {
  if (!enabled) return null;

  return (
    <div className={style.successfull}>
      <div className={style.logo}>
        <svg
          width="86"
          height="91"
          viewBox="0 0 86 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.4591 8.17704C44.5206 6.49437 43.205 5.06913 41.5222 5.12691C33.9539 5.38679 26.5686 7.63987 20.1257 11.6826C12.8201 16.2667 7.06402 22.9398 3.60569 30.8345C0.147358 38.7293 -0.853289 47.4805 0.733814 55.9508C2.32092 64.4211 6.42237 72.2186 12.5051 78.3299C18.5877 84.4412 26.3703 88.5835 34.8413 90.2186C43.3122 91.8536 52.0797 90.9057 60.0041 87.498C67.9285 84.0904 74.6433 78.3805 79.2758 71.1108C83.36 64.7014 85.6591 57.3408 85.9649 49.7856C86.0331 48.1014 84.6141 46.776 82.9292 46.8276C81.2442 46.8792 79.9333 48.289 79.8453 49.9725C79.5143 56.3031 77.5522 62.4601 74.1259 67.837C70.1511 74.0747 64.3895 78.9739 57.5901 81.8978C50.7907 84.8217 43.2679 85.6351 35.9995 84.2322C28.7312 82.8292 22.0534 79.2749 16.8343 74.0312C11.6151 68.7875 8.09591 62.097 6.73412 54.8292C5.37233 47.5614 6.23092 40.0525 9.19829 33.2785C12.1657 26.5046 17.1046 20.7788 23.3731 16.8455C28.7786 13.4537 34.9573 11.53 41.3 11.2379C42.9818 11.1604 44.3975 9.85951 44.4591 8.17704Z"
            fill="#4905DB"
          />
          <path
            d="M40.0116 54.5643L76.8682 18.1495C78.1776 16.8557 80.2719 16.8169 81.6283 18.0614C83.0867 19.3993 83.124 21.687 81.7099 23.0717L40.0116 63.9056L21.8367 46.082C20.6246 44.8933 20.615 42.9441 21.8153 41.7435C22.9745 40.5842 24.8423 40.5472 26.0464 41.6598L40.0116 54.5643Z"
            fill="#4905DB"
          />
        </svg>
      </div>
      <h2>Success!</h2>
      <label>Redirecting...</label>
    </div>
  );
};
