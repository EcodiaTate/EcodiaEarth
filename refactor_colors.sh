#!/bin/bash

# ===============================================
# ECODIA COLOR REFACTORING SCRIPT (Hex Code Integration)
# Converts off-brand hex codes to brand tokens/classes.
# ===============================================

# --- CONFIGURATION ---
FILE_EXTENSIONS="*.tsx"
# Brand Hex codes for non-utility replacements (style blocks, SVGs, etc.)
BRAND_INK="#0F1712"
BRAND_FOREST="#396041"
BRAND_DARK_FOREST="#2D4A33"
BRAND_MINT="#7FD069"
BRAND_GOLD="#F4D35E"
BRAND_BORDER="#E7ECE9"
BRAND_MUTED="#3B3F3C"
BRAND_DANGER="#FF4D35"

echo "--- STARTING BRAND COLOR REFACTOR (V7) ---"

# Detect sed -i style (GNU vs BSD/macOS)
SED_INPLACE=(-i)
if sed --version >/dev/null 2>&1; then
  : # GNU sed: ok
else
  # BSD/macOS sed needs a zero-length backup suffix
  SED_INPLACE=(-i '')
fi
run_replace() {
  local FIND_PATTERN=$1
  local REPLACE_PATTERN=$2
  local DESCRIPTION=$3

  echo "  > $DESCRIPTION"

  # macOS/GNU portability for -i
  if sed --version >/dev/null 2>&1; then
    SED_INPLACE=(-i)
  else
    SED_INPLACE=(-i '')
  fi

  find . -type f -name "$FILE_EXTENSIONS" -print0 | while IFS= read -r -d '' FILE; do
    # Use @ as delimiter to avoid clashes with # in hex codes and / in classes
    sed "${SED_INPLACE[@]}" -E "s@${FIND_PATTERN}@${REPLACE_PATTERN}@g" "$FILE"
  done
}


echo "--- I. HEX TO BRAND TOKEN REPLACEMENTS ---"

run_replace '(text|bg|border|fill)?:?-\[#1c1917\]' '\1-ink' "Replace Dark Text/BG [#1c1917] with ink"
run_replace '(text|bg)?:?-\[#0c0a09\]' '\1-ink' "Replace Dark BG [#0c0a09] with ink"
run_replace '(text|bg)?:?-\[#050505\]' '\1-ink' "Replace Dark BG [#050505] with ink"
run_replace 'to-\[#020617\]' 'to-ink' "Replace Dark Blue Gradient End [#020617] with ink"
run_replace '(text|bg)?:?-\[#451a03\]' '\1-ink' "Replace Dark Brown [#451a03] with ink"
run_replace '(bg)?:?-\[#0a0a0a\]' '\1-ink' "Replace Very Dark Gray [#0a0a0a] with ink"

run_replace '(text|fill)?:?-\[#064e3b\]' '\1-forest' "Replace Dark Green [#064e3b] with forest"
run_replace 'from-\[#022c22\]' 'from-darkForest' "Replace Dark Gradient Start [#022c22] with darkForest"

run_replace '(text|bg|border|selection)?:?-\[#f59e0b\]' '\1-gold' "Replace Orange Accent [#f59e0b] with gold"
run_replace '(text|bg|border)?:?-\[#ea580c\]' '\1-gold' "Replace Bright Orange [#ea580c] with gold"
run_replace '(text|bg|border)?:?-\[#d97706\]' '\1-gold' "Replace Dark Yellow [#d97706] with gold"
run_replace '\[#fbff24\]' "$BRAND_GOLD" "Replace Animation Color [#fbff24] with GOLD hex"
run_replace '(bg)?:?-\[#fcd34d\]' '\1-gold' "Replace Amber BG [#fcd34d] with gold"

run_replace '\[#6366f1\]' '#7f69d0' "Replace Animation Color [#6366f1] with GEM hex"

run_replace 'text-\[#78716c\]' 'text-muted' "Replace Mid-Gray text [#78716c] with muted"
run_replace 'text-\[#44403c\]' 'text-muted' "Replace Dark Gray text [#44403c] with muted"
run_replace 'fill="#065f46"' "fill=\"$BRAND_FOREST\"" "Standardize Mid-Green SVG fill to FOREST hex"
run_replace 'border-\[#a8a29e\]' 'border-border' "Replace Light Gray Border [#a8a29e] with border"
run_replace '(bg|from|to)?:?-\[#fafaf9\]' '\1-white' "Replace Off-White BG [#fafaf9] with white"
run_replace '(bg)?:?-\[#e7e5e4\]' '\1-border' "Replace Off-White BG [#e7e5e4] with border"
run_replace '(bg)?:?-\[#f5f5f4\]' '\1-border' "Replace Light Gray BG [#f5f5f4] with border"

run_replace '(text|border|bg)?:?-\[#ef4444\]' '\1-\[#ff4d35\]' "Standardize off-brand red [#ef4444] to approved danger [#ff4d35]"
run_replace 'bg-\[#ef4444\]\/10' 'bg-ink\/10' "Specific Red opacity fix to Ink opacity"
run_replace '\[#111\]' '#111111' "Explicitly define #111 as #111111"
run_replace '\[#222\]' '#222222' "Explicitly define #222 as #222222"
run_replace '\[#333\]' '#333333' "Explicitly define #333 as #333333"
run_replace '\[#666\]' '#666666' "Explicitly define #666 as #666666"

echo "--- II. GENERIC TAILWIND CLASS REPLACEMENTS ---"

run_replace '(text|bg|shadow)?:?-(stone|indigo|green|teal|blue|cyan|purple|red)-(900|950)' '\1-ink' "Map dark generics (900/950) to 'ink'"
run_replace '(text|bg|border|group-hover|selection)?:?-(cyan|blue|green|lime|teal|purple|fuchsia|violet)-(100|200|300|400|500|600|700)' '\1-mint' "Map light blue/green shades (100-700) to 'mint'"
run_replace '(text|bg|border|shadow|group-hover|selection)?:?-amber-(100|200|300|400|500|600|700|800|900)' '\1-gold' "Map amber shades to 'gold'"
run_replace '(text|bg|border|from|to)?:?-(stone|gray)-(300|400|500|600|700|800|900)' '\1-muted' "Map dark stone/gray shades (300-900) to 'muted'"
run_replace '(text|bg|border|from|to)?:?-(stone|gray)-(50|100|200)' '\1-border' "Map lightest stone/gray shades (50/100/200) to 'border'"

# --- JS object key refactors (use DOUBLE-QUOTED args to avoid quote breakage) ---
run_replace "amber: (['\"])([^\"']*)(['\"])" "gold: \1\2\3" "Refactor JS object keys: amber -> gold"
run_replace "indigo: (['\"])([^\"']*)(['\"])" "ink: \1\2\3" "Refactor JS object keys: indigo -> ink"
run_replace "stone: (['\"])([^\"']*)(['\"])" "border: \1\2\3" "Refactor JS object keys: stone -> border"
run_replace "blue: (['\"])([^\"']*)(['\"])" "mint: \1\2\3" "Refactor JS object keys: blue -> mint"
run_replace "purple: (['\"])([^\"']*)(['\"])" "ink: \1\2\3" "Refactor JS object keys: purple -> ink"

echo "--- Refactoring Complete ---"
echo "Please review all changes before committing, especially for SVG attributes (fill/stroke) and inline style blocks."
