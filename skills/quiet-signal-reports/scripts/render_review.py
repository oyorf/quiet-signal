#!/usr/bin/env python3

"""Render every PDF page to PNG and assemble a compact contact sheet."""

from __future__ import annotations

import argparse
import math
import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Render all PDF pages to PNG and create contact-sheet.png."
    )
    parser.add_argument("--pdf", required=True, type=Path, help="Input PDF")
    parser.add_argument("--output-dir", required=True, type=Path, help="Directory for page PNGs and contact sheet")
    parser.add_argument("--columns", type=int, default=5, help="Contact-sheet column count (default: 5)")
    parser.add_argument("--dpi", type=int, default=120, help="PNG render resolution (default: 120)")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    pdf = args.pdf.expanduser().resolve()
    output_dir = args.output_dir.expanduser().resolve()

    if not pdf.is_file():
        raise SystemExit(f"Input PDF does not exist: {pdf}")
    if args.columns < 1:
        raise SystemExit("--columns must be at least 1")
    if args.dpi < 72:
        raise SystemExit("--dpi must be at least 72")

    pdftoppm = shutil.which("pdftoppm")
    if not pdftoppm:
        raise SystemExit("pdftoppm was not found; install Poppler and retry")

    output_dir.mkdir(parents=True, exist_ok=True)
    for stale in output_dir.glob("page-*.png"):
        stale.unlink()
    contact_path = output_dir / "contact-sheet.png"
    if contact_path.exists():
        contact_path.unlink()

    subprocess.run(
        [pdftoppm, "-png", "-r", str(args.dpi), str(pdf), str(output_dir / "page")],
        check=True,
    )

    rendered = sorted(output_dir.glob("page-*.png"))
    if not rendered:
        raise SystemExit("pdftoppm produced no page images")

    canonical: list[Path] = []
    for index, source in enumerate(rendered, start=1):
        target = output_dir / f"page-{index:02d}.png"
        if source != target:
            source.replace(target)
        canonical.append(target)

    thumb_width = 220
    gutter = 18
    label_height = 24
    first = Image.open(canonical[0])
    thumb_height = round(thumb_width * first.height / first.width)
    first.close()
    rows = math.ceil(len(canonical) / args.columns)
    sheet_width = gutter + args.columns * (thumb_width + gutter)
    sheet_height = gutter + rows * (thumb_height + label_height + gutter)
    sheet = Image.new("RGB", (sheet_width, sheet_height), "#EEEDEA")
    draw = ImageDraw.Draw(sheet)

    for index, page_path in enumerate(canonical, start=1):
        with Image.open(page_path) as page_image:
            page_rgb = page_image.convert("RGB")
            page_rgb.thumbnail((thumb_width, thumb_height), Image.Resampling.LANCZOS)
            column = (index - 1) % args.columns
            row = (index - 1) // args.columns
            x = gutter + column * (thumb_width + gutter)
            y = gutter + row * (thumb_height + label_height + gutter)
            sheet.paste(page_rgb, (x, y))
            draw.text((x, y + thumb_height + 5), f"{index:02d}", fill="#55545B")

    sheet.save(contact_path, optimize=True)
    print(f"Rendered {len(canonical)} pages: {output_dir}")
    print(f"Contact sheet: {contact_path}")


if __name__ == "__main__":
    main()
