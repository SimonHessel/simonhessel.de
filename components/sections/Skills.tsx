import {Skill} from '../../interfaces/Skill';

type Props = {
  skills: Skill[];
};

const Skills = ({skills}: Props) => (
  <section style={{paddingTop: '4em'}} className="wrapper special">
    <header className="major special">
      <h2>Kenntnisse</h2>
    </header>

    <div className="row">
      {skills.map(({category, list}) => (
        <div key={category} className="3u 12u$(xsmall)">
          <h4>{category}</h4>
          <ul className="alt">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
