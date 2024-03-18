/* eslint-disable react/prop-types */
import HeadingOne from "../Headings/HeadingOne";

function Card1({ card_title, card_number, card_content, span_content }) {
  return (
    <div>
      <div>
        <HeadingOne title={card_title} />
        <p>{card_number}</p>
      </div>
      <p>
        {card_content} {span_content}
      </p>
    </div>
  );
}

export default Card1;
