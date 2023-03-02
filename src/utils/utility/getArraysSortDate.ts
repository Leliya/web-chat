export function getArraysSortDate(array: MessageType[]) {
  const sortArray: Array<MessageType[]> = [];
  let date: Nullable<string> = null;
  let currentDateArray: MessageType[] = [];
  array.forEach((obj: MessageType, index: number) => {
    const dateObj = new Date(obj.time);
    const currentDate =
      '' + dateObj.getFullYear() + dateObj.getMonth() + dateObj.getDate();

    if (!date) {
      date = currentDate;
    }

    if (date === currentDate) {
      currentDateArray.push(obj);
      if (index === array.length - 1) {
        sortArray.push(currentDateArray);
      }
    } else {
      sortArray.push(currentDateArray);
      date = null;
      currentDateArray = [];
      currentDateArray.push(obj);
      if (index === array.length - 1) {
        sortArray.push(currentDateArray);
      }
    }
  });
  return sortArray;
}
