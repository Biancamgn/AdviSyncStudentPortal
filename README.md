# Student Portal

A standalone portal for students to manage their academic journey, advising, and communication with advisers.

## Overview

This is an independent portal for students to:
- View dashboard with academic progress and status
- Access academic records, transcripts, and GPA
- Submit and track advising forms and study plans
- Schedule and manage appointments with advisers
- View course booklets and program checklists
- Submit concerns and communicate with advisers
- Receive notifications and reminders
- Manage profile and account settings

## Structure

```
student-portal/
├── index.html                        # Login page
├── student-dashboard.html           # Student home page
├── student-academic-booklet.html    # Course selection & study plan
├── student-academic-history.html    # Transcript & grades
├── student-appointments.html        # Appointment scheduling
├── student-concerns.html            # Student concerns form
├── student-profile.html             # Student profile
├── student-program-checklist.html   # Graduation requirements
├── student-settings.html            # Account settings
├── email-system.html                # Email notifications
├── js/
│   ├── auth.js                     # Authentication (mock-based)
│   ├── mock-data.js                # All hardcoded sample data
│   ├── shared.js                   # Shared utilities
│   ├── student-*.js                # Feature-specific logic
│   ├── email-system.js             # Email handling
│   └── notifications.js            # Notification handling
├── css/
│   ├── style.css                   # Main stylesheet
│   ├── dashboard.css               # Dashboard styles
│   ├── shared.css                  # Shared component styles
│   ├── student-*.css               # Feature-specific styles
│   └── email-system.css            # Email styles
└── components/
    ├── sidebar.html                # Navigation sidebar
    └── topbar.html                 # Top navigation bar
```

## Demo Credentials

```
ID: 221234567
Password: dlsu4567
Role: Student
```

**Student Profile:** Juan Dela Cruz (4th Year, BSCpE)
**Adviser:** Dr. Antonio Santos (Prof-001)

## Features

- **Dashboard** - Overview of academic progress, GPA, enrolled courses, and notifications
- **Academic Booklet** - Select courses, create study plans, and submit advising forms
- **Academic History** - View transcripts, grades, and academic records
- **Program Checklist** - Track graduation requirements and completed courses
- **Appointments** - Schedule and manage meetings with adviser
- **Student Concerns** - Submit concerns and maintain conversations with adviser
- **Email System** - Send and receive emails/notifications
- **Profile Management** - View and update personal information
- **Settings** - Configure notification preferences

## Data

All data is hardcoded in `js/mock-data.js` with realistic sample values:
- 1 student profile (4th year BSCpE student)
- 1 adviser profile
- 10 course definitions
- 3 academic terms
- Sample academic records (grades, enrollments)
- Advising forms and study plans
- Appointment slots and bookings
- Student concerns and adviser responses
- Sample notifications

## No External Dependencies

This portal has **NO backend dependencies**:
- ❌ Supabase removed
- ❌ No API calls
- ❌ No database connections
- ✅ All data is hardcoded
- ✅ Self-contained and portable
- ✅ Works offline

## Setup & Running

1. Open `index.html` in a web browser
2. Login with demo credentials (ID: 221234567, Password: dlsu4567)
3. Browse the student dashboard

## To Use Your Own Data

Edit `js/mock-data.js` and replace the hardcoded values with:
- Your student profile information
- Your adviser information
- Your academic records and grades
- Your enrolled courses
- Your advising forms and study plans
- Your program requirements
- Your appointments and concerns

## Technology Stack

- HTML5
- CSS3 (Bootstrap 5)
- Vanilla JavaScript (no frameworks)
- LocalStorage for session management

## Key Pages

### Dashboard
- Current term and GPA display
- Enrolled courses list
- Recent notifications
- Adviser information
- Quick action links

### Academic Booklet
- Current and failed courses display
- Available courses for selection
- Submit study plan
- Track form status (pending/approved/revision)

### Academic History
- Complete transcript view
- Grade distribution
- GPA calculation
- Course completion status

### Appointments
- View adviser availability
- Book appointments
- Manage scheduled appointments
- View appointment history

### Student Concerns
- Submit new concerns
- Track concern status
- View adviser responses
- Conversation threads

## Notes

- This is a standalone demo/prototype
- All authentication is session-based (localStorage)
- Email sending is simulated - no actual emails are sent
- Appointment bookings are simulated - no real scheduling
- To implement real features, replace mock data with API calls

## For Production

To migrate to a real backend:
1. Set up your database schema matching the tables defined in `js/mock-data.js`
2. Replace `mock-data.js` with actual API calls
3. Update `auth.js` to use real authentication
4. Implement actual appointment system integration
5. Implement actual email/notification system
6. Connect to your course catalog and academic records system

---

**Created:** 2024-04-08
**Version:** 1.0.0
