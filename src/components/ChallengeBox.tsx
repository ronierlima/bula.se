import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import style from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activechallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={style.challengeBoxContainer}>
      {activechallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe {activechallenge.amount} xp</header>
          <main>
            <img src={`icons/${activechallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activechallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={style.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios </strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
