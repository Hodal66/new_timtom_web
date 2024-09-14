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
      <form
        action=""
        className="grid grid-cols-1  lg:grid-cols-12 items-center gap-4"
      >
        <div className="lg:col-span-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Subscribe"
          className="font-bold p-4 bg-primary text-white lg:px-20 rounded-md lg:col-span-4"
        />
      </form>
    </div>
  );
}

export default Subscribe;
