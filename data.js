// ==========================================
// USER CONFIGURATION - EDIT YOUR CONTENT HERE
// ==========================================

const portfolioData = {
    // 1. Personal Information
    personal: {
        name: "A. MOHAMED SHAM",
        role: "Senior Full-Stack Developer & UI/UX Strategist",
        tagline: "Transforming Visions into High-Performance <span class='gradient-text'>Digital Realities.</span>",
        bio: "Specializing in crafting bespoke, conversion-optimized digital experiences. I combine cutting-edge technology with strategic design to help brands dominate their market and achieve measurable growth.",
        email: "mohamedsham446@gmail.com",
        whatsappNumber: "917305177530",
        contactHeading: "Let’s Architect Your Next Big Success",
        contactSubText: "Ready to elevate your digital presence? I’m currently accepting new projects and would love to hear about your goals.",
        contactBtnText: "Start a Conversation",
        bgSandal: "#faf7f2"
    },

    // 2. Social Links
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-sham-341074383", icon: "fab fa-linkedin" },
        { name: "GitHub", url: "https://github.com/Msham20", icon: "fab fa-github" },
        { name: "Instagram", url: "https://www.instagram.com/_ms_from_ktm", icon: "fab fa-instagram" }
    ],

    // 3. Services Offered
    services: [
        {
            title: "Conversion-Focused UI/UX",
            description: "Strategically designed interfaces that guide users toward action, reducing bounce rates and maximizing ROI through data-driven design principles.",
            icon: "fas fa-drafting-compass"
        },
        {
            title: "Full-Stack Engineering",
            description: "Developing robust, scalable, and lightning-fast web applications using modern frameworks like Next.js, ensuring peak performance across all devices.",
            icon: "fas fa-terminal"
        },
        {
            title: "SEO & Performance Strategy",
            description: "Advanced optimization techniques to secure top-tier search rankings and industry-leading Core Web Vitals, ensuring your brand stays ahead of the competition.",
            icon: "fas fa-rocket"
        }
    ],

    // 4. Portfolio Projects
    projects: [
        {
            title: "Posh Automats: Premium Digital Ecosystem",
            category: "Full-Stack & Motion Design",
            description: "Developed a high-end digital presence integrating sophisticated motion graphics and interactive elements to elevate the brand's premium identity.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
            link: "https://posh-automatsin.vercel.app"
        },
        {
            title: "ZHR HRMS: Enterprise Workforce Platform",
            category: "Web Application",
            description: "Engineered a robust Human Resource Management System with automated data fetching and real-time attendance tracking for large-scale enterprise use.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Msham20/Z.HR-PROJECT"
        },
        {
            title: "SV Construction Corporate Identity",
            category: "Corporate Web Platform",
            description: "Designed and deployed a modern corporate platform for SV Construction, focusing on showcasing large-scale infrastructure projects with a minimal aesthetic.",
            image: "ZAKIR-3-1024x847.jpg",
            link: "https://svconstruction.co.in/"
        },
        {
            title: "VKS: Premium E-Commerce Experience",
            category: "E-Commerce Development",
            description: "Developed a high-performance e-commerce platform with a focus on seamless user journey, secure payment integration, and optimized conversion funnels.",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Msham20/cashew_vks"
        }
    ],

    // 5. Testimonials
    testimonials: [
        {
            quote: "Working with Sham was a game-changer for our digital infrastructure. His ability to translate complex requirements into a seamless user experience is unparalleled.",
            author: "Chidambaram Rajkumar",
            role: "Director of QA, RAICOM AUTOMOTIVE"
        },
        {
            quote: "Incredible attention to detail. Our user engagement metrics saw a 40% uptick within weeks of the new launch. A true professional through and through.",
            author: "Pradeep Kumar",
            role: "Strategic Marketing Director"
        }
    ],

    // 6. Pricing Slots
    pricing: [
        {
            title: "Strategic Growth Pack",
            description: "Perfect for startups and small businesses looking for a professional, high-converting entry into the market.",
            price: "₹4,999",
            paymentType: "STARTING FROM",
            features: [
                "Custom UI/UX Strategy",
                "High-Conversion Landing Page",
                "Automated Lead Capture",
                "Fully Responsive Architecture",
                "Basic SEO Foundation"
            ],
            buttonText: "Launch Now",
            buttonLink: "https://forms.gle/SFMTfHiW9hQohtAZA",
            isPopular: false
        },
        {
            title: "Professional Enterprise",
            description: "The gold standard for established brands demanding high performance, multi-page architectures, and advanced SEO.",
            price: "₹9,999",
            paymentType: "STARTING FROM",
            features: [
                "Full-Site Architecture (Up to 5 Pages)",
                "Advanced SEO & Performance Tuning",
                "Integrated Analytics Dashboard",
                "Custom Animation & Interactions",
                "Priority Support & Maintenance"
            ],
            buttonText: "Elevate Your Brand",
            buttonLink: "https://forms.gle/SFMTfHiW9hQohtAZA",
            isPopular: true
        }
    ],

    // 7. Skills & Expertise
    skills: [
        { name: "Next.js / React / TypeScript", level: "95%", icon: "fab fa-react" },
        { name: "Strategic UI/UX Design", level: "90%", icon: "fas fa-palette" },
        { name: "Node.js & Database Architecture", level: "85%", icon: "fas fa-server" },
        { name: "Technical SEO & Speed Optimization", level: "92%", icon: "fas fa-search-dollar" },
        { name: "Mobile-First Responsive Design", level: "96%", icon: "fas fa-mobile-alt" }
    ],

    // 8. Work Process
    process: [
        { step: "01", title: "Audit & Discovery", desc: "We deep-dive into your business goals, target audience, and market landscape to find your competitive edge." },
        { step: "02", title: "Strategic Blueprinting", desc: "Developing a custom technical and design roadmap focused on maximizing conversion and scalability." },
        { step: "03", title: "Agile Development", desc: "Building your solution with clean, efficient code and real-time feedback loops to ensure perfection." },
        { step: "04", title: "Launch & Optimization", desc: "Meticulous deployment followed by performance monitoring to ensure immediate impact and long-term success." }
    ]
};
