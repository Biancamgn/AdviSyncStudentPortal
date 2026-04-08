// Mock Data for Student Portal
// All data is hardcoded with realistic sample values

const mockData = {
    // Current logged-in student
    currentUser: {
        id: 'student-001',
        school_id: '221234567',
        email: '221234567@dlsu.edu.ph',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
        role: 'student',
        program: 'BSCpE',
        year_level: 4,
        adviser_id: 'prof-001',
        is_cleared: false,
        failed_units: 0,
        status: 'active',
        gender: 'Male',
        phone: '09171111111',
        date_of_birth: '2002-05-10'
    },

    // Adviser information
    adviser: {
        id: 'prof-001',
        school_id: 'P001',
        email: 'prof.santos@dlsu.edu.ph',
        first_name: 'Dr. Antonio',
        last_name: 'Santos',
        role: 'adviser',
        department: 'CENG',
        status: 'active',
        phone: '09181234567'
    },

    // Academic terms
    terms: [
        { id: 'term-001', term_name: 'First Semester', academic_year: '2024-2025', is_active: true, deadline_date: '2024-09-15' },
        { id: 'term-002', term_name: 'Second Semester', academic_year: '2024-2025', is_active: false, deadline_date: '2025-01-30' },
        { id: 'term-003', term_name: 'Summer Semester', academic_year: '2024-2025', is_active: false, deadline_date: '2025-05-15' },
    ],

    // Course catalog
    courses: [
        { id: 'course-001', code: 'CENG150', title: 'Programming I', units: 3, term: '1', program: 'BSCpE', year_level: 1, prerequisite: null },
        { id: 'course-002', code: 'CENG151', title: 'Discrete Mathematics', units: 3, term: '1', program: 'BSCpE', year_level: 1, prerequisite: null },
        { id: 'course-003', code: 'CENG250', title: 'Programming II', units: 3, term: '2', program: 'BSCpE', year_level: 2, prerequisite: 'CENG150' },
        { id: 'course-004', code: 'CENG251', title: 'Data Structures', units: 3, term: '2', program: 'BSCpE', year_level: 2, prerequisite: 'CENG150' },
        { id: 'course-005', code: 'CENG350', title: 'Algorithms', units: 3, term: '1', program: 'BSCpE', year_level: 3, prerequisite: 'CENG251' },
        { id: 'course-006', code: 'CENG351', title: 'Operating Systems', units: 3, term: '1', program: 'BSCpE', year_level: 3, prerequisite: 'CENG250' },
        { id: 'course-007', code: 'CENG450', title: 'Capstone Project', units: 6, term: '1', program: 'BSCpE', year_level: 4, prerequisite: 'CENG351' },
        { id: 'course-008', code: 'EEEE150', title: 'Circuit Analysis I', units: 3, term: '1', program: 'BSECE', year_level: 1, prerequisite: null },
        { id: 'course-009', code: 'EEEE151', title: 'Digital Electronics', units: 3, term: '1', program: 'BSECE', year_level: 1, prerequisite: null },
        { id: 'course-010', code: 'EEEE250', title: 'Circuit Analysis II', units: 3, term: '2', program: 'BSECE', year_level: 2, prerequisite: 'EEEE150' },
    ],

    // Academic records for this student
    academicRecords: [
        { id: 'rec-001', student_id: 'student-001', term_id: 'term-001', course_id: 'course-007', status: 'enrolled', grade: null, units: 6 },
        { id: 'rec-002', student_id: 'student-001', term_id: 'term-002', course_id: 'course-006', status: 'completed', grade: '3.75', units: 3 },
        { id: 'rec-003', student_id: 'student-001', term_id: 'term-002', course_id: 'course-351', status: 'completed', grade: '3.5', units: 3 },
        { id: 'rec-004', student_id: 'student-001', term_id: 'term-001', course_id: 'course-005', status: 'completed', grade: '3.0', units: 3 },
    ],

    // Advising forms
    advisingForms: [
        { id: 'form-001', student_id: 'student-001', adviser_id: 'prof-001', term_id: 'term-001', status: 'pending', submitted_at: '2024-09-01', meeting_preference: 'In-person', notes: 'Need to discuss capstone project timeline', adviser_remarks: null, study_plan_id: 'plan-001' },
    ],

    // Study plan
    studyPlan: {
        id: 'plan-001',
        student_id: 'student-001',
        term_id: 'term-001',
        status: 'pending',
        meeting_preference: 'In-person',
        notes: 'Capstone project focus for final year'
    },

    // Study plan courses
    studyPlanCourses: [
        { id: 'spc-001', plan_id: 'plan-001', course_id: 'course-007', type: 'current', status: 'enrolled' },
    ],

    // Appointment availability for adviser
    availabilitySlots: [
        { id: 'slot-001', adviser_id: 'prof-001', slot_date: '2024-09-12', start_time: '09:00', end_time: '10:00', is_booked: false },
        { id: 'slot-002', adviser_id: 'prof-001', slot_date: '2024-09-12', start_time: '10:00', end_time: '11:00', is_booked: true },
        { id: 'slot-003', adviser_id: 'prof-001', slot_date: '2024-09-12', start_time: '14:00', end_time: '15:00', is_booked: false },
        { id: 'slot-004', adviser_id: 'prof-001', slot_date: '2024-09-13', start_time: '09:00', end_time: '10:00', is_booked: false },
        { id: 'slot-005', adviser_id: 'prof-001', slot_date: '2024-09-13', start_time: '15:00', end_time: '16:00', is_booked: false },
    ],

    // Student appointments
    appointments: [
        { id: 'appt-001', student_id: 'student-001', adviser_id: 'prof-001', appointment_date: '2024-09-15T14:00', status: 'scheduled', purpose: 'Capstone project consultation' },
        { id: 'appt-002', student_id: 'student-001', adviser_id: 'prof-001', appointment_date: '2024-08-28T10:00', status: 'completed', purpose: 'Course selection guidance' },
    ],

    // Student concerns
    concerns: [
        { id: 'concern-001', student_id: 'student-001', adviser_id: 'prof-001', subject: 'Capstone project timeline', message: 'I am worried about meeting the deadline for my capstone project. Can we discuss the timeline?', status: 'active', created_at: '2024-09-08T14:30:00' },
        { id: 'concern-002', student_id: 'student-001', adviser_id: 'prof-001', subject: 'Graduation requirements', message: 'I want to make sure I have all requirements for graduation', status: 'resolved', created_at: '2024-09-01T09:00:00' },
    ],

    // Concern replies
    concernReplies: [
        { id: 'reply-001', concern_id: 'concern-001', sender_id: 'prof-001', sender_role: 'adviser', sender_name: 'Dr. Antonio Santos', message: 'Let\'s schedule a meeting to discuss your timeline. I believe we can create a manageable plan for your capstone. See you next week!', created_at: '2024-09-08T16:00:00' },
        { id: 'reply-002', concern_id: 'concern-002', sender_id: 'prof-001', sender_role: 'adviser', sender_name: 'Dr. Antonio Santos', message: 'Based on your academic record, you have completed all major requirements. Just ensure you pass your current courses.', created_at: '2024-09-01T14:30:00' },
        { id: 'reply-003', concern_id: 'concern-002', sender_id: 'student-001', sender_role: 'student', sender_name: 'Juan Dela Cruz', message: 'Thank you! That gives me peace of mind.', created_at: '2024-09-02T10:00:00' },
    ],

    // Notifications
    notifications: [
        { id: 'notif-001', user_id: 'student-001', title: 'Advising Form Approved', message: 'Your advising form has been approved by your adviser', type: 'form_status', is_read: true, created_at: '2024-09-05T11:20:00' },
        { id: 'notif-002', user_id: 'student-001', title: 'New Message from Adviser', message: 'Dr. Antonio Santos replied to your concern about capstone timeline', type: 'message', is_read: false, created_at: '2024-09-08T16:05:00' },
        { id: 'notif-003', user_id: 'student-001', title: 'Appointment Reminder', message: 'You have an appointment with Dr. Antonio Santos on Sep 15 at 2:00 PM', type: 'reminder', is_read: false, created_at: '2024-09-14T09:00:00' },
        { id: 'notif-004', user_id: 'student-001', title: 'Form Deadline Approaching', message: 'Advising form deadline is approaching. Please submit by September 15.', type: 'deadline', is_read: false, created_at: '2024-09-10T08:00:00' },
    ],

    // Utility functions
    getCurrentTerm() {
        return this.terms.find(t => t.is_active);
    },

    getTermById(id) {
        return this.terms.find(t => t.id === id);
    },

    getCourseById(id) {
        return this.courses.find(c => c.id === id);
    },

    getAcademicRecords() {
        return this.academicRecords;
    },

    getAcademicRecordsByTerm(term_id) {
        return this.academicRecords.filter(r => r.term_id === term_id);
    },

    getEnrolledCourses() {
        return this.academicRecords.filter(r => r.status === 'enrolled');
    },

    getAdvisingForm(term_id) {
        return this.advisingForms.find(f => f.term_id === term_id);
    },

    getStudyPlanCourses() {
        return this.studyPlanCourses;
    },

    getAvailableAdviserSlots() {
        return this.availabilitySlots.filter(s => !s.is_booked);
    },

    getAppointments() {
        return this.appointments;
    },

    getConcerns() {
        return this.concerns;
    },

    getConcernById(id) {
        return this.concerns.find(c => c.id === id);
    },

    getConcernReplies(concern_id) {
        return this.concernReplies.filter(r => r.concern_id === concern_id).sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    },

    getCalculateGPA() {
        const completedRecords = this.academicRecords.filter(r => r.status === 'completed' && r.grade);
        const totalGrade = completedRecords.reduce((sum, r) => sum + (parseFloat(r.grade) * r.units), 0);
        const totalUnits = completedRecords.reduce((sum, r) => sum + r.units, 0);
        return totalUnits > 0 ? (totalGrade / totalUnits).toFixed(2) : '0.00';
    },

    getFailedUnits() {
        return this.academicRecords
            .filter(r => r.status === 'failed')
            .reduce((sum, r) => sum + r.units, 0);
    }
};
