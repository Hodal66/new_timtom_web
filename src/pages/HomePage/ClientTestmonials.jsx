import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";
import { TestmonialsData } from "../../database/static/Testmonials";

function ClientTestmonials() {
  return (
    <div>
      <HeadingThree title={"Read Our Client Testmonials"} />
      <HeadingOne title={"what Peaple Are Saying"} />
      <Pragraph
        title={
          "These are our happiest clients who are satisfied with our work and support..They Gave us their gratitude to our erdunt team"
        }
      />
      <section className="flex gap-4">
        {TestmonialsData.map((testmonial)=>{
            return(<div key={testmonial.id}>
                <div>
                    <Pragraph title={testmonial.content}/>
                    <div className="imageContainer flex">
                        <img src={testmonial.image} alt={testmonial.altImage} className="w-12 rounded-full"/>
                        <div>
                            <HeadingTwo title={testmonial.name}/>
                            <Pragraph title={testmonial.location}/>
                        </div>
                    </div>
                </div>
            </div>)
        })}
      </section>
    </div>
  );
}

export default ClientTestmonials;
