/* eslint-disable react/prop-types */
function HeadingThree({ headingTitle, classNameProps}) {
  return (
    <div className={classNameProps}>
      <span className="font-bold text-orange text-xl">---{headingTitle}</span>
    </div>
  );
}
export default HeadingThree;
