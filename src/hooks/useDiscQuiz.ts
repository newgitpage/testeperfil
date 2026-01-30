import { useState, useCallback } from 'react';
import type { DiscType, DiscProfile, DiscResult } from '@/types/disc';
import { questions } from '@/data/questions';

interface QuizState {
  currentQuestion: number;
  answers: Record<number, DiscType>;
  isComplete: boolean;
  result: DiscProfile | null;
}

export function useDiscQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isComplete: false,
    result: null
  });

  const answerQuestion = useCallback((questionId: number, type: DiscType) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: type }
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const next = prev.currentQuestion + 1;
      if (next >= questions.length) {
        return { ...prev, isComplete: true };
      }
      return { ...prev, currentQuestion: next };
    });
  }, []);

  const previousQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.max(0, prev.currentQuestion - 1)
    }));
  }, []);

  const calculateResult = useCallback((): DiscProfile => {
    const scores: Record<DiscType, number> = { D: 0, I: 0, S: 0, C: 0 };
    
    Object.values(state.answers).forEach(type => {
      scores[type]++;
    });

    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    
    const results: DiscResult[] = (['D', 'I', 'S', 'C'] as DiscType[]).map(type => ({
      type,
      score: scores[type],
      percentage: total > 0 ? Math.round((scores[type] / total) * 100) : 0
    }));

    results.sort((a, b) => b.score - a.score);

    return {
      primary: results[0].type,
      secondary: results[1].type,
      results
    };
  }, [state.answers]);

  const finishQuiz = useCallback(() => {
    const result = calculateResult();
    setState(prev => ({ ...prev, isComplete: true, result }));
  }, [calculateResult]);

  const restartQuiz = useCallback(() => {
    setState({
      currentQuestion: 0,
      answers: {},
      isComplete: false,
      result: null
    });
  }, []);

  const canProceed = state.answers[questions[state.currentQuestion]?.id] !== undefined;
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = state.currentQuestion === questions.length - 1;

  return {
    ...state,
    questions,
    canProceed,
    progress,
    isLastQuestion,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    restartQuiz,
    calculateResult
  };
}
