import React from 'react';
import DateTimeDisplay from '../components/dateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://thesquidsquadnft.art"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        <p id='untill'>utill the new collection is released!</p>
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <><ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds} />
        <style>{`
        .expired-notice {
            text-align: center;
            padding: 2rem;
            border: 2px solid #07e8e8;
            border-radius: 0.25rem;
            margin: 0.5rem;
        }

        .expired-notice > span {
            font-size: 2.5rem;
            font-weight: bold;
            color: red;
        }

        .expired-notice > p {
            font-size: 1.5rem;
        }

        .show-counter {
            padding: 0.5rem;
        }

        .show-counter .countdown-link {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            font-size: 1.25rem;
            line-height: 1.75rem;
            padding: 0.5rem;
            border: 1px solid #ebebeb;
            border-radius: 0.25rem;
            text-decoration: none;
            color: white;
        }

        .show-counter .countdown {
            line-height: 1.25rem;
            padding: 0 0.75rem 0 0.75rem;
            align-items: center;
            display: flex;
            flex-direction: column;
        }

        .show-counter .countdown.danger {
            color: #ff0000;
        }

        .show-counter .countdown > p {
        margin: 0;
        }

        .show-counter .countdown > span {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        }
        #untill {
            padding-left: 21px;
        }

      `}</style></>
    );
  }
};

export default CountdownTimer;
