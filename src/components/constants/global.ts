export const monthNames = [
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

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genders = ["Male", "Female", "Other"];

export const genderoptions = genders.map((item) => ({
  value: item.toLocaleLowerCase(),
  label: item,
}));

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const credits = [30, 36, 42, 48, 54, 60];
export const creditOptions = credits.map((item) => ({
  value: item,
  label: item,
}));

export const courseStatus = [
  { value: "UPCOMING", label: "Upcoming" },
  { value: "ONGOING", label: "Ongoing" },
  { value: "ENDED", label: "Ended" },
];

export const courseStatusOptions = courseStatus.map((item) => ({
  value: item,
  label: item,
}));

export const semesterOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

export const daysNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const daysOptions = daysNames.map((item) => ({
  value: item,
  label: item,
}));

export const timeNames = [
  "12:30",
  "13:30",
  "14:30",
  "15:30",
  "16:30",
  "17:30",
  "18:30",
  "19:30",
];

export const timeOptions = timeNames.map((item) => ({
  value: item,
  label: item,
}));
