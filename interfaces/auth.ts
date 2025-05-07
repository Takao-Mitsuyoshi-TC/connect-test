export interface LoginInfo {
    email: string;
    password: string;
}

export interface ReminderInfo {
    email: string;
}

export interface ResetPasswordInfo {
    login_id: string;
    current_password: string;
    new_password: string;
}
