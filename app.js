document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Portfolio Data
    const initPortfolio = () => {
        if (typeof portfolioData === 'undefined') return;

        // Set Personal Info
        document.title = `${portfolioData.personal.name} | ${portfolioData.personal.role}`;
        document.getElementById("logo-text").innerHTML = `<span>M</span>OHAMED SHAM`;
        document.getElementById("hero-role").textContent = portfolioData.personal.role;

        // Handle tagline
        const tagline = document.querySelector(".hero-desc");
        if (tagline && portfolioData.personal.tagline) {
            tagline.textContent = portfolioData.personal.tagline;
        }

        // Render Skills
        const skillsContainer = document.getElementById("skills-container");
        if (skillsContainer) {
            portfolioData.skills.forEach(skill => {
                skillsContainer.innerHTML += `
                    <div class="skill-card reveal-up">
                        <div class="skill-icon"><i class="${skill.icon}"></i></div>
                        <h4 class="skill-name">${skill.name}</h4>
                        <div class="skill-bar-wrap">
                            <div class="skill-bar" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `;
            });
        }

        // Render Services
        const servicesContainer = document.getElementById("services-container");
        if (servicesContainer) {
            portfolioData.services.forEach(service => {
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
        }

        // Render Process
        const processContainer = document.getElementById("process-container");
        if (processContainer) {
            portfolioData.process.forEach((step, index) => {
                processContainer.innerHTML += `
                    <div class="process-card reveal-up">
                        <div class="process-step">0${index + 1}</div>
                        <h3 class="process-title">${step.title}</h3>
                        <p class="process-desc">${step.description}</p>
                    </div>
                `;
            });
        }

        // Render Projects
        const portfolioContainer = document.getElementById("portfolio-container");
        if (portfolioContainer) {
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
                                <span>Premium UX</span>
                            </div>
                            <a href="${project.link}" class="btn btn-outline" target="_blank">View Project <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                `;
            });
        }

        // Render Pricing
        const pricingContainer = document.getElementById("pricing-container");
        if (pricingContainer) {
            portfolioData.pricing.forEach(plan => {
                const popularClass = plan.popular ? 'popular' : '';
                const featuresHtml = plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
                
                pricingContainer.innerHTML += `
                    <div class="pricing-card ${popularClass} reveal-up">
                        ${plan.popular ? '<div class="pricing-badge">BEST VALUE</div>' : ''}
                        <h3 class="pricing-title">${plan.title}</h3>
                        <p class="pricing-desc">${plan.description}</p>
                        <div class="pricing-price-wrap">
                            <span class="pricing-type">${plan.type}</span>
                            <span class="pricing-price">${plan.price}</span>
                        </div>
                        <ul class="pricing-features">
                            ${featuresHtml}
                        </ul>
                        <a href="#contact" class="btn btn-block ${plan.popular ? 'btn-primary' : 'btn-pricing-green'}">Choose Plan</a>
                    </div>
                `;
            });
        }

        // Render Testimonials
        const testimonialsContainer = document.getElementById("testimonials-container");
        if (testimonialsContainer) {
            portfolioData.testimonials.forEach(t => {
                const initials = t.name.split(' ').map(n => n[0]).join('');
                testimonialsContainer.innerHTML += `
                    <div class="testimonial-card reveal-up">
                        <i class="fas fa-quote-right quote-icon"></i>
                        <p class="testimonial-text">"${t.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">${initials}</div>
                            <div class="author-info">
                                <h4>${t.name}</h4>
                                <p>${t.role}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // Render Socials in Footer
        const socialContainer = document.getElementById("social-container");
        if (socialContainer) {
            portfolioData.socials.forEach(social => {
                socialContainer.innerHTML += `
                    <a href="${social.url}" class="social-link" target="_blank" aria-label="${social.name}">
                        <i class="${social.icon}"></i>
                    </a>
                `;
            });
        }
    };

    initPortfolio();

    // 2. GSAP Animations & Effects
    const initAnimations = () => {
        gsap.registerPlugin(ScrollTrigger);

        // Navbar Scroll Effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

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
            duration: 1,
            ease: "expo.out",
            delay: 0.4
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
                    toggleActions: "play none none none"
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Metrics Count-up Animation
        gsap.utils.toArray(".metric-number").forEach(metric => {
            const originalText = metric.innerText;
            const target = parseInt(originalText.replace(/[^0-9]/g, ''));
            const suffix = originalText.replace(/[0-9]/g, '');
            
            if (isNaN(target)) return;
            
            // Set initial state to 0 + suffix
            metric.innerText = "0" + suffix;

            const obj = { value: 0 };
            gsap.to(obj, {
                value: target,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: metric,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                onUpdate: () => {
                    metric.innerText = Math.floor(obj.value) + suffix;
                }
            });
        });

        // Skill Bar Animation
        gsap.utils.toArray(".skill-bar").forEach(bar => {
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: "top 95%"
                },
                width: bar.getAttribute('data-level'),
                duration: 1.5,
                ease: "power2.out"
            });
        });

        // Reveal Up Animations
        gsap.utils.toArray(".reveal-up").forEach(el => {
            const isMobile = window.innerWidth < 768;
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: isMobile ? "top 95%" : "top 90%",
                    toggleActions: "play none none none"
                },
                y: isMobile ? 10 : 20,
                opacity: 0,
                duration: isMobile ? 0.4 : 0.6,
                ease: "power2.out"
            });
        });

        // Parallax Effect for Background Items
        if (window.innerWidth > 768) {
            gsap.utils.toArray(".parallax-item").forEach(item => {
                const speed = item.getAttribute('data-speed') || 0.5;
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    },
                    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed * 0.1,
                    ease: "none"
                });
            });
        }

        // Magnetic Buttons (Desktop Only)
        if (window.innerWidth > 1024) {
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
    };

    initAnimations();
});
