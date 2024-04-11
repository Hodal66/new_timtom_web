import Input from "../../components/FormsContents/Input";
import HeadingOne from "../../components/Headings/HeadingOne";
import Pragraph from "../../components/Pragraph";

function Subscribe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <HeadingOne headingTitle={"Subscribe Newsletter"} />
        <Pragraph
          pragraphContent={
            "Please let us know if you have any questions about timtom Aviation"
          }
        />
      </div>
      <form action="" className="grid grid-cols-1  lg:grid-cols-12 items-center gap-4">
        <div className="lg:col-span-8">
        <Input type="email" placeholder="Email Address" classNameStyle={"w-full "}/>
        </div>
        <input type="submit" value="Subscribe" className="font-bold p-4 bg-primary text-white lg:px-20 rounded-md lg:col-span-4" />
      </form>
    </div>
  );
}

export default Subscribe;
