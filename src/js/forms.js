getCreditCardType(accountNumber) {
  // cc type is  unknown at start
  var result = "unknown";

  // check for MasterCard
  if (/^5[1-5]/.test(accountNumber))
  {
    result = "mastercard";
  }

  // check for Visa
  else if (/^4/.test(accountNumber))
  {
    result = "visa";
  }

  // check for AmEx
  else if (/^3[47]/.test(accountNumber))
  {
    result = "amex";
  }

  return result;
}
}
