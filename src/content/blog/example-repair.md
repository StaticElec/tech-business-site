---
# ---------------------------------------------------------------------------
# EXAMPLE / TEMPLATE ARTICLE — this is not a real repair.
# It is a draft, so it is never published. Copy this file to start a new
# write-up (see src/content/blog/_README.md), then delete or keep this one.
# ---------------------------------------------------------------------------
title: "Example: Laptop that wouldn't boot after a Windows update"
description: "Template article showing the structure for a repair write-up: problem, diagnosis, repair, parts and outcome."
publishedDate: 2026-01-15
# updatedDate: 2026-01-20          # optional — remove the "#" to use it
coverImage: "/src/assets/images/blog/example-repair/cover.jpg"
coverImageAlt: "Describe the cover photo here"
tags: ["laptop", "windows", "example"]
draft: true
---

This first paragraph is a short summary of the job: what the computer was, what the customer noticed, and how it turned out. Keep it to two or three sentences.

## The problem

What the customer reported, in plain words. For example: the laptop showed a spinning circle for several minutes after an update, then restarted into an automatic repair screen.

- Make and model: _e.g. 15" laptop, model number here_
- Symptoms: _what happened, and when it started_
- Anything already tried: _e.g. restarting, unplugging accessories_

## Before photos

Photos go in `src/assets/images/blog/<this-file-name>/`. Insert one like this
(the path is relative to this Markdown file):

<!--
![Laptop showing the automatic repair screen](../../assets/images/blog/example-repair/before.jpg)
-->

*(The image lines in this example are hidden inside HTML comments because the photos don't exist yet. In a real article, write the image line on its own without the comment markers.)*

## Diagnosis

How you narrowed down the cause. Short steps are easier to read than long paragraphs:

1. Checked the drive health.
2. Booted from a USB recovery drive to look at the disk.
3. Found the boot files were damaged.

If you ran commands, put them in a code block:

```powershell
chkdsk C: /f
sfc /scannow
```

## The repair

What you actually did, step by step, and why.

### Parts replaced

| Part | Notes |
| ---- | ----- |
| _e.g. SSD_ | _capacity / model_ |

Leave this section out if no parts were needed.

## After photos

The finished repair, ideally from the same angle as the before photos.

<!--
![Laptop booted normally to the Windows desktop](../../assets/images/blog/example-repair/after.jpg)
-->

## Outcome

How it ended: what works now, and any advice you gave the customer (for example, setting up a backup).
