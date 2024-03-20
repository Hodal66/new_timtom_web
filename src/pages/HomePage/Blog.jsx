import CallIcon from "../../assets/icons/CallIcon";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { BlogData } from "../../database/static/BlogData";
// import { ReactComponent as IconCall } from './src/assets/call.svg';

function Blog() {
  return (
    <div>
      <header>
        <div>
          <HeadingThree title={"The News & Updates From Blog"} />
          <HeadingOne title={"Read Latest News About Timtom Aviation"} />
        </div>
        <div></div>
        <div>
          <Pragraph
            title={
              "Please feel free to read the latest news regarding our petroleum AND manufacturing industry that is press release by the world news."
            }
          />
        </div>
      </header>
      <section>
        <div className="flex gap-4">
          {BlogData.map((blog) => {
            return (
              <div key={blog.id}>
                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  className="w-64 h-72"
                />
                <div>
                  <CallIcon
                    width={45}
                    height={45}
                    fill={"none"}
                    strokeColor={"red"}
                  />
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Blog;
