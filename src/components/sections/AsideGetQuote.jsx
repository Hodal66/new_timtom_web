import Button1 from "../Buttons/Button1";
import backgroundImage from "/images/bgImage/asideImage.png";

function AsideGetQuote() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center h-[400px] "
    >
      <aside className="text-white mx-4 flex flex-col text-justify py-8 gap-4">
        <div className="bg-white">
          <img src="images/Logo1.png" alt="This was the logo of the company" />
        </div>
        <p className="text-lg krona-one-regular">
          Optimising Out Perfomance withSpecial Services
        </p>
        <div className="font-medium">
          <p>Discover how we&rsquo;re improving the quality of Industries</p>
        </div>

        <Button1 title={"Get Quotes"}/>
      </aside>
    </div>
  );
}

export default AsideGetQuote;
