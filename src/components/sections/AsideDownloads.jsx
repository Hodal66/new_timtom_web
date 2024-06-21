import IconUser from "../../assets/icons/IconUser";
function AsideDownloads() {
  const handleDownloadPDF = () => {
    // Get the element to capture When you want content inside the file
    // const element = document.getElementById('pdf-content');

    // html2canvas(element)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     pdf.save('download.pdf');
    //   });

    //When we embed file inside our codes
    window.open("src/assets/myPDFs/test.pdf", "_blank");
  };

  const handleDownloadPdf2 = () => {
    window.open("/src/assets/myPDFs/1_merged.pdf", "_blank");
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
