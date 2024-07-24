export const formatDateToData = (d: Date) =>
  `${d.toLocaleDateString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })}`;
