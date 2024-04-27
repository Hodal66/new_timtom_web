/* eslint-disable react/prop-types */
function Pragraph({ pragraphContent, classNameText }) {
  return (
    <div className={` text-lg font-normal text-justify py-2`}>
      <span className={`${classNameText}`}>{pragraphContent}</span>
    </div>
  );
}

export default Pragraph;
