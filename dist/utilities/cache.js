"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCache = void 0;
class AdminCache {
}
exports.AdminCache = AdminCache;
AdminCache._admins = {
    timestamp: "",
    adminMembers: []
};
AdminCache.getAdmins = () => AdminCache._admins;
AdminCache.setAdmins = (updatedMembers) => {
    AdminCache._admins.timestamp = updatedMembers.timestamp;
    AdminCache._admins.adminMembers = updatedMembers.adminMembers;
};
AdminCache.isAdmin = (chatMember) => AdminCache._admins.adminMembers.filter(admin => admin.status === chatMember.status).length !== 0;
//# sourceMappingURL=cache.js.map