import IconUser from "../../assets/icons/IconUser";
function AsideDownloads() {
  const handleDownloadPDF = () => {
    window.open("/myPDFs/Aviation_courses_2024.pdf", "_blank");
  };

  const handleDownloadPdf2 = () => {
    window.open("/myPDFs/TimtomAviationLtd_Bronchure.pdf", "_blank");
  };
  return (
    <main id="pdf-content" className="text-black">
      <aside className="flex flex-col justify-center cursor-pointer">
        <div className="bg-primary text-white p-4 font-bold text-2xl">
          Downloads
        </div>
        <div onClick={handleDownloadPDF} className="flex items-center p-4 font-semibold text-xl border-l-2 border-r-2 border-b-2 border-gray-light">
          <IconUser
            fill={"none"}
            strokeCollor={"black"}
            strokeWidth={1}
            width={35}
            height={35}
          />
          <span > PDF Document</span>
        </div>
        <div
          onClick={handleDownloadPdf2}
          className="flex p-4 font-semibold text-xl border-l-2 border-r-2 border-b-2 border-gray-light items-center"
        >
          <IconUser
            fill={"none"}
            strokeCollor={"black"}
            strokeWidth={1}
            width={35}
            height={35}
          />
          <span>Bronchule</span>
        </div>
      </aside>
    </main>
  );
}

export default AsideDownloads;
