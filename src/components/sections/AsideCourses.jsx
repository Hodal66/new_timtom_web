import IconExist from "../../assets/icons/IconExist";
import { style } from "../../style";
import AsideDownloads from "./AsideDownloads";
import AsideGetAnyQuestion from "./AsideGetAnyQuestion";
import AsideGetQuote from "./AsideGetQuote";

function AsideCourses() {
  return (
    <aside>
      <main className="flex gap-8 flex-col text-white">
        <section className="flex gap-2 flex-col">
          <div className={`${style.asidePaddingEffect} group`}>
            <span>Civil Aviation Management</span>
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
            <span>Airline And Airport Management</span>
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
            <span>Traver And Tourism Management</span>
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
        </section>
        <section>
          <AsideDownloads />
        </section>
        <section>
          <AsideGetQuote />
        </section>
        <section>
          <AsideGetAnyQuestion />
        </section>
      </main>
    </aside>
  );
}

export default AsideCourses;
