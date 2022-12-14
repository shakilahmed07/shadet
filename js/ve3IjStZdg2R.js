(() => {
  class s {
    constructor(s) {
      (this.counter = s),
        (this.endDate = new Date(s.dataset.sysflowCounter).getTime()),
        (this.days = 0),
        (this.hours = 0),
        (this.mins = 0),
        (this.secs = 0),
        (this.daysField = s.querySelector("[data-sysflow-counter-days]")),
        (this.daysValue = this.daysField
          ? this.daysField.querySelector("[data-sysflow-counter-days-value]")
          : null),
        (this.hoursField = s.querySelector("[data-sysflow-counter-hours]")),
        (this.hoursValue = this.hoursField
          ? this.hoursField.querySelector("[data-sysflow-counter-hours-value]")
          : null),
        (this.minsField = s.querySelector("[data-sysflow-counter-mins]")),
        (this.minsValue = this.minsField
          ? this.minsField.querySelector("[data-sysflow-counter-mins-value]")
          : null),
        (this.secsField = s.querySelector("[data-sysflow-counter-secs]")),
        (this.secsValue = this.secsField
          ? this.secsField.querySelector("[data-sysflow-counter-secs-value]")
          : null),
        this.assignEvents();
    }
    assignEvents() {
      this.startCounter();
    }
    startCounter() {
      this.tick();
    }
    tick() {
      const s = new Date().getTime(),
        e = this.endDate - s;
      e < 1e3
        ? (this.counter.style.display = "none")
        : ((this.days = Math.floor(e / 864e5)),
          (this.hours = Math.floor((e % 864e5) / 36e5)),
          (this.mins = Math.floor((e % 36e5) / 6e4)),
          (this.secs = Math.floor((e % 6e4) / 1e3)),
          this.days > 0 && this.daysValue
            ? (this.daysValue.innerText = this.days)
            : this.daysField && (this.daysField.style.display = "none"),
          (this.days > 0 || this.hours > 0) && this.hoursValue
            ? (this.hoursValue.innerText = this.hours)
            : this.hoursField && (this.hoursField.style.display = "none"),
          (this.days > 0 || this.hours > 0 || this.mins > 0) && this.minsValue
            ? (this.minsValue.innerText = this.mins)
            : this.minsField && (this.minsField.style.display = "none"),
          this.secsValue
            ? (this.secsValue.innerText = this.secs)
            : this.secsField && (this.secsField.style.display = "none"),
          setTimeout(this.tick.bind(this), 1e3));
    }
  }
  const e = document.querySelectorAll("[data-sysflow-counter]");
  e &&
    e.forEach((e) => {
      new s(e);
    });
})();