export default {
    title: "FaraDoc",
    description: "Documentación de tu plataforma",
    base: "/faradocs2/",

    themeConfig: {
        sidebar: [
            {
                text: "Sessions",
                collapsed: true,
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
                text: "Images",
                collapsed: true,
                items: [
                    { text: "Post Image", link: "/images/postImage" },
                    { text: "Get Images", link: "/images/getImages" },
                    { text: "Put Image", link: "/images/putImage" },
                ]
            },
            {
                text: "Data",
                collapsed: true,
                items: [
                    { text: "Get Data", link: "/data/getData" },
                ]
            },
            {
                text: "Utils",
                collapsed: true,
                items: [
                    { text: "Errores", link: "/utils/errors" },
                    { text: "Actividades", link: "/utils/activity" },
                ]
            }
        ]
    }
};