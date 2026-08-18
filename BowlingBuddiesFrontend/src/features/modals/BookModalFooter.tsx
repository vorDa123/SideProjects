import BiggerButton from "../../components/ui/BiggerButton.tsx";
function BookModalFooter() {
  return (
    <>
      <div className="col-span-5 mt-5 self-center md:relative">
        <BiggerButton
          variant="fill"
          buttonName="BOOK"
          classList="md:w-[190px] md:absolute md:right-[-30px] md:top-[-30px] mxl:right-[-40px] xxl:right-[-50px]"
        />
      </div>
      <div className="col-span-3 mt-5">
        <div className="text-center">
          <p>Price per person:</p>
          <p className="text-mh1 font-semibold">10 EUR</p>
          <p className="text-mdisclaimer md:text-tdisclaimer">
            Shoes not included in price
          </p>
        </div>
      </div>
    </>
  );
}

export default BookModalFooter;
