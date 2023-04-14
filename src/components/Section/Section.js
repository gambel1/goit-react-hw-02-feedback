import PropTypes from 'prop-types';

export default function Section(props) {
  const { title, children } = props;
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
