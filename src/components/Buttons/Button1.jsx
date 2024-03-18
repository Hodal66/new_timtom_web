/* eslint-disable react/prop-types */
function Button1({ title, icon_content }) {
  return (
    <button>
      <span>{icon_content}</span> <p>{title}</p>
    </button>
  );
}

export default Button1;
