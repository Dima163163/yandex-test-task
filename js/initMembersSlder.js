export const initMembersSlider = () => {
  const membersSlider = document.querySelector('.members_slider');
  console.log('membersSlider: ', membersSlider.scrollWidth);
  const memberSlides = document.querySelectorAll('.member_slider_card');
  const btnNext = document.querySelector('.members_btn_next');
  const btnPrev = document.querySelector('.members_btn_prev');
  const currentNumb = document.querySelector(
    '.members_slide_count_text_current'
  );
  const widthSlide = parseInt(getComputedStyle(memberSlides[0]).width);
  const marginRightSlide = parseInt(
    getComputedStyle(memberSlides[0]).marginRight
  );
  const totalWidthSlide = widthSlide + marginRightSlide;

  let startCountSlide = 3;
  let countSlide = 0;

  const activeSlideCountHandler = () => {
    if (document.body.clientWidth > 1199) {
      startCountSlide = 3;
    } else if (
      document.body.clientWidth < 1199 &&
      document.body.clientWidth > 960
    ) {
      startCountSlide = 2;
    } else {
      startCountSlide = 1;
    }

    if (!countSlide) {
      countSlide = startCountSlide;
    } else {
      countSlide = countSlide;
    }

    currentNumb.textContent = countSlide;
  };

  activeSlideCountHandler();

  window.addEventListener('resize', () => {
    activeSlideCountHandler();
  });

  const slidesHandler = (type) => {
    if (type === 'next') {
      if (countSlide < memberSlides.length) {
        membersSlider.scrollBy({ left: totalWidthSlide, behavior: 'smooth' });
        countSlide++;
        currentNumb.textContent = countSlide;
      } else {
        membersSlider.scrollTo({ left: 0, behavior: 'smooth' });
        countSlide = startCountSlide;
        currentNumb.textContent = countSlide;
      }
    }
    if (type === 'prev') {
      if (countSlide > startCountSlide) {
        membersSlider.scrollBy({ left: -totalWidthSlide, behavior: 'smooth' });
        countSlide--;
        currentNumb.textContent = countSlide;
      } else {
        membersSlider.scrollTo({
          left: membersSlider.scrollWidth,
          behavior: 'smooth'
        });
        countSlide = memberSlides.length;
        currentNumb.textContent = countSlide;
      }
    }
  };

  btnNext.addEventListener('click', () => {
    slidesHandler('next');
  });

  btnPrev.addEventListener('click', () => {
    slidesHandler('prev');
  });

  setInterval(() => {
    slidesHandler('next');
  }, 4000);
};
