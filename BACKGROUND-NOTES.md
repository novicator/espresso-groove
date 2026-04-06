# Background Image Procedures — Espresso Groove

Reference guide for working with the layered background system.

---

## How the Backgrounds Work

The site uses full-screen background panels stacked vertically with `bg-cover` and `h-screen`. Panels alternate between normal and `scaleY(-1)` (vertically flipped) to create a seamless mirror effect. The content sits on top in a separate z-layer.

**Current background images (in `public/images/`):**
- `background_v2.png` — Main hero/top background (purple swirl)
- `vibe_background.png` — Darker purple, used for "The Vibe" section and lower areas
- `new_background_v2.png` — Custom-built transition background (connects background_v2 to vibe_background)

**All backgrounds must be 1024 × 1536 (or very close).** Different dimensions cause misaligned seams because `bg-cover` scales them by different amounts.

---

## Common Issues & Fixes

### Visible line/seam between panels
**Cause:** Some images have a thin artifact (1-2px) at the bottom edge that creates a visible line when panels are stacked.

**Fix:** Crop the bottom 2px off the image:
```python
from PIL import Image
img = Image.open('public/images/vibe_background.png')
cropped = img.crop((0, 0, img.size[0], img.size[1] - 2))
cropped.save('public/images/vibe_background.png')
```
We had to do this for `vibe_background.png`. May need to repeat after any resize or regeneration.

### Backgrounds don't line up at edges
**Cause:** Images have different dimensions.

**Fix:** Resize the odd one out to match (1024 × 1536):
```python
from PIL import Image
img = Image.open('public/images/vibe_background.png')
resized = img.resize((1024, 1536), Image.LANCZOS)
resized.save('public/images/vibe_background.png')
```

---

## Building a Transition Background (Mirror-Fill Method)

Used to create `new_background_v2.png` — a background that bridges two different backgrounds seamlessly. The image has real content at the top edge (from one background) and bottom edge (from another), with black/empty space in the middle.

### The Technique: Iterative Mirror Fill

Instead of AI-generating the middle (which never preserves exact edge pixels), we fill the gap by repeatedly cropping and flipping strips:

**Step 1:** Identify the layout
```python
from PIL import Image
import numpy as np
img = Image.open('new_background_draft.png')
arr = np.array(img)
# Find where black starts (top content ends)
for y in range(arr.shape[0]):
    if arr[y].mean() < 10:
        print(f'Black starts at row: {y}')  # Was row 150
        break
# Find where black ends (bottom content starts)
for y in range(arr.shape[0]-1, -1, -1):
    if arr[y].mean() < 10:
        print(f'Black ends at row: {y}')  # Was row 935
        break
```

**Step 2:** Fill from the top — crop, flip, place below
```python
# Iteration 1: crop top 150px, flip, place at 150-299
top = img.crop((0, 0, 1024, 150))
img.paste(top.transpose(Image.FLIP_TOP_BOTTOM), (0, 150))

# Iteration 2: crop 150-299, flip, place at 300-449
strip = img.crop((0, 150, 1024, 300))
img.paste(strip.transpose(Image.FLIP_TOP_BOTTOM), (0, 300))

# Iteration 3: crop 300-449, flip, place at 450-599
strip = img.crop((0, 300, 1024, 450))
img.paste(strip.transpose(Image.FLIP_TOP_BOTTOM), (0, 450))
```

**Step 3:** Fill from the bottom — same idea but working upward
```python
# Iteration 1: crop top 100px of bottom edge (rows 936-1035), flip, place above
bottom = img.crop((0, 936, 1024, 1036))
img.paste(bottom.transpose(Image.FLIP_TOP_BOTTOM), (0, 836))

# Iteration 2: crop 836-935, flip, place at 736-835
strip = img.crop((0, 836, 1024, 936))
img.paste(strip.transpose(Image.FLIP_TOP_BOTTOM), (0, 736))

# Iteration 3: crop 736-835, flip, place at 636-735
strip = img.crop((0, 736, 1024, 836))
img.paste(strip.transpose(Image.FLIP_TOP_BOTTOM), (0, 636))
```

**Step 4:** Blend the seam where top-fill meets bottom-fill (15px crossfade)
```python
import numpy as np
arr = np.array(img).astype(float)
center = 618  # Where the two fills meet
half = 7      # 15px total blend zone

for y in range(center - half, center + half + 1):
    alpha = (y - (center - half)) / (2 * half)
    top_row = arr[y].copy()
    mirror_y = center + (center - y)
    if mirror_y < arr.shape[0]:
        bottom_row = arr[mirror_y].copy()
        arr[y] = top_row * (1 - alpha) + bottom_row * alpha

result = Image.fromarray(arr.astype(np.uint8))
result.save('new_background_v2.png')
```

### Why not AI generation?
We tried GPT-4o image generation with a detailed prompt. It generated a plausible background but **could not preserve the exact edge pixels** — meaning the seams with adjacent backgrounds were visible. The mirror-fill method guarantees pixel-perfect edges because it uses the actual source pixels.

---

## Viewing Backgrounds Without Content

To temporarily hide content and see just the backgrounds on localhost:

In `page.tsx`, find the content layer div and add `visibility: hidden`:
```jsx
<div className="relative z-10" style={{ visibility: 'hidden' }}>
```
Use `visibility: hidden` (NOT `display: none`) — hidden keeps the layout/height so backgrounds still stretch. Remove the style when done.

---

## Checklist Before Pushing Background Changes

1. All background images are **1024 × 1536**
2. No 2px bottom-edge artifact on `vibe_background.png` (crop if needed)
3. Test with content hidden to verify no seams
4. Test with content visible to verify readability
5. Check on mobile viewport — backgrounds use `bg-cover` so aspect ratio matters
