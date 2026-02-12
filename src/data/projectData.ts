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
    imageUrl: "/cosanpa.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/projeto-web"
  },
  {
    id: 2,
    title: "Bingo",
    description: "Desenvolvi um aplicativo web de bingo interativo com o objetivo de criar uma experiência divertida e automatizada para sorteios em eventos e atividades. Criado com o intuito de conseguir marcar várias cartelas de forma simultânea",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/bingo.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/bingo_novo"
  },
  {
    id: 3,
    title: "Sistema de Monitoramento IoT",
    description: "Sistema para monitoramento remoto de sensores de temperatura e umidade utilizando ESP32 e dashboard web.",
    technologies: ["ESP32", "JavaScript", "Express.js", "Node.js", "HTML", "CSS"],
    imageUrl: "/plant.png",
    category: "iot",
    githubUrl:"https://github.com/Gabstaudt/PlantConnect"
  },
  {
    id: 4,
    title: "Artigo: Plant Connect: an Approach to Sustainable Monitoring of Domestic Plants Using the Internet of Things",
    description: "Artigo científico que apresenta o Plant Connect, um sistema de monitoramento de plantas domésticas utilizando IoT, com foco na sustentabilidade e eficiência no cuidado de plantas. Aprovado no: 1 IEEE Latin American Conference on Internet of Things",
    technologies: ["Escrita", "Sustentabilidade", "Iot"],
    imageUrl: "/present.png",
    category: "Artigos",
    githubUrl: "https://drive.google.com/file/d/1Ud8fh3-98RvhRT-8OsUf_sxs1_pXLaUU/view?usp=sharing"
  },
  {
    id: 5,
    title: "Landing Page Churrascaria Marituba",
    description: "Desenvolvi uma landing page moderna e responsiva para uma churrascaria, com foco na apresentação do espaço, cardápio e facilitação do contato. A página destaca os principais serviços da churrascaria, com seções bem estruturadas, design visual atraente.",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/churrascaria.png",
    category: "frontend",
    githubUrl: "https://github.com/Gabstaudt/churrascaria"
  },
  {
    id: 6,
    title: "Desafio Matemático",
    description: "Desenvolvi o Desafio Matemático, um projeto web interativo focado em aprimorar o raciocínio lógico e a rapidez nos cálculos",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/matematico.png",
    category: "frontend",
    githubUrl:"https://github.com/Gabstaudt/deafio-matematico"
  },
    {
    id: 7,
    title: "RoboStart",
    description: "Projeto Ecommerce desenvolvido para a disciplina de Programação Web, com o objetivo de praticar conceitos de front-end e back-end.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MySQL"],
    imageUrl: "/robo.png",
    category: "frontend",
    githubUrl:"https://github.com/Gabstaudt/novoprojetoweb"
  },
    {
    id: 8,
    title: "Classificação de Risco de Câncer do colo do útero usando Algoritmos de Aprendizado de Máquina",
    description: "Artigo submetido na 12° sSemana Acadêmica da Upea, premiado o terceiro melhor artigo.",
    technologies: ["Escrita", "IA", "Saúde", "Inovação", "Tree Decision", "XGboost", "KNN"],
    imageUrl: "/artcancer.png",
    category: "Artigos",
    githubUrl:"https://drive.google.com/file/d/1q5ACGvecQeEjnyRUt1W72Zz62pgMIhjc/view?usp=sharing"
  },
  {
    id: 9,
    title: "Uso de redes neurais convolucionais para classificação do câncer cervical com imagens citológicas do papanicolau",
    description: "Artigo Publicado na Revista Acervo +. Objetivo: implementar uma arquitetura de rede convolucional para identificar padrões de doenças em diferentes estágios da lesão cervical, utilizando dados de esfregaço de Papanicolau, que se referem às imagens obtidas a partir do exame, o qual é utilizado para detectar alterações nas células do colo do útero que podem ser indicativas do câncer cervical",
    technologies: ["Escrita", "IA", "Saúde", "Inovação", "Tree Decision", "XGboost", "KNN"],
    imageUrl: "/acervo+.png",
    category: "Artigos",
    githubUrl:"https://acervomais.com.br/index.php/saude/article/view/21152"
  },  
{
    id: 10,
    title: "Diagnóstico Inteligente de Câncer de Colo de útero: Protótipo de Apoio à Decisão Clínica com Colposcopia",
    description: "Resumo Publicado no ll Congresso Amazônico de Medicina e Inovação em Saúde",
    technologies: ["Escrita", "IA", "Saúde", "Inovação", "Tree Decision", "XGboost", "KNN", "Resumo", "Medicina"],
    imageUrl: "/congressoamazonico.png",
    category: "Artigos",
    githubUrl:"https://drive.google.com/file/d/1A2r1fKceIRXsU-2aNqRLKiD1FynEj7Nz/view?usp=sharing"
  },
  {
    id: 11,
    title: "Protótipo de um sistema web para classificação de exames citológicos do papanicolau",
    description: "Desenvolvimento de um protótipo de sistema web inteligente para classificação de exames citológicos do Papanicolau, utilizando redes neurais convolucionais para identificar possíveis células cancerígenas. O modelo alcançou 91% de acurácia, demonstrando potencial para auxiliar no diagnóstico precoce do câncer do colo do útero. Premiado terceiro melhor artigo da 13° Semana Acadêmica da Uepa Campus Castanhal",
    technologies: ["Escrita", "IA", "Saúde", "Inovação", "Tree Decision", "XGboost", "KNN", "Resumo", "Medicina"],
    imageUrl: "/semanaacademica.png",
    category: "Artigos",
    githubUrl:"https://drive.google.com/file/d/1j2yTh9XMVO6BUahd2tlt_nLbE_gFDuhk/view?usp=sharing"
  },
  {
    id: 12,
    title: "Proposta de Modelo Conceitual para Gestão Sustentável na Amazônia: Integração de Blockchain e Compliance AMbiental para Combate à Exploração Ilegal de Recursos Naturais",
    description: "Proposta de um modelo conceitual de software que integra blockchain e compliance ambiental para fortalecer a governança na gestão de recursos naturais da Amazônia. O sistema prevê registros imutáveis, auditoria automatizada via smart contracts e rastreabilidade para empresas e órgãos fiscalizadores. Artigo aprovado na 13ª Semana Acadêmica da UEPA – Campus Castanhal.",
    technologies: ["Escrita", "Blockchain", "Governança", "Compliance", "Engenharia de Software"],
    imageUrl: "/blockchain.png",
    category: "Artigos",
    githubUrl:"https://drive.google.com/file/d/1A_I91wlFwnEKZanIkLD3rT7tbYfDR4uZ/view?usp=sharing"
  }
];