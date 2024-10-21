
export function formatEventDates(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    const minutesPadded = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours12}:${minutesPadded}${ampm}`;
  };

  if (
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate()
  ) {
    return `${start.toLocaleDateString('en-GB', options)}, ${formatTime(start)} - ${formatTime(end)}`;
  }

  return `${start.toLocaleDateString('en-GB', options)}, ${formatTime(start)} - ${end.toLocaleDateString('en-GB', options)}, ${formatTime(end)}`;
}

export function formatSingleDate(date: string): string {
  const date_value = new Date(date);

  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  };

  return `${date_value.toLocaleDateString('en-GB', options)}`;
}