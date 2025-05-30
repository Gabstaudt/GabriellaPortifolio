export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Desenvolvimento Front-end",
    icon: "code",
    skills: [
      { name: "React", level: 3 },
      { name: "Angular", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 }
    ]
  },
  {
    name: "Desenvolvimento Back-end",
    icon: "server",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Python", level: 3 },
      { name: "Django/Flask", level: 3 }
    ]
  },
  {
    name: "Banco de Dados",
    icon: "database",
    skills: [
      { name: "MySQL", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 }
    ]
  },
  {
    name: "Design & UI/UX",
    icon: "palette",
    skills: [
      { name: "Figma", level: 5 },
      { name: "Design Responsivo", level: 5 },
      { name: "Design Minimalista", level: 4 }
    ]
  },
  {
    name: "IoT & Automação",
    icon: "cpu",
    skills: [
      { name: "ESP32", level: 4 },
      { name: "Arduino", level: 4 },
      { name: "Sensores", level: 3 }
    ]
  },
  {
    name: "Inteligência Artificial",
    icon: "brain",
    skills: [
      { name: "Visão Computacional", level: 3 },
      { name: "TensorFlow.js", level: 3 },
      { name: "OpenCV", level: 2 }
    ]
  }
];