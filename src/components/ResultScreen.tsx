import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DiscProfile, DiscType } from '@/types/disc';
import { profileDescriptions } from '@/data/profiles';
import { RotateCcw, TrendingUp, Star, AlertCircle, Briefcase, MessageCircle, Check } from 'lucide-react';

interface ResultScreenProps {
  result: DiscProfile;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const primaryProfile = profileDescriptions[result.primary];
  const secondaryProfile = profileDescriptions[result.secondary];

  const getTypeColor = (type: DiscType) => {
    switch (type) {
      case 'D': return { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
      case 'I': return { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' };
      case 'S': return { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      case 'C': return { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
    }
  };

  const primaryColor = getTypeColor(result.primary);
  const secondaryColor = getTypeColor(result.secondary);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <Card className="shadow-xl overflow-hidden">
          <div className={`h-2 ${primaryColor.bg}`} />
          <CardHeader className="text-center pb-2">
            <div className={`mx-auto w-24 h-24 ${primaryColor.bg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-4xl font-bold text-white">{result.primary}</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Seu Perfil: {primaryProfile.title}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Perfil secundário: <span className={`font-semibold ${secondaryColor.text}`}>{secondaryProfile.title}</span>
            </p>
          </CardHeader>
          
          <CardContent>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {primaryProfile.description}
            </p>
          </CardContent>
        </Card>

        {/* Results Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Distribuição do seu Perfil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.results.map((item) => {
                const colors = getTypeColor(item.type);
                return (
                  <div key={item.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center text-white font-bold`}>
                          {item.type}
                        </div>
                        <span className="font-medium text-gray-700">
                          {profileDescriptions[item.type].title}
                        </span>
                      </div>
                      <span className="font-bold text-gray-800">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colors.bg} transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Characteristics */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              Características Principais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {primaryProfile.characteristics.map((char, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{char}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths and Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg border-emerald-200">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                <TrendingUp className="w-5 h-5" />
                Pontos Fortes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {primaryProfile.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">+</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-rose-200">
            <CardHeader className="bg-rose-50">
              <CardTitle className="text-lg flex items-center gap-2 text-rose-800">
                <AlertCircle className="w-5 h-5" />
                Pontos de Atenção
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {primaryProfile.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">!</span>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Careers */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
              Carreiras Adequadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {primaryProfile.careers.map((career, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
                >
                  {career}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Communication Tips */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-600" />
              Dicas de Comunicação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {primaryProfile.communicationTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Secondary Profile Info */}
        <Card className={`shadow-lg border-2 ${secondaryColor.border}`}>
          <CardHeader className={`${secondaryColor.light}`}>
            <CardTitle className={`text-lg flex items-center gap-2 ${secondaryColor.text}`}>
              <Star className="w-5 h-5" />
              Influência do Perfil Secundário: {secondaryProfile.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700">
              Seu perfil secundário ({secondaryProfile.title}) complementa seu perfil principal, 
              trazendo características adicionais que enriquecem sua personalidade. Isso significa 
              que além das características principais de {primaryProfile.title}, você também possui 
              traços de {secondaryProfile.title}, criando uma combinação única.
            </p>
          </CardContent>
        </Card>

        {/* Restart Button */}
        <div className="flex justify-center pb-8">
          <Button 
            onClick={onRestart}
            className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Refazer o Teste
          </Button>
        </div>
      </div>
    </div>
  );
}
