/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "540px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            xxl: "1400px",
        },
        // Container resize
        container: {
            center: true,
            padding: ".75rem",
        },
        extend: {
            // Font family
            fontFamily: {
                // mulish: "'Mulish', sans- serif",
            },
            // Font size
            fontSize: {
                fs_12: "12px",
            },
            lineHeight: {
                lh_60px: "60px",
            },
            colors: {
                // Primary color
                gray: "#A3A3A3",
                dark1: "#222C30",
                dark3: "#5B6568",
                dark4: "#8F999C",
                dark2: "#3C4649",
                dark5: "#C1C8CA",
                dark7: "#EFF2F3",
                sky: "#3bafdd",
                dark8: "#F6F9FF",
            },
            boxShadow: {
                shadow1: "0px 10px 30px rgba(0, 33, 71, 0.08)",
                shadow2: "0px 5px 50px rgba(0, 33, 71, 0.06)",
            },
        },
    },
    plugins: [],
};

// module.exports = {
//     content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//     darkMode: "class",
//     theme: {
//         // Container size
//         screens: {
//             sm: "640px",
//             md: "768px",
//             lg: "1024px",
//             xl: "1280px",
//             xxl: "1440px",
//         },
//         // Container resize
//         container: {
//             center: true,
//             padding: ".75rem",
//         },
//         extend: {
//             // Font family
//             fontFamily: {
//                 mulish: "'Mulish', sans- serif",
//             },

//             // Font size
//             fontSize: {
//                 fs_12: "12px",
//             },
//             lineHeight: {
//                 lh_60px: "60px",
//             },
//             colors: {
//                 // Primary color
//                 primary_main: "#33E7D2",
//                 primary_dark_shade: "#0B3060",
//                 primary_light_shade: "#DCFFFB",

//                 // Secondary color
//                 secondary_main: "#F95A78",
//                 secondary_dark_shade: "#1F2257",
//                 secondary_light_shade: "#FFF4F6",

//                 // Ascent one color
//                 ascent_one_main: "#487BFF",
//                 ascent_one_dark_shade: "#0D2564",
//                 ascent_one_light_shade: "#F0F4FF",

//                 // Ascent two color
//                 ascent_two_main: "#FFD575",
//                 ascent_two_dark_shade: "#1F2E57",
//                 ascent_two_light_shade: "#FFF6E0",

//                 // Light theme
//                 white: "#FFFFFF",
//                 light_theme_gray_one: "#4E608D",
//                 light_theme_gray_two: "#7D8AAA",
//                 light_theme_gray_three: "#868BBD",
//                 light_theme_gray_four: "#E5E7FA",
//                 light_theme_gray_five: "#F4F5FF",
//                 light_theme_gray_six: "#F8F8FF",

//                 // Dark theme
//                 dark: "#071C53",
//                 dark_theme_gray_one: "#A0B3E2",
//                 dark_theme_gray_two: "#6D83BB",
//                 dark_theme_gray_three: "#4A64A7",
//                 dark_theme_gray_four: "#172E68",
//                 dark_theme_gray_five: "#0F2662",
//                 dark_theme_gray_six: "#0B215B",

//                 // Status color
//                 status_info: "#0090FF",
//                 status_info_shade: "#0090ff1a",
//                 status_success: "#16C784",
//                 status_info_success_shade: "#00e7b21a",
//                 status_warning: "#FFB84D",
//                 status_warning_shade: "#ffb84c1a",
//                 status_danger: "#FF4646",
//                 status_danger_shade: "#ff46461a",
//             },
//         },
//     },
//     plugins: [],
// };
