(() => {
  class e {
    constructor(e) {
      (this.KEY_COOKIE = "SYSFLOW.COOKIE"),
        (this.cookie = e),
        (this.url = e.dataset.sysflowCookie),
        (this.acceptBtn = this.cookie.querySelector(
          "[data-sysflow-cookie-accept]"
        )),
        (this.cookieStatus = localStorage.getItem(this.KEY_COOKIE)),
        this.assignEvents();
    }
    assignEvents() {
      this.cookieStatus ? this.removeCookie() : this.appendCookie();
    }
    appendCookie() {
      setTimeout(() => {
        this.cookie.classList.remove("invisible");
      }, 100),
        this.acceptBtn.addEventListener("click", this.acceptCookie.bind(this));
    }
    removeCookie() {
      this.cookie.style.display = "none";
    }
    acceptCookie() {
      localStorage.setItem(this.KEY_COOKIE, !0),
        this.removeCookie(),
        "0" !== this.url && "false" !== this.url && this.sendWebhook();
    }
    sendWebhook() {
      const e = { location: window.location.href },
        t = new XMLHttpRequest();
      t.open("POST", this.url, !0),
        t.setRequestHeader("Content-type", "application/json"),
        t.send(JSON.stringify(e));
    }
  }
  const t = document.querySelector("[data-sysflow-cookie]");
  t && new e(t);
})();