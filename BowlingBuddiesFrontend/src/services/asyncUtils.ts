const delay = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!");
    }, duration);
  });
};

export default delay;
