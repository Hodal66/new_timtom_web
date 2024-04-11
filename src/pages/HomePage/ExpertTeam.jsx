import { Link } from "react-router-dom";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { teamOfTeamtomAviation } from "../../database/static/TeamOfTeamtom";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import { style } from "../../style";

function ExpertTeam() {
  return (
    <div>
      <div className={`${style.flexColCenterAlignCenter} pb-20`}>
        <HeadingThree headingTitle={"Meet Our Expert Team"} />
        <HeadingOne headingTitle={"Our Company Leaders"} />
        <Pragraph pragraphContent={" They are our expert leaders who work hard night and day to grow our\
          business worldwide andkeep "} />
           <Pragraph pragraphContent={" andkeep the erdunt at the highest position in the\
          world."} />
      </div>
      <section>
        <div className="cardContainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamOfTeamtomAviation.map((team) => {
            return (
              <div key={team.id} className="group border-b-2 border-white grid grid-cols-1 gap-2 pb-2">
                <img src={team.image} alt={team.altImage} role={team.role} />
                <HeadingTwo headingTitle={team.title} />
                <Pragraph pragraphContent={team.position} />
                <div className="hidden group-hover:grid grid-cols-4 gap-4">
                  <Link to={team.socialMedia.facebook} target="_blank" className="hover:scale-110 transition duration-500">
                    <img src={team.socialMedia.facebookImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.instagram} target="_blank" className="hover:scale-110 transition duration-500" >
                    <img src={team.socialMedia.instagramImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.linkedIn} target="_blank" className="hover:scale-110 transition duration-500">
                    <img src={team.socialMedia.linkedInImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.whatsap} target="_blank" className="hover:scale-110 transition duration-500">
                    <img src={team.socialMedia.whatsapImage} alt="" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ExpertTeam;
