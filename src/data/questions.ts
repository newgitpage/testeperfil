import type { Question } from '@/types/disc';

export const questions: Question[] = [
  {
    id: 1,
    text: "Em uma reunião de trabalho, você geralmente:",
    options: [
      { id: "1a", text: "Assume a liderança e direciona as discussões", type: "D" },
      { id: "1b", text: "Entusiasma o grupo com ideias criativas", type: "I" },
      { id: "1c", text: "Ouve atentamente e busca consenso", type: "S" },
      { id: "1d", text: "Analisa os dados e apresenta fatos", type: "C" }
    ]
  },
  {
    id: 2,
    text: "Ao enfrentar um problema difícil, você:",
    options: [
      { id: "2a", text: "Age rapidamente para resolvê-lo", type: "D" },
      { id: "2b", text: "Busca ajuda e discute com outras pessoas", type: "I" },
      { id: "2c", text: "Reflete calmamente antes de agir", type: "S" },
      { id: "2d", text: "Analisa todas as possibilidades detalhadamente", type: "C" }
    ]
  },
  {
    id: 3,
    text: "Em relação a prazos e deadlines:",
    options: [
      { id: "3a", text: "Gosta de desafios e trabalha bem sob pressão", type: "D" },
      { id: "3b", text: "Prefere prazos flexíveis e ambiente dinâmico", type: "I" },
      { id: "3c", text: "Gosta de prazos claros e previsíveis", type: "S" },
      { id: "3d", text: "Planeja com antecedência para não se atrasar", type: "C" }
    ]
  },
  {
    id: 4,
    text: "Ao conhecer pessoas novas, você:",
    options: [
      { id: "4a", text: "É direto e vai direto ao assunto", type: "D" },
      { id: "4b", text: "É extrovertido e gosta de socializar", type: "I" },
      { id: "4c", text: "É reservado e observa antes de se abrir", type: "S" },
      { id: "4d", text: "É formal e prefere conversas objetivas", type: "C" }
    ]
  },
  {
    id: 5,
    text: "Em um projeto em equipe, você prefere:",
    options: [
      { id: "5a", text: "Ser o responsável pelas decisões finais", type: "D" },
      { id: "5b", text: "Criar e inovar novas soluções", type: "I" },
      { id: "5c", text: "Apoiar e ajudar os colegas", type: "S" },
      { id: "5d", text: "Garantir a qualidade e precisão do trabalho", type: "C" }
    ]
  },
  {
    id: 6,
    text: "Quando recebe uma crítica, você:",
    options: [
      { id: "6a", text: "Defende seu ponto de vista firmemente", type: "D" },
      { id: "6b", text: "Tenta convencer o outro de sua perspectiva", type: "I" },
      { id: "6c", text: "Fica magoado mas reflete sobre o feedback", type: "S" },
      { id: "6d", text: "Analisa se a crítica tem fundamento lógico", type: "C" }
    ]
  },
  {
    id: 7,
    text: "Sua abordagem para metas é:",
    options: [
      { id: "7a", text: "Estabelecer metas ambiciosas e alcançá-las", type: "D" },
      { id: "7b", text: "Definir metas inspiradoras que motivem", type: "I" },
      { id: "7c", text: "Ter metas realistas e estáveis", type: "S" },
      { id: "7d", text: "Criar metas detalhadas e mensuráveis", type: "C" }
    ]
  },
  {
    id: 8,
    text: "Em situações de conflito, você:",
    options: [
      { id: "8a", text: "Enfrenta diretamente para resolver", type: "D" },
      { id: "8b", text: "Tenta mediar e encontrar um meio-termo", type: "I" },
      { id: "8c", text: "Evita confrontos e busca harmonia", type: "S" },
      { id: "8d", text: "Analisa os fatos objetivamente", type: "C" }
    ]
  },
  {
    id: 9,
    text: "Sua comunicação típica é:",
    options: [
      { id: "9a", text: "Direta, objetiva e focada em resultados", type: "D" },
      { id: "9b", text: "Expressiva, entusiasmada e persuasiva", type: "I" },
      { id: "9c", text: "Calma, atenta e empática", type: "S" },
      { id: "9d", text: "Precisa, detalhada e baseada em fatos", type: "C" }
    ]
  },
  {
    id: 10,
    text: "Ao tomar decisões, você prioriza:",
    options: [
      { id: "10a", text: "Resultados e conquistas", type: "D" },
      { id: "10b", text: "Impacto nas pessoas e relacionamentos", type: "I" },
      { id: "10c", text: "Estabilidade e segurança", type: "S" },
      { id: "10d", text: "Precisão e qualidade", type: "C" }
    ]
  },
  {
    id: 11,
    text: "Em um ambiente de trabalho, você valoriza mais:",
    options: [
      { id: "11a", text: "Autonomia e poder de decisão", type: "D" },
      { id: "11b", text: "Reconhecimento e interação social", type: "I" },
      { id: "11c", text: "Segurança e ambiente harmonioso", type: "S" },
      { id: "11d", text: "Estrutura clara e processos definidos", type: "C" }
    ]
  },
  {
    id: 12,
    text: "Quando algo dá errado, você:",
    options: [
      { id: "12a", text: "Age imediatamente para corrigir", type: "D" },
      { id: "12b", text: "Mantém o otimismo e busca alternativas", type: "I" },
      { id: "12c", text: "Mantém a calma e busca apoio", type: "S" },
      { id: "12d", text: "Investiga as causas raiz do problema", type: "C" }
    ]
  },
  {
    id: 13,
    text: "Sua postura em relação a regras é:",
    options: [
      { id: "13a", text: "Quebra regras quando necessário para resultados", type: "D" },
      { id: "13b", text: "Adapta regras conforme a situação", type: "I" },
      { id: "13c", text: "Segue regras que não prejudiquem ninguém", type: "S" },
      { id: "13d", text: "Segue rigorosamente todas as regras", type: "C" }
    ]
  },
  {
    id: 14,
    text: "Em apresentações, você:",
    options: [
      { id: "14a", text: "Vai direto aos pontos principais", type: "D" },
      { id: "14b", text: "Envolve e entusiasma a audiência", type: "I" },
      { id: "14c", text: "Fala de forma clara e tranquila", type: "S" },
      { id: "14d", text: "Apresenta dados detalhados e organizados", type: "C" }
    ]
  },
  {
    id: 15,
    text: "Sua relação com detalhes é:",
    options: [
      { id: "15a", text: "Foco no macro, delego detalhes", type: "D" },
      { id: "15b", text: "Foco nas ideias grandes", type: "I" },
      { id: "15c", text: "Atento aos detalhes que afetam pessoas", type: "S" },
      { id: "15d", text: "Meticuloso com todos os detalhes", type: "C" }
    ]
  },
  {
    id: 16,
    text: "Ao iniciar um novo projeto, você:",
    options: [
      { id: "16a", text: "Define objetivos claros e prazos", type: "D" },
      { id: "16b", text: "Brainstorming de ideias criativas", type: "I" },
      { id: "16c", text: "Planeja com cuidado e cautela", type: "S" },
      { id: "16d", text: "Pesquisa e analisa informações", type: "C" }
    ]
  },
  {
    id: 17,
    text: "Em relação a mudanças, você:",
    options: [
      { id: "17a", text: "As impulsiona e lidera transformações", type: "D" },
      { id: "17b", text: "As abraça com entusiasmo", type: "I" },
      { id: "17c", text: "Prefere mudanças graduais e planejadas", type: "S" },
      { id: "17d", text: "Analisa os riscos antes de apoiar", type: "C" }
    ]
  },
  {
    id: 18,
    text: "Seu estilo de gestão de tempo é:",
    options: [
      { id: "18a", text: "Focado em resultados, muitas tarefas ao mesmo tempo", type: "D" },
      { id: "18b", text: "Flexível, adapta-se às circunstâncias", type: "I" },
      { id: "18c", text: "Estável, rotina previsível", type: "S" },
      { id: "18d", text: "Organizado, lista de prioridades", type: "C" }
    ]
  },
  {
    id: 19,
    text: "Em negociações, você:",
    options: [
      { id: "19a", text: "Busca vencer e alcançar seus objetivos", type: "D" },
      { id: "19b", text: "Busca relacionamentos de longo prazo", type: "I" },
      { id: "19c", text: "Busca soluções onde todos ganhem", type: "S" },
      { id: "19d", text: "Busca acordos justos baseados em fatos", type: "C" }
    ]
  },
  {
    id: 20,
    text: "Sua energia no trabalho é:",
    options: [
      { id: "20a", text: "Intensa e focada em conquistas", type: "D" },
      { id: "20b", text: "Entusiasmada e contagiante", type: "I" },
      { id: "20c", text: "Constante e sustentável", type: "S" },
      { id: "20d", text: "Concentrada e metódica", type: "C" }
    ]
  },
  {
    id: 21,
    text: "Ao receber uma nova tarefa, você:",
    options: [
      { id: "21a", text: "Começa imediatamente", type: "D" },
      { id: "21b", text: "Busca entender o contexto e propósito", type: "I" },
      { id: "21c", text: "Pergunta como afeta outros", type: "S" },
      { id: "21d", text: "Solicita instruções detalhadas", type: "C" }
    ]
  },
  {
    id: 22,
    text: "Em reuniões, você prefere:",
    options: [
      { id: "22a", text: "Decisões rápidas e objetivas", type: "D" },
      { id: "22b", text: "Discussões abertas e criativas", type: "I" },
      { id: "22c", text: "Ambiente acolhedor e inclusivo", type: "S" },
      { id: "22d", text: "Agenda clara e minutas detalhadas", type: "C" }
    ]
  },
  {
    id: 23,
    text: "Sua abordagem para problemas complexos:",
    options: [
      { id: "23a", text: "Divide em partes e resolve rapidamente", type: "D" },
      { id: "23b", text: "Busca perspectivas diferentes", type: "I" },
      { id: "23c", text: "Consulta especialistas experientes", type: "S" },
      { id: "23d", text: "Analisa sistematicamente cada aspecto", type: "C" }
    ]
  },
  {
    id: 24,
    text: "Em relação a autoridade, você:",
    options: [
      { id: "24a", text: "Questiona quando não concorda", type: "D" },
      { id: "24b", text: "Influencia através do relacionamento", type: "I" },
      { id: "24c", text: "Respeita e segue hierarquias", type: "S" },
      { id: "24d", text: "Segue quando há lógica e razão", type: "C" }
    ]
  },
  {
    id: 25,
    text: "Ao dar feedback, você:",
    options: [
      { id: "25a", text: "É direto e focado em melhorias", type: "D" },
      { id: "25b", text: "É encorajador e positivo", type: "I" },
      { id: "25c", text: "É gentil e considera os sentimentos", type: "S" },
      { id: "25d", text: "É específico e baseado em exemplos", type: "C" }
    ]
  },
  {
    id: 26,
    text: "Sua relação com tecnologia:",
    options: [
      { id: "26a", text: "Adota rapidamente se melhora resultados", type: "D" },
      { id: "26b", text: "Explora novas ferramentas com entusiasmo", type: "I" },
      { id: "26c", text: "Adota quando se sente confortável", type: "S" },
      { id: "26d", text: "Pesquisa exaustivamente antes de adotar", type: "C" }
    ]
  },
  {
    id: 27,
    text: "Em situações de estresse, você:",
    options: [
      { id: "27a", text: "Toma controle e age decididamente", type: "D" },
      { id: "27b", text: "Busca apoio emocional de outros", type: "I" },
      { id: "27c", text: "Mantém a calma e busca rotina", type: "S" },
      { id: "27d", text: "Analisa friamente a situação", type: "C" }
    ]
  },
  {
    id: 28,
    text: "Sua abordagem para networking:",
    options: [
      { id: "28a", text: "Estratégico, focado em contatos úteis", type: "D" },
      { id: "28b", text: "Sociável, conhece muitas pessoas", type: "I" },
      { id: "28c", text: "Seletivo, poucos relacionamentos profundos", type: "S" },
      { id: "28d", text: "Profissional, baseado em competências", type: "C" }
    ]
  },
  {
    id: 29,
    text: "Ao aprender algo novo, você:",
    options: [
      { id: "29a", text: "Aprende fazendo, na prática", type: "D" },
      { id: "29b", text: "Aprende discutindo com outros", type: "I" },
      { id: "29c", text: "Aprende observando e praticando devagar", type: "S" },
      { id: "29d", text: "Aprende estudando teoria primeiro", type: "C" }
    ]
  },
  {
    id: 30,
    text: "Em relação a competição, você:",
    options: [
      { id: "30a", text: "É altamente competitivo e quer vencer", type: "D" },
      { id: "30b", text: "Compete pelo reconhecimento", type: "I" },
      { id: "30c", text: "Prefere colaborar a competir", type: "S" },
      { id: "30d", text: "Compete consigo mesmo para melhorar", type: "C" }
    ]
  },
  {
    id: 31,
    text: "Sua postura em reuniões de brainstorming:",
    options: [
      { id: "31a", text: "Propõe ideias ousadas e práticas", type: "D" },
      { id: "31b", text: "Gera muitas ideias criativas", type: "I" },
      { id: "31c", text: "Escuta e complementa ideias dos outros", type: "S" },
      { id: "31d", text: "Avalia a viabilidade das ideias", type: "C" }
    ]
  },
  {
    id: 32,
    text: "Ao delegar tarefas, você:",
    options: [
      { id: "32a", text: "Delega rapidamente e foca no macro", type: "D" },
      { id: "32b", text: "Motiva e explica a importância", type: "I" },
      { id: "32c", text: "Acompanha e oferece suporte", type: "S" },
      { id: "32d", text: "Instrui detalhadamente o processo", type: "C" }
    ]
  },
  {
    id: 33,
    text: "Sua reação a elogios é:",
    options: [
      { id: "33a", text: "Aprecia reconhecimento de resultados", type: "D" },
      { id: "33b", text: "Ama elogios públicos", type: "I" },
      { id: "33c", text: "Prefere elogios discretos", type: "S" },
      { id: "33d", text: "Valoriza elogios específicos e técnicos", type: "C" }
    ]
  },
  {
    id: 34,
    text: "Em um ambiente caótico, você:",
    options: [
      { id: "34a", text: "Toma comando e organiza", type: "D" },
      { id: "34b", text: "Levanta o astral do grupo", type: "I" },
      { id: "34c", text: "Busca tranquilidade e ordem", type: "S" },
      { id: "34d", text: "Cria sistemas para organizar", type: "C" }
    ]
  },
  {
    id: 35,
    text: "Sua relação com documentação:",
    options: [
      { id: "35a", text: "Prefere ação a papelada", type: "D" },
      { id: "35b", text: "Documenta o essencial", type: "I" },
      { id: "35c", text: "Mantém registros organizados", type: "S" },
      { id: "35d", text: "Documenta tudo meticulosamente", type: "C" }
    ]
  },
  {
    id: 36,
    text: "Ao fazer planos para o futuro, você:",
    options: [
      { id: "36a", text: "Define metas ambiciosas de curto prazo", type: "D" },
      { id: "36b", text: "Sonha grande e visualiza possibilidades", type: "I" },
      { id: "36c", text: "Planeja com segurança e cautela", type: "S" },
      { id: "36d", text: "Cria planos detalhados de longo prazo", type: "C" }
    ]
  },
  {
    id: 37,
    text: "Em relação a riscos, você:",
    options: [
      { id: "37a", text: "Assume riscos calculados para crescer", type: "D" },
      { id: "37b", text: "Vê riscos como oportunidades", type: "I" },
      { id: "37c", text: "Prefere segurança e estabilidade", type: "S" },
      { id: "37d", text: "Minimiza riscos através de planejamento", type: "C" }
    ]
  },
  {
    id: 38,
    text: "Sua abordagem para resolver conflitos de equipe:",
    options: [
      { id: "38a", text: "Impõe uma solução rapidamente", type: "D" },
      { id: "38b", text: "Media buscando entender todos", type: "I" },
      { id: "38c", text: "Ouve cada lado com empatia", type: "S" },
      { id: "38d", text: "Analisa fatos e propõe solução justa", type: "C" }
    ]
  },
  {
    id: 39,
    text: "Em relação a feedback de clientes:",
    options: [
      { id: "39a", text: "Foca em resultados e soluções rápidas", type: "D" },
      { id: "39b", text: "Constrói relacionamento e empatia", type: "I" },
      { id: "39c", text: "Ouve atentamente e agradece", type: "S" },
      { id: "39d", text: "Analisa criticamente os pontos levantados", type: "C" }
    ]
  },
  {
    id: 40,
    text: "O que mais te motiva no trabalho:",
    options: [
      { id: "40a", text: "Conquistas, desafios e resultados", type: "D" },
      { id: "40b", text: "Reconhecimento, diversão e pessoas", type: "I" },
      { id: "40c", text: "Estabilidade, harmonia e propósito", type: "S" },
      { id: "40d", text: "Qualidade, excelência e precisão", type: "C" }
    ]
  }
];
