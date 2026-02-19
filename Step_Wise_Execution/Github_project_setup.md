# 🎯 GitHub Projects Setup Guide

Complete step-by-step guide to set up professional project tracking for Teja Solvimate.

---

## 📋 Part 1: Initial Setup

### Step 1: Create Project Board

1. Go to your repository on GitHub
2. Click **Projects** tab
3. Click **New project**
4. Choose **Board** template
5. Name: `Teja Development Board`
6. Description: `Task tracking for Teja Solvimate contributors`
7. Click **Create project**

---

### Step 2: Configure Board Columns

**Delete default columns, then create these:**

| Column | Purpose | Automation |
|---|---|---|
| 📋 **Backlog** | Future tasks, not yet assigned | Manual |
| 🧠 **Todo** | Ready to work, assigned | Manual |
| 🚧 **In Progress** | Currently being worked on | Auto (when PR opened) |
| 👀 **In Review** | PR submitted, awaiting review | Auto (when PR created) |
| ✅ **Done** | Completed & merged | Auto (when PR merged) |

**To add columns:**
1. Click **+ Add column**
2. Name the column
3. Set automation (see Step 3)

---

### Step 3: Set Up Automation Rules

#### For "In Review" Column:

1. Click **⋯** on column
2. Select **Manage automation**
3. Add rule:
   - **When:** Pull request opened
   - **Then:** Move card to this column
4. Save

#### For "Done" Column:

1. Click **⋯** on column
2. Select **Manage automation**
3. Add rules:
   - **When:** Pull request merged
   - **Then:** Move card to this column
   
   - **When:** Issue closed
   - **Then:** Move card to this column
4. Save

---

## 🎫 Part 2: Creating Issues (Tasks)

### Step 1: Break Down Project into Tasks

**Example Issue List:**

```
📱 Components
#1 Create Button Component
#2 Create Card Component  
#3 Create Input Component
#4 Create Badge Component
#5 Create Modal Component

🧱 Layout
#6 Build Navbar with Mobile Menu
#7 Build Footer with Social Links
#8 Create Layout Component

📄 Pages
#9 Home Page - Hero Section
#10 Home Page - Features Section
#11 Home Page - Stats Section
#12 About Page Layout
#13 Services Page with Cards
#14 Contact Page with Form

🎨 Styling
#15 Responsive Design - Mobile
#16 Responsive Design - Tablet
#17 Add Animations and Transitions
#18 Dark Mode Support (Optional)

🔧 Functionality
#19 Contact Form Validation
#20 Form Submit Logic
#21 Navigation Routing Setup
#22 404 Page

📚 Documentation
#23 Update README
#24 Add Component Documentation
#25 Create Deployment Guide
```

---

### Step 2: Create Each Issue

**Template for creating issue:**

1. Click **Issues** → **New issue**
2. Fill in:

**Title:**
```
Build Navbar with Mobile Menu
```

**Description:**
```markdown
## 📋 Task Description
Create a responsive navbar component with mobile hamburger menu.

## ✅ Acceptance Criteria
- [ ] Desktop navigation with links
- [ ] Logo on left side
- [ ] Mobile hamburger menu
- [ ] Smooth open/close animation
- [ ] Responsive at 375px, 768px, 1280px
- [ ] Active link highlighting
- [ ] Sticky navbar on scroll

## 🎨 Design Reference
[Add Figma link or screenshot]

## 📁 File Location
`src/components/layout/Navbar.jsx`

## 🔗 Dependencies
- Depends on: None
- Blocks: None

## 📚 Resources
- [React Router Docs](link)
- [Tailwind Navbar Examples](link)

## ⏱️ Estimated Time
8 hours

## 🏷️ Labels
`component`, `layout`, `high-priority`
```

3. **Assign to:** Select contributor
4. **Labels:** Add relevant labels
5. **Projects:** Add to `Teja Development Board`
6. **Milestone:** (Optional) Sprint 1, Sprint 2, etc.
7. Click **Submit new issue**

---

### Step 3: Organize Issues

**On Project Board:**

