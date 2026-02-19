# 📊 Teja Daily Contribution Tracker

## Google Sheets Setup Instructions

### Step 1: Create New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create new sheet
3. Name it: **Teja Daily Contributions**

---

### Step 2: Set Up Column Headers

**Row 1 (Headers):**

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Date | Contributor | Task Name | Issue # | Branch Name | PR Link | Status | Notes |

---

### Step 3: Format the Sheet

**Column Widths:**
- A (Date): 100px
- B (Contributor): 150px
- C (Task Name): 250px
- D (Issue #): 80px
- E (Branch): 200px
- F (PR Link): 150px
- G (Status): 120px
- H (Notes): 300px

**Header Row Formatting:**
- Background: `#1A6ED8` (blue)
- Text: White, Bold
- Alignment: Center
- Font: Arial, 11pt

---

### Step 4: Add Data Validation

**Column G (Status) — Dropdown:**
1. Select column G (entire column)
2. Data → Data Validation
3. Criteria: List from a range
4. Values: 
   - 📋 Not Started
   - 🚧 In Progress
   - 👀 In Review
   - ✅ Completed
   - ❌ Blocked

**Column B (Contributor) — Dropdown:**
1. Select column B
2. Data → Data Validation
3. List of items:
   - Kundan Kumar
   - Chiranth H C
   - Akash Anand
   - Thanushree Mnayak
   - Vanshika V Patel

---

### Step 5: Conditional Formatting

**Status Column Colors:**

1. Select column G
2. Format → Conditional formatting
3. Add rules:

| If text contains | Background Color | Text Color |
|---|---|---|
| Completed | `#DCFCE7` (light green) | `#16A34A` (dark green) |
| In Progress | `#FEF3C7` (light yellow) | `#D97706` (orange) |
| In Review | `#D6E8FF` (light blue) | `#1A6ED8` (blue) |
| Blocked | `#FEE2E2` (light red) | `#DC2626` (red) |
| Not Started | `#F1F5F9` (light gray) | `#64748B` (gray) |

---

### Step 6: Add Sample Data

**Example Rows:**

| Date | Contributor | Task Name | Issue # | Branch Name | PR Link | Status | Notes |
|---|---|---|---|---|---|---|---|
| 19-Feb-2026 | Akash Anand | Build Navbar Component | #8 | feature/navbar | [PR #12](link) | ✅ Completed | Responsive done, merged to dev |
| 19-Feb-2026 | Chiranth H C | Hero Section UI | #9 | feature/hero | — | 🚧 In Progress | 70% complete, animations pending |
| 19-Feb-2026 | Thanushree Mnayak | About Page Layout | #10 | feature/about | — | 📋 Not Started | Starting tomorrow |
| 18-Feb-2026 | Vanshika V Patel | Contact Form | #11 | feature/contact | [PR #13](link) | 👀 In Review | Waiting for approval |
| 18-Feb-2026 | Akash Anand | Mobile Menu | #8 | feature/navbar | — | ❌ Blocked | Need design specs |

---

### Step 7: Add Summary Dashboard (Optional)

**Create a second sheet: "Dashboard"**

**A. Contribution Summary Table:**

| Contributor | Total Tasks | Completed | In Progress | Blocked |
|---|---|---|---|---|
| Kundan Kumar | 5 | 5 | 0 | 0 |
| Chiranth H C | 3 | 1 | 2 | 0 |
| Akash Anand | 4 | 2 | 1 | 1 |
| Thanushree Mnayak | 2 | 0 | 1 | 1 |
| Vanshika V Patel | 3 | 1 | 2 | 0 |

**Use COUNTIFS formulas:**
```
=COUNTIFS('Daily Contributions'!$B:$B, "Akash Anand", 'Daily Contributions'!$G:$G, "✅ Completed")
```

**B. Weekly Activity Chart:**

Create a bar chart showing:
- X-axis: Contributors
- Y-axis: Number of tasks completed
- Series: This week vs Last week

**C. Status Overview:**

Pie chart showing:
- Completed: 40%
- In Progress: 35%
- In Review: 15%
- Blocked: 5%
- Not Started: 5%

---

### Step 8: Share Sheet with Team

1. Click "Share" button (top right)
2. Add all contributor emails
3. Set permissions:
   - **Contributors:** Can edit
   - **Public:** Can view (if public repo)
4. Copy shareable link
5. Add link to `CONTRIBUTING.md`

---

### Step 9: Daily Update Rules

**Every contributor must:**

1. ✅ Add **one row per day** with their work
2. ✅ Update **before 6 PM** (or team EOD time)
3. ✅ Be honest about status
4. ✅ Add meaningful notes (what was done, what's next)
5. ✅ Link PR when created
6. ✅ Mark blockers immediately

**Admin checks daily:**
- Review new entries
- Check for blockers
- Update task assignments
- Track overall progress

---

### Step 10: Automation (Advanced)

**Option A: Google Apps Script**

Add this script to auto-sort by date:

```javascript
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  if (sheet.getName() === "Daily Contributions") {
    var range = sheet.getDataRange();
    range.sort([{column: 1, ascending: false}]); // Sort by date descending
  }
}
```

**Option B: Zapier Integration**

Connect to Slack:
- Trigger: New row in Google Sheets
- Action: Send message to Slack channel
- Message: "🎉 {Contributor} completed {Task Name}!"

---

## 📊 Alternative: GitHub Projects Tracking

If you prefer GitHub Projects over Google Sheets:

### Automation Rules:

1. **Auto-move cards:**
   - When PR created → Move to "In Review"
   - When PR merged → Move to "Done"

2. **Daily activity visibility:**
   - Check "Insights" tab
   - View contributor activity graphs
   - Track issue completion rate

3. **Export data:**
   - Projects → Menu → Export to CSV
   - Import to Google Sheets for analysis

---

## 📈 Tracking Metrics

**Key Performance Indicators:**

| Metric | Target | How to Measure |
|---|---|---|
| Daily commits | 5+ per person | GitHub Insights |
| PR turnaround | < 48 hours | Time from open to merge |
| Code review time | < 24 hours | Admin tracks |
| Task completion | 90%+ | Sheet COUNTIF formulas |
| Blockers resolved | < 24 hours | Track blocked status |

---

## 🎯 Weekly Review Template

**Every Friday, Admin posts:**

```markdown
# 📊 Weekly Team Update

## This Week's Achievements
- ✅ 12 PRs merged
- ✅ 8 features completed
- ✅ 3 bugs fixed

## Top Contributors
🏆 Akash Anand - 4 PRs merged
🥈 Chiranth H C - 3 PRs merged
🥉 Vanshika V Patel - 2 PRs merged

## Next Week's Focus
- [ ] Complete About page
- [ ] Implement contact form
- [ ] Mobile optimization sprint

## Blockers Resolved
- Fixed design specs delay
- Resolved merge conflicts

Great work team! 🚀
```

---

## 📞 Support

Questions about tracking?
- Open issue: `[Question] Tracking System`
- Tag admin: `@kundan-webdev`

---

**Remember:** Consistent daily updates = project success! 📈