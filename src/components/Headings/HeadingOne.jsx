

/* eslint-disable react/prop-types */
function HeadingOne({ headingTitle,classNameProps }) {
  return (
    <div className={`krona-one-regular lg:text-[40px] md:text-[32px] text-[24px] text-gray-dark ${classNameProps}`}>
      <span>{headingTitle}</span>
    </div>
  );
}
export default HeadingOne;
