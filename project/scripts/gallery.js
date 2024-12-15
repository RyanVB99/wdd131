document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('photos');
    const imagePaths = [
        'images/AmuseClose.webp',
        'images/BliniClose.webp',
        'images/FruitPlatter.webp',
        'images/GlassClose.webp',
        'images/GreenApple.webp',
        'images/HighLife.webp',
        'images/HorsDouevreClose.webp',
        'images/KinCake.webp',
        'images/KinDumplings.webp',
        'images/KinPalate.webp',
        'images/KinSalad.webp',
        'images/KinSalad2.webp',
        'images/KinSoup.webp',
        'images/MignPlated.webp',
        'images/MySalad.webp',
        'images/PlaceSetting.webp',
        'images/PorcettaPlated.webp',
        'images/SettingWide.webp',
        'images/WellingtonPlated.webp'
    ];

    const loadImages = () => {
        container.innerHTML = '';
        imagePaths.forEach(path => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = 'Gallery Image';
            img.classList.add('grid-item');
            img.loading = 'lazy';
            container.appendChild(img);
        });
    };

    loadImages();

    document.getElementById('filter-wide').addEventListener('click', () => {
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            img.style.display = img.naturalWidth > img.naturalHeight ? 'block' : 'none';
        });
    });

    document.getElementById('filter-tall').addEventListener('click', () => {
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            img.style.display = img.naturalWidth < img.naturalHeight ? 'block' : 'none';
        });
    });

    document.getElementById('filter-all').addEventListener('click', () => {
        loadImages();
    });
});
