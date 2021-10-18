import { PropTypes } from 'prop-types';
import s from './Button.module.css';

export default function Button({ onClick }) {
  // console.dir(onClick);
  return (
    <div className={s.ButtonWrapper} onClick={onClick}>
      <button type="button" className={s.Button}>
        Load more
      </button>
    </div>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
