import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Heart, Target } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const tips = [
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      text: "Não há resultado bom ou ruim, por isso, seja sincero(a) consigo mesmo."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      text: "Escolha um momento tranquilo para fazer o teste sem interrupções."
    },
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      text: "Não pense muito, a primeira resposta geralmente é a mais correta."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      text: "Responda pensando em quem você é, não em quem gostaria de ser."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-3xl font-bold text-white">DISC</span>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Teste de Perfil Comportamental
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Avaliação de Perfil Comportamental gratuita
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2">
              Você está pronto(a) para conhecer seu perfil comportamental predominante?
            </p>
            <p className="text-gray-600">
              O teste DISC avalia quatro dimensões comportamentais: <strong>Dominância</strong>, 
              <strong> Influência</strong>, <strong>Estabilidade</strong> e <strong>Conformidade</strong>.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              DICAS IMPORTANTES
            </h3>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-amber-900">
                  {tip.icon}
                  <span className="text-sm">{tip.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-red-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-red-600">D</div>
              <div className="text-xs text-red-700">Dominância</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-600">I</div>
              <div className="text-xs text-yellow-700">Influência</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">S</div>
              <div className="text-xs text-green-700">Estabilidade</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600">C</div>
              <div className="text-xs text-blue-700">Conformidade</div>
            </div>
          </div>

          <Button 
            onClick={onStart}
            className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
          >
            COMEÇAR O TESTE
          </Button>

          <p className="text-center text-sm text-gray-500">
            40 perguntas • Duração aproximada: 10-15 minutos
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
