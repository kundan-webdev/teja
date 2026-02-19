# 🎯 Quick Reference Guide

**1-Page Cheat Sheet for Kundan & Vanshika**

---

## 🔵 KUNDAN (Admin) — Quick Commands

```bash
# Day 0: Setup
git clone https://github.com/kundan-webdev/teja.git
npm create vite@latest . -- --template react
npm install tailwindcss@next @tailwindcss/vite@next react-router-dom
git checkout -b dev && git push origin dev

# Daily: Review PR
git fetch origin feature/contact-form
git checkout feature/contact-form
npm run dev  # Test locally
# Then merge via GitHub UI

# Weekly: Release
# GitHub: Create PR dev → main, then merge
```

---

## 🟢 VANSHIKA (Contributor) — Quick Commands

```bash
# Start: Clone & Setup
git clone https://github.com/kundan-webdev/teja.git
npm install && npm run dev

# Every Feature: Same Pattern
git checkout dev && git pull origin dev
git checkout -b feature/my-feature
# ... code ...
git add . && git commit -m "feat: describe change"
git push origin feature/my-feature
# Create PR on GitHub

# After Merge: Cleanup
git checkout dev && git pull origin dev
git branch -d feature/my-feature
```

---

## 📋 3-Branch Strategy

```
main     ← production (protected, admin only)
  ↑
  PR
  ↑
dev      ← integration (all PRs go here)
  ↑
  PR
  ↑
feature/* ← your work (contributors)
```

**Rule:** `feature → dev → main` (NEVER skip dev!)

---

## 🎫 GitHub Projects Columns

```
📋 Backlog  →  🧠 Todo  →  🚧 In Progress  →  👀 In Review  →  ✅ Done
   (future)    (ready)     (coding now)      (PR submitted)   (merged)
```

**Auto-moves:** PR created → In Review | PR merged → Done

---

## 📊 Daily Tracking (Choose One)

### Option A: GitHub Projects
- Move cards as you progress
- Comment daily updates on issues
- Board shows real-time status

### Option B: Google Sheets
| Date | Name | Task | Issue | Branch | PR | Status | Notes |
|---|---|---|---|---|---|---|---|
| 22-Feb | Vanshika | Contact Form | #6 | feature/contact-form | #15 | ✅ Done | Merged! |

---

## ✅ PR Checklist

**Before submitting PR:**
```
□ Tested on 375px, 768px, 1280px
□ No console errors
□ Follows coding standards
□ Added "Fixes #X" in description
□ Screenshots included (for UI)
□ Clean commit messages
```

---

## 🚨 Common Problems & Solutions

| Problem | Solution |
|---|---|
| **Merge conflict** | `git checkout dev && git pull && git checkout feature/* && git merge dev` |
| **Pushed to wrong branch** | Tell admin immediately! Don't push again. |
| **Stuck > 2 hours** | Comment on issue, tag admin |
| **Want to see others' code** | `git fetch --all && git checkout feature/their-branch` |
| **Accidentally deleted code** | `git checkout -- filename` (if not committed) |

---

## 💬 Communication Templates

### Daily Standup
```markdown
📅 [Date] - Vanshika

✅ Yesterday: Finished form validation
🚧 Today: Working on footer component  
❓ Blockers: None
```

### PR Description
```markdown
## What
[Brief description]

## Related Issue
Fixes #6

## Screenshots
[Add images]

## Testing
✅ Tested on all screen sizes
✅ No console errors
```

### Asking for Help
```markdown
@kundan-webdev

I'm stuck on [specific problem].

Tried: [what you attempted]
Need: [specific question]
Time spent: [X hours]
```

---

## 🎯 Success Metrics

**After 1 month:**
- 15+ issues completed
- 20+ PRs merged
- < 24hr average review time
- < 5 merge conflicts
- 0 reverted PRs
- High team morale 🎉

---

## 📞 Quick Links

| Resource | Link |
|---|---|
| **CONTRIBUTING.md** | Full contributor guide |
| **GitHub Projects** | https://github.com/kundan-webdev/teja/projects/1 |
| **Google Sheets** | [Add your sheet link] |
| **Team Chat** | [Discord/Slack link] |
| **Figma Design** | [Design link] |

---

## 🔥 Golden Rules

1. **Always pull dev** before creating new branch
2. **Commit every 1-2 hours** (small commits)
3. **One feature = one branch** (don't mix)
4. **Link PR to issue** with "Fixes #X"
5. **Test responsively** before submitting PR
6. **Ask early** if stuck > 2 hours
7. **Update daily** (tracker or board)
8. **Clean up** after merge (delete branch)

---

## 📅 Weekly Rhythm

| Day | Kundan | Vanshika |
|---|---|---|
| **Monday** | Post weekly goals, assign tasks | Check tasks, start feature |
| **Tuesday** | Answer questions | Code & commit |
| **Wednesday** | Review PRs | Finish feature, submit PR |
| **Thursday** | Merge PRs, assign next | Address feedback, start next |
| **Friday** | Weekly review, release | Wrap up, plan next week |

---

## 🎓 Most Important

**For Kundan:**
- Review PRs within 24 hours
- Give constructive feedback
- Keep board updated
- Be available for questions

**For Vanshika:**
- Read CONTRIBUTING.md fully
- Ask questions early
- Update tracker daily
- Test before submitting
- Respond to feedback quickly

---

<div align="center">

## 🚀 Remember

**Good code** = Good process + Good communication

**This workflow** = Industry standard

**Your goal** = Build amazing product together!

---

**Questions?** Tag `@kundan-webdev` in issues

**Ready?** Let's ship! 🎉

</div>