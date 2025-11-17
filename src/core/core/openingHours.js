// src/core/openingHours.js

const openingHours = {
  monday: { open: "09:00", close: "21:00" },
  tuesday: { open: "09:00", close: "21:00" },
  wednesday: { open: "09:00", close: "21:00" },
  thursday: { open: "09:00", close: "22:00" },
  friday: { open: "09:00", close: "23:00" },
  saturday: { open: "10:00", close: "23:00" },
  sunday: { open: "16:00", close: "22:00" },
};

function getOpeningHours() {
  return openingHours;
}

function isOpenNow(date = new Date()) {
  const weekdayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const weekday = weekdayNames[date.getDay()];
  const config = openingHours[weekday];

  if (!config) return false;

  const [openHour, openMin] = config.open.split(":").map(Number);
  const [closeHour, closeMin] = config.close.split(":").map(Number);

  const openDate = new Date(date);
  openDate.setHours(openHour, openMin, 0, 0);

  const closeDate = new Date(date);
  closeDate.setHours(closeHour, closeMin, 0, 0);

  return date >= openDate && date <= closeDate;
}

module.exports = {
  getOpeningHours,
  isOpenNow,
};
