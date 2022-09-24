const validateParams = (params) => {
  const destinationId = params.get('destinationId')
    ? params.get('destinationId').trim()
    : null;

  const pageNumber = params.get('pageNumber').trim()
    ? params.get('pageNumber').trim()
    : null;

  const pageSize = params.get('pageSize').trim()
    ? params.get('pageSize').trim()
    : null;

  const checkIn = params.get('checkIn').trim()
    ? params.get('checkIn').trim()
    : null;

  const checkOut = params.get('checkOut').trim()
    ? params.get('checkOut').trim()
    : null;

  const adults1 = params.get('adults1').trim()
    ? params.get('adults1').trim()
    : null;

  if (
    destinationId &&
    pageNumber &&
    pageSize &&
    checkIn &&
    checkOut &&
    adults1
  ) {
    return true;
  } else {
    return false;
  }
};

const getHotelDays = (params) => {
  const checkIn = params.get('checkIn').trim()
    ? params.get('checkIn').trim()
    : '000-00-00';

  const checkOut = params.get('checkOut').trim()
    ? params.get('checkOut').trim()
    : '000-00-00';

  const startDate = new Date(checkIn);
  const finishDate = new Date(checkOut);

  const daysInMs = 86400000;
  const msDifrence = finishDate - startDate;
  const dayDiference = msDifrence / daysInMs;

  return Math.floor(dayDiference);
};

export { validateParams , getHotelDays};
