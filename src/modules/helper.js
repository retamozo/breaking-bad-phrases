const requestData = async () => {
  try {
    const request = await fetch("https://www.breakingbadapi.com/api/quotes");
    const response = await request.json();
    return response;
  } catch {
    throw new Error("Ups! we coudln't request the data!");
  }
};
export default requestData;
