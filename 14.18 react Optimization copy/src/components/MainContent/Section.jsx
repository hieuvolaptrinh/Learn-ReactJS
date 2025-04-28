/* eslint-disable react/prop-types */
export default function Section({ title, children, id, className }) {
  return (
    <>
      <section id={id} className={className}>
        {title}
      </section>
      â{children}
    </>
  );
}
