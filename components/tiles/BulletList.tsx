import {BulltetPoints} from '../../interfaces/BulletPoints';

const BulletList = ({title, items}: BulltetPoints) => (
  <div className="6u 12u$(xsmall)">
    <h1>{title}</h1>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default BulletList;
