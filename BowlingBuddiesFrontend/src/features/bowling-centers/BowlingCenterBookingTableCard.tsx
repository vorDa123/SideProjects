import MainButton from "../../components/ui/MainButton";
import type { BookingCardProps } from "../../types/index.ts";
function BowlingCenterBookingTableCard(props: BookingCardProps) {
  return (
    <>
      <div className="col-span-1 border-b border-b-darkerBlue-30 py-2">
        <span className="text-mh4">{props.bookingTime}</span>
      </div>
      <div className="col-span-3 border-b border-b-darkerBlue-30 py-2">
        <div className="rounded-m25 bg-white-100 shadow-mob flex flex-col justify-center items-center py-5 gap-2">
          <p className="text-mh3">6/12 Lanes booked</p>
          <MainButton buttonName="Book" variant="fill" />
        </div>
      </div>
    </>
  );
}

export default BowlingCenterBookingTableCard;
