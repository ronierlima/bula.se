import { useContext } from "react";

import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";
import Start from "../../public/icons/play.svg";
import Close from "../../public/icons/close.svg";
import Check from "../../public/icons/check.svg";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton} ${styles.countdownButtonFinished}`}
          onClick={resetCountdown}
        >
          Ciclo encerrado
          <Check />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abadonar ciclo
              <Close />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <Start />
            </button>
          )}
        </>
      )}
    </div>
  );
}
