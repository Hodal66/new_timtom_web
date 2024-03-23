/* eslint-disable react/prop-types */
import IconExist from "../../assets/icons/IconExist";
function ReadMore({ headingTitle }) {
  return (
    <div>
      <button className="flex justify-center items-center bg-gray">
        <span>
          <IconExist
            width={45}
            height={45}
            strokeCollor={"red"}
            strokeWidth={1}
            fill={"none"}
            strokeLineJoin={"round"}
          />
        </span>
        <span> {headingTitle}</span>
      </button>
    </div>
  );
}

export default ReadMore;
