let lastScrollPosition = window.scrollY;

function handleScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    console.log('User Is Scrolling down...');
  } else if (currentScrollPosition < lastScrollPosition) {
    console.log('User Is Scrolling up...');
  } else {
    console.log('Not scrolling.');
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);
