export const getNextServiceDate = (lastService: Date, window: number) => {
  const lastServiceDay = getDayNumber(lastService);
  let nextServiceDay = lastServiceDay + window;
  const currentDay = getDayNumber(Date.now());

  if (nextServiceDay > 365 && currentDay <= window) {
    nextServiceDay = nextServiceDay - 365;
  }

  const timeDifference = nextServiceDay - currentDay;

  return timeDifference === 0
    ? [`Next service: by today`, "today"]
    : timeDifference > 0
    ? [`Next service: in ${timeDifference} day(s)`, "good"]
    : [`Next service: by ${timeDifference * -1} day(s) ago`, "overdue"];
};

const getDayNumber = (_: any) => {
  var now: any = new Date(_);
  var start: any = new Date(now.getFullYear(), 0, 0);
  var diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
};
