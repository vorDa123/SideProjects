import axios from "axios";

const loginPlayer = async (data: FormData) => {
  try {
    const res = await axios.post(
      "http://localhost/BowlingBuddiesAPI/api/loginPlayer.php",
      data,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
    throw error;
  }
};

const registerPlayer = async (data: FormData) => {
  try {
    const res = await axios.post(
      "http://localhost/BowlingBuddiesAPI/api/registerPlayer.php",
      data,
    );
    return res.data;
  } catch (error) {
    console.error("Server down ili error");
    throw error;
  }
};

export { loginPlayer, registerPlayer };
