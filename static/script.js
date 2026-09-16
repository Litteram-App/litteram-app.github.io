(function () {
  var download = "https://github.com/Litteram-App/litteram-app.github.io/releases/latest/download/Litteram.zip";
  var features = [
    [
      "Formatting",
      [
        "Live formatting",
        "Markdown is rendered directly in the text - headings, bold, links, and markers vanish. No preview pane, no toggle.",
        "Cursor-aware reveal",
        "On the line you are editing the markers come back, so editing stays natural.",
        "Format popover & smart paste",
        "Select text and a small bubble offers quick actions. Paste a URL over a selection and it becomes a Markdown link.",
        "24 px grid",
        "Body lines, lists, checkboxes, quotes, code and table cells share the same grid.",
      ],
    ],
    [
      "Rich content",
      [
        "Tables & alerts",
        "Rendered tables with aligned columns and GitHub-style quote alerts as colored callouts.",
        "Interactive checklists",
        "Click checkbox items to toggle them, or use a shortcut. Lists auto-continue with nesting.",
        "Inline images",
        "Local and https images preview in the editor. Paste or drop an image beside your file.",
        "Code & color swatches",
        "Inline code capsules, fenced blocks with language labels, and live color swatches.",
      ],
    ],
    [
      "Workspace",
      [
        "Native documents & tabs",
        "Every file is a real macOS document with system tabs, autosave, and versions.",
        "Finder-style sidebar",
        "Collapsible Open, Favorites and Recents with actions for every file.",
        "Find & replace",
        "The native Find bar with next, previous, replace, and Go to Line.",
        "Light, Dark, System",
        "Semantic colors, readable-width columns, line numbers, and zoom.",
      ],
    ],
    [
      "Engine & export",
      [
        "Incremental & native",
        "An explicit TextKit stack reformats only the edited paragraph - never the whole document.",
        "Local-first, any encoding",
        "Opens .md, .markdown, .txt and preserves the encoding on save.",
        "Print & export PDF",
        "Print or export with real A4 pagination while keeping formatting intact.",
        "Built-in help",
        "A searchable Markdown cheat-sheet rendered by the live preview itself.",
      ],
    ],
  ];
  var page = document.body.dataset.page;
  if (page === "features") {
    document.querySelector("main").innerHTML =
      '<section class="section surface bordered"><div class="container"><div class="intro reveal"><p class="eyebrow">Features</p><h1>Writing, undisturbed.</h1><p>A Mac-native alternative to Sublime for anyone who works with .md files every day - light, fast, no workspaces, no vaults.</p></div><div id="feature-groups" class="feature-groups"></div></div></section>';
  } else if (page === "shortcuts") {
    document.querySelector("main").innerHTML =
      '<section class="section"><div class="container"><div class="intro narrow reveal"><p class="eyebrow">Shortcuts</p><h1>Hands on the keyboard.</h1><p>Every command has a shortcut. Learn a few and you\'ll never reach for the mouse.</p></div><div id="shortcut-groups" class="shortcut-grid"></div><div class="tips reveal"><p class="eyebrow">Tips</p><h2>Small things that add up.</h2><ul><li>Drag files from the Finder onto the sidebar to open them.</li><li>Paste or drop an image to save it next to your file in an <code>assets</code> folder.</li><li>Write an inline color like <code>#0969DA</code> and a live swatch appears.</li><li>Use GitHub-style alerts such as <code>&gt; [!NOTE]</code> and <code>[!WARNING]</code>.</li><li>Paste a URL over selected text and it turns into a Markdown link.</li></ul></div></div></section>';
  } else if (page === "privacy") {
    document.querySelector("main").innerHTML =
      '<section class="section surface bordered"><div class="container"><div class="intro narrow reveal"><p class="eyebrow">Privacy</p><h1>Your words are yours.</h1><p>Litteram is built like a tool, not a platform. No account, no cloud, no tracking - just Markdown files on your Mac.</p></div><div id="privacy-items" class="info-grid three"></div><div class="center download-note reveal"><a class="button" href="' +
      download +
      '" target="_blank">Download for macOS</a><p>Free and open source. No signup, no trial, no catch.</p></div></div></section>';
  } else if (page === "markdown") {
    document.querySelector("main").innerHTML =
      '<section class="section surface bordered"><div class="container"><div class="intro wide reveal"><p class="eyebrow">What is Markdown</p><h1>Plain text, beautifully powerful.</h1><p>Markdown is a lightweight markup language that lets you format text using simple punctuation. A <code>#</code> becomes a heading, asterisks become <em>italic</em> or <strong>bold</strong>, and dashes become lists. Because it is plain text, your files stay readable in any editor, on any device, forever.</p><p>Litteram is a <strong>Markdown editor for Mac</strong> designed around that simplicity. It reads and writes standard Markdown files, so your work is never locked inside an app.</p></div><div id="markdown-items" class="info-grid four"></div><div class="plain-card reveal"><h2>Why writers choose Markdown</h2><div class="two-columns"><p>Works in any text editor, now and in ten years.</p><p>Easy to read, write, and version control with git.</p><p>Converts to HTML, PDF, and other formats cleanly.</p><p>No proprietary formats or cloud lock-in.</p><p>Perfect for notes, documentation, articles, and books.</p><p>Lightweight syntax that stays out of your way.</p></div></div></div></section>';
  } else if (page === "install") {
    document.querySelector("main").innerHTML =
      '<section class="section surface bordered"><div class="container"><div class="intro narrow reveal"><p class="eyebrow">Install</p><h1>Get up and running.</h1><p>Litteram is a native Mac app distributed outside the App Store. The first launch requires a one-time approval in System Settings.</p></div><div class="notice reveal"><b>ⓘ</b><div><strong>Signed for local use</strong><p>Litteram is signed with an ad-hoc certificate. The first time you open it, macOS blocks it. This is expected - and safe to allow.</p></div></div><ol class="steps"><li class="reveal"><b>1</b><div><h3>Download &amp; move to Applications</h3><p>Open the downloaded zip and drag Litteram into your Applications folder.</p></div></li><li class="reveal"><b>2</b><div><h3>First launch is blocked - that\'s normal</h3><p>Double-click Litteram. macOS says it was blocked to protect your Mac. Click Done.</p></div></li><li class="reveal"><b>3</b><div><h3>Allow it in System Settings</h3><p>Open System Settings, Privacy &amp; Security, then click Open Anyway.</p></div></li><li class="reveal"><b>4</b><div><h3>Confirm and start writing</h3><p>Click Open Anyway and enter your password. From then on, Litteram opens normally.</p></div></li></ol><div class="install-image reveal"><img src="images/open-anyway.png" alt="System Settings Privacy and Security showing Open Anyway" /><p>System Settings - Privacy &amp; Security - click Open Anyway</p></div><div class="install-cta reveal"><div><h2>Ready to try it?</h2><p>Download the latest build from GitHub Releases.</p></div><a class="button" href="' +
      download +
      '" target="_blank">Download</a></div></div></section>';
  } else if (page === "faq") {
    document.querySelector("main").innerHTML = '<section class="section"><div class="container narrow"><div class="intro center reveal"><p class="eyebrow">FAQ</p><h1>Common questions.</h1></div><div id="faq-list" class="faq-list"></div></div></section>';
  }
  var icons = ["◉", "▱", "↗", "⌗", "▦", "☑", "▧", "◌", "▥", "⌘", "⌕", "◐", "ϟ", "▣", "▤", "?"];
  var featureRoot = document.getElementById("feature-groups"),
    iconIndex = 0;
  features.forEach(function (group) {
    if (!featureRoot) return;
    var section = document.createElement("div");
    section.className = "feature-group reveal";
    section.innerHTML =
      "<h3>" +
      group[0] +
      '</h3><div class="card-grid">' +
      group[1].reduce(function (html, item, index) {
        if (index % 2 === 0) html += '<article class="feature-card"><span class="icon">' + icons[iconIndex++] + "</span><h4>" + item + "</h4><p>" + group[1][index + 1] + "</p></article>";
        return html;
      }, "") +
      "</div>";
    featureRoot.appendChild(section);
  });
  var shortcuts = [
    ["Formatting", ["Bold", "⌘B", "Italic", "⌘I", "Inline code", "⌘E", "Link", "⌘K", "Toggle checkbox", "⌘L"]],
    ["Lines & lists", ["Move line up / down", "⌥↑ / ⌥↓", "Duplicate line", "⌘D", "Indent / outdent list", "Tab / ⇧Tab"]],
    ["Files & documents", ["New", "⌘N", "Open", "⌘O", "Save", "⌘S", "Save As", "⇧⌘S", "Close", "⌘W", "New tab", "⌘T", "Print", "⌘P"]],
    ["View", ["Toggle sidebar", "⌃⌘S", "Readable width", "⇧⌘L", "Line numbers", "⌃⌘L", "Go to line", "⌥⌘L", "Zoom in / out / reset", "⌘+ / ⌘− / ⌘0"]],
    ["Find", ["Find", "⌘F", "Find and Replace", "⌥⌘F", "Find next / previous", "⌘G / ⇧⌘G"]],
    ["Tabs & help", ["Next / previous tab", "⌃Tab / ⌃⇧Tab", "Litteram Help", "⌘?"]],
  ];
  shortcuts.forEach(function (group) {
    var el = document.createElement("div");
    el.className = "shortcut-group reveal";
    el.innerHTML =
      "<h3>" +
      group[0] +
      "</h3>" +
      group[1].reduce(function (html, item, i) {
        return i % 2 === 0 ? html + "<p><span>" + item + "</span><kbd>" + group[1][i + 1] + "</kbd></p>" : html;
      }, "");
    var shortcutRoot = document.getElementById("shortcut-groups");
    if (shortcutRoot) shortcutRoot.appendChild(el);
  });
  var privacy = [
    ["▣", "Everything stays on your Mac", "Your documents live exactly where you put them. No uploads, no cloud, no remote servers."],
    ["◌", "No tracking or analytics", "We don't collect usage data, crash reports, or telemetry. What you write stays private."],
    ["◈", "No account required", "Download, unzip, and write. There's no login, subscription, or gatekeeping."],
    ["⌑", "Open source by design", "Released under GPLv3, the full source is available to inspect, audit, and improve."],
    ["▤", "Plain Markdown forever", "Your work is stored in standard .md files you can open with any text editor."],
    ["◇", "You control the sync", "Use iCloud, Dropbox, or git whenever you want. Litteram never touches the network."],
  ];
  var markdown = [
    ["▤", "Markdown for Mac", "Open .md files from Finder, edit them with live formatting, and save back to plain text."],
    ["▥", "Markdown reader", "Read notes, documentation, and articles without distraction."],
    ["▣", "Markdown viewer", "The document itself is the viewer. The line you're editing temporarily shows its source."],
    ["▤", "Markdown to PDF", "Export your document to a paginated PDF with one shortcut."],
  ];
  function fillInfo(id, data) {
    var root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = data
      .map(function (item) {
        return '<article class="info-item reveal"><span class="round-icon">' + item[0] + "</span><h3>" + item[1] + "</h3><p>" + item[2] + "</p></article>";
      })
      .join("");
  }
  fillInfo("privacy-items", privacy);
  fillInfo("markdown-items", markdown);
  var faqs = [
    ["Is Litteram free?", "Yes. Litteram is free and open source, released under the GNU General Public License v3.0. Use it, study it, modify it, redistribute it - no accounts, no subscriptions."],
    ["Which platforms does it run on?", "Litteram is a native macOS app. It requires macOS 13 (Ventura) or later."],
    ["How do I install it?", "Download the latest zip from GitHub Releases, unzip it, and move Litteram.app to /Applications. macOS may block the first launch; use System Settings, Privacy & Security, Open Anyway."],
    ["How is this different from a split-pane editor?", "Litteram renders the preview inline, in place, so you only ever look at one surface. The line you're editing temporarily shows its source."],
    ["What Markdown flavor does it use?", "CommonMark with common GitHub-Flavored Markdown extensions, plus GitHub-style quote alerts and inline color swatches."],
    ["Where are my files stored?", "On your disk, wherever you choose. Every file is a native macOS document. Sync with iCloud, Dropbox or git - your call."],
    ["What about performance?", "Litteram reformats incrementally: only the edited paragraph on each keystroke and only two lines on cursor moves. Zero external dependencies."],
  ];
  var faqRoot = document.getElementById("faq-list");
  if (faqRoot) {
    faqRoot.innerHTML = faqs
      .map(function (item) {
        return '<details class="reveal"><summary>' + item[0] + "</summary><p>" + item[1] + "</p></details>";
      })
      .join("");
  }
  var theme = localStorage.getItem("litteram-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.querySelectorAll("[data-theme]").forEach(function (btn) {
    btn.setAttribute("aria-pressed", String(btn.dataset.theme === theme));
    btn.addEventListener("click", function () {
      theme = btn.dataset.theme;
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("litteram-theme", theme);
      document.querySelectorAll("[data-theme]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.theme === theme));
      });
    });
  });
  var menu = document.querySelector(".menu-button"),
    nav = document.querySelector(".mobile-nav");
  menu.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "Close" : "Menu";
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      menu.textContent = "Menu";
      menu.setAttribute("aria-expanded", "false");
    });
  });
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -56px" },
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
    observer.observe(el);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
