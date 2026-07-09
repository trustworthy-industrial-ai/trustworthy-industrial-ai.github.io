(function () {
  var input = document.getElementById("essay-search-input");
  var results = document.getElementById("essay-search-results");
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
      li.className = "essay-search__empty";
      li.textContent = "No essays match “" + query + "”";
      results.appendChild(li);
    } else {
      matches.slice(0, 8).forEach(function (post) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = post.url;
        a.textContent = post.title;
        var span = document.createElement("span");
        span.className = "essay-search__date";
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
