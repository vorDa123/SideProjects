import type {
  UserData,
  BowlingCenterData,
  BookingSlotData,
  JoinData,
  NextSlotData,
} from "../types/index.ts";

export const CURRENT_USER: UserData = {
  id: "absadca123adsd",
  personalData: {
    name: "Davor",
    surname: "Kuharić",
    gender: "M",
    oib: "40100668658",
    dateOfBirth: "1997-04-28",
  },
  contactData: {
    email: "davorkuharic1997@gmail.com",
    phone: "+385914976618",
  },
  registeredData: {
    registeredPlayer: true,
    registeredClub: "BK Nomad",
  },
  addressData: {
    address: "Turanjska ulica 3G",
    city: "Zagreb",
    postalCode: "10020",
    country: "Croatia",
  },
  leader: true,
};

export const BOWLING_CENTERS: BowlingCenterData[] = [
  {
    id: "asdkmnasjdn123sanmj",
    name: "West Bowling",
    location: "Zaprešićka 2, 10290, Jablanovec",
    img: "/src/assets/playerBowling.jpg",
    workingInfo: {
      monday: {
        open: false,
      },
      tuesday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
      wednesday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
      thursday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
      friday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
      saturday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
      sunday: {
        open: true,
        startTime: "14:00",
        endTime: "23:00",
      },
    },
    lanes: 14,
    email: "info@westbowling.com",
    phone: "+38591 555 5555",
    maxPlayersPerAlley: 6,
  },
  {
    id: "sajkdfnmasjidn13829ansjkd",
    name: "Kooglana",
    location: "Trg Drage Iblera 10, 10000, Zagreb",
    img: "/src/assets/playerBowling.jpg",
    workingInfo: {
      monday: {
        open: true,
        startTime: "16:00",
        endTime: "00:00",
      },
      tuesday: {
        open: true,
        startTime: "16:00",
        endTime: "00:00",
      },
      wednesday: {
        open: true,
        startTime: "16:00",
        endTime: "00:00",
      },
      thursday: {
        open: true,
        startTime: "16:00",
        endTime: "00:00",
      },
      friday: {
        open: true,
        startTime: "16:00",
        endTime: "00:00",
      },
      saturday: {
        open: true,
        startTime: "15:00",
        endTime: "00:00",
      },
      sunday: {
        open: true,
        startTime: "14:00",
        endTime: "22:00",
      },
    },
    lanes: 14,
    email: "",
    phone: "+38599 235 5700",
    maxPlayersPerAlley: 6,
  },
];

export const MY_RESERVATIONS: BookingSlotData[] = [
  {
    id: "sdsdiaodmoiuwnu122w43oawskned",
    bowlingCenterInfo: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    laneNumber: 3,
    startTime: "16:15",
    endTime: "18:15",
    date: "2026-09-12",
    singlePrice: 10,
    price: 30,
    shoesNeeded: true,
    shoesPrice: 2,
    priceWithShoes: 36,
    openJoin: false,
    duration: 2,
    numberOfPlayers: 3,
    email: "davorkuharic1997@gmail.com",
    phone: "+385914976618",
    reservationType: "fun",
  },
];

