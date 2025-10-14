// Anime Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to anime cards
    const animeCards = document.querySelectorAll('.anime-card');
    animeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Character card interactions
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterName = this.querySelector('h3').textContent;
            showCharacterQuote(characterName);
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

// Global functions
function exploreAnime() {
    const animeSection = document.getElementById('anime');
    animeSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add a fun animation
    const cards = document.querySelectorAll('.anime-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'bounce 0.6s ease';
        }, index * 100);
    });
}

function shareAnime() {
    if (navigator.share) {
        navigator.share({
            title: 'Anime World',
            text: 'Check out this awesome anime website!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Website URL copied to clipboard! 📋');
        });
    }
}

function joinCommunity() {
    alert('Join our anime community! 🎌\n\nFollow us on social media for the latest anime news and discussions!');
}

function showCharacterQuote(characterName) {
    const quotes = {
        'Naruto Uzumaki': 'Believe it! I\'m gonna be Hokage someday!',
        'Eren Yeager': 'I will destroy all the titans and free humanity!',
        'Tanjiro Kamado': 'I will save my sister and defeat all demons!',
        'Izuku Midoriya': 'I will become the greatest hero and save everyone!'
    };
    
    const quote = quotes[characterName] || 'Anime characters inspire us to never give up!';
    alert(`${characterName}: "${quote}"`);
}

// Add some CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        60% { transform: translateY(-10px); }
    }
    
    .anime-card:hover .anime-placeholder {
        animation: spin 1s ease-in-out;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
