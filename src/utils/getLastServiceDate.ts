export const getLastServiceDate = (_: Date): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const stringDate = new Date(_);
  const dayName = days[stringDate.getDay()];
  const month = months[stringDate.getMonth()];

  return `Last service: ${dayName}, ${month} ${stringDate.getDate()}`;
};
