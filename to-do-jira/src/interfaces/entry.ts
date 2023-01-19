export interface Entry {
    name: string;
    description: string;
    id : string
    status: Status;
}

export type Status = 'pending' | 'In progress' | 'Finished';