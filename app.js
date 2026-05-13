// ==========================================
// PORTFOLIO LOGIC & ANIMATIONS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. POPULATE DATA FROM data.js ---

    // Set Personal Info
    document.title = `${portfolioData.personal.name} | ${portfolioData.personal.role}`;
    document.getElementById("logo-text").innerHTML = `<span>M</span>OHAMED SHAM`;
    document.getElementById("hero-role").textContent = portfolioData.personal.role;

    // Handle tagline
    document.getElementById("hero-tagline").innerHTML = portfolioData.personal.tagline;

    document.getElementById("hero-bio").textContent = portfolioData.personal.bio;
    document.getElementById("contact-heading").textContent = portfolioData.personal.contactHeading || "Ready for your project?";

    // New customizable bottom slot elements
    const subTextEl = document.querySelector(".contact-sub");
    if (subTextEl && portfolioData.personal.contactSubText) {
        subTextEl.textContent = portfolioData.personal.contactSubText;
    }

    const contactBtn = document.getElementById("contact-email-btn");
    const linkedIn = portfolioData.socials.find(s => s.name === "LinkedIn");
    if (contactBtn && linkedIn) {
        contactBtn.href = linkedIn.url;
        contactBtn.target = "_blank";
    }
    if (portfolioData.personal.contactBtnText) {
        contactBtn.innerHTML = `${portfolioData.personal.contactBtnText} <i class="fas fa-paper-plane"></i>`;
    }

    document.getElementById("footer-name").textContent = portfolioData.personal.name;
    document.getElementById("footer-copy-name").textContent = portfolioData.personal.name;
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Set Contact Links
    if (portfolioData.personal.whatsappNumber) {
        const waUrl = `https://wa.me/${portfolioData.personal.whatsappNumber.replace(/[^0-9]/g, '')}`;
        document.querySelectorAll("a.btn").forEach(link => {
            if (!link.href || link.href.includes("#contact") || link.textContent.includes("Let's Talk")) {
                link.href = waUrl;
                link.target = "_blank";
            }
        });
    }

    // Set Social Links
    const socialContainer = document.getElementById("social-container");
    portfolioData.socials.forEach(social => {
        const a = document.createElement("a");
        a.href = social.url;
        a.className = "social-link";
        a.innerHTML = `<i class="${social.icon}"></i>`;
        a.target = "_blank";
        a.setAttribute("aria-label", social.name);
        socialContainer.appendChild(a);
    });

    // Set Services
    const servicesContainer = document.getElementById("services-container");
    portfolioData.services.forEach((service, index) => {
        servicesContainer.innerHTML += `
            <div class="service-card reveal-up">
                <div class="service-content">
                    <div class="service-icon"><i class="${service.icon}"></i></div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                </div>
            </div>
        `;
    });

    // Set Projects
    const portfolioContainer = document.getElementById("portfolio-container");
    portfolioData.projects.forEach((project, index) => {
        const projectNum = (index + 1).toString().padStart(2, '0');
        portfolioContainer.innerHTML += `
            <div class="project-card reveal-up">
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-num">${projectNum}</div>
                </div>
                <div class="project-info">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Tailwind</span>
                    </div>
                    <a href="${project.link}" target="_blank" class="btn btn-outline btn-sm">View Case Study <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
    });

    // Set Pricing
    const pricingContainer = document.getElementById("pricing-container");
    if (portfolioData.pricing && pricingContainer) {
        portfolioData.pricing.forEach((plan, index) => {
            const delay = index * 0.1;
            const popularBadge = plan.isPopular ? `<div class="pricing-badge">POPULAR</div>` : '';
            const cardClass = plan.isPopular ? "pricing-card popular reveal-up" : "pricing-card reveal-up";
            const btnClass = plan.isPopular ? "btn btn-primary btn-glow btn-block text-lg" : "btn btn-outline btn-block text-lg";

            let featuresHtml = '';
            plan.features.forEach(feature => {
                featuresHtml += `<li><i class="fas fa-check"></i> ${feature}</li>`;
            });

            pricingContainer.innerHTML += `
                <div class="${cardClass}" style="transition-delay: ${delay}s">
                    ${popularBadge}
                    <h3 class="pricing-title">${plan.title}</h3>
                    <p class="pricing-desc">${plan.description}</p>
                    <div class="pricing-price-wrap">
                        <span class="pricing-type">${plan.paymentType}</span>
                        <h4 class="pricing-price">${plan.price}</h4>
                    </div>
                    <ul class="pricing-features">
                        ${featuresHtml}
                    </ul>
                    <a href="${plan.buttonLink}" target="_blank" class="${btnClass}">${plan.buttonText} <i class="fas fa-arrow-right" style="margin-left: 5px; font-size: 0.8rem;"></i></a>
                </div>
            `;
        });
    }

    // Set Testimonials
    const testimonialContainer = document.getElementById("testimonial-container");
    portfolioData.testimonials.forEach((test, index) => {
        testimonialContainer.innerHTML += `
            <div class="testimonial-card reveal-up">
                <i class="fas fa-quote-right quote-icon"></i>
                <p class="testimonial-text">"${test.quote}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${test.author.charAt(0)}</div>
                    <div class="author-info">
                        <h4>${test.author}</h4>
                        <p>${test.role}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Set Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer && portfolioData.skills) {
        portfolioData.skills.forEach(skill => {
            skillsContainer.innerHTML += `
                <div class="skill-card glass reveal-up">
                    <div class="skill-icon"><i class="${skill.icon}"></i></div>
                    <h3 class="skill-name">${skill.name}</h3>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" data-level="${skill.level}"></div>
                    </div>
                </div>
            `;
        });
    }

    // Set Process
    const processContainer = document.getElementById("process-container");
    if (processContainer && portfolioData.process) {
        portfolioData.process.forEach(step => {
            processContainer.innerHTML += `
                <div class="process-card glass-premium reveal-up">
                    <span class="process-step">${step.step}</span>
                    <h3 class="process-title">${step.title}</h3>
                    <p class="process-desc">${step.desc}</p>
                </div>
            `;
        });
    }

    // --- 2. INTERACTIVE ELEMENTS ---

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    let menuOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.add("active");
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenu.classList.remove("active");
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuOpen = false;
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Handle dark hero section
        const heroHeight = document.querySelector(".hero").offsetHeight;
        if (window.scrollY < heroHeight * 0.8) {
            navbar.classList.add("dark-hero");
        } else {
            navbar.classList.remove("dark-hero");
        }
    });






        // --- 3. GSAP ANIMATIONS ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Initial Hero Animation
        gsap.from(".hero-content", {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(".hero-visual", {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            ease: "expo.out",
            delay: 0.8
        });

        // Floating Tech Core Animation
        gsap.to(".tech-core", {
            y: 15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Staggered Title Animations
        gsap.utils.toArray(".section-title").forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                },
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "expo.out"
            });
        });

        // Initial animations for items below hero
        const tl = gsap.timeline();

        tl.from(".scroll-indicator", { opacity: 0, duration: 0.5, ease: "power1.inOut" });

        // Background Parallax
        gsap.to(".bg-image", {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5 // Snappier scrub
            },
            yPercent: 10,
            ease: "none"
        });

        // Parallax for items with data-speed
        gsap.utils.toArray(".parallax-item").forEach(item => {
            const speed = item.dataset.speed || 0.1;
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -100 * speed,
                ease: "none"
            });
        });

        // Skill Bar Animation
        gsap.utils.toArray(".skill-bar").forEach(bar => {
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: "top 95%",
                },
                width: bar.dataset.level,
                duration: 0.6,
                ease: "power2.out"
            });
        });

        // Reveal Up Animations
        gsap.utils.toArray(".reveal-up").forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: 10,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Metrics Counter Animation
        const metrics = document.querySelectorAll(".metric-number");
        metrics.forEach(metric => {
            const target = parseInt(metric.getAttribute("data-target"));
            gsap.to(metric, {
                scrollTrigger: {
                    trigger: metric,
                    start: "top 95%",
                },
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        });

        // Magnetic Buttons
        const magneticBtns = document.querySelectorAll('.btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }
});
