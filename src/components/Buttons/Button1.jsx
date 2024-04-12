/* eslint-disable react/prop-types */
function Button1({ title, icon_content }) {
  return (
    <button className="bg-primary lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-white font-semibold rounded-md">
      <span>{icon_content}</span> <p>{title}</p>
    </button>
  );
}

export default Button1;