1. Drag issues to appropriate columns:
   - **Backlog:** Future work
   - **Todo:** Ready to start (this week)
   - **In Progress:** Currently working
   
2. Prioritize within columns (drag up/down)

3. Add issue numbers to column names for visibility:
   - 📋 Backlog (15)
   - 🧠 Todo (5)
   - 🚧 In Progress (3)
   - 👀 In Review (2)
   - ✅ Done (8)

---

## 👥 Part 3: Contributor Assignment

### Assign Strategy

**Initial Assignment:**

| Contributor | Component Focus | Issues |
|---|---|---|
| Chiranth H C | UI/Styling | #9, #10, #11, #15 |
| Akash Anand | Components | #1, #2, #3, #6 |
| Thanushree Mnayak | Pages | #12, #13, #14 |
| Vanshika V Patel | Forms/Logic | #19, #20, #21 |
| Admin (You) | Architecture | #23, #24, #25 |

**Assignment Rules:**

1. ✅ **One task at a time** per contributor
2. ✅ Assign **Todo** items only
3. ✅ Don't assign from **Backlog** until ready
4. ✅ Re-assign if someone is blocked

---

## 🔗 Part 4: Linking PRs to Issues

### For Contributors:

**In PR description, write:**

```markdown
## 🎯 What does this PR do?
Implements the responsive navbar component

## 🔗 Related Issue
Fixes #6
Closes #6
Resolves #6

## Screenshots
[Add images]
```

**Keywords that auto-close issues:**
- `Fixes #6`
- `Closes #6`
- `Resolves #6`
- `Completes #6`

**Multiple issues:**
```markdown
Fixes #6
Fixes #7
```

---

## 📊 Part 5: Tracking & Reporting

### View 1: Board View (Default)

Shows cards in columns — best for daily work.

**Usage:**
- Daily standup
- Quick status check
- Move cards manually

---

### View 2: Table View

1. Click **⋮** (top right)
2. Select **New view** → **Table**
3. Add columns:
   - Status
   - Assignee
   - Labels
   - Due date
   - Priority

**Usage:**
- Detailed task list
- Sort/filter tasks
- Export to CSV

---

### View 3: Insights

1. Click **Insights** tab
2. View charts:
   - Burndown chart
   - Velocity chart
   - Cycle time
   - Contributor activity

**Usage:**
- Weekly reviews
- Performance tracking
- Bottleneck identification

---

## 🏷️ Part 6: Labels System

### Create Labels

Go to **Issues** → **Labels** → **New label**

**Recommended Labels:**

| Label | Color | Usage |
|---|---|---|
| `component` | `#1A6ED8` | UI component work |
| `page` | `#0EA5C9` | Full page development |
| `bug` | `#DC2626` | Bug fixes |
| `enhancement` | `#16A34A` | Feature improvements |
| `documentation` | `#64748B` | Docs updates |
| `high-priority` | `#EF4444` | Must do this sprint |
| `low-priority` | `#94A3B8` | Can wait |
| `blocked` | `#F59E0B` | Cannot proceed |
| `help-wanted` | `#A855F7` | Need assistance |
| `good-first-issue` | `#10B981` | Easy for beginners |

---

## 🔔 Part 7: Notifications Setup

### For Admin:

1. Go to **Settings** → **Notifications**
2. Enable:
   - ✅ Pull request opened
   - ✅ Pull request review requested
   - ✅ Issue assigned
   - ✅ Mentioned in issue/PR

### For Contributors:

**Enable:**
- ✅ Assigned to you
- ✅ Mentioned
- ✅ Participating in conversation
- ✅ PR review requested

**Disable:**
- ❌ Watching (too noisy)

---

## 📅 Part 8: Milestone Setup (Optional)

### Create Milestones:

1. Go to **Issues** → **Milestones**
2. Click **New milestone**

**Example Milestones:**

**Sprint 1 — Foundation (Week 1-2)**
- Due: March 1, 2026
- Issues: #1-10
- Goal: Basic components + layout

