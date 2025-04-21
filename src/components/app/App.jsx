import { useState } from 'react';
import Descriptions from '../description/Description';
import Feedback from '../feedback/Feedback';
import Options from '../options/Options';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Descriptions />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}
