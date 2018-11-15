class CountdownTimer {
  constructor(initialTime) {
    this.timeInSeconds = initialTime ? initialTime : 0;
    this.listeners = [];
    this.interval = null;
  }

  /**
   * Starts the count down every second until reaching 0.
   */
  start() {
    const decreaseOneSecond = () => {
      if (this.timeInSeconds > 0) {
        this.timeInSeconds --;

        this.listeners.forEach(listener => listener(this.timeInSeconds));
      } else {
        clearInterval(this.interval);
      }
    };

    this.interval = setInterval(decreaseOneSecond, 1000);
  }

  /**
   * Returns true if listener is a function and is not null, otherwise returns false;
   * @param {Function} listener 
   */
  addListener(listener) {
    if (listener && typeof listener === "function") {
      this.listeners.push(listener);
      return true;
    }

    return false;
  }
}
