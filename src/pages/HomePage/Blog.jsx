import IconUser from "../../assets/icons/IconUser";
import Message from "../../assets/icons/Message";
import ReadMore from "../../components/Buttons/ReadMore";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { BlogData } from "../../database/static/BlogData";
function Blog() {
  return (
    <div>
      <header>
        <div>
          <HeadingThree headingTitle={"The News & Updates From Blog"} />
          <HeadingOne headingTitle={"Read Latest News About Timtom Aviation"} />
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
                  <div className="">
                    <p>{blog.dateOfPost}</p>
                    <p>{blog.monthOfPost}</p>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2">
                      <IconUser
                        width={35}
                        height={35}
                        fill={"none"}
                        strokeCollor={"red"}
                        strokeWidth={0.5}
                      />
                      <span>by</span>
                      <p>{blog.writer}</p>
                    </div>
                    <div className="flex gap-2">
                      <Message
                        width={45}
                        height={45}
                        fill={"none"}
                        strokeCollor={"red"}
                      />
                      <span>{blog.numberOfComments}</span>
                      {blog.numberOfComments > 1 ? (
                        <p>Comments</p>
                      ) : (
                        <p>Comment</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <HeadingOne headingTitle={blog.title} />
                    <Pragraph pragraphContent={blog.basicContent} />
                    <ReadMore headingTitle={"ReadMore...."} />
                  </div>
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
