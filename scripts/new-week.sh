#!/bin/bash
# Usage: ./scripts/new-week.sh
# Creates a new weekly log file from the template

CONTENT_DIR="$(dirname "$0")/../content/weeks"
TEMPLATE="$CONTENT_DIR/_TEMPLATE.md"

# Get current week
YEAR=$(date +%Y)
WEEK=$(date +%V)
WEEK_NUM=$(echo $WEEK | sed 's/^0//')
FILENAME="$CONTENT_DIR/${YEAR}-W${WEEK}.md"

# Date range (Mon–Sun)
MON=$(date -v-$(date +%u)d +"%b %-d" 2>/dev/null || date -d "last Monday" +"%b %-d" 2>/dev/null || date +"%b %-d")
SUN=$(date -v+$((7-$(date +%u)))d +"%b %-d, %Y" 2>/dev/null || date +"%b %-d, %Y")

if [ -f "$FILENAME" ]; then
  echo "⚠️  File already exists: $FILENAME"
  echo "Opening it..."
else
  # Copy template and do basic substitutions
  sed \
    -e "s/2025-W23/${YEAR}-W${WEEK}/g" \
    -e "s/Jun 2 – Jun 8, 2025/${MON} – ${SUN}/g" \
    "$TEMPLATE" > "$FILENAME"
  echo "✅ Created: $FILENAME"
fi

# Open in default editor
${EDITOR:-nano} "$FILENAME"
