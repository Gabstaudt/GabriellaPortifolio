export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  category: 'frontend' | 'backend' | 'design' | 'iot' | 'Artigos';
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema Supervisório Cosanpa",
    description: "Desenvolvi um sistema web completo para a Cosanpa, com o objetivo de monitorar e gerenciar dados de sensores em tempo real. A solução foi projetada para fornecer uma visão clara e interativa das medições coletadas em pontos específicos da rede de abastecimento.",
    technologies: ["Angular", "TypeScript", "ExcelJS", "Figma"],
    imageUrl: "../../public/cosanpa.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/projeto-web"
  },
  {
    id: 2,
    title: "Bingo",
    description: "Desenvolvi um aplicativo web de bingo interativo com o objetivo de criar uma experiência divertida e automatizada para sorteios em eventos e atividades. Criado com o intuito de conseguir marcar várias cartelas de forma simultânea",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "../../public/bingo.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/bingo_novo"
  },
  {
    id: 3,
    title: "Sistema de Monitoramento IoT",
    description: "Sistema para monitoramento remoto de sensores de temperatura e umidade utilizando ESP32 e dashboard web.",
    technologies: ["ESP32", "JavaScript", "Express.js", "Node.js", "HTML", "CSS"],
    imageUrl: "../../public/plant.png",
    category: "iot",
    githubUrl:"https://github.com/Gabstaudt/PlantConnect"
  },
  {
    id: 4,
    title: "Artigo: Plant Connect: an Approach to Sustainable Monitoring of Domestic Plants Using the Internet of Things",
    description: "Artigo científico que apresenta o Plant Connect, um sistema de monitoramento de plantas domésticas utilizando IoT, com foco na sustentabilidade e eficiência no cuidado de plantas. Aprovado no: 1 IEEE Latin American Conference on Internet of Things",
    technologies: ["Escrita", "Sustentabilidade", "Iot"],
    imageUrl: "../../public/present.png",
    category: "Artigos",
    githubUrl: "https://drive.google.com/file/d/1Ud8fh3-98RvhRT-8OsUf_sxs1_pXLaUU/view?usp=sharing"
  },
  {
    id: 5,
    title: "Landing Page Churrascaria Marituba",
    description: "Desenvolvi uma landing page moderna e responsiva para uma churrascaria, com foco na apresentação do espaço, cardápio e facilitação do contato. A página destaca os principais serviços da churrascaria, com seções bem estruturadas, design visual atraente.",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "../../public/churrascaria.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/churrascaria"
  },
  {
    id: 6,
    title: "Desafio Matemático",
    description: "Desenvolvi o Desafio Matemático, um projeto web interativo focado em aprimorar o raciocínio lógico e a rapidez nos cálculos",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "../../public/matematico.png",
    category: "frontend",
    githubUrl:"https://github.com/Gabstaudt/deafio-matematico"
  },
    {
    id: 7,
    title: "RoboStart",
    description: "Projeto Ecommerce desenvolvido para a disciplina de Programação Web, com o objetivo de praticar conceitos de front-end e back-end.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MySQL"],
    imageUrl: "../../public/robo.png",
    category: "frontend",
    githubUrl:"https://github.com/Gabstaudt/novoprojetoweb"
  },
    {
    id: 8,
    title: "Classificação de Risco de Câncer do colo do útero usando Algoritmos de Aprendizado de Máquina",
    description: "Artigo submetido na 12° sSemana Acadêmica da Upea, premiado o terceiro melhor artigo.",
    technologies: ["Escrita", "IA", "Saúde", "Inovação", "Tree Decision", "XGboost", "KNN"],
    imageUrl: "../../public/artcancer.png",
    category: "Artigos",
    githubUrl:"https://drive.google.com/file/d/1q5ACGvecQeEjnyRUt1W72Zz62pgMIhjc/view?usp=sharing"
  }
];