/* eslint-disable react/prop-types */
function HeadingTwo({ headingTitle,classNameProps}) {
  return (
    <div className="font-medium">
      <div className={`lg:text-[24px] py-4 md:text-[20px] text-[16px] text-gray-dark ${classNameProps}`}>{headingTitle}</div>
    </div>
  );
}
export default HeadingTwo;
