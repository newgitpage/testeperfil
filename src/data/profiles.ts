import type { DiscType, ProfileDescription } from '@/types/disc';

export const profileDescriptions: Record<DiscType, ProfileDescription> = {
  D: {
    title: "DOMINÂNCIA",
    description: "Você é uma pessoa orientada a resultados, determinada e focada em conquistas. Possui uma energia intensa para alcançar objetivos e não teme assumir riscos. Você é naturalmente competitivo e gosta de estar no controle das situações.",
    characteristics: [
      "Focado em resultados e conquistas",
      "Toma decisões rapidamente",
      "Assume liderança naturalmente",
      "É direto e objetivo na comunicação",
      "Gosta de desafios e competição",
      "Trabalha bem sob pressão",
      "É independente e autoconfiante"
    ],
    strengths: [
      "Capacidade de tomar decisões rápidas",
      "Determinação para alcançar metas",
      "Habilidade natural de liderança",
      "Foco em resultados e produtividade",
      "Coragem para assumir riscos",
      "Resiliência diante de obstáculos"
    ],
    weaknesses: [
      "Pode ser impaciente com processos lentos",
      "Tendência a ser autoritário",
      "Pode ignorar sentimentos dos outros",
      "Dificuldade em delegar",
      "Pode parecer insensível ou brusco",
      "Frustração com falta de progresso"
    ],
    careers: [
      "Empreendedor",
      "Executivo de negócios",
      "Gerente de projetos",
      "Consultor estratégico",
      "Vendas corporativas",
      "Administrador",
      "Militar",
      "Atleta profissional"
    ],
    communicationTips: [
      "Seja direto e vá direto ao ponto",
      "Foque em resultados e benefícios",
      "Evite detalhes desnecessários",
      "Respeite sua necessidade de controle",
      "Apresente opções, não problemas"
    ]
  },
  I: {
    title: "INFLUÊNCIA",
    description: "Você é uma pessoa entusiasmada, sociável e inspiradora. Tem facilidade em influenciar e motivar outras pessoas através de sua energia positiva e carisma. Você valoriza relacionamentos e busca criar ambientes agradáveis.",
    characteristics: [
      "Extrovertido e comunicativo",
      "Entusiasmado e otimista",
      "Criativo e inovador",
      "Gosta de interagir com pessoas",
      "Persuasivo e inspirador",
      "Adaptável a mudanças",
      "Busca reconhecimento social"
    ],
    strengths: [
      "Excelente habilidade de comunicação",
      "Capacidade de motivar e inspirar",
      "Criatividade e pensamento inovador",
      "Facilidade em construir relacionamentos",
      "Otimismo contagiante",
      "Adaptabilidade a novas situações"
    ],
    weaknesses: [
      "Pode ser impulsivo nas decisões",
      "Tendência a não completar tarefas",
      "Pode depender excessivamente de aprovação",
      "Dificuldade com detalhes e rotina",
      "Pode parecer superficial",
      "Sensibilidade a críticas"
    ],
    careers: [
      "Marketing e publicidade",
      "Relações públicas",
      "Vendas",
      "Professor ou treinador",
      "Ator ou apresentador",
      "Recursos humanos",
      "Coach motivacional",
      "Jornalista"
    ],
    communicationTips: [
      "Mostre entusiasmo e energia",
      "Dê reconhecimento e elogios",
      "Permita tempo para socialização",
      "Foque no lado positivo",
      "Evite ser muito crítico ou negativo"
    ]
  },
  S: {
    title: "ESTABILIDADE",
    description: "Você é uma pessoa paciente, confiável e comprometida. Valoriza a harmonia nos relacionamentos e prefere ambientes estáveis e previsíveis. Você é um excelente ouvinte e apoia os outros com empatia.",
    characteristics: [
      "Paciente e compreensivo",
      "Leal e confiável",
      "Bom ouvinte",
      "Prefere rotina e estabilidade",
      "Empático e atencioso",
      "Trabalha bem em equipe",
      "Evita conflitos"
    ],
    strengths: [
      "Capacidade de ouvir e apoiar",
      "Lealdade e comprometimento",
      "Paciência com processos",
      "Habilidade de trabalho em equipe",
      "Criar ambientes harmoniosos",
      "Consistência e confiabilidade"
    ],
    weaknesses: [
      "Resistência a mudanças",
      "Dificuldade em dizer não",
      "Pode ser excessivamente cauteloso",
      "Tendência a evitar confrontos",
      "Lentidão na tomada de decisões",
      "Pode ser dependente de rotina"
    ],
    careers: [
      "Enfermagem",
      "Psicologia",
      "Recursos humanos",
      "Assistente social",
      "Professor",
      "Atendimento ao cliente",
      "Contabilidade",
      "Administrativo"
    ],
    communicationTips: [
      "Seja gentil e paciente",
      "Dê tempo para processar informações",
      "Evite pressionar para decisões rápidas",
      "Mostre apoio e compreensão",
      "Respeite a necessidade de estabilidade"
    ]
  },
  C: {
    title: "CONFORMIDADE",
    description: "Você é uma pessoa analítica, precisa e orientada à qualidade. Valoriza a exatidão e prefere tomar decisões baseadas em fatos e dados. Você é meticuloso e busca sempre a excelência em tudo o que faz.",
    characteristics: [
      "Analítico e lógico",
      "Detalhista e preciso",
      "Orientado a qualidade",
      "Baseia decisões em fatos",
      "Organizado e metódico",
      "Segue regras e procedimentos",
      "Questiona para entender"
    ],
    strengths: [
      "Pensamento analítico e lógico",
      "Atenção aos detalhes",
      "Compromisso com qualidade",
      "Capacidade de organização",
      "Conhecimento técnico aprofundado",
      "Objetividade nas decisões"
    ],
    weaknesses: [
      "Tendência ao perfeccionismo",
      "Pode ser excessivamente crítico",
      "Dificuldade com decisões sem dados",
      "Pode parecer distante ou frio",
      "Resistência a mudanças não planejadas",
      "Análise paralisante"
    ],
    careers: [
      "Engenharia",
      "Programação",
      "Análise de dados",
      "Pesquisa científica",
      "Medicina",
      "Direito",
      "Qualidade e auditoria",
      "Arquitetura"
    ],
    communicationTips: [
      "Seja preciso e forneça detalhes",
      "Apresente dados e fatos",
      "Dê tempo para análise",
      "Evite generalizações",
      "Respeite a necessidade de estrutura"
    ]
  }
};
