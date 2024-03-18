/* eslint-disable react/jsx-key */
import Card1 from "../../components/Cards/Card1";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { Card1Data } from "../../database/static/Card1Data";

function ProfessionalExperty() {
  return (
    <div>
      <section>
        <div className="flex">
          <div className="leftpart">
            <HeadingThree title={"Welcome to the heading 3"} />
            <Pragraph
              title={
                "As a professional and expert, we have acquired a high level of knowledge, skills, and experience in a particular field or industry. We have dedicated significant time and effort to develop our expertise through education, training, and hands-on experience."
              }
            />
            <div>
              <div>Icon</div>
              <button>Explore Our Solutions</button>
            </div>
          </div>
          <div className="rightpart">
            <img src="/images/HomeImage2.png" alt="" />
          </div>
        </div>
      </section>
      {/* Cards Container */}
      <section className="flex gap-8">
        {Card1Data.map(({id, title,number,content, spanned})=>{
            return(<div key={id} className="">
                <Card1 card_content={content} card_title={title} card_number={number} card_span_content={spanned}/>
            </div>)
        })}
      </section>
    </div>
  );
}

export default ProfessionalExperty;
