export default {
    title: "FaraDoc",
    description: "Documentación de tu plataforma",
    base: "/faradocs2/",

    themeConfig: {
        sidebar: [
            {
                text: "Sessions",
                collapsed: false,
                items: [
                    { text: "Current", link: "/sessions/getCurrent" },
                    { text: "Login", link: "/sessions/login" },
                    { text: "Logout", link: "/sessions/logout" },
                    { text: "New Password", link: "/sessions/newPassword" },
                    { text: "Recover Account", link: "/sessions/recoverAccount" },
                    { text: "Register", link: "/sessions/register" },
                    { text: "What email", link: "/sessions/whatEmail" },
                ]
            },
            {
                text: "Utils",
                collapsed: false,
                items: [
                    { text: "Errores", link: "/utils/errors" },
                    { text: "Actividades", link: "/utils/activity" },
                ]
            }
        ]
    }
};
