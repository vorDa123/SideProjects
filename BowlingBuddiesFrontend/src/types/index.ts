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
  classList?: string;
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
