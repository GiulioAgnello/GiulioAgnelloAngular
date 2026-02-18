import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  // array di progetti hardcoded

  projects = [
    {
      id: 1,
      title: 'Dream Experience',
      description:
        'Piattaforma per il booking di esperienze uniche, funzionalità di comparatore e acquisto',
      link: 'https://progetto-finale-spec-frontend-front-theta.vercel.app/',
      img: 'project_img/dream_experience.jpg',
      Tech: ['React', 'Node.js', 'Express', 'CSS3', 'Bootstrap', 'Context API'],
      code: {
        frontend: 'https://github.com/GiulioAgnello/progetto-finale-spec-frontend-front',
        backend: '',
      },
    },
    {
      id: 2,
      title: 'BoolStop',
      description:
        'Gaming e-commerce platform sviluppata in 2 settimane. Progetto full-stack che unisce database design, server Express.js e frontend React.js con focus su UX/UI.',

      img: 'project_img/boolstop.jpeg',
      Tech: ['React.js', 'Express.js', 'MySQL', 'Bootstrap', 'REST API'],
      code: {
        frontend: 'https://github.com/GiulioAgnello/BoolStopFrontEnd',
        backend: 'https://github.com/GiulioAgnello/boolstop_express',
      },
    },
    {
      id: 3,
      title: 'Boolroad',
      description:
        'piattaforma per organizzare viaggi in gruppo, con funzionalità di creazione gruppi di viaggio, gestione partecipanti.',

      img: 'project_img/boolroad.png',
      Tech: ['React.js', 'Express.js', 'MySQL', 'Bootstrap', 'REST API'],
      code: {
        frontend: 'https://github.com/GiulioAgnello/project_boolroad_T6',
      },
    },
    {
      id: 4,
      title: 'Boolflix',
      description:
        'piattaforma con lista di film e serie TV, con funzionalità di ricerca, filtri per genere e dettagli dei contenuti.',

      img: 'project_img/boolflix.png',
      Tech: ['React.js', 'CSS3', 'Bootstrap', 'REST API'],
      code: {
        frontend: 'https://github.com/GiulioAgnello/react-boolflix',
      },
    },
  ];
}
