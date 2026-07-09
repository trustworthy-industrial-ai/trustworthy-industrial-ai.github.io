# Essay images

To add a supporting graphic to an essay card:

1. Create a folder here named after the essay's slug (the filename after the date in `_posts/`):
   `assets/essays/<slug>/cover.jpg` (or `.png`)
2. Add `image: /assets/essays/<slug>/cover.jpg` to that essay's front matter in `_posts/`.
3. Rebuild — the homepage card and post page will pick it up automatically. No image = plain text card, no error.

Example:

```
_posts/2026-07-09-ai-predicts-agents-act-who-decides.md
assets/essays/ai-predicts-agents-act-who-decides/cover.jpg
```

```yaml
---
title: "AI predicts. Agents act. But who decides?"
image: /assets/essays/ai-predicts-agents-act-who-decides/cover.jpg
---
```
