export interface Props {
  children: React.ReactNode;
}
export interface UserA {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
    role: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    role: string
}