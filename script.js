document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Cookie Banner
    setTimeout(() => {
        const cookieBanner = document.getElementById('cookie-banner');
        cookieBanner.classList.add('active');
        
        document.getElementById('accept-cookies').addEventListener('click', () => {
            cookieBanner.classList.remove('active');
            localStorage.setItem('cookiesAccepted', 'true');
        });
        
        document.getElementById('decline-cookies').addEventListener('click', () => {
            cookieBanner.classList.remove('active');
        });
    }, 2000);

    // Background Animation in Hero Section
    const backgroundAnimation = document.querySelector('.background-animation');
    
    // Create SVG Financial Graph Background
    const createGraphBackground = () => {
        const graphSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        graphSvg.setAttribute("width", "100%");
        graphSvg.setAttribute("height", "100%");
        
        // Create random financial graph lines
        for (let i = 0; i < 8; i++) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            let pathData = `M0,${Math.random() * 100 + 50}`;
            for (let j = 1; j < 10; j++) {
                pathData += ` L${j * 10}%,${Math.random() * 100 + 50}`;
            }
            
            path.setAttribute("d", pathData);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "white");
            path.setAttribute("stroke-width", "2");
            path.setAttribute("opacity", "0.4");
            
            graphSvg.appendChild(path);
        }
        
        // Add some circles to represent data points
        for (let i = 0; i < 20; i++) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", `${Math.random() * 100}%`);
            circle.setAttribute("cy", `${Math.random() * 100}%`);
            circle.setAttribute("r", Math.random() * 4 + 2);
            circle.setAttribute("fill", "white");
            circle.setAttribute("opacity", "0.4");
            
            graphSvg.appendChild(circle);
        }
        
        backgroundAnimation.appendChild(graphSvg);
        
        // Animate the graph with GSAP
        gsap.to(graphSvg.querySelectorAll("path"), {
            strokeDashoffset: 0,
            strokeDasharray: 1000,
            duration: 20,
            repeat: -1,
            yoyo: true,
            stagger: 0.5,
            ease: "power1.inOut"
        });
        
        gsap.to(graphSvg.querySelectorAll("circle"), {
            scale: 1.5,
            opacity: 0.2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "sine.inOut"
        });
    };
    
    createGraphBackground();

    // Hero App Illustration
    const createAppIllustration = () => {
        const svg = d3.select("#hero-app-illustration");
        
        // Create smartphone mockup
        svg.append("rect")
            .attr("x", 150)
            .attr("y", 50)
            .attr("width", 200)
            .attr("height", 400)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("fill", "#fff")
            .attr("stroke", "#ddd")
            .attr("stroke-width", 2);
        
        // Screen
        svg.append("rect")
            .attr("x", 160)
            .attr("y", 70)
            .attr("width", 180)
            .attr("height", 360)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("fill", "#f5f7fa");
        
        // App header
        svg.append("rect")
            .attr("x", 160)
            .attr("y", 70)
            .attr("width", 180)
            .attr("height", 50)
            .attr("fill", "#1976D2");
        
        // App title
        svg.append("text")
            .attr("x", 250)
            .attr("y", 100)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .text("Coach Budget");
        
        // Budget circle
        svg.append("circle")
            .attr("cx", 250)
            .attr("cy", 180)
            .attr("r", 60)
            .attr("fill", "none")
            .attr("stroke", "#2E7D32")
            .attr("stroke-width", 8);
        
        svg.append("text")
            .attr("x", 250)
            .attr("y", 170)
            .attr("text-anchor", "middle")
            .attr("fill", "#333")
            .attr("font-size", "12px")
            .text("BUDGET MENSUEL");
        
        svg.append("text")
            .attr("x", 250)
            .attr("y", 195)
            .attr("text-anchor", "middle")
            .attr("fill", "#2E7D32")
            .attr("font-size", "22px")
            .attr("font-weight", "bold")
            .text("1250 €");
        
        // Expense bars
        const categories = ["Loyer", "Nourriture", "Transport", "Loisirs"];
        const colors = ["#1976D2", "#2E7D32", "#FF9800", "#9C27B0"];
        
        categories.forEach((cat, i) => {
            const y = 270 + i * 35;
            
            // Category label
            svg.append("text")
                .attr("x", 175)
                .attr("y", y + 5)
                .attr("fill", "#333")
                .attr("font-size", "10px")
                .text(cat);
            
            // Background bar
            svg.append("rect")
                .attr("x", 175)
                .attr("y", y + 10)
                .attr("width", 150)
                .attr("height", 10)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("fill", "#eee");
            
            // Progress bar
            const width = Math.random() * 120 + 30;
            svg.append("rect")
                .attr("x", 175)
                .attr("y", y + 10)
                .attr("width", width)
                .attr("height", 10)
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("fill", colors[i]);
            
            // Amount
            svg.append("text")
                .attr("x", 335)
                .attr("y", y + 5)
                .attr("text-anchor", "end")
                .attr("fill", "#333")
                .attr("font-size", "10px")
                .text(`${Math.floor(width * 3)}€`);
        });
        
        // Animate elements
        gsap.from("#hero-app-illustration rect, #hero-app-illustration circle", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    };
    
    createAppIllustration();

    // Feature Icons
    const createFeatureIcons = () => {
        // Real-time expense analysis
        const realtimeAnalysis = document.getElementById("realtime-analysis");
        const analysisSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        analysisSvg.setAttribute("width", "80");
        analysisSvg.setAttribute("height", "80");
        analysisSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Wallet icon with moving coins
        analysisSvg.innerHTML = `
            <rect x="10" y="20" width="50" height="40" rx="5" fill="#1976D2" />
            <rect x="10" y="20" width="50" height="10" rx="5" fill="#0D47A1" />
            <circle class="coin" cx="25" cy="35" r="8" fill="#FFD700" />
            <circle class="coin" cx="45" cy="40" r="8" fill="#FFD700" />
            <rect x="17" y="60" width="36" height="4" rx="2" fill="#333" />
            <path d="M25 27 L55 27" stroke="#fff" stroke-width="2" />
            <path class="arrow-in" d="M65 35 L75 35 L70 30" fill="none" stroke="#2E7D32" stroke-width="2" />
            <path class="arrow-out" d="M65 45 L75 45 L70 50" fill="none" stroke="#F44336" stroke-width="2" />
        `;
        
        realtimeAnalysis.appendChild(analysisSvg);
        
        gsap.to(analysisSvg.querySelectorAll(".coin"), {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "power1.inOut"
        });
        
        gsap.to(analysisSvg.querySelector(".arrow-in"), {
            x: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        gsap.to(analysisSvg.querySelector(".arrow-out"), {
            x: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.5
        });
        
        // Auto-savings
        const autoSavings = document.getElementById("auto-savings");
        const savingsSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        savingsSvg.setAttribute("width", "80");
        savingsSvg.setAttribute("height", "80");
        savingsSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Piggy bank with falling coins
        savingsSvg.innerHTML = `
            <ellipse cx="40" cy="45" rx="30" ry="22" fill="#FF9800" />
            <circle cx="40" cy="30" r="20" fill="#FF9800" />
            <circle cx="30" cy="25" r="3" fill="#333" />
            <circle cx="50" cy="25" r="3" fill="#333" />
            <ellipse cx="40" cy="50" rx="5" ry="3" fill="#ED6C02" />
            <path d="M65 40 L70 40 L70 55" fill="none" stroke="#ED6C02" stroke-width="3" />
            <circle class="falling-coin" cx="20" cy="10" r="5" fill="#FFD700" />
            <circle class="falling-coin" cx="30" cy="5" r="4" fill="#FFD700" />
            <circle class="falling-coin" cx="40" cy="8" r="4.5" fill="#FFD700" />
            <rect x="25" y="65" width="30" height="5" rx="2" fill="#795548" />
        `;
        
        autoSavings.appendChild(savingsSvg);
        
        gsap.to(savingsSvg.querySelectorAll(".falling-coin"), {
            y: 40,
            duration: 1.5,
            repeat: -1,
            stagger: 0.3,
            ease: "bounce.out"
        });
        
        // Personalized advice
        const personalizedAdvice = document.getElementById("personalized-advice");
        const adviceSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        adviceSvg.setAttribute("width", "80");
        adviceSvg.setAttribute("height", "80");
        adviceSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Chat bubbles with advice
        adviceSvg.innerHTML = `
            <circle cx="40" cy="40" r="30" fill="#2E7D32" />
            <circle cx="40" cy="30" r="10" fill="#81C784" />
            <path d="M30 45 C30 35 50 35 50 45 L50 55 C50 60 40 60 40 60 C40 60 30 60 30 55 Z" fill="#81C784" />
            <path class="advice-text" d="M34 45 L46 45" stroke="white" stroke-width="2" />
            <path class="advice-text" d="M36 50 L44 50" stroke="white" stroke-width="2" />
            <path class="sparkle" d="M20 20 L25 25 M20 25 L25 20" stroke="#FFD700" stroke-width="2" />
            <path class="sparkle" d="M60 20 L65 25 M60 25 L65 20" stroke="#FFD700" stroke-width="2" />
            <path class="sparkle" d="M20 60 L25 65 M20 65 L25 60" stroke="#FFD700" stroke-width="2" />
        `;
        
        personalizedAdvice.appendChild(adviceSvg);
        
        gsap.to(adviceSvg.querySelectorAll(".advice-text"), {
            scale: 1.1,
            opacity: 0.8,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "sine.inOut"
        });
        
        gsap.to(adviceSvg.querySelectorAll(".sparkle"), {
            scale: 1.2,
            opacity: 0.8,
            rotation: 45,
            transformOrigin: "center",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
            ease: "sine.inOut"
        });
        
        // Budget alerts
        const budgetAlerts = document.getElementById("budget-alerts");
        const alertSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        alertSvg.setAttribute("width", "80");
        alertSvg.setAttribute("height", "80");
        alertSvg.setAttribute("viewBox", "0 0 80 80");
        
        // Alert notification
        alertSvg.innerHTML = `
            <rect x="15" y="15" width="50" height="50" rx="10" fill="#F5F7FA" stroke="#DDD" stroke-width="2" />
            <rect class="alert-header" x="15" y="15" width="50" height="12" rx="10" fill="#F44336" />
            <path d="M40 35 L40 50" stroke="#F44336" stroke-width="3" />
            <circle cx="40" cy="55" r="2" fill="#F44336" />
            <path class="alert-wave" d="M10 40 Q20 30, 30 40 Q40 50, 50 40 Q60 30, 70 40" fill="none" stroke="#F44336" stroke-width="2" opacity="0.5" />
        `;
        
        budgetAlerts.appendChild(alertSvg);
        
        gsap.to(alertSvg.querySelector(".alert-header"), {
            fillOpacity: 0.7,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(alertSvg.querySelector(".alert-wave"), {
            y: -10,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            ease: "sine.out"
        });
    };
    
    createFeatureIcons();

    // Interactive Dashboard
    const createDashboard = () => {
        const dashboard = document.getElementById("interactive-dashboard");
        const dashboardSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        dashboardSvg.setAttribute("width", "100%");
        dashboardSvg.setAttribute("height", "400");
        dashboardSvg.setAttribute("viewBox", "0 0 400 400");
        
        // Dashboard background
        dashboardSvg.innerHTML = `
            <rect x="0" y="0" width="400" height="400" rx="10" fill="#F5F7FA" />
            
            <!-- Header -->
            <rect x="0" y="0" width="400" height="60" rx="10" fill="#1976D2" />
            <text x="20" y="35" fill="white" font-size="18" font-weight="bold">Mon tableau de bord</text>
            
            <!-- Balance Card -->
            <rect x="20" y="80" width="360" height="80" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <text x="40" y="110" fill="#666" font-size="14">Solde actuel</text>
            <text x="40" y="140" fill="#333" font-size="24" font-weight="bold">2 458,67 €</text>
            <path class="trend-up" d="M320 120 L340 100 L360 110" stroke="#2E7D32" stroke-width="2" fill="none" />
            
            <!-- Expense Categories -->
            <rect class="draggable-category" x="20" y="180" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="40" y="195" width="30" height="30" rx="15" fill="#1976D2" />
            <text x="80" y="210" fill="#666" font-size="14">Loyer</text>
            <text x="80" y="230" fill="#333" font-size="16" font-weight="bold">800 €</text>
            
            <rect class="draggable-category" x="210" y="180" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="230" y="195" width="30" height="30" rx="15" fill="#FF9800" />
            <text x="270" y="210" fill="#666" font-size="14">Alimentation</text>
            <text x="270" y="230" fill="#333" font-size="16" font-weight="bold">350 €</text>
            
            <rect class="draggable-category" x="20" y="260" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="40" y="275" width="30" height="30" rx="15" fill="#9C27B0" />
            <text x="80" y="290" fill="#666" font-size="14">Transport</text>
            <text x="80" y="310" fill="#333" font-size="16" font-weight="bold">120 €</text>
            
            <rect class="draggable-category" x="210" y="260" width="170" height="60" rx="10" fill="white" stroke="#DDD" stroke-width="1" />
            <rect x="230" y="275" width="30" height="30" rx="15" fill="#2E7D32" />
            <text x="270" y="290" fill="#666" font-size="14">Loisirs</text>
            <text x="270" y="310" fill="#333" font-size="16" font-weight="bold">200 €</text>
            
            <!-- Action Button -->
            <rect x="120" y="340" width="160" height="40" rx="20" fill="#1976D2" />
            <text x="200" y="365" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Ajuster mon budget</text>
        `;
        
        dashboard.appendChild(dashboardSvg);
        
        // Make categories draggable
        const draggableCategories = dashboardSvg.querySelectorAll(".draggable-category");
        
        draggableCategories.forEach(category => {
            let isDragging = false;
            let startX, startY;
            let origX = parseInt(category.getAttribute("x"));
            let origY = parseInt(category.getAttribute("y"));
            
            category.addEventListener("mousedown", e => {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                category.style.cursor = "grabbing";
                category.style.opacity = "0.8";
            });
            
            document.addEventListener("mousemove", e => {
                if (!isDragging) return;
                
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                
                category.setAttribute("x", origX + dx);
                
                // Move the elements inside the category too
                const childElements = category.parentNode.querySelectorAll(`[x="${origX + 20}"], [x="${origX + 60}"]`);
                childElements.forEach(el => {
                    const currentX = parseInt(el.getAttribute("x"));
                    el.setAttribute("x", currentX + dx);
                });
            });
            
            document.addEventListener("mouseup", () => {
                if (!isDragging) return;
                
                isDragging = false;
                category.style.cursor = "grab";
                category.style.opacity = "1";
                
                // Snap back to original position with animation
                gsap.to(category, {
                    attr: { x: origX },
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
                
                // Reset child elements too
                const childElements = category.parentNode.querySelectorAll(`[x="${parseInt(category.getAttribute("x")) + 20}"], [x="${parseInt(category.getAttribute("x")) + 60}"]`);
                childElements.forEach(el => {
                    const targetX = el.getAttribute("x").startsWith(origX + 20) ? origX + 20 : origX + 60;
                    gsap.to(el, {
                        attr: { x: targetX },
                        duration: 0.5,
                        ease: "back.out(1.7)"
                    });
                });
            });
        });
        
        // Animate trend line
        gsap.to(dashboardSvg.querySelector(".trend-up"), {
            y: -5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    };
    
    createDashboard();

    // Virtual Coach
    const createVirtualCoach = () => {
        const coach = document.getElementById("virtual-coach");
        const coachSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        coachSvg.setAttribute("width", "100");
        coachSvg.setAttribute("height", "100");
        coachSvg.setAttribute("viewBox", "0 0 100 100");
        
        coachSvg.innerHTML = `
            <circle cx="50" cy="50" r="45" fill="#1976D2" />
            <circle cx="50" cy="35" r="20" fill="#BBDEFB" />
            <path d="M30 70 C30 50 70 50 70 70" fill="#BBDEFB" />
            <circle class="eye" cx="43" cy="32" r="3" fill="#1976D2" />
            <circle class="eye" cx="57" cy="32" r="3" fill="#1976D2" />
            <path class="mouth" d="M40 40 Q50 48 60 40" fill="none" stroke="#1976D2" stroke-width="2" />
            <path class="bubble" d="M75 25 Q85 25 85 35 L85 45 Q85 55 75 55 L65 55 L60 65 L60 55 L55 55 Q45 55 45 45 L45 35 Q45 25 55 25 Z" fill="white" opacity="0" />
            <text class="advice-text" x="65" y="40" text-anchor="middle" fill="#1976D2" font-size="8" opacity="0">Économisez 10% chaque mois !</text>
        `;
        
        coach.appendChild(coachSvg);
        
        // Animate coach
        gsap.to(coachSvg.querySelector(".mouth"), {
            attr: { d: "M40 43 Q50 38 60 43" },
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(coachSvg.querySelectorAll(".eye"), {
            scaleY: 0.3,
            transformOrigin: "center",
            duration: 0.1,
            repeat: -1,
            repeatDelay: 3,
            yoyo: true
        });
        
        // Show advice bubble periodically
        const showAdvice = () => {
            gsap.to(coachSvg.querySelector(".bubble"), {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(coachSvg.querySelector(".advice-text"), {
                opacity: 1,
                duration: 0.5,
                delay: 0.3,
                ease: "power2.out"
            });
            
            setTimeout(() => {
                gsap.to([coachSvg.querySelector(".bubble"), coachSvg.querySelector(".advice-text")], {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.in"
                });
            }, 4000);
        };
        
        setTimeout(showAdvice, 2000);
        setInterval(showAdvice, 10000);
    };
    
    createVirtualCoach();

    // Financial Forecast Tool
    const createForecastTool = () => {
        const forecastTool = document.getElementById("forecast-tool");
        const forecastSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        forecastSvg.setAttribute("width", "100%");
        forecastSvg.setAttribute("height", "150");
        forecastSvg.setAttribute("viewBox", "0 0 300 150");
        
        forecastSvg.innerHTML = `
            <rect x="0" y="0" width="300" height="150" rx="5" fill="#F5F7FA" />
            
            <!-- Axes -->
            <path d="M30 20 L30 120 L280 120" stroke="#CCC" stroke-width="1" />
            
            <!-- Labels -->
            <text x="20" y="30" text-anchor="end" fill="#666" font-size="10">3k€</text>
            <text x="20" y="60" text-anchor="end" fill="#666" font-size="10">2k€</text>
            <text x="20" y="90" text-anchor="end" fill="#666" font-size="10">1k€</text>
            <text x="20" y="120" text-anchor="end" fill="#666" font-size="10">0€</text>
            
            <text x="30" y="135" text-anchor="middle" fill="#666" font-size="10">Jan</text>
            <text x="80" y="135" text-anchor="middle" fill="#666" font-size="10">Fév</text>
            <text x="130" y="135" text-anchor="middle" fill="#666" font-size="10">Mar</text>
            <text x="180" y="135" text-anchor="middle" fill="#666" font-size="10">Avr</text>
            <text x="230" y="135" text-anchor="middle" fill="#666" font-size="10">Mai</text>
            <text x="280" y="135" text-anchor="middle" fill="#666" font-size="10">Jui</text>
            
            <!-- Savings Line -->
            <path class="savings-line" d="M30 100 L80 90 L130 80 L180 70 L230 55 L280 30" fill="none" stroke="#2E7D32" stroke-width="2" />
            <circle class="point" cx="30" cy="100" r="4" fill="#2E7D32" />
            <circle class="point" cx="80" cy="90" r="4" fill="#2E7D32" />
            <circle class="point" cx="130" cy="80" r="4" fill="#2E7D32" />
            <circle class="point" cx="180" cy="70" r="4" fill="#2E7D32" />
            <circle class="point" cx="230" cy="55" r="4" fill="#2E7D32" />
            <circle class="point" cx="280" cy="30" r="4" fill="#2E7D32" />
            
            <!-- Drag handle for simulation -->
            <circle class="drag-handle" cx="280" cy="30" r="8" fill="#FF9800" stroke="white" stroke-width="2" cursor="pointer" />
            
            <!-- Projection Line -->
            <path class="projection" d="M280 30 L320 15" stroke="#FF9800" stroke-width="2" stroke-dasharray="5,3" opacity="0.7" />
            
            <text x="150" y="15" text-anchor="middle" fill="#666" font-size="12" font-weight="bold">Prévision d'épargne</text>
        `;
        
        forecastTool.appendChild(forecastSvg);
        
        // Make the handle draggable to simulate different scenarios
        const dragHandle = forecastSvg.querySelector(".drag-handle");
        const projectionLine = forecastSvg.querySelector(".projection");
        
        let isDragging = false;
        let startY;
        let origY = 30;
        
        dragHandle.addEventListener("mousedown", e => {
            isDragging = true;
            startY = e.clientY;
            dragHandle.setAttribute("r", "10");
            dragHandle.style.opacity = "0.8";
        });
        
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            
            const dy = e.clientY - startY;
            const newY = Math.max(20, Math.min(120, origY + dy));
            
            dragHandle.setAttribute("cy", newY);
            
            // Update projection line
            projectionLine.setAttribute("d", `M280 ${newY} L320 ${newY - 15}`);
        });
        
        document.addEventListener("mouseup", () => {
            if (!isDragging) return;
            
            isDragging = false;
            dragHandle.setAttribute("r", "8");
            dragHandle.style.opacity = "1";
            
            // Save new position
            origY = parseInt(dragHandle.getAttribute("cy"));
        });
        
        // Animate the savings line initially
        gsap.from(forecastSvg.querySelector(".savings-line"), {
            attr: { d: "M30 120 L80 120 L130 120 L180 120 L230 120 L280 120" },
            duration: 2,
            ease: "power2.out"
        });
        
        gsap.from(forecastSvg.querySelectorAll(".point"), {
            attr: { cy: 120 },
            duration: 2,
            stagger: 0.2,
            ease: "power2.out"
        });
    };
    
    createForecastTool();

    // Emergency Alert Example
    const createEmergencyAlert = () => {
        const alertExample = document.getElementById("emergency-alert");
        const alertSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        alertSvg.setAttribute("width", "100%");
        alertSvg.setAttribute("height", "100");
        alertSvg.setAttribute("viewBox", "0 0 300 100");
        
        alertSvg.innerHTML = `
            <rect x="0" y="0" width="300" height="100" rx="10" fill="rgba(255, 255, 255, 0.2)" />
            <circle class="alert-icon" cx="40" cy="50" r="20" fill="#FFECB3" />
            <path d="M40 35 L40 55" stroke="#FF6F00" stroke-width="3" />
            <circle cx="40" cy="62" r="2" fill="#FF6F00" />
            
            <text x="75" y="40" fill="white" font-size="14" font-weight="bold">Alerte Dépassement de Budget</text>
            <text x="75" y="65" fill="white" font-size="12">Catégorie "Restaurants" : 25% au-dessus du budget</text>
            
            <rect class="alert-button" x="190" y="75" width="100" height="20" rx="10" fill="#FFECB3" />
            <text x="240" y="89" text-anchor="middle" fill="#FF6F00" font-size="11" font-weight="bold">Voir Solutions</text>
        `;
        
        alertExample.appendChild(alertSvg);
        
        // Pulse effect for alert icon
        gsap.to(alertSvg.querySelector(".alert-icon"), {
            scale: 1.1,
            transformOrigin: "center",
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Make button interactive
        const alertButton = alertSvg.querySelector(".alert-button");
        alertButton.style.cursor = "pointer";
        
        alertButton.addEventListener("mouseover", () => {
            gsap.to(alertButton, {
                attr: { fill: "#FFF176" },
                duration: 0.3
            });
        });
        
        alertButton.addEventListener("mouseout", () => {
            gsap.to(alertButton, {
                attr: { fill: "#FFECB3" },
                duration: 0.3
            });
        });
    };
    
    createEmergencyAlert();

    // Testimonials Slider
    const createTestimonials = () => {
        const testimonialContainer = document.getElementById("testimonial-container");
        const prevButton = document.getElementById("prev-testimonial");
        const nextButton = document.getElementById("next-testimonial");
        
        const testimonials = [
            {
                name: "Sophie Martin",
                text: "Coach Budget m'a permis d'économiser plus de 200€ par mois sans changer radicalement mon mode de vie. Les conseils personnalisés sont vraiment pertinents !",
                avatar: "#1976D2",
                rating: 5
            },
            {
                name: "Thomas Dubois",
                text: "J'ai réussi à rembourser ma dette en 6 mois grâce aux stratégies proposées par l'application. Le mode 'Urgence Financière' est vraiment efficace.",
                avatar: "#2E7D32",
                rating: 5
            },
            {
                name: "Amina Sidibe",
                text: "La fonction de micro-épargne est géniale ! Je mets de l'argent de côté sans même y penser. En 3 mois, j'ai économisé pour mes vacances.",
                avatar: "#9C27B0",
                rating: 4
            }
        ];
        
        let currentIndex = 0;
        
        const showTestimonial = (index) => {
            testimonialContainer.innerHTML = '';
            
            const testimonial = testimonials[index];
            const testimonialElement = document.createElement("div");
            testimonialElement.className = "testimonial";
            
            testimonialElement.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background-color: ${testimonial.avatar}">
                        ${testimonial.name.charAt(0)}
                    </div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="rating">
                            ${Array(5).fill(0).map((_, i) => 
                                `<i class="fas fa-star${i < testimonial.rating ? '' : '-o'}"></i>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
            `;
            
            testimonialContainer.appendChild(testimonialElement);
            
            // Animate the testimonial
            gsap.fromTo(testimonialElement, 
                { opacity: 0, x: 50 }, 
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
            );
        };
        
        showTestimonial(currentIndex);
        
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        // Auto rotate testimonials
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 8000);
        
        // Style the testimonials
        const style = document.createElement("style");
        style.innerHTML = `
            .testimonial {
                background-color: white;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            }
            
            .testimonial-header {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }
            
            .testimonial-avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                margin-right: 15px;
            }
            
            .testimonial-info h4 {
                margin: 0 0 5px 0;
            }
            
            .rating {
                color: #FFB300;
            }
            
            .testimonial-text {
                font-style: italic;
                color: #666;
                line-height: 1.6;
            }
        `;
        
        document.head.appendChild(style);
    };
    
    createTestimonials();

    // Load background images for blog posts
    const loadBlogImages = () => {
        const blogImages = [
            { 
                element: document.querySelector('.blog-card:nth-child(1) .blog-image'),
                url: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=600&h=400'
            },
            { 
                element: document.querySelector('.blog-card:nth-child(2) .blog-image'),
                url: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=600&h=400'
            },
            { 
                element: document.querySelector('.blog-card:nth-child(3) .blog-image'),
                url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=400'
            }
        ];
        
        blogImages.forEach(image => {
            if (image.element) {
                image.element.style.backgroundImage = `url(${image.url})`;
            }
        });
    };
    
    loadBlogImages();

    // Add button ripple effect
    const buttons = document.querySelectorAll('.cta-button, .pricing-button, #accept-cookies, #decline-cookies');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add parallax effect to the hero section
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroSection.querySelector('.background-animation').style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });

    // Add animations to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .pricing-card, .blog-card, .coaching-info > div');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Add CSS for the animations
    const addAnimationStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-in {
                animation: fadeInUp 0.6s ease forwards;
            }
            
            .ripple-effect {
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .feature-card, .pricing-card, .blog-card, .coaching-info > div {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
    };
    
    addAnimationStyles();
    animateOnScroll();
});