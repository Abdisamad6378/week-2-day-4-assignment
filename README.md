# Week 2 Day 4 Assignment: Advanced JavaScript Interactions

## 📋 Overview
This assignment consists of three interactive JavaScript applications demonstrating advanced DOM manipulation, event handling, and modern web APIs.

## 🎯 Tasks Completed

### Task 1: Modal/Popup System (20 points)
A fully-featured modal system with multiple triggers and close options.

**Features:**
- 3 "Learn More" buttons with different modal content
- Centered modal with dark semi-transparent overlay
- Multiple close methods: Close button, click outside, Escape key
- Body scroll disabled when modal open
- Fade-in animation with CSS transitions

**Files:** `modal.html` + `modal.js`

---

### Task 2: Real-Time Form Validation (30 points)
A registration form with immediate validation feedback.

**Fields & Validation Rules:**
- **Name**: Minimum 2 characters
- **Email**: Must contain @ and at least one . after the @
- **Phone**: Exactly 10 digits, starting with 07 or 01
- **Password**: Min 8 chars, 1 uppercase, 1 number

**Features:**
- Real-time validation on `input` event
- Visual feedback: green ✓ (valid), red ✗ (invalid)
- Specific error messages
- Submit button disabled until all fields valid

**Files:** `form.html` + `form.js`

---

### Task 3: Drag-and-Drop Priority List (20 points)
A reorderable task list using the HTML5 Drag and Drop API.

**Features:**
- 5 tasks with priority numbers
- Drag and drop to reorder
- Auto-updating priority numbers
- Visual feedback during dragging
- Keyboard support (arrow keys)

**Files:** `drag.html` + `drag.js`

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/Abdisamad6378/week-2-day-4-assignment.git

# Navigate to the project
cd week-2-day-4-assignment

# Open any HTML file in your browser
open modal.html        # macOS
start modal.html       # Windows
xdg-open modal.html    # Linux