/* eslint-disable react/prop-types */

function Card1({ card_number, card_content, span_content, card_icon_content }) {
  return (
    <div className="bg-white p-8 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="krona-one-regular text-3xl text-pink2">{card_number}</p>
        <p>{ card_icon_content}</p>
      </div>
      <p>
        {card_content} <span className="font-semibold">{span_content}</span>
      </p>
    </div>
  );
}

export default Card1;
