/**
 * Learnify Public School - Interactive Frontend Logic
 * Location: Ganj Basoda, Madhya Pradesh
 * Motto: Learn with Fun (Play Group to Class 8th)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. STICKY NAVBAR SCROLL EFFECT
     -------------------------------------------------------------------------- */
  const header = document.getElementById('site-header');

  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run initially on page load

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION HAMBURGER MENU TOGGLE
     -------------------------------------------------------------------------- */
  const menuToggle = document.getElementById('menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    primaryNav.classList.toggle('open');
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
    primaryNav.classList.remove('open');
  };

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('open')) {
          closeMenu();
        }
      });
    });

    // Close menu when pressing the Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu when clicking outside of navbar
    document.addEventListener('click', (e) => {
      if (
        primaryNav.classList.contains('open') &&
        !primaryNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. ACTIVE SECTION HIGHLIGHTING (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* --------------------------------------------------------------------------
     3B. INTERACTIVE CAMPUS GALLERY FILTER TABS
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterButtons.length > 0 && galleryCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active tab button
        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const selectedFilter = btn.getAttribute('data-filter');

        // Filter cards with smooth visibility toggle
        galleryCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedFilter === 'all' || cardCategory === selectedFilter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     3C. INTERACTIVE LIGHTBOX MODAL (KEYBOARD, TOUCH & ARROWS)
     -------------------------------------------------------------------------- */
  const lightboxModal = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-active-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const lightboxPrevBtn = document.getElementById('lightbox-prev');
  const lightboxNextBtn = document.getElementById('lightbox-next');

  let activeGalleryItems = [];
  let currentPhotoIndex = 0;

  const updateLightboxContent = (index) => {
    if (!activeGalleryItems[index]) return;
    const card = activeGalleryItems[index];
    const img = card.querySelector('img');
    const title = card.querySelector('.gallery-img-title');
    const caption = card.querySelector('.gallery-img-caption');
    const categoryPill = card.querySelector('.gallery-category-pill');

    if (lightboxImg && img) {
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightboxImg.style.opacity = '1';
      }, 100);
    }

    if (lightboxTitle && title) lightboxTitle.textContent = title.textContent;
    if (lightboxDesc && caption) lightboxDesc.textContent = caption.textContent;
    if (lightboxCategory && categoryPill) lightboxCategory.textContent = categoryPill.textContent;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} of ${activeGalleryItems.length}`;
  };

  const openLightbox = (card) => {
    // Collect all currently visible (non-hidden) gallery cards
    activeGalleryItems = Array.from(galleryCards).filter((c) => !c.classList.contains('hidden'));
    const index = activeGalleryItems.indexOf(card);
    currentPhotoIndex = index >= 0 ? index : 0;

    updateLightboxContent(currentPhotoIndex);

    if (lightboxModal) {
      lightboxModal.style.display = 'flex';
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    }
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.style.display = 'none';
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  const showNextPhoto = () => {
    if (activeGalleryItems.length === 0) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % activeGalleryItems.length;
    updateLightboxContent(currentPhotoIndex);
  };

  const showPrevPhoto = () => {
    if (activeGalleryItems.length === 0) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent(currentPhotoIndex);
  };

  // Attach card click handlers
  galleryCards.forEach((card) => {
    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card);
      }
    });
  });

  // Modal navigation & controls
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevPhoto);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightboxModal.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextPhoto();
        if (e.key === 'ArrowLeft') showPrevPhoto();
      }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          showNextPhoto(); // Swiped left -> next
        } else {
          showPrevPhoto(); // Swiped right -> prev
        }
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     4. FAQ ACCORDION INTERACTIVITY
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close all other accordion items for clean accordion behavior
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isAlreadyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open the first FAQ item by default for initial engagement
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
    const firstTrigger = faqItems[0].querySelector('.faq-trigger');
    if (firstTrigger) firstTrigger.setAttribute('aria-expanded', 'true');
  }

  /* --------------------------------------------------------------------------
     5. ADMISSION INQUIRY FORM VALIDATION & SUBMISSION
     -------------------------------------------------------------------------- */
  const admissionForm = document.getElementById('admission-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

  // Modal Elements
  const successModal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalParentName = document.getElementById('modal-parent-name');
  const modalChildGrade = document.getElementById('modal-child-grade');
  const modalPhone = document.getElementById('modal-phone');

  // Input Field References
  const parentNameInput = document.getElementById('parent-name');
  const contactPhoneInput = document.getElementById('contact-phone');
  const childAgeInput = document.getElementById('child-age');
  const targetGradeSelect = document.getElementById('target-grade');
  const inquiryMessageInput = document.getElementById('inquiry-message');

  // Error Text Elements
  const parentNameError = document.getElementById('parent-name-error');
  const contactPhoneError = document.getElementById('contact-phone-error');
  const childAgeError = document.getElementById('child-age-error');
  const targetGradeError = document.getElementById('target-grade-error');

  const clearErrors = () => {
    [parentNameError, contactPhoneError, childAgeError, targetGradeError].forEach((el) => {
      if (el) el.textContent = '';
    });
    [parentNameInput, contactPhoneInput, childAgeInput, targetGradeSelect].forEach((input) => {
      if (input) input.classList.remove('is-invalid');
    });
  };

  const validateForm = () => {
    let isValid = true;
    clearErrors();

    // 1. Parent Name Validation
    const nameVal = parentNameInput.value.trim();
    if (!nameVal || nameVal.length < 3) {
      parentNameError.textContent = 'Please provide a valid full parent name (min 3 characters).';
      parentNameInput.classList.add('is-invalid');
      isValid = false;
    }

    // 2. Phone Validation (10 digits)
    const phoneVal = contactPhoneInput.value.trim();
    const phoneRegex = /^[6-9]\d{9}$/; // Standard 10-digit Indian Mobile Pattern starting 6-9
    const general10Digit = /^\d{10}$/;

    if (!phoneVal) {
      contactPhoneError.textContent = 'Contact number is required.';
      contactPhoneInput.classList.add('is-invalid');
      isValid = false;
    } else if (!general10Digit.test(phoneVal)) {
      contactPhoneError.textContent = 'Please enter a valid 10-digit phone number without spaces or symbols.';
      contactPhoneInput.classList.add('is-invalid');
      isValid = false;
    }

    // 3. Child Age Validation
    const ageVal = parseInt(childAgeInput.value, 10);
    if (!ageVal || isNaN(ageVal) || ageVal < 2 || ageVal > 15) {
      childAgeError.textContent = 'Enter child age between 2 and 15 years.';
      childAgeInput.classList.add('is-invalid');
      isValid = false;
    }

    // 4. Target Grade Selection
    const gradeVal = targetGradeSelect.value;
    if (!gradeVal) {
      targetGradeError.textContent = 'Please select the grade you are applying for.';
      targetGradeSelect.classList.add('is-invalid');
      isValid = false;
    }

    return isValid;
  };

  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // Enter Loading State
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Connecting to WhatsApp...';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';

      // Capture entered values
      const enteredParent = parentNameInput ? parentNameInput.value.trim() : '';
      const enteredPhone = contactPhoneInput ? contactPhoneInput.value.trim() : '';
      const enteredAge = childAgeInput ? childAgeInput.value.trim() : '';
      const enteredGrade = targetGradeSelect ? targetGradeSelect.value : '';
      const enteredNotes = inquiryMessageInput ? inquiryMessageInput.value.trim() : '';

      // Format WhatsApp Message for Direct Dispatch
      const schoolWhatsAppNumber = '919406037165';
      const waText = 
        `*New Admission Inquiry - Learnify Public School*\n` +
        `----------------------------------------\n` +
        `👤 *Parent Name:* ${enteredParent}\n` +
        `📞 *Contact Number:* +91 ${enteredPhone}\n` +
        `🎂 *Child's Age:* ${enteredAge} Years\n` +
        `📚 *Grade Applying For:* ${enteredGrade}\n` +
        (enteredNotes ? `💬 *Notes / Transport:* ${enteredNotes}\n` : ``) +
        `📅 *Session:* 2026-27\n` +
        `----------------------------------------\n` +
        `Please share admission guidelines and schedule our campus visit.`;

      const whatsappUrl = `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(waText)}`;

      // Direct WhatsApp Transmission
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.warn('Popup blocked, modal provides manual link fallback.', err);
      }

      setTimeout(() => {
        // Reset button states
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Submit Inquiry via WhatsApp';
        if (btnSpinner) btnSpinner.style.display = 'none';

        // Populate and open success modal
        if (modalParentName) modalParentName.textContent = enteredParent;
        if (modalChildGrade) modalChildGrade.textContent = enteredGrade;
        if (modalPhone) modalPhone.textContent = `+91 ${enteredPhone}`;

        const modalWaLink = document.getElementById('modal-whatsapp-link');
        if (modalWaLink) {
          modalWaLink.href = whatsappUrl;
        }

        if (successModal) {
          successModal.style.display = 'flex';
          if (modalWaLink) {
            modalWaLink.focus();
          } else if (closeModalBtn) {
            closeModalBtn.focus();
          }
        }

        // Reset form inputs
        admissionForm.reset();
        clearErrors();
      }, 600);
    });

    // Clear field-level error dynamically when user types
    [parentNameInput, contactPhoneInput, childAgeInput, targetGradeSelect].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
          const errorSpan = document.getElementById(`${input.id}-error`);
          if (errorSpan) errorSpan.textContent = '';
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. SUCCESS MODAL CONTROLS
     -------------------------------------------------------------------------- */
  const hideSuccessModal = () => {
    if (successModal) {
      successModal.style.display = 'none';
    }
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideSuccessModal);
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        hideSuccessModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successModal.style.display === 'flex') {
        hideSuccessModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. DYNAMIC COPYRIGHT YEAR
     -------------------------------------------------------------------------- */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
