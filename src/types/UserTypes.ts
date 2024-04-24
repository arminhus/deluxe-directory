export interface People {
    id: number;
    name: string;
    height: number;
    mass: number;
    hairColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female' | 'other';
    birthDate: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
}