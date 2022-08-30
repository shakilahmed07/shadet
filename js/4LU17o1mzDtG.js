(() => {
  class t {
    constructor(t) {
      (this.temporal = t),
        (this.startDate = new Date(t.dataset.sysflowTemporalStart).getTime()),
        (this.endDate = new Date(t.dataset.sysflowTemporalEnd).getTime()),
        this.assignEvents();
    }
    assignEvents() {
      this.hideTemporal();
    }
    hideTemporal() {
      const t = new Date().getTime();
      (this.endDate < t || this.startDate > t) &&
        (this.temporal.style.display = "none");
    }
  }
  const e = document.querySelectorAll("[data-sysflow-temporal]");
  e &&
    e.forEach((e) => {
      new t(e);
    });
})();