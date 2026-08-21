import BiggerButton from "../../components/ui/BiggerButton.tsx";
function JoinModalFooter() {
  return (
    <>
      <div className="col-span-5 mt-6 self-center md:relative md:mt-5">
        <BiggerButton
          variant="fill"
          buttonName="JOIN"
          classAppend="md:absolute md:right-[-30px] md:top-[-30px] lg:right-[-10px] mxl:right-[-20px] xxl:right-[-20px] active:md:top-[-25px]"
        />
      </div>
      <div className="col-span-3 mt-6 md:mt-5">
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

export default JoinModalFooter;
