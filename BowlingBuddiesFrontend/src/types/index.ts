export interface HeaderProps {
  showLogo?: boolean;
}

export interface BowlingCenterCardProps {
  bowlingCenterName: string;
  bowlingCenterID: number;
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
  onClick?: () => void;
}

export interface PlayerProps {
  playerName?: string;
  playerImg?: string;
  addPlayer?: boolean;
  isLeader?: boolean;
  onClick?: () => void;
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
  labelClassOverride?: string;
  labelClassAppend?: string;
}

export interface NavigationContextTypes {
  isWideNavigation: boolean;
  toggleNavigation: () => void;
}

export interface ModalProps {
  isOpen?: boolean;
  isJoinClicked?: boolean;
  onClose?: () => void;
  onAddPlayer?: () => void;
  onBack?: () => void;
  setIsJoinClicked?: () => void;
}

export interface BookingFormContextTypes {
  isJoinClicked: boolean;
  toggleJoinClicked: () => void;
}

export interface AddressData {
  address: string;
  city: string;
  country: string;
  address2?: string;
  postalCode: string;
  state?: string;
}

export interface UserPersonalData {
  name: string;
  surname: string;
  gender?: string;
  dateOfBirth?: string;
  profileImage?: string;
  oib?: string;
}

export interface UserContactData {
  email: string;
  phone?: string;
}

export interface RegisteredUserData {
  registeredPlayer: boolean;
  registeredClub?: string;
}

export interface UserData {
  id: string;
  personalData: UserPersonalData;
  contactData: UserContactData;
  registeredData: RegisteredUserData;
  addressData: AddressData;
  leader?: boolean;
}

export interface WorkingInfoData {
  open: boolean;
  startTime?: string;
  endTime?: string;
}

export interface WorkingDaysData {
  monday: WorkingInfoData;
  tuesday: WorkingInfoData;
  wednesday: WorkingInfoData;
  thursday: WorkingInfoData;
  friday: WorkingInfoData;
  saturday: WorkingInfoData;
  sunday: WorkingInfoData;
}

export interface BowlingCenterData {
  id: string;
  name: string;
  location: string;
  img: string;
  workingInfo: WorkingDaysData;
  lanes: number;
  description?: string;
  email: string;
  phone: string;
  maxPlayersPerAlley?: number;
}

export interface BookingSlotData {
  id: string;
  bowlingCenterInfo: BowlingCenterData;
  laneNumber?: number;
  startTime: string;
  endTime: string;
  date: string;
  singlePrice: number;
  price: number;
  shoesNeeded: boolean;
  shoesPrice: number;
  priceWithShoes: number;
  openJoin: boolean;
  duration: number;
  numberOfPlayers: number;
  email: string;
  phone?: string;
  reservationType: string;
}

export type JoinStatus = "free" | "full" | "cancelled";

export interface JoinData {
  id: string;
  host: UserData;
  bowlingCenterData: BowlingCenterData;
  date: string;
  time: string;
  joinedPlayers: UserData[];
  status: JoinStatus;
  numberOfBookedLanes: number,
}

export interface NextSlotData {
  id: string;
  bowlingCenterData: BowlingCenterData;
  date: string;
  time: string;
  status?: JoinStatus;
  numberOfFreeLanes: number,
}
