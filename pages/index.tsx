import {GetStaticProps} from 'next';

import Layout from '../components/Layout';

import {Skill} from '../interfaces/Skill';
import {Article} from '../interfaces/Article';

import Banner from '../components/sections/Banner';
import Presentation from '../components/sections/Presentation';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';

type Props = {
  skills: Skill[];
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  return {
    props: {
      articles: [
        {
          title: 'FitnessApp',

          description:
            'Entwicklung einer Android-App zur Erfassung und der serverseitigen Speicherung von Fitnessdaten',
          image: 'fitnessapp.png',
          site: 'left',
          actions: [
            {
              action:
                'https://drive.google.com/uc?export=download&id=1CDtzXOv-P3GHqklQ0WkY2AHi4K7ch5iW',
              text: 'lesen',
              style: 'alt',
            },
            {action: 'https://github.com/SimonHessel/Facharbeit', text: 'Code'},
          ],
          rows: [
            {
              items: [
                {
                  title: 'Technologien',
                  items: ['Java (Android)', 'PHP', 'MYSQL'],
                },
                {
                  title: 'Features',
                  items: [
                    'Makronährstoffzähler',
                    'Fitnessplanerfassung',
                    'grafische Fortschrittsüberprüfung',
                  ],
                },
              ],
            },
          ],
        },
        {
          title:
            'VertretungsplanApp - intuitiver, schneller und übersichtlicher',

          image: 'vertretungsplanapp.jpg',
          site: 'right',
          actions: [
            {
              action:
                'https://drive.google.com/uc?export=download&id=1wnmuRLL_egMNGm-Cg8Y3DudyoePsdsbO',
              text: 'lesen',
              style: 'alt',
            },
          ],
          rows: [
            {
              items: [
                {
                  title: 'Technologien',
                  items: ['HTML/CSS', 'JavaScript', 'Python', 'PHP', 'MYSQL'],
                },
                {
                  title: 'Features',
                  items: [
                    'Moodleauthentifizierung',
                    'PDF-Scraper',
                    'dynamischer Vertretungsplan',
                    'Pushnotification',
                  ],
                },
              ],
            },
            {
              items: [
                {
                  title: 'Planung',
                  items: ['NGINX', 'NodeJS', 'NEXTJS & React'],
                },
              ],
            },
          ],
        },
      ],
      skills: [
        {
          category: 'Frontend',
          list: ['Java (Android)', 'HTML/CSS', 'JavaScript'],
        },

        {
          category: 'Backend',
          list: ['Python (Flask)', 'NodeJS', 'PHP', 'MYSQL', 'MongoDB'],
        },
        {category: 'DevOps', list: ['Git', 'Kubernetes', 'Helm']},
        {
          category: 'Sprachen',
          list: ['Französisch - Niveau B2', ' Englisch - Niveau B1'],
        },
      ],
    },
  };
};

const IndexPage = ({skills, articles}: Props) => (
  <Layout title="Simon Hessel">
    <Banner />
    <Presentation articles={articles} />
    <Skills skills={skills} />
    <Contact />
  </Layout>
);

export default IndexPage;