**Sprint 2 — Pages (Week 3-4)**
- Due: March 15, 2026
- Issues: #11-20
- Goal: All main pages

**Sprint 3 — Polish (Week 5)**
- Due: March 22, 2026
- Issues: #21-25
- Goal: Responsive + animations

**V1.0 Release**
- Due: March 25, 2026
- All issues
- Goal: Production ready

---

## 🎯 Part 9: Daily Workflow

### Morning (Start of Day):

**Contributors:**
1. Check **Todo** column
2. Pick an unassigned issue OR continue current work
3. Move issue to **In Progress**
4. Comment on issue: "Starting work on this today"

**Admin:**
1. Review **In Progress** column
2. Check for stuck items (> 3 days)
3. Respond to questions

---

### During Work:

**Contributors:**
1. Push commits regularly
2. Update issue with progress comments:
   ```
   Update: Desktop layout complete, working on mobile menu
   ```

**Admin:**
1. Monitor activity
2. Answer questions quickly
3. Prepare for PR reviews

---

### Evening (End of Day):

**Contributors:**
1. Push final code
2. Create PR when feature complete
3. PR auto-moves card to **In Review**
4. Comment daily status on issue

**Admin:**
1. Review new PRs
2. Test and provide feedback
3. Merge approved PRs → auto-moves to **Done**
4. Update board if needed

---

## 📈 Part 10: Metrics & KPIs

### Track These Weekly:

| Metric | Target | How to Check |
|---|---|---|
| **Velocity** | 10 issues/week | Insights → Burndown |
| **Cycle Time** | < 3 days/issue | Issue open → closed time |
| **PR Review Time** | < 24 hours | PR open → merge time |
| **Active Issues** | 3-5 per person | In Progress column count |
| **Blocked Items** | 0 | Blocked label count |
| **Completion Rate** | 90%+ | Done / Total issues |

---

## 🚨 Part 11: Handling Problems

### Issue: Contributor Stuck

**Action:**
1. They comment on issue: "Blocked: need help with X"
2. Add `blocked` label
3. Move to **Todo** column temporarily
4. Admin or teammate provides help
5. Remove `blocked` label when resolved

---

### Issue: Merge Conflicts

**Action:**
1. Contributor comments on PR
2. Admin provides guidance
3. Don't merge until resolved
4. Card stays in **In Review**

---

### Issue: Too Many Items In Progress

**Action:**
1. Admin reviews **In Progress** column
2. If > 8 items, team is overcommitted
3. Move some back to **Todo**
4. Focus on finishing vs starting

---

## 🎓 Part 12: Best Practices

### ✅ DO:

- Keep issues small (1-2 days work)
- Update status daily via comments
- Link PRs to issues
- Close completed issues promptly
- Review board in daily standup
- Celebrate when columns move right →

### ❌ DON'T:

- Create giant "mega issues"
- Leave stale issues open
- Skip linking PRs
- Hoard tasks in progress
- Ignore blocked items
- Forget to assign issues

---

## 🔧 Part 13: Advanced Features

### Custom Fields (Pro Feature)

Add custom fields to issues:
- Priority (1-5)
- Estimated hours
- Actual hours
- Difficulty level

### Saved Views

Create views for:
- My assigned issues
- High priority items
- Bugs only
- This week's work

### GitHub Actions Integration

Automate:
- Auto-label based on file changes
- Auto-assign based on folder
- Auto-comment on stale issues
- Post to Slack on column movement

---

## 📞 Support

**Questions about Projects setup?**
- GitHub Docs: [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- Tag admin: `@kundan-webdev` in issue

---

## ✅ Setup Checklist

Before inviting contributors:

```bash
✅ Project board created
✅ 5 columns configured
✅ Automation rules enabled
✅ 20+ initial issues created
✅ Issues assigned to contributors
✅ Labels created and applied
✅ Milestones defined
✅ Notifications configured
✅ Branch protection rules set
✅ CONTRIBUTING.md updated with board link
✅ Team invited to repository
✅ First standup meeting scheduled
```

---

**Your board is ready! Start tracking! 📊🚀**