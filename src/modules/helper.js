export const requestData = async () => {
  try {
    const request = await fetch("https://www.breakingbadapi.com/api/quotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response = await request.json();
    return response;
  } catch {
    throw new Error("Ups! we coudln't request the data!");
  }
};

export const getRandomNumber = (max, min) =>
  Math.round(Math.random() * (max - min) + min);


