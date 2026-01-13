
      // Preloader
      window.addEventListener("load", function () {
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
          preloader.style.opacity = "0";
          setTimeout(() => {
            preloader.style.display = "none";
          }, 500);
        }, 1500);
      });

      // Initialize Particle.js
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00f3ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ff00ff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });

      // Mobile Navigation
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("nav-links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.innerHTML = navLinks.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }

        // Scroll to top button
        const scrollTop = document.getElementById("scrollTop");
        if (window.scrollY > 500) {
          scrollTop.classList.add("active");
        } else {
          scrollTop.classList.remove("active");
        }
      });

      // Scroll to top functionality
      document.getElementById("scrollTop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Typing effect
      const typedTextSpan = document.getElementById("typed-text");
      const textArray = [
        "Full-Stack Developer",
        "UI/UX Designer",
        "Tech Enthusiast",
        "Problem Solver",
      ];
      const typingDelay = 100;
      const erasingDelay = 50;
      const newTextDelay = 1500;
      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          setTimeout(erase, newTextDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(type, typingDelay + 1000);
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
      });

      // Animated counters
      function animateCounters() {
        const counters = document.querySelectorAll(".stat-number");
        const speed = 200;

        counters.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 1);
          } else {
            counter.innerText = target;
          }
        });
      }

      // Skill progress bars animation
      function animateSkills() {
        const skillBars = document.querySelectorAll(".skill-progress");

        skillBars.forEach((skillBar) => {
          const width = skillBar.getAttribute("data-width");
          skillBar.style.width = width + "%";
        });
      }

      // Project filtering
      const filterButtons = document.querySelectorAll(".filter-btn");
      const projectCards = document.querySelectorAll(".project-card");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          // Add active class to clicked button
          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");

          projectCards.forEach((card) => {
            if (
              filterValue === "all" ||
              card.getAttribute("data-category") === filterValue
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });

      // Certificate Modal Functionality
      const certificateModal = document.getElementById("certificateModal");
      const certificateClose = document.getElementById("certificateClose");
      const certificateTitle = document.getElementById("certificateTitle");
      const certificateImage = document.getElementById("certificateImage");
      const certificateDetails = document.getElementById("certificateDetails");
      const certificateLink = document.getElementById("certificateLink");

      // Certificate data
      const certificates = {
        "html-css": {
          title: "HTML5  Certification",
          image:
            "https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg",
          details:
            "This certification validates advanced skills in HTML5 and CSS3, including responsive design, CSS Grid, Flexbox, and modern web development techniques.",
          link: "https://drive.google.com/file/d/1-KU_zzFuqX9c7mMjhkEJhe4pjVOXO5XR/view?usp=drive_link",
        },
        javascript: {
          title: "CSS3 Certification",
          image:
            "https://learntocodewith.me/wp-content/uploads/2021/06/css-code-1536x1023.jpg",
          details:
            "Certification demonstrating proficiency in modern JavaScript, ES6+ features, DOM manipulation, and asynchronous programming.",
          link: "https://drive.google.com/file/d/1-KU_zzFuqX9c7mMjhkEJhe4pjVOXO5XR/view?usp=drive_link",
        },
        python: {
          title: "JavaScript Certification",
          image:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
          details:
            "Certification in Python programming covering data structures, algorithms, OOP concepts, and application development.",
          link: "https://drive.google.com/file/d/1-KU_zzFuqX9c7mMjhkEJhe4pjVOXO5XR/view?usp=drive_link",
        },
        git: {
          title: "Java Certification",
          image:
            "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo-700x394.png",
          details:
            "Certification demonstrating expertise in Git version control, branching strategies, and collaborative development workflows.",
          link: "https://drive.google.com/file/d/1HPrkx0I3oe_cAXutKee6xDrEOcJ1Ptmr/view?usp=drive_link",
        },
        aws: {
          title: "GitHub Profile ",
          image:
            "https://blogbyte.in/media/blog/2025/git.png",
          details:
            "Amazon Web Services Cloud Practitioner certification validating cloud concepts, AWS services, security, and architecture.",
          link: "https://drive.google.com/file/d/your-certificate-id/view",
        },
        mongodb: {
          title: "MySql Certification",
          image:
            "https://altnix.com/_next/static/media/mySQL.d519545a.png",
          details:
            "Certification in MongoDB database administration, data modeling, aggregation framework, and performance optimization.",
          link: "https://drive.google.com/file/d/your-certificate-id/view",
        },
        figma: {
          title: "Figma UI/UX Design Certification",
          image:
            "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg",
          details:
            "Certification in Figma for UI/UX design, prototyping, design systems, and collaborative design workflows.",
          link: "https://www.figma.com/design/oclgUD4Auw3Unl2d60fEgM/siva?node-id=0-1&t=I2nPxByGB2hTbgHD-1",
        },
      };

      // Add click event to skill icons
      document.querySelectorAll(".skill-icon-box").forEach((box) => {
        box.addEventListener("click", () => {
          const certificateId = box.getAttribute("data-certificate");
          const certificate = certificates[certificateId];

          if (certificate) {
            certificateTitle.textContent = certificate.title;
            certificateImage.src = certificate.image;
            certificateDetails.innerHTML = `<p>${certificate.details}</p>`;
            certificateLink.href = certificate.link;

            certificateModal.classList.add("active");
          }
        });
      });

      // Close certificate modal
      certificateClose.addEventListener("click", () => {
        certificateModal.classList.remove("active");
      });

      // Close modal when clicking outside
      certificateModal.addEventListener("click", (e) => {
        if (e.target === certificateModal) {
          certificateModal.classList.remove("active");
        }
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "about") {
              animateCounters();
            }
            if (entry.target.id === "skills") {
              animateSkills();
            }
            entry.target.classList.add("animated");
          }
        });
      }, observerOptions);

      // Observe sections
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });

      // EmailJS Contact Form
      (function () {
        // Initialize EmailJS with your public key
        emailjs.init("C08gslK88_7fwjoAT"); // Replace with your actual EmailJS public key

        const contactForm = document.getElementById("contactForm");
        const formMessage = document.getElementById("formMessage");

        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          // Validate form
          if (!name || !email || !subject || !message) {
            showMessage("Please fill in all fields.", "error");
            return;
          }

          if (!validateEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
          }

          // Show loading state
          const submitBtn = contactForm.querySelector(".submit-btn");
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';
          submitBtn.disabled = true;

          // Send email using EmailJS
          emailjs
            .send("service_xzq4azh", "template_bantfoj", {
              from_name: name,
              from_email: email,
              subject: subject,
              message: message,
            })
            .then(
              function (response) {
                showMessage(
                  "Message sent successfully! I'll get back to you soon.",
                  "success"
                );
                contactForm.reset();
              },
              function (error) {
                showMessage(
                  "Failed to send message. Please try again later.",
                  "error"
                );
                console.error("EmailJS Error:", error);
              }
            )
            .finally(function () {
              // Reset button state
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
            });
        });

        function showMessage(text, type) {
          formMessage.textContent = text;
          formMessage.className = "form-message " + type;

          // Hide message after 5 seconds
          setTimeout(() => {
            formMessage.style.display = "none";
          }, 5000);
        }

        function validateEmail(email) {
          const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }
      })();
  









      