export const JOIN_SLOT: JoinData[] = [
  {
    id: "sadnajksdnuiwnabdi1232ajnsdioua",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-24",
    time: "18:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 3,
  },
  {
    id: "sdadfdsadasvsfasrd1323eaede2",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-24",
    time: "18:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 4,
  },
  {
    id: "sdafdxcycvcaserdwa233wea",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-10-24",
    time: "18:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "full",
    numberOfBookedLanes: 2,
  },
  {
    id: "vgfcsdvsdffaswdgew3rrfsae",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-10-01",
    time: "20:15",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 4,
  },
  {
    id: "dsffsfesfdsfwfdsgf2w34r",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-11-22",
    time: "21:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "full",
    numberOfBookedLanes: 2,
  },
  {
    id: "dfgxgqwer2345trdxfg4tret4g",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-10-29",
    time: "17:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 6,
  },
  {
    id: "34resdf3rtsdgfdxge3",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-25",
    time: "19:15",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "cancelled",
    numberOfBookedLanes: 2,
  },
  {
    id: "gxferf35tesf2325r4",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-24",
    time: "18:45",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 3,
  },
  {
    id: "fdxf343545r4ttsd33",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-12-07",
    time: "19:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 2,
  },
  {
    id: "cxvedr3455t4rsf33r",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-11-13",
    time: "17:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 1,
  },
  {
    id: "fdsfes4r3r3rs223435es",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-23",
    time: "20:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 1,
  },
  {
    id: "fxfdxfer3442342redxyf3",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-24",
    time: "18:15",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 2,
  },
  {
    id: "xcvdesgfrghzhchgvjhge354t",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-24",
    time: "18:30",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 2,
  },
  {
    id: "cvhfhfhjfgddfgdcawrdxsgdfg",
    host: {
      id: "absadca123adsd",
      personalData: {
        name: "Davor",
        surname: "Kuharić",
        gender: "M",
        oib: "40100668658",
        dateOfBirth: "1997-04-28",
      },
      contactData: {
        email: "davorkuharic1997@gmail.com",
        phone: "+385914976618",
      },
      registeredData: {
        registeredPlayer: true,
        registeredClub: "BK Nomad",
      },
      addressData: {
        address: "Turanjska ulica 3G",
        city: "Zagreb",
        postalCode: "10020",
        country: "Croatia",
      },
      leader: true,
    },
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "19:00",
    joinedPlayers: [
      {
        id: "absadca123adsd",
        personalData: {
          name: "Davor",
          surname: "Kuharić",
          gender: "M",
          oib: "40100668658",
          dateOfBirth: "1997-04-28",
        },
        contactData: {
          email: "davorkuharic1997@gmail.com",
          phone: "+385914976618",
        },
        registeredData: {
          registeredPlayer: true,
          registeredClub: "BK Nomad",
        },
        addressData: {
          address: "Turanjska ulica 3G",
          city: "Zagreb",
          postalCode: "10020",
          country: "Croatia",
        },
        leader: true,
      },
      {
        id: "snalciuasnbciusab",
        personalData: {
          name: "Lovro",
          surname: "Paladinić",
          gender: "M",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "Zagreb",
          postalCode: "",
          country: "Croatia",
        },
        leader: false,
      },
      {
        id: "sklanmuawibndioslkdopi",
        personalData: {
          name: "Ivana",
          surname: "Dukić",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
      {
        id: "pkaspodjoiahduiha",
        personalData: {
          name: "Anja",
          surname: "Kotaranin",
          gender: "F",
          oib: "",
          dateOfBirth: "",
        },
        contactData: {
          email: "",
          phone: "",
        },
        registeredData: {
          registeredPlayer: false,
          registeredClub: "",
        },
        addressData: {
          address: "",
          city: "",
          postalCode: "",
          country: "",
        },
        leader: false,
      },
    ],
    status: "free",
    numberOfBookedLanes: 2,
  },
];

export const FREE_SLOT: NextSlotData[] = [
  {
    id: "vnbcnzcan76caw67bw",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "78zf87yet86778a9a7dhaghfh",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "20:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "78stzfsg7utfdygc5vtzga",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "19:30",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "78sfg765sfg76s78hf76sf77s",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "20:30",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "76tgs776tgf67ser",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-29",
    time: "18:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "e73zh8augd7g763gad7",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-10-03",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "81782e72a7uz7euezawzug",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-10-03",
    time: "18:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "uiohaszgdutz267dyt",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-11-15",
    time: "16:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "364zuseagfd678a6f75edazu",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-11-15",
    time: "17:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "2zuzuazuvsdiuztzu23tzud",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-20",
    time: "18:00",
    status: "free",
    numberOfFreeLanes: 5,
  },
  {
    id: "t2wqtzzuswndbzut26t73b",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-28",
    time: "21:00",
    status: "free",
    numberOfFreeLanes: 2,
  },
  {
    id: "djknfhjsbghfiuzqwghjfabshjg",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-12-12",
    time: "18:00",
    status: "free",
    numberOfFreeLanes: 4,
  },
  {
    id: "člskmdloifnnqiupiowačolda",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-22",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "skjuanidjmaiofdiuokjkio",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-21",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "kidmfopqiopfuijsdnjk",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-11",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "dujhnsikjbnfuzbwaoifouisabfizhdasnubf",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-12",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "dfnmjxniujfkhnawiow0pošaolkadsfnjk",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-14",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "klčdfsaolnfwuizabfioksdkjbasfdj",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-10",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "dfmnkljanfuiwiuahsafesf",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-18",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
  {
    id: "safdsfsadjasndfjhabndui22bhijr",
    bowlingCenterData: {
      id: "asdkmnasjdn123sanmj",
      name: "West Bowling",
      location: "Zaprešićka 2, 10290, Jablanovec",
      img: "/src/assets/playerBowling.jpg",
      workingInfo: {
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        wednesday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        thursday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        friday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        saturday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
        sunday: {
          open: true,
          startTime: "14:00",
          endTime: "23:00",
        },
      },
      lanes: 14,
      email: "info@westbowling.com",
      phone: "+38591 555 5555",
      maxPlayersPerAlley: 6,
    },
    date: "2026-09-19",
    time: "19:00",
    status: "free",
    numberOfFreeLanes: 6,
  },
];
