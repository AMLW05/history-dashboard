# GitHub Pages Deployment Instructions

## History Dashboard - All Courses in One Repository

This repository houses all FTCC History course dashboards (HIS-131, HIS-132, HIS-111, HIS-112) in a single GitHub Pages site.

---

## Prerequisites

- GitHub account
- Git installed on your computer

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository settings:
   - **Repository name**: `history-dashboard`
   - **Description**: "Interactive course dashboards for FTCC History program (HIS-131, HIS-132, HIS-111, HIS-112)"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **Do NOT initialize** with README, .gitignore, or license (we already have these)
4. Click **Create repository**

---

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
cd /Users/angelawestmoreland/history-dashboard

# Initialize git repository
git init
git add .
git commit -m "Initial commit: HIS-131 dashboard complete"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/history-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/history-dashboard`
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

---

## Step 4: Access Your Dashboards

Once deployed, your dashboards will be available at:

**Base URL**: `https://YOUR-USERNAME.github.io/history-dashboard/`

**Individual Courses**:
- **HIS-131**: `https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-131/`
- **HIS-132**: `https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-132/` *(coming soon)*
- **HIS-111**: `https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-111/` *(coming soon)*
- **HIS-112**: `https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-112/` *(coming soon)*

---

## Step 5: Create Landing Page (Optional)

You can create an `index.html` at the root to serve as a program-level landing page with links to all courses. For now, you can share direct course links.

---

## Adding Future Courses

When you're ready to add HIS-132, HIS-111, or HIS-112:

```bash
cd /Users/angelawestmoreland/history-dashboard

# Create new course directory
mkdir -p courses/HIS-132

# Add course files (dashboard, data, etc.)
# ... create index.html and course-data.json ...

# Commit and push
git add courses/HIS-132/
git commit -m "Add HIS-132 dashboard"
git push origin main
```

GitHub Pages will automatically update within 1-2 minutes.

---

## URL Structure

```
history-dashboard/
├── https://YOUR-USERNAME.github.io/history-dashboard/
│   └── (Program landing page - optional)
└── courses/
    ├── HIS-131/
    │   └── https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-131/
    ├── HIS-132/
    │   └── https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-132/
    ├── HIS-111/
    │   └── https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-111/
    └── HIS-112/
        └── https://YOUR-USERNAME.github.io/history-dashboard/courses/HIS-112/
```

---

## Benefits of Multi-Course Structure

✅ **Single repository** - All history courses in one place
✅ **Shared hosting** - One GitHub Pages site for all courses
✅ **Easy navigation** - Link between courses at program level
✅ **Consistent branding** - Unified look across all courses
✅ **Version control** - Track all course changes together
✅ **Program scaffolding** - Show how courses connect (HIS-131→132, HIS-111→112)

---

## Troubleshooting

### Issue: Links between courses not working
**Solution**: Use relative paths like `../HIS-132/` or absolute paths like `/history-dashboard/courses/HIS-132/`

### Issue: 404 on course pages
**Solution**:
- Verify `index.html` exists in course directory
- Check GitHub Pages is enabled
- Wait 2-3 minutes for deployment

---

## Next Steps

1. ✅ Create GitHub repository: `history-dashboard`
2. ✅ Push HIS-131 content
3. ✅ Enable GitHub Pages
4. 🚧 Build HIS-132 using same framework
5. 🚧 Build HIS-111 using same framework
6. 🚧 Build HIS-112 using same framework
7. 🚧 Create program-level landing page (`index.html` at root)

---

**Status**: Ready for GitHub deployment!
