// Particles.js initialization
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ff6347' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ff6347', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    }
});

// Đặt âm lượng cho tất cả video trong mục "Dự án của tôi"
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.gallery-item video');
    videos.forEach(video => {
        video.volume = 0.1; // Đặt âm lượng 20%
        video.play().catch(error => {
            console.log("Không thể phát video do trình duyệt chặn: ", error);
        });
    });
});

// Đặt âm lượng và phát video khi người dùng nhấp vào trang (để vượt qua chính sách autoplay của trình duyệt)
document.addEventListener('click', () => {
    const videos = document.querySelectorAll('.gallery-item video');
    videos.forEach(video => {
        video.muted = false; // Bỏ chế độ muted
        video.volume = 0.1; // Đặt âm lượng 20%
        video.play().catch(error => {
            console.log("Không thể phát video do trình duyệt chặn: ", error);
        });
    });
});

// Smooth scroll
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Section animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
});

// Skills progress animation
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const progresses = document.querySelectorAll('.progress');
    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        progresses.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = '0%';
            setTimeout(() => progress.style.width = width, 100);
        });
    }
});

// Gallery carousel
const gallery = document.querySelector('.gallery-container');
const items = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < items.length - 3) { // Hiển thị 3 item mỗi lần
        index++;
        gallery.style.transform = `translateX(-${index * 220}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        gallery.style.transform = `translateX(-${index * 220}px)`;
    }
});

// Memories animation and effects
window.addEventListener('scroll', () => {
    const memoryItems = document.querySelectorAll('.memory-item');
    memoryItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.style.animation = 'fadeUp 1s ease-out';
        }
    });

    // Thêm hiệu ứng động cho từng memory-item khi hover
    memoryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.memory-img').style.animationPlayState = 'running';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.memory-img').style.animationPlayState = 'paused';
        });
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    this.reset();
});

// Avatar hover effect
const avatarContainer = document.querySelector('.avatar-container');
avatarContainer.addEventListener('mouseenter', () => {
    avatarContainer.style.transform = 'scale(1.1)';
});
avatarContainer.addEventListener('mouseleave', () => {
    avatarContainer.style.transform = 'scale(1)';
});

// Background music
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');
    audio.volume = 3.0; // Đặt âm lượng 100%
    audio.play().catch(error => {
        console.log("Không thể phát âm thanh do trình duyệt chặn: ", error);
    });

    // Phát âm thanh khi người dùng nhấp bất kỳ đâu trên trang
    document.addEventListener('click', function () {
        if (audio.paused) {
            audio.volume = 1.0; // Đảm bảo âm lượng 100%
            audio.play().catch(error => {
                console.log("Không thể phát âm thanh do trình duyệt chặn: ", error);
            });
        }
    });
});