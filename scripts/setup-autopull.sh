#!/usr/bin/env bash
# Sets up a macOS background job that auto-runs `git pull` every 5 minutes
# in this repo, so your local copy stays in sync with GitHub automatically.
#
# Usage (run once, from inside the repo):
#   bash scripts/setup-autopull.sh
#
# To turn off later:
#   launchctl unload ~/Library/LaunchAgents/com.ap-review.autopull.plist

set -e

if [[ "$OSTYPE" != "darwin"* ]]; then
  echo "This script is macOS-only. On Linux, use a cron job instead. On Windows, use Task Scheduler."
  exit 1
fi

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PLIST_PATH="$HOME/Library/LaunchAgents/com.ap-review.autopull.plist"
LOG_PATH="/tmp/ap-review-autopull.log"

echo "Setting up auto-pull for: $REPO_DIR"

mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST_PATH" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ap-review.autopull</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/git</string>
        <string>-C</string>
        <string>${REPO_DIR}</string>
        <string>pull</string>
        <string>--ff-only</string>
        <string>--quiet</string>
    </array>
    <key>StartInterval</key>
    <integer>300</integer>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardOutPath</key>
    <string>${LOG_PATH}</string>
    <key>StandardErrorPath</key>
    <string>${LOG_PATH}</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/usr/local/bin:/usr/bin:/bin</string>
    </dict>
</dict>
</plist>
EOF

# Reload if already loaded
launchctl unload "$PLIST_PATH" 2>/dev/null || true
launchctl load "$PLIST_PATH"

echo ""
echo "Done! Auto-pull is now running every 5 minutes."
echo "Log file: $LOG_PATH"
echo ""
echo "To check status:  launchctl list | grep ap-review"
echo "To turn off:      launchctl unload $PLIST_PATH"
