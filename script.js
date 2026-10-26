/**
 * Learnify Public School - Interactive Frontend Logic
 * Location: Ganj Basoda, Madhya Pradesh
 * Motto: Learn with Fun (Play Group to Class 8th)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     0. BILINGUAL LANGUAGE SWITCHER & I18N INITIALIZATION
     -------------------------------------------------------------------------- */
  const initLanguage = () => {
    if (typeof window.applyLanguage === 'function') {
      const initialLang = typeof window.getSavedLanguage === 'function' ? window.getSavedLanguage() : 'en';
      window.applyLanguage(initialLang);
    }

    // Attach click listeners to all language switcher buttons
    const langButtons = document.querySelectorAll('[data-lang-code]');
    langButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang-code');
        if (selectedLang && typeof window.applyLanguage === 'function') {
          window.applyLanguage(selectedLang);
        }
      });
    });
  };

  initLanguage();

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
    if (lightboxCounter) {
      const isHindi = typeof window.getCurrentLanguage === 'function' && window.getCurrentLanguage() === 'hi';
      lightboxCounter.textContent = isHindi 
        ? `${activeGalleryItems.length} में से ${index + 1}` 
        : `${index + 1} of ${activeGalleryItems.length}`;
    }
  };

  // Re-render open lightbox content on language change
  window.addEventListener('learnify:languageChanged', () => {
    if (lightboxModal && lightboxModal.style.display === 'flex') {
      updateLightboxContent(currentPhotoIndex);
    }
  });

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
     5. DYNAMIC FORM STREAMLINING CONTROLLER (#admissionInquiryForm)
     -------------------------------------------------------------------------- */
  const initAdmissionFormController = () => {
    const form = document.getElementById('admissionInquiryForm') || document.getElementById('admission-form');
    if (!form) return;

    // Field element selectors with robust fallbacks
    const parentNameInput = document.getElementById('parentName') || document.getElementById('parent-name');
    const mobileNumberInput = document.getElementById('mobileNumber') || document.getElementById('contact-phone');
    const childAgeInput = document.getElementById('childAge') || document.getElementById('child-age');
    const selectedGradeSelect = document.getElementById('selectedGrade') || document.getElementById('target-grade');
    const transportNotesInput = document.getElementById('transportNotes') || document.getElementById('inquiry-message');

    // UI Buttons and Feedback Elements
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

    // Modal elements
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalParentName = document.getElementById('modal-parent-name');
    const modalChildGrade = document.getElementById('modal-child-grade');
    const modalPhone = document.getElementById('modal-phone');
    const modalWaLink = document.getElementById('modal-whatsapp-link');

    // Field-level error containers
    const parentNameError = document.getElementById('parentName-error') || document.getElementById('parent-name-error');
    const mobileNumberError = document.getElementById('mobileNumber-error') || document.getElementById('contact-phone-error');
    const childAgeError = document.getElementById('childAge-error') || document.getElementById('child-age-error');
    const selectedGradeError = document.getElementById('selectedGrade-error') || document.getElementById('target-grade-error');

    // Dynamic sanitization helper: strips HTML tags and escapes special characters
    const sanitizeInput = (val) => {
      if (typeof val !== 'string') return '';
      return val
        .replace(/<[^>]*>/g, '')
        .replace(/[<>&"']/g, (match) => {
          const map = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' };
          return map[match] || match;
        })
        .trim();
    };

    const clearFieldErrors = () => {
      [parentNameError, mobileNumberError, childAgeError, selectedGradeError].forEach((el) => {
        if (el) el.textContent = '';
      });
      [parentNameInput, mobileNumberInput, childAgeInput, selectedGradeSelect].forEach((input) => {
        if (input) input.classList.remove('is-invalid');
      });
    };

    const validateForm = () => {
      let isValid = true;
      clearFieldErrors();

      // 1. Parent Name Validation (min 3 chars)
      const rawName = parentNameInput ? parentNameInput.value.trim() : '';
      if (!rawName || rawName.length < 3) {
        if (parentNameError) {
          parentNameError.textContent = typeof window.t === 'function'
            ? window.t('val_name_error')
            : 'Please enter a valid parent or guardian name (minimum 3 characters).';
        }
        if (parentNameInput) parentNameInput.classList.add('is-invalid');
        isValid = false;
      }

      // 2. Mobile Number Validation (10-digit mobile number)
      const rawPhone = mobileNumberInput ? mobileNumberInput.value.trim().replace(/\D/g, '') : '';
      const general10Digit = /^\d{10}$/;

      if (!rawPhone) {
        if (mobileNumberError) {
          mobileNumberError.textContent = typeof window.t === 'function'
            ? window.t('val_phone_required')
            : 'Contact mobile number is required.';
        }
        if (mobileNumberInput) mobileNumberInput.classList.add('is-invalid');
        isValid = false;
      } else if (!general10Digit.test(rawPhone)) {
        if (mobileNumberError) {
          mobileNumberError.textContent = typeof window.t === 'function'
            ? window.t('val_phone_invalid')
            : 'Please enter a valid 10-digit mobile number.';
        }
        if (mobileNumberInput) mobileNumberInput.classList.add('is-invalid');
        isValid = false;
      }

      // 3. Child Age Validation (2 - 15 years)
      const rawAge = childAgeInput ? parseInt(childAgeInput.value.trim(), 10) : 0;
      if (!rawAge || isNaN(rawAge) || rawAge < 2 || rawAge > 15) {
        if (childAgeError) {
          childAgeError.textContent = typeof window.t === 'function'
            ? window.t('val_age_error')
            : 'Child age must be between 2 and 15 years.';
        }
        if (childAgeInput) childAgeInput.classList.add('is-invalid');
        isValid = false;
      }

      // 4. Grade Selection Validation
      const rawGrade = selectedGradeSelect ? selectedGradeSelect.value : '';
      if (!rawGrade) {
        if (selectedGradeError) {
          selectedGradeError.textContent = typeof window.t === 'function'
            ? window.t('val_grade_error')
            : 'Please select an academic grade.';
        }
        if (selectedGradeSelect) selectedGradeSelect.classList.add('is-invalid');
        isValid = false;
      }

      return isValid;
    };

    // Attach submit event listener to the form
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // UI Loading Feedback
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) {
        btnText.textContent = typeof window.t === 'function'
          ? window.t('val_submitting')
          : 'Connecting to WhatsApp...';
      }
      if (btnSpinner) btnSpinner.style.display = 'inline-block';

      // Gather and dynamically sanitize input values from identifiers:
      // #parentName, #mobileNumber, #childAge, #selectedGrade, #transportNotes
      const parentName = sanitizeInput(parentNameInput ? parentNameInput.value : '');
      const mobileNumber = sanitizeInput(mobileNumberInput ? mobileNumberInput.value : '').replace(/\D/g, '');
      const childAge = sanitizeInput(childAgeInput ? childAgeInput.value : '');
      const selectedGrade = sanitizeInput(selectedGradeSelect ? selectedGradeSelect.value : '');
      const transportNotes = sanitizeInput(transportNotesInput ? transportNotesInput.value : '');

      // Direct WhatsApp Line for LPS Admissions Desk
      const targetWhatsAppLine = '919406037165';
      const isHindi = typeof window.getCurrentLanguage === 'function' && window.getCurrentLanguage() === 'hi';

      // Professional, pre-formatted multi-line template string
      const messageLines = isHindi
        ? [
            `*नया प्रवेश पूछताछ (New Admission Inquiry) - Learnify Public School*`,
            `----------------------------------------`,
            `👤 *अभिभावक का नाम (Parent Name):* ${parentName}`,
            `📞 *मोबाइल नंबर (Contact Number):* +91 ${mobileNumber}`,
            `🎂 *बच्चे की आयु (Child's Age):* ${childAge} वर्ष (Years)`,
            `📚 *कक्षा (Grade Applying For):* ${selectedGrade}`,
            transportNotes ? `🚌 *परिवहन / नोट्स (Transport & Notes):* ${transportNotes}` : `🚌 *परिवहन / नोट्स (Transport & Notes):* परिसर पूछताछ (No specific bus notes)`,
            `📅 *शैक्षणिक सत्र (Session):* 2026–2027`,
            `🏫 *कैंपस:* त्योदा रोड, होटल योगेश्वरी के सामने, गंज बासोदा`,
            `----------------------------------------`,
            `कृपया प्रवेश प्रक्रिया, शुल्क संरचना एवं स्कूल भ्रमण (Campus Visit) का समय साझा करें।`
          ]
        : [
            `*New Admission Inquiry - Learnify Public School, Ganj Basoda*`,
            `----------------------------------------`,
            `👤 *Parent / Guardian Name:* ${parentName}`,
            `📞 *Contact Number:* +91 ${mobileNumber}`,
            `🎂 *Child's Age:* ${childAge} Years`,
            `📚 *Grade Applying For:* ${selectedGrade}`,
            transportNotes ? `🚌 *Transport / Notes:* ${transportNotes}` : `🚌 *Transport / Notes:* Campus inquiry (No special route notes)`,
            `📅 *Academic Session:* 2026–2027`,
            `🏫 *Campus:* Tyonda Road, Opp. Hotel Yogeshwari, Ganj Basoda`,
            `----------------------------------------`,
            `Please share fee structure details, admission guidelines, and campus visit schedule.`
          ];

      const formattedMessage = messageLines.join('\n');
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappEndpointUrl = `https://wa.me/${targetWhatsAppLine}?text=${encodedMessage}`;

      // Programmatic Fallback Handling:
      // Try opening in a new tab via window.open; if a popup blocker interrupts or returns null/closed,
      // fallback to direct viewport navigation via window.location.href.
      let popupSuccessful = false;
      try {
        const popupWin = window.open(whatsappEndpointUrl, '_blank', 'noopener,noreferrer');
        if (popupWin && !popupWin.closed && typeof popupWin.closed !== 'undefined') {
          popupSuccessful = true;
        }
      } catch (err) {
        popupSuccessful = false;
      }

      if (!popupSuccessful) {
        // Fallback directly to window.location.href
        setTimeout(() => {
          window.location.href = whatsappEndpointUrl;
        }, 300);
      }

      // Populate Success Modal Details
      if (modalParentName) modalParentName.textContent = parentName;
      if (modalChildGrade) modalChildGrade.textContent = selectedGrade;
      if (modalPhone) modalPhone.textContent = `+91 ${mobileNumber}`;
      if (modalWaLink) modalWaLink.href = whatsappEndpointUrl;

      if (successModal) {
        successModal.style.display = 'flex';
        if (modalWaLink) {
          modalWaLink.focus();
        } else if (closeModalBtn) {
          closeModalBtn.focus();
        }
      }

      // Full reset call invoked on form fields immediately following processing execution
      form.reset();
      clearFieldErrors();

      // Restore submit button state after execution
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) {
          btnText.textContent = typeof window.t === 'function'
            ? window.t('form_submit_btn')
            : 'Submit Inquiry via WhatsApp';
        }
        if (btnSpinner) btnSpinner.style.display = 'none';
      }, 800);
    });

    // Real-time error dismissal when user interacts with inputs
    [parentNameInput, mobileNumberInput, childAgeInput, selectedGradeSelect].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
          const errorSpan = document.getElementById(`${input.id}-error`) || document.getElementById(`${input.name}-error`);
          if (errorSpan) errorSpan.textContent = '';
        });
      }
    });
  };

  initAdmissionFormController();

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
