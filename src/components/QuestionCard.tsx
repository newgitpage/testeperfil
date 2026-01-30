import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import type { Question, DiscType } from '@/types/disc';

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer?: DiscType;
  onAnswer: (type: DiscType) => void;
  onNext: () => void;
  onPrevious: () => void;
  canProceed: boolean;
  isLastQuestion: boolean;
}

export function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  canProceed,
  isLastQuestion
}: QuestionCardProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const getTypeColor = (type: DiscType) => {
    switch (type) {
      case 'D': return 'border-red-400 hover:bg-red-50';
      case 'I': return 'border-yellow-400 hover:bg-yellow-50';
      case 'S': return 'border-green-400 hover:bg-green-50';
      case 'C': return 'border-blue-400 hover:bg-blue-50';
    }
  };

  const getTypeSelectedColor = (type: DiscType) => {
    switch (type) {
      case 'D': return 'bg-red-500 border-red-500 text-white';
      case 'I': return 'bg-yellow-500 border-yellow-500 text-white';
      case 'S': return 'bg-green-500 border-green-500 text-white';
      case 'C': return 'bg-blue-500 border-blue-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>

        <CardContent className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.type;
              return (
                <button
                  key={option.id}
                  onClick={() => onAnswer(option.type)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                    isSelected 
                      ? getTypeSelectedColor(option.type)
                      : `bg-white ${getTypeColor(option.type)}`
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected 
                      ? 'border-white bg-white/20' 
                      : 'border-gray-300'
                  }`}>
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                  <span className="font-medium">{option.text}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={currentQuestion === 0}
              className="flex-1 py-5"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Anterior
            </Button>
            
            <Button
              onClick={onNext}
              disabled={!canProceed}
              className={`flex-1 py-5 ${
                isLastQuestion 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              {isLastQuestion ? (
                <>Ver Resultado <Check className="w-5 h-5 ml-2" /></>
              ) : (
                <>Próxima <ChevronRight className="w-5 h-5 ml-2" /></>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
