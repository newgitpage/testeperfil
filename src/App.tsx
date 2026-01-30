import { useDiscQuiz } from '@/hooks/useDiscQuiz';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultScreen } from '@/components/ResultScreen';
import type { DiscType } from '@/types/disc';
import { useEffect } from 'react';

function App() {
  const {
    currentQuestion,
    answers,
    isComplete,
    result,
    questions,
    canProceed,
    isLastQuestion,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    restartQuiz
  } = useDiscQuiz();

  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion]);

  // Handle start quiz
  const handleStart = () => {
    nextQuestion();
  };

  // Handle next question or finish
  const handleNext = () => {
    if (isLastQuestion) {
      finishQuiz();
    } else {
      nextQuestion();
    }
  };

  // Show welcome screen
  if (currentQuestion === 0 && !isComplete && Object.keys(answers).length === 0) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // Show results
  if (isComplete && result) {
    return <ResultScreen result={result} onRestart={restartQuiz} />;
  }

  // Handle answer selection
  const handleAnswer = (type: DiscType) => {
    answerQuestion(currentQ.id, type);
  };

  // Show question
  const currentQ = questions[currentQuestion];
  return (
    <QuestionCard
      question={currentQ}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={answers[currentQ.id]}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onPrevious={previousQuestion}
      canProceed={canProceed}
      isLastQuestion={isLastQuestion}
    />
  );
}

export default App;
