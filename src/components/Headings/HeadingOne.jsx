/* eslint-disable react/prop-types */
function HeadingOne({ headingTitle,classNameProps }) {
  return (
    <div className={`font-bold text-2xl text-gray-dark ${classNameProps}`}>
      <h1>{headingTitle}</h1>
    </div>
  );
}
export default HeadingOne;
