<div align="center">

# 🤝 Contributing to Teja Solvimate

**Welcome to the team!** This guide explains how to contribute professionally to this public repository.

[![Contributors](https://img.shields.io/badge/contributors-5-brightgreen)](https://github.com/kundan-webdev/teja/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)

</div>

---

## 📋 Table of Contents

- [Team Structure](#-team-structure)
- [Branch Strategy](#-branch-strategy-mandatory)
- [Contributor Workflow](#-contributor-workflow)
- [Daily Contribution Tracking](#-daily-contribution-tracking)
- [GitHub Projects Setup](#-github-projects-setup)
- [Admin Merge Process](#-admin-merge-process)
- [Coding Standards](#-coding-standards)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Common Mistakes](#-common-mistakes-to-avoid)
- [Communication](#-communication)

---

## 👑 Team Structure

### Admin / Team Lead
**Kundan Kumar** — Repository Admin & Merge Authority  
📧 GitHub: [@kundan-webdev](https://github.com/kundan-webdev)

### 👥 Contributors

| Name | GitHub |
|---|---|
| **Kundan Kumar** | [@kundan-webdev](https://github.com/kundan-webdev) |
| **Chiranth H C** | [@chiranth-hc](https://github.com/chiranth-hc) |
| **Akash Anand** | [@akashba009](https://github.com/akashba009) |
| **Thanushree Mnayak** | [@Thanunayak](https://github.com/Thanunayak) |
| **Vanshika V Patel** | [@Vanshikavpatel01](https://github.com/Vanshikavpatel01) |

---

## 🌿 Branch Strategy (Mandatory)

We follow a simple **3-branch workflow**:

```
main → Production (stable code only)
dev → Testing & integration
feature/* → Contributor work
```

**Branch roles:** `main` = Admin only (production), `dev` = Admin merges PRs (testing), `feature/*` = Contributors work here.

### 🚨 Golden Rule

```
feature → dev → main
```

Contributors create PRs from `feature/*` → `dev`, Admin merges `dev` → `main`, and ❌ never merge `feature/*` directly into `main`.

---

## 👥 Contributor Workflow

Follow these steps for **every task**. Example used below: **adding a navbar**.

---

### Step 1: Sync Your Local Repository

Before starting any work, update your local `dev` branch so you work on the latest code.

```bash
git checkout dev
git pull origin dev
```

**Example:**
If another contributor already updated the hero section, this step ensures you get those changes before starting your own work.

---

### Step 2: Create a Feature Branch

Always create a separate branch for your task.

```bash
git checkout -b feature/your-feature-name
```

**Example:**

```bash
git checkout -b feature/navbar
```

**Branch naming examples:**

```bash
feature/navbar
feature/hero-section
feature/about-page
feature/contact-form
feature/footer-component
```

---

### Step 3: Work on Your Task

Now write your code only for that feature.

Example:

- Add navbar component
- Make it responsive
- Test mobile menu
- Follow project coding standards

---

### Step 4: Commit Changes

After finishing a logical piece of work, commit with a clear message.

```bash
git add .
git commit -m "feat: add responsive navbar component"
```

#### Commit Message Format

```
<type>: <description>
```

**Types:**

- `feat` → new feature
- `fix` → bug fix
- `style` → UI/CSS changes
- `refactor` → code improvement without changing behavior
- `docs` → documentation updates
- `chore` → maintenance tasks

**Examples:**

```bash
git commit -m "feat: add hero section with animations"
git commit -m "fix: navbar mobile menu overflow issue"
git commit -m "style: update button hover effects"
git commit -m "refactor: extract reusable Card component"
```

---

### Step 5: Push Your Branch

Upload your feature branch to GitHub.

```bash
git push origin feature/your-feature-name
```

**Example:**

```bash
git push origin feature/navbar
```

---

### Step 6: Create Pull Request (PR)

Go to GitHub and create a Pull Request.

**Important:**

- Base branch → `dev` (NOT `main`)
- Compare branch → your feature branch

**Example:**

```
feature/navbar → dev
```

Admin will review, test, and merge your PR into `dev`.

Use the following PR description template:

```markdown
## 🎯 What does this PR do?
Brief description of changes

## 🔗 Related Issue
Fixes #123

## 📸 Screenshots (for UI changes)
[Add screenshots here]

## ✅ Checklist
- [ ] Code builds without errors
- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1280px)
- [ ] No console errors
- [ ] Follows coding standards
- [ ] Updated documentation (if needed)
```

### 🚨 Workflow Summary

```
1. Update dev
2. Create feature branch
3. Build feature
4. Commit with proper message
5. Push branch
6. Create PR → dev
```

This keeps the project clean, safe, and easy to manage.

---

### Step 7: Wait for Review

- Admin will review your Pull Request
- Address any requested changes
- Once approved, Admin will merge into `dev`

### Step 8: After Merge — Cleanup

```bash
git checkout dev
git pull origin dev
git branch -d feature/your-feature-name         # Delete local branch
git push origin --delete feature/your-feature-name  # Delete remote branch
```

---

## 📊 Daily Contribution Tracking

All contributors **MUST** track their daily work.

### GitHub Projects

**Daily Requirements:**
1. ✅ Update your issue status when you start work
2. ✅ Move your card across columns as progress happens
3. ✅ Comment on issues with daily updates

**Status Flow:**

```
📋 Backlog → 🧠 Todo → 🚧 In Progress → 👀 Review → ✅ Done
```

**Daily Update Example:**

```
Working on navbar component today.
- ✅ Desktop layout done
- 🚧 Mobile menu in progress
- 📅 Target: Complete by EOD
```

---

## 🧩 GitHub Projects Setup

All work is managed through **GitHub Projects**.

### Board Structure

| Column | Meaning | Your Action |
|---|---|---|
| 📋 **Backlog** | Future tasks | Don't touch |
| 🧠 **Todo** | Ready to work | Pick your task |
| 🚧 **In Progress** | Currently working | Move here when you start |
| 👀 **Review** | PR submitted | Auto-moves when PR created |
| ✅ **Done** | Merged & deployed | Auto-moves when merged |

### Working with Issues

Every task is an **Issue**.

**Example Issues:**

```
#1 Build Navbar Component
#2 Hero Section UI with Animations
#3 Contact Form with Validation
#4 Mobile Menu Implementation
#5 Footer with Social Links
```

### Task Assignment

1. Admin assigns issues to you
2. You can self-assign from **Todo** column
3. **One issue at a time** (don't hoard tasks)

### Linking PR to Issue (CRITICAL)

In your PR description, always write:

```markdown
Closes #5
Resolves #12
```

**GitHub will automatically:**
- ✅ Link PR to issue
- ✅ Track progress
- ✅ Move card when merged
- ✅ Close issue when PR merges

---

## 🖥️ Coding Standards

### Component Structure

```jsx
import React from 'react';

// ✅ GOOD: Clean, single responsibility
const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### File Organization

```
src/components/common/Button.jsx
src/components/layout/Navbar.jsx
src/components/sections/Hero.jsx
src/pages/Home.jsx
```

**Rules:**
- ✅ One component per file
- ✅ Keep files under 200 lines
- ✅ Extract reusable logic into hooks
- ✅ Use meaningful variable names

### Tailwind Usage

**✅ DO:**
```jsx
<div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-soft">
```

**❌ DON'T:**
```jsx
<div style={{ display: 'flex', padding: '24px' }}>  // No inline styles
```

**✅ USE Custom Classes:**
```jsx
<button className="btn btn-primary">  // From styles.css
```

### Code Comments

```jsx
// ✅ GOOD: Explain WHY, not WHAT
// Debounce to prevent excessive API calls
const debouncedSearch = useDebounce(searchTerm, 500);

// ❌ BAD: Obvious comment
// Set loading to true
setLoading(true);
```

---

## 📝 Pull Request Guidelines

### Before Opening PR

**Checklist:**

```bash
✅ Code builds: npm run build
✅ No errors: npm run dev
✅ Tested responsive: 375px, 768px, 1280px
✅ No console warnings
✅ Issue linked: "Fixes #X"
✅ Clean commit history
✅ Proper branch name
```

### PR Size Guidelines

**Ideal PR:**
- ✅ Single feature or fix
- ✅ Under 300 lines changed
- ✅ Easy to review (< 15 mins)

**❌ Bad PR:**
- Multiple unrelated changes
- 1000+ lines changed
- Mixing features with fixes

### PR Description Quality

**✅ GOOD:**

```markdown
## What
Added responsive navbar with mobile menu

## Why
Users need navigation on all devices

## How
- Created Navbar component
- Added hamburger menu for mobile
- Implemented smooth transitions

## Testing
✅ Desktop Chrome
✅ Mobile Safari
✅ Tablet Firefox

## Screenshots
[Add images]

Fixes #8
```

**❌ BAD:**

```markdown
fixed navbar
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ Never Do This

| Mistake | Why It's Bad | Solution |
|---|---|---|
| Push to `main` directly | Breaks production | Always use `feature` branches |
| Huge PRs (500+ lines) | Hard to review | Break into smaller PRs |
| No issue linked | Can't track work | Always use `Fixes #X` |
| Working without pulling | Merge conflicts | Pull `dev` before starting |
| Mixing multiple tasks | Hard to rollback | One feature per branch |
| Inline styles | Not reusable | Use Tailwind or global classes |
| No PR description | Wastes reviewer time | Use the template |

### 🐛 Handling Merge Conflicts

If you see merge conflicts:

```bash
# Step 1: Update dev
git checkout dev
git pull origin dev

# Step 2: Merge dev into your branch
git checkout feature/your-branch
git merge dev

# Step 3: Fix conflicts in VS Code
# Look for <<<<<<< HEAD markers

# Step 4: Commit resolution
git add .
git commit -m "fix: resolve merge conflict with dev"
git push origin feature/your-branch
```

**Pro Tip:** Pull `dev` frequently to avoid conflicts!

---

## 🎯 Your Success Metrics

You're doing great if:

✅ **Daily commits** — pushing work every day  
✅ **Small PRs** — under 300 lines, focused changes  
✅ **Quick turnaround** — PR raised → merged in 1-2 days  
✅ **Clean code** — follows standards, passes reviews  
✅ **Responsive UI** — works on all screen sizes  
✅ **Good communication** — daily updates, clear questions  

---

## 🚀 Getting Started Checklist

**Before your first contribution:**

```bash
✅ Read this entire document
✅ Clone the repository
✅ Install dependencies: npm install
✅ Run dev server: npm run dev
✅ Join team communication channel
✅ Get assigned your first issue
✅ Create your first feature branch
✅ Make your first commit
✅ Open your first PR
✅ Celebrate! 🎉
```

---

## ❓ FAQ

**Q: Can I work on multiple issues at once?**  
A: No. Finish one before starting another.

**Q: What if I'm stuck for more than 2 hours?**  
A: Ask in the issue or tag the admin. Don't stay stuck.

**Q: Can I pick any issue from the board?**  
A: Only from the **Todo** column. Admin assigns **Backlog** tasks.

**Q: What if my PR gets rejected?**  
A: Address the feedback and resubmit. It's a learning process.

**Q: Can I suggest new features?**  
A: Yes! Open an issue with `[Feature Request]` prefix.

**Q: Do I need to write tests?**  
A: Not yet. Manual testing is sufficient for now.

---

## 🎓 Learning from Code Reviews

When your PR gets comments:

✅ **Don't take it personally** — reviews improve code quality  
✅ **Ask questions** — if you don't understand feedback  
✅ **Learn patterns** — reviews teach best practices  
✅ **Apply lessons** — to future PRs  

---

## 🔥 Pro Tips

1. **Pull `dev` daily** — avoid merge conflicts
2. **Commit often** — small commits are easier to review
3. **Test before pushing** — save reviewer time
4. **Read others' PRs** — learn from teammates
5. **Use meaningful names** — future you will thank you
6. **Document complex logic** — help others understand
7. **Ask early** — don't waste 3 hours on the wrong approach

---

## 📞 Need Help?

**Admin Contact:**
- GitHub: [@kundan-webdev](https://github.com/kundan-webdev)
- Email: kundan.webdev@gmail.com
- LinkedIn: [www.linkedin.com/in/kundan-webdev](https://www.linkedin.com/in/kundan-webdev)

**Remember:** There are no stupid questions. Ask early, ask often.

---

<div align="center">

## 🎉 Thank You for Contributing!

Every PR makes this project better.  
Every commit is a step toward mastery.  
Every review is a learning opportunity.

**Let's build something amazing together!** 🚀

---

Built with ❤️ by the Teja Solvimate Team

[⬆️ Back to Top](#-contributing-to-teja-solvimate)

</div>