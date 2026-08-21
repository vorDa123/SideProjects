export interface HeaderProps {
  showLogo?: boolean;
}

export interface BowlingCenterCardProps {
  bowlingCenterName: string;
}

export interface NextFreeSlotProps {
  bowlingCenterPage?: boolean;
}

export interface OpenJoinProps {
  openJoinBowlingPage?: boolean;
}

export interface LabelTagProps {
  labelValue?: string;
  classOverride?: string;
  classAppend?: string;
}

export interface MyProfileProps {
  myProfilePage?: boolean;
}

export interface MyReservationsProps {
  myReservationPage?: boolean;
}

export interface ButtonProps {
  state?: string;
  variant: string;
  buttonName: string;
  classAppend?: string;
  classOverride?: string;
}

export interface PlayerProps {
  playerName?: string;
  playerImg?: string;
  addPlayer?: boolean;
  isLeader?: boolean;
}

export interface BookingCardProps {
  bookingTime: string;
}

export interface InputFieldProps {
  type: string;
  labelName: string;
  name: string;
  classOverride?: string;
  classAppend?: string;
}
