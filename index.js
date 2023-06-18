import gsap from 'gsap';
((gsap) => {
  let time = 1;

  console.log('gsapski', gsap);
  const startPosition = { x: 730, y: 350 };
  const imageContainer = document.querySelector('.static-image');
  imageContainer.style.backgroundImage = "src('NORLYS3328.png')";
  imageContainer.style.backgroundScale = 'cover';
  imageContainer.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY, e);
    startPosition.x = e.clientX;
    startPosition.y = e.clientY;
  });
  const iconPaths = ['wifi.svg', 'thumbs.svg'];

  animateIcon(1.3);

  function animateIcon(t = 1) {
    let icon = document.createElement('div');
    icon.classList.add('animated-icon');
    icon.style.backgroundImage = `url(${
      iconPaths[Math.floor(Math.random() * iconPaths.length)]
    })`;
    icon.style.backgroundScale = 'cover';
    icon.style.position = 'absolute';
    imageContainer.appendChild(icon);

    const iconAnimTimeline = gsap.timeline({
      onComplete: () => {
        console.log('tl complete');
        gsap.imageContainer.removeChild(icon);
        icon = null;
      },
    });
    const scale = 0.8 + Math.random() * 0.4;
    const off = 0;
    iconAnimTimeline.set(icon, { x: startPosition.x, y: startPosition.y });
    iconAnimTimeline.add(() => {
      animateIcon(0.5 + Math.random() * 3);
    }, 0.5 + Math.random() * 2);
    iconAnimTimeline.fromTo(
      icon,
      { scaleX: 0 },
      { scaleX: scale, ease: 'elastic', duration: 0.8 + Math.random() * 0.2 },
      off
    );
    iconAnimTimeline.fromTo(
      icon,
      { scaleY: 0 },
      { scaleY: scale, ease: 'elastic', duration: 1 + Math.random() * 0.3 },
      off
    );
    iconAnimTimeline.to(
      icon,
      {
        x: ['+=', '-='][Math.random() > 0.5 ? 1 : 0] + 10 + Math.random() * 10,
        ease: 'sine.inOut',
        repeat: Math.round(1 + Math.random() * 5),
        yoyo: true,
        duration: 1.4 + Math.random() * 1.6,
      },
      off
    );
    iconAnimTimeline.fromTo(
      icon,
      { rotate: -10 },
      {
        rotate: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        duration: 0.2 + Math.random() * 1.5,
      },
      off
    );
    iconAnimTimeline.to(icon, { y: -50, duration: 7 }, off);
    iconAnimTimeline.to(
      icon,
      {
        opacity: 0,
        duration: 1 + Math.random() * 2,
        delay: 0.8 + Math.random() * 1.6,
      },
      off
    );
  }
})(gsap);
