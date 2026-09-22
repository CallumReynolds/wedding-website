# American Uncial web font

`American-Uncial-Normal-Regular.ttf` is the original supplied font, unchanged.
The site loads `American-Uncial-Normal-Regular.woff2`, a browser-compatible copy
with rebuilt table headers and zeroed character-map language IDs. Browsers reject
the original's overlapping tables and malformed kerning metadata.

The conversion preserves glyphs, character mappings, advance widths, and kerning.
To regenerate the web copy with FontTools and Brotli installed, run from the
repository root:

```python
from fontTools.ttLib import TTFont

font = TTFont("fonts/American-Uncial-Normal-Regular.ttf")
font.ensureDecompiled()
for table in font["cmap"].tables:
    table.language = 0
font.flavor = "woff2"
font.save("fonts/American-Uncial-Normal-Regular.woff2")
```
