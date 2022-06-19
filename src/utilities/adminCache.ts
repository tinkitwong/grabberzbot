import { PRVILEDGED_USERS } from "./constants";
import { lessThanOneHourAgo } from "./utilites";

interface IChatMember {
    user: {
        id: number,
        is_bot: boolean,
        first_name: string | undefined,
        username?: string | undefined,
        language_code?: string | undefined
    },
    status: string,
    is_anonymous?: boolean
}

type TAdminsCache = {
    timestamp: string,
    adminMembers: IChatMember[];
}

export class AdminCache {
    private static _admins: TAdminsCache = {
        timestamp: "",
        adminMembers: []
    }

    public static getAdmins = (): TAdminsCache => AdminCache._admins;
    public static setAdmins = (updatedMembers: { timestamp: string, adminMembers: IChatMember[] }): void => {
        AdminCache._admins.timestamp = updatedMembers.timestamp;
        AdminCache._admins.adminMembers = updatedMembers.adminMembers;
    }
    public static isAdmin = (chatMember: IChatMember): boolean =>
        AdminCache._admins.adminMembers.filter(admin =>
            admin.status === chatMember.status
        ).length !== 0;
}