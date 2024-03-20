import { Link } from "react-router-dom";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { teamOfTeamtomAviation } from "../../database/static/TeamOfTeamtom";

function ExpertTeam() {
  return (
    <div>
      <div>
        <HeadingThree title={"Meet Our Expert Team"} />
        <HeadingOne title={"Our Company Leaders"} />
        <p>
          They are our expert leaders who work hard night and day to grow our
          business worldwide andkeep the erdunt at the highest position in the
          world.
        </p>
      </div>
      <section>
        <div className="cardContainer flex gap-4">
          {teamOfTeamtomAviation.map((team) => {
            return (
              <div key={team.id}>
                <img src={team.image} alt={team.altImage} role={team.role} />
                <HeadingOne title={team.title} />
                <Pragraph title={team.position} />
                <div className="flex gap-4">
                  <Link to={team.socialMedia.facebook} target="_blank">
                    <img src={team.socialMedia.facebookImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.instagram} target="_blank">
                    <img src={team.socialMedia.instagramImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.linkedIn} target="_blank">
                    <img src={team.socialMedia.linkedInImage} alt="" />
                  </Link>
                  <Link to={team.socialMedia.whatsap} target="_blank">
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
