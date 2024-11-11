class Notification {
  info(message) {
    alert(message);
  }
  success(message) {
    alert(message);
  }
  error(message) {
    alert(message);
  }
}

export const notification = new Notification();
