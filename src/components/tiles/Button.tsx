import {Action} from '../../interfaces/Action';

type Props = {
  actions: Action[];
};

const ActionRow = ({actions}: Props) => (
  <ul className="actions">
    {actions.map(({action, text, style}) => (
      <li key={action}>
        <a href={action} className={`button ${style ? style : ''}`}>
          {text}
        </a>
      </li>
    ))}
  </ul>
);

export default ActionRow;
