export function generateContacts(count: number): Contact[] {
    const res: Contact[] = [];

    for(let i=1; i<=count; i++) {
        res.push({
            id: i,
            // name: "name" + i,
            get name() {
                return "name" + i;
            }
        });
    }

    return res;
}

export interface Contact {
    id: number;
    name: string;
}
