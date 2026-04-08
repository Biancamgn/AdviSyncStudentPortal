// Auto-login mock authentication - No login page required
// All users are auto-authenticated with mock data

function requireAuth(allowedRoles = []) {
    try {
        // Auto-login with mock user
        autoLoginUser();

        const profile = mockData.currentUser;

        if (allowedRoles.length > 0 && !allowedRoles.includes(profile.role)) {
            console.error('Access denied - invalid role');
            return null;
        }

        return profile;
    } catch (err) {
        console.error('Auth error:', err);
        return null;
    }
}

function autoLoginUser() {
    // Check if user already in session
    const userJson = localStorage.getItem('_adminSession');
    if (userJson) {
        return JSON.parse(userJson);
    }

    // Auto-create session with mock user
    const session = {
        user_id: mockData.currentUser.id,
        school_id: mockData.currentUser.school_id,
        role: mockData.currentUser.role
    };
    localStorage.setItem('_adminSession', JSON.stringify(session));
    return session;
}

function signOut() {
    localStorage.removeItem('_adminSession');
    // Redirect to dashboard (auto-login will happen on next page load)
    window.location.href = 'student-dashboard.html';
}

// Auto-login on page load
document.addEventListener('DOMContentLoaded', () => {
    autoLoginUser();
});
