const validateParams = params => {

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

export { validateParams };
