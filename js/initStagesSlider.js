export const initStagesSlider = () => {
  const stagesSlides = document.querySelectorAll('.stages_list_wrapper');
  const stageBtnPrev = document.querySelector('.stages_btn_prev');
  const stageBtnNext = document.querySelector('.stages_btn_next');
  const dotsWrapper = document.querySelector('.dot_wrapper_btn');
  const dotsItems = document.querySelectorAll('.dot_btn');
  let stageCount = 0;

  const disabledBtn = (count, slides, btnPrev, btnNext) => {
    if (count === 0) {
      btnPrev.disabled = true;
      btnNext.disabled = false;
    } else if (count === slides.length - 1) {
      btnPrev.disabled = false;
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  };

  const changeDotsActive = (count, dots) => {
    dots.forEach((item) => {
      item.classList.remove('active');
    });
    dots[count].classList.add('active');
  };

  const changeSlide = (type) => {
    if (type === 'prev') {
      if (stageCount > 0) {
        stageCount--;
        stagesSlides.forEach((item) => {
          item.classList.remove('active');
        });
        stagesSlides[stageCount].classList.add('active');
        disabledBtn(stageCount, stagesSlides, stageBtnPrev, stageBtnNext);
        changeDotsActive(stageCount, dotsItems);
      }
    }

    if (type === 'next') {
      if (stageCount < stagesSlides.length - 1) {
        stageCount++;
        stagesSlides.forEach((item) => {
          item.classList.remove('active');
        });
        stagesSlides[stageCount].classList.add('active');
        disabledBtn(stageCount, stagesSlides, stageBtnPrev, stageBtnNext);
        changeDotsActive(stageCount, dotsItems);
      }
    }
  };

  disabledBtn(stageCount, stagesSlides, stageBtnPrev, stageBtnNext);

  if (stageBtnNext) {
    stageBtnNext.addEventListener('click', () => {
      changeSlide('next');
    });
  }

  if (stageBtnPrev) {
    stageBtnPrev.addEventListener('click', () => {
      changeSlide('prev');
    });
  }

  if (dotsWrapper) {
    dotsWrapper.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.dot_btn')) {
        stagesSlides.forEach((item) => {
          item.classList.remove('active');
        });
        const count = target.id - 1;
        changeDotsActive(count, dotsItems);
        stageCount = count;
        stagesSlides[count].classList.add('active');
        disabledBtn(stageCount, stagesSlides, stageBtnPrev, stageBtnNext);
      }
    });
  }
};
