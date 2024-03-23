import HeadingOne from "../../components/Headings/HeadingOne";
import Pragraph from "../../components/Pragraph";

function Subscribe() {
  return (
    <div>
      <div>
        <HeadingOne headingTitle={"Subscribe Newsletter"} />
        <Pragraph
          pragraphContent={
            "Please let us know if you have any questions about timtom Aviation"
          }
        />
      </div>
      <form action="" className="flex">
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
}

export default Subscribe;
