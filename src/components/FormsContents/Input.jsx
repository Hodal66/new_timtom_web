/* eslint-disable react/prop-types */
function Input({placeholder, classNameStyle, type, id, name}) {
    return (
      <div>
          <input type={type} name={name}  placeholder={placeholder} id={id} className={`p-4 border border-white rounded-md ${classNameStyle} text-blue bg-white active:border-s-2 font-semibold`}></input>
      </div>
    )}

export default Input



  