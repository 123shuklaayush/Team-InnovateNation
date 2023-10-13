import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [customerCount, setCustomerCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);
  const [claimCount, setClaimCount] = useState(0);

  const targetCustomerCount = 4000;
  const targetAwardCount = 500;
  const targetClaimCount = 200;

  const calculateSpeed = (targetValue) => {
    const maxSpeed = 20; // Adjust the maximum speed here
    const speed = Math.ceil(targetValue / 100); // Adjust the divisor to control the speed
    return Math.min(maxSpeed, speed);
  };

  useEffect(() => {
    const customerSpeed = calculateSpeed(targetCustomerCount);
    const awardSpeed = calculateSpeed(targetAwardCount);
    const claimSpeed = calculateSpeed(targetClaimCount);

    const customerTimer = setInterval(() => {
      if (customerCount < targetCustomerCount) {
        setCustomerCount((prevCount) => prevCount + customerSpeed);
      }
    }, 20);

    const awardTimer = setInterval(() => {
      if (awardCount < targetAwardCount) {
        setAwardCount((prevCount) => prevCount + awardSpeed);
      }
    }, 20);

    const claimTimer = setInterval(() => {
      if (claimCount < targetClaimCount) {
        setClaimCount((prevCount) => prevCount + claimSpeed);
      }
    }, 20);

    return () => {
      clearInterval(customerTimer);
      clearInterval(awardTimer);
      clearInterval(claimTimer);
    };
  }, []);

  return (
    <div className="customer-review">
      <div className="happyCustomer">
        <h2 className="number pulsate">{Math.min(customerCount, targetCustomerCount)}</h2>
        <p className='review-heading'> confidential conversations <br />have been participated in</p>
      </div>
      <div className="awardWinning">
        <h2 className="number pulsate">{Math.min(awardCount, targetAwardCount)}</h2>
        <p className='review-heading'>Award Winning</p>
      </div>
      <div className="insurance-claimed">
        <h2 className="number pulsate">{Math.min(claimCount, targetClaimCount)}</h2>
        <p className='review-heading'>Universities/Colleges have <br />sent us students/interns for training</p>
      </div>
    </div>
  );
}

export default Counter;
