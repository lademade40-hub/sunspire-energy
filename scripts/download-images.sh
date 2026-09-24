#!/bin/bash
# Download Solari demo images for the new website
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
BASE="https://solari.themewant.com/wp-content/uploads"
DEST="/home/z/my-project/public/images"
mkdir -p "$DEST"

declare -A IMGS=(
  # hero slider images
  ["hero-1.png"]="2023/08/01-5.png"
  ["hero-2.png"]="2023/08/01-6.png"
  ["hero-3.png"]="2023/08/02-3.png"
  ["hero-4.png"]="2023/08/02-4.png"
  ["hero-5.png"]="2023/08/03-1.png"
  ["hero-6.png"]="2023/08/03-2.png"
  ["hero-7.png"]="2023/08/04-1.png"
  ["hero-8.png"]="2023/08/04-2.png"
  ["hero-9.png"]="2023/08/05-2.png"
  ["hero-10.png"]="2023/08/07-1.png"
  ["hero-11.png"]="2023/08/08.png"
  ["hero-12.png"]="2023/08/09.png"
  ["hero-13.png"]="2023/08/10.png"
  ["rect-254.png"]="2023/08/Rectangle-254-1.png"
  # feature icons
  ["icon-1.png"]="2023/07/19-1.png"
  ["icon-2.png"]="2023/07/20-2.png"
  ["icon-3.png"]="2023/07/26-1.png"
  ["icon-4.png"]="2023/07/27-1.png"
  ["icon-5.png"]="2023/07/28-1.png"
  ["icon-6.png"]="2023/07/29.png"
  # about / misc
  ["technician.jpg"]="2023/04/technician-is-repairing-solar-panel.jpg"
  ["misc-2-2.png"]="2023/04/02-2.png"
  ["m1.png"]="2023/05/01.png"
  ["m2.png"]="2023/05/02.png"
  ["m3.png"]="2023/05/03.png"
  ["m4-2.jpg"]="2023/05/04-2.jpg"
  # projects
  ["project-solar-worker.jpg"]="2023/05/man-worker-firld-by-solar-panels.jpg"
  ["project-hydro.jpg"]="2023/05/hydrow-power2.jpg"
  ["project-energy.jpg"]="2023/05/energy.jpg"
  ["project-engineer.jpg"]="2023/05/medium-shot-engineer-wearing-protection-equipment.jpg"
  # blog
  ["blog-1.jpg"]="2023/05/blog-1.jpg"
  ["blog-2.jpg"]="2023/05/blog-2.jpg"
  ["blog-3.jpg"]="2023/05/blog-3.jpg"
  ["blog-4.jpg"]="2023/05/blog-4.jpg"
  ["blog-5.jpg"]="2023/05/blog-5.jpg"
  ["blog-7.jpg"]="2023/05/blog-7.jpg"
  # logo reference
  ["demo-logo.png"]="2023/07/logo-01.png"
)

for name in "${!IMGS[@]}"; do
  url="$BASE/${IMGS[$name]}"
  curl -sL "$url" -H "User-Agent: $UA" --max-time 30 -o "$DEST/$name" &
done
wait
echo "=== Downloaded files ==="
ls -la "$DEST" | awk '{print $5, $9}'
