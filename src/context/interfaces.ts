export interface Props {
    children: React.ReactNode;
}

export interface UserCreating {
    name: string,
    matricule: string,
    email: string,
    password: string,
    passwordConfirm: string,
    role: string
    career?: string,
    status?: string,
    semester?: number,
}

export interface User {
    name: string,
    matricule: string,
    email: string,
    role: string
    status: string,
}

export interface Student extends User {
    career: string,
    semester: number,
}