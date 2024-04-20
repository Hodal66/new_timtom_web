import IconExist from "../../assets/icons/IconExist";
import { style } from "../../style";

function AsideServices() {
  return (
    <aside>
      <main className="flex gap-2 flex-col text-white">
        <div className={`${style.asidePaddingEffect} group`}>
          <span>Air Ticketing</span>
          <span className="group-hover:scale-110">
            <IconExist
              strokeCollor={"blue"}
              fill={"none"}
              strokeWidth={1}
              width={35}
              strokeLineJoin={"full"}
              height={35}
            />
          </span>
        </div>
        <div className={`${style.asidePaddingEffect} group`}>
          <span>Hotel Booking</span>
          <span className="group-hover:scale-110">
            <IconExist
              strokeCollor={"blue"}
              fill={"none"}
              strokeWidth={1}
              width={35}
              strokeLineJoin={"full"}
              height={35}
            />
          </span>
        </div>
        <div className={`${style.asidePaddingEffect} group`}>
          <span>Admission And Visa Assistance</span>
          <span className="group-hover:scale-110">
            <IconExist
              strokeCollor={"blue"}
              fill={"none"}
              strokeWidth={1}
              width={35}
              strokeLineJoin={"full"}
              height={35}
            />
          </span>
        </div>
        <div className={`${style.asidePaddingEffect} group`}>
          <span>Consultance</span>
          <span className="group-hover:scale-110">
            <IconExist
              strokeCollor={"blue"}
              fill={"none"}
              strokeWidth={1}
              width={35}
              strokeLineJoin={"full"}
              height={35}
            />
          </span>
        </div>
        <div className={`${style.asidePaddingEffect} group`}>
          <span>ICT Skills</span>
          <span className="group-hover:scale-110">
            <IconExist
              strokeCollor={"blue"}
              fill={"none"}
              strokeWidth={1}
              width={35}
              strokeLineJoin={"full"}
              height={35}
            />
          </span>
        </div>
      </main>
    </aside>
  );
}

export default AsideServices;