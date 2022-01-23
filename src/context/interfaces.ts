import React from "react";

export interface Props {
    children: React.ReactNode;
}

export interface User {
    name: string,
    enrollment: string,
    email: string,
    role: string
    status: string,
}

export interface UserCreating  extends User {
    password: string,
    passwordConfirm: string,
    career?: string,
    semester?: number,
}

export interface Student extends User {
    career: string,
    semester: number,
}

export interface Assignment {
    id:string,
    key: number,
    semester: number,
    name: string,
    credits: number,
   group: number,
    description: string,
    room: string,
}