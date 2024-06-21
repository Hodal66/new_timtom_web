/* eslint-disable react/prop-types */
function HeadingThree({ headingTitle, classNameProps}) {
  return (
    <div className={classNameProps}>
      <span className="font-bold text-primary text-xl">-{headingTitle}</span>
    </div>
  );
}
export default HeadingThree;
