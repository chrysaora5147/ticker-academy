import { ClassroomsPage } from "./pages/ClassroomsPage.js";
import { ComparePage } from "./pages/ComparePage.js";
import { HomePage } from "./pages/HomePage.js";
import { PortfolioPage } from "./pages/PortfolioPage.js";
import { StudentProfilePage } from "./pages/StudentProfilePage.js";
import { getStudentByTicker, searchStudents } from "./lib/students.js";

const app = document.querySelector("#app");

function navigate(path) {
  window.history.pushState({}, "", path);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindNavigation() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(element.getAttribute("data-link"));
    });
  });
}

function bindHeroActions() {
  document.querySelectorAll("[data-focus-search]").forEach((element) => {
    element.addEventListener("click", () => {
      const input = document.querySelector("#ticker-search");
      if (input) {
        input.focus();
        input.select();
      }
    });
  });
}

function bindCopyLinks() {
  document.querySelectorAll("[data-copy-current-url]").forEach((button) => {
    button.addEventListener("click", async () => {
      const status = document.querySelector(button.getAttribute("data-copy-status"));
      const url = window.location.href;

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
          if (status) status.textContent = "Link copied for the hallway handoff.";
        } else {
          if (status) status.textContent = url;
        }
      } catch {
        if (status) status.textContent = url;
      }
    });
  });
}

function bindSearch() {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#ticker-search");
  const results = document.querySelector("#search-results");

  if (!form || !input || !results) return;

  function updateResults() {
    const matches = searchStudents(input.value).slice(0, 6);
    results.innerHTML = matches.length
      ? matches
          .map((profile) => `<button type="button" data-link="/students/${profile.ticker}"><strong>${profile.ticker}</strong><span>${profile.companyName}</span></button>`)
          .join("")
      : input.value.trim()
        ? `<p>No student file found yet.</p>`
        : "";

    bindNavigation();
  }

  input.addEventListener("input", updateResults);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    const exact = getStudentByTicker(query);
    const firstMatch = searchStudents(query)[0];

    if (exact || firstMatch) {
      navigate(`/students/${(exact || firstMatch).ticker}`);
    } else {
      updateResults();
    }
  });
}

function bindBrowseFilters() {
  const classroom = document.querySelector("#classroom-filter");
  const archetype = document.querySelector("#archetype-filter");
  const riskLevel = document.querySelector("#risk-filter");
  const clear = document.querySelector("#clear-filters");

  if (!classroom || !archetype || !riskLevel || !clear) return;

  function updateBrowseRoute() {
    const params = new URLSearchParams();
    if (classroom.value) params.set("classroom", classroom.value);
    if (archetype.value) params.set("archetype", archetype.value);
    if (riskLevel.value) params.set("riskLevel", riskLevel.value);
    const query = params.toString();
    navigate(query ? `/classrooms?${query}` : "/classrooms");
  }

  classroom.addEventListener("change", updateBrowseRoute);
  archetype.addEventListener("change", updateBrowseRoute);
  riskLevel.addEventListener("change", updateBrowseRoute);
  clear.addEventListener("click", () => navigate("/classrooms"));
}

function bindCompareSelectors() {
  const left = document.querySelector("#compare-left");
  const right = document.querySelector("#compare-right");
  const swap = document.querySelector("#swap-compare");

  if (!left || !right || !swap) return;

  function updateCompareRoute(nextLeft = left.value, nextRight = right.value) {
    navigate(`/compare?left=${encodeURIComponent(nextLeft)}&right=${encodeURIComponent(nextRight)}`);
  }

  left.addEventListener("change", () => updateCompareRoute());
  right.addEventListener("change", () => updateCompareRoute());
  swap.addEventListener("click", () => updateCompareRoute(right.value, left.value));
}

function bindPortfolioBuilder() {
  const input = document.querySelector("#portfolio-tickers");
  const build = document.querySelector("#build-portfolio");

  if (!input || !build) return;

  function updatePortfolioRoute() {
    const value = input.value.trim();
    navigate(value ? `/portfolio?tickers=${encodeURIComponent(value)}` : "/portfolio");
  }

  build.addEventListener("click", updatePortfolioRoute);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updatePortfolioRoute();
    }
  });
}

function render() {
  const studentMatch = window.location.pathname.match(/^\/students\/([^/]+)$/);
  const params = new URLSearchParams(window.location.search);

  if (studentMatch) {
    app.innerHTML = StudentProfilePage(studentMatch[1]);
  } else if (window.location.pathname === "/classrooms") {
    app.innerHTML = ClassroomsPage({
      classroom: params.get("classroom") || "",
      archetype: params.get("archetype") || "",
      riskLevel: params.get("riskLevel") || ""
    });
  } else if (window.location.pathname === "/compare") {
    app.innerHTML = ComparePage({
      left: params.get("left") || "",
      right: params.get("right") || ""
    });
  } else if (window.location.pathname === "/portfolio") {
    app.innerHTML = PortfolioPage({
      tickers: params.get("tickers") || ""
    });
  } else {
    app.innerHTML = HomePage();
  }

  bindNavigation();
  bindHeroActions();
  bindCopyLinks();
  bindSearch();
  bindBrowseFilters();
  bindCompareSelectors();
  bindPortfolioBuilder();
}

window.addEventListener("popstate", render);
render();
