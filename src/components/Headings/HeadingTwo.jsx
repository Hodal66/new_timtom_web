/* eslint-disable react/prop-types */
function HeadingTwo({ headingTitle,classNameProps}) {
  return (
    <div>
      <span className={`lg:text-[24px] md:text-[20px] text-[16px] text-gray-dark ${classNameProps}`}>{headingTitle}</span>
    </div>
  );
}
export default HeadingTwo;
