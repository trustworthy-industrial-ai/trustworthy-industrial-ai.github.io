(function () {
  var input = document.getElementById("article-search-input");
  var results = document.getElementById("article-search-results");
  if (!input || !results) return;

  var index = null;

  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch("/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        index = data;
        return index;
      });
  }

  function render(matches, query) {
    results.innerHTML = "";
    if (!query) {
      results.hidden = true;
      return;
    }
    if (matches.length === 0) {
      var li = document.createElement("li");
      li.className = "article-search__empty";
      li.textContent = "No articles match “" + query + "”";
      results.appendChild(li);
    } else {
      matches.slice(0, 8).forEach(function (post) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = post.url;
        a.textContent = post.title;
        var span = document.createElement("span");
        span.className = "article-search__date";
        span.textContent = post.date;
        li.appendChild(a);
        li.appendChild(span);
        results.appendChild(li);
      });
    }
    results.hidden = false;
  }

  input.addEventListener("input", function () {
    var query = input.value.trim().toLowerCase();
    if (!query) {
      render([], "");
      return;
    }
    loadIndex().then(function (posts) {
      var matches = posts.filter(function (post) {
        return post.title.toLowerCase().indexOf(query) !== -1;
      });
      render(matches, input.value.trim());
    });
  });

  document.addEventListener("click", function (event) {
    if (!results.contains(event.target) && event.target !== input) {
      results.hidden = true;
    }
  });
})();

// Domain-pill tag filter: click a pill in the research-domains strip to
// show only articles carrying that tag. "All articles" (empty tag) resets.
(function () {
  var strip = document.getElementById("domains-strip");
  var list = document.getElementById("article-post-list");
  var emptyMsg = document.getElementById("no-articles-match");
  if (!strip || !list) return;

  var pills = strip.querySelectorAll(".domain-pill");
  var cards = list.querySelectorAll(".post-card");

  function applyFilter(tag) {
    var visibleCount = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split(" ").filter(Boolean);
      var show = !tag || tags.indexOf(tag) !== -1;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    if (emptyMsg) emptyMsg.hidden = visibleCount > 0;

    pills.forEach(function (pill) {
      var pillTag = pill.getAttribute("data-tag-filter") || "";
      pill.classList.toggle("domain-pill--filter-active", pillTag === tag);
    });
  }

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      applyFilter(pill.getAttribute("data-tag-filter") || "");
    });
  });
})();
