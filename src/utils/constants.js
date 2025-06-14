export const userRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member"
};

export const availableUserRoles = Object.values(userRolesEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done"
};

export const availableTaskStatuses = Object.values(TaskStatusEnum);

export const DB_NAME = "Kanban_Board";
