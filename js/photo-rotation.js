const photoContainer = document.querySelector('.photo-container');
const bgMusic = document.getElementById('bg-music');
let isRotating = true;

photoContainer.addEventListener('click', () => {
    if (isRotating) {
        photoContainer.classList.remove('rotate');
        bgMusic.pause(); // 暂停音乐
    } else {
        photoContainer.classList.add('rotate');
        bgMusic.play(); // 播放音乐
    }
    isRotating = !isRotating;
});

// 页面加载时开始旋转
//photoContainer.classList.add('rotate');
//bgMusic.play(); // 页面加载时开始播放音乐