/* eslint-disable react/prop-types */
function Pragraph({ pragraphContent, classNameText }) {
  return (
    <div className={` text-lg font-medium ${classNameText}`}>
      <span>{pragraphContent}</span>
    </div>
  );
}

export default Pragraph;
