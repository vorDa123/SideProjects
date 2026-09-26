import type { Ref } from "react";
export interface HeaderProps {
  showLogo?: boolean;
}

export interface BowlingCenterCardProps {
  bowlingCenterName: string;
  bowlingCenterID: string;
  center?: BowlingCenterData;
}

export interface NextFreeSlotProps {
  bowlingCenterPage?: boolean;
}

export interface NextFreeSlotCardProps {
  freeSlotData: ReservationData;
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
  myReservationData?: ReservationData;
}

export interface ButtonProps {
  state?: string;
  variant: string;
  buttonName: string;
  type?: "submit" | "reset" | "button";
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
  defaultValue?: string | number;
  ref?: Ref<HTMLInputElement>;
}

export interface NavigationContextTypes {
  isWideNavigation: boolean;
  toggleNavigation: () => void;
}

export interface ModalProps {
  isOpen?: boolean;
  isJoinClicked?: boolean;
  freeSlotData?: ReservationData;
  joinSlotData?: ReservationData;
  myReservationData?: ReservationData;
  newReservationData?: BowlingCenterDataProps;
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
  center: string;
  img: string;
  workingInfo: WorkingDaysData;
  lanes: number;
  description?: string;
  email: string;
  phone: string;
  maxPlayersPerAlley?: number;
  pricePerPerson: number;
  shoesPricePerPerson: number;
}

export type ReservationType = "join" | "free" | "booked";

export interface ReservationData {
  id?: string;
  bowlingCenterInfo: BowlingCenterData;
  laneNumber?: number;
  startTime: string;
  endTime?: string;
  date: Date;
  singlePrice?: number;
  price?: number;
  shoesNeeded: boolean;
  shoesPrice?: number;
  priceWithShoes?: number;
  openJoin: boolean;
  duration: number;
  numberOfPlayers: number;
  email: string;
  phone?: string;
  reservationType: ReservationType;
  joinedPlayers?: UserData[];
  numberOfBookedLanes?: number;
  numberOfFreeLanes?: number;
}

export interface AchievementData {
  id: string;
  img: string;
  name: string;
}

export interface AchievementCardProps {
  achievementData: AchievementData;
}

export interface OpenJoinCardProps {
  joinData: ReservationData;
}

export interface BookingContextTypes {
  isLoadingCenters?: boolean;
  isLoadingFreeSlots?: boolean;
  isLoadingMyReservations?: boolean;
  isLoadingAllBookings?: boolean;
  isLoadingAchievements?: boolean;
  isLoadingJoinSlots?: boolean;
  error?: string | null;
  centers?: BowlingCenterData[];
  freeSlots?: ReservationData[];
  joinSlots?: ReservationData[];
  myReservations?: ReservationData[];
  achievements?: AchievementData[];
  allBookings?: ReservationData[];
  fetchCenters?: () => Promise<void>;
  fetchFreeSlots?: () => Promise<void>;
  fetchJoinSlots?: () => Promise<void>;
  fetchMyReservations?: () => Promise<void>;
  fetchAllBookings?: () => Promise<void>;
  fetchAchievements?: () => Promise<void>;
  createReservation?: (data: ReservationData) => Promise<void>;
}

export interface BookingProviderProps {
  children: React.ReactNode;
}

export interface BowlingCenterDataProps {
  centerData: BowlingCenterData;
  allBookings?: ReservationData[];
  startTime?: number;
  date?: Date;
}
