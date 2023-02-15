export function scrollDown(elementId: string): void {
  const list = document.getElementById(elementId);
  if (!list) {
    return;
  }
  list.scrollTop = list.scrollHeight;
}
