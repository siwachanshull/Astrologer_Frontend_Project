import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import banner1 from './images/banner1.jpeg'
import banner2 from './images/banner 2.jpeg'
import banner3 from './images/banner 3.jpeg'
import logo from './images/logo.jpeg'
import loveRelationshipImg from './Services photos/Love & Relationship Problem.png'
import marriageImg from './Services photos/marriage & Compatibility.png'
import careerImg from './Services photos/Career & Business Problem.png'
import kundaliImg from './Services photos/Kundli & Life Analysis.png'
import financeImg from './Services photos/Finance & Prosperity problem.png'
import futureImg from './Services photos/Future & Personal Guidance.png'
import childlessImg from './Services photos/childless couple.png'
import divorceImg from './Services photos/Divorce Problems.png'
import vashikaranImg from './Services photos/Vashikaran Specialist.png'
import videoOne from './videos/aniket-clip1.mp4'
import videoTwo from './videos/aniket cllip_2.mp4'
import videoThree from './videos/anuket clip-3.mp4'
import videoFour from './videos/aniket clip-4.mp4'
import './App.css'

const slides = [
  { image: banner1 },
  { image: banner2 },
  { image: banner3 },
]

const videoCards = [
  { video: videoOne },
  { video: videoTwo },
  { video: videoThree },
  { video: videoFour },
]

const serviceCards = [
  {
    title: '❤️ Love & Relationship Problem',
    description:
      'Expert astrological guidance for love matters, relationship conflicts, emotional healing, and resolving compatibility issues.',
    image: loveRelationshipImg,
  },
  {
    title: '💍 Marriage & Compatibility',
    description:
      'Comprehensive marriage compatibility analysis, pre-marriage consultations, and astrological remedies for successful unions.',
    image: marriageImg,
  },
  {
    title: '💼 Career & Business',
    description:
      'Job search guidance, career growth strategies, business decisions, partnerships analysis, and professional success remedies.',
    image: careerImg,
  },
  {
    title: '🔮 Kundli & Life Analysis',
    description:
      'Detailed Kundli reading, Raj Yog analysis, Dasha predictions, planetary influences, and major life phase guidance.',
    image: kundaliImg,
  },
  {
    title: '💰 Finance & Prosperity',
    description:
      'Financial guidance, wealth creation remedies, debt solutions, money flow improvement, and prosperity enhancement.',
    image: financeImg,
  },
  {
    title: '🪐 Future & Personal Guidance',
    description:
      'Personal growth guidance, future predictions, life decisions, opportunities and challenges forecasting, and timing analysis.',
    image: futureImg,
  },
  {
    title: 'Childless Couple',
    description:
      'Specialized astrological guidance and remedies for couples seeking children, fertility issues, and blessings consultation.',
    image: childlessImg,
  },
  {
    title: 'Divorce Problems Solution',
    description:
      'Astrological counseling for relationship issues, reconciliation guidance, legal solutions, and healing after separation.',
    image: divorceImg,
  },
  {
    title: 'Vashikaran Specialist',
    description:
      'Vashikaran services for relationship harmony, attraction enhancement, and spiritual remedies for personal relationships.',
    image: vashikaranImg,
  },
]

const testimonials = [
  {
    quote: 'मैं अपने रिश्ते को लेकर काफी परेशान और उलझन में थी। अनिकेत जी ने मेरी बात ध्यान से सुनी और कुंडली के अनुसार मेरी स्थिति को समझाया। बातचीत के बाद मुझे अपने रिश्ते को लेकर काफी स्पष्टता मिली। बहुत ही सहज और सकारात्मक मार्गदर्शन मिला।',
    name: 'रिया एस',
    detail: 'Relationship Guidance',
  },
  {
    quote: 'मेरी कुंडली का बहुत ही विस्तार से विश्लेषण किया गया और हर बात सरल भाषा में समझाई गई। करियर को लेकर जो असमंजस था, उसमें मुझे सही दिशा और काफी स्पष्टता मिली। परामर्श का अनुभव बहुत अच्छा रहा।',
    name: 'अमित के',
    detail: 'Kundli Consultation',
  },
  {
    quote: 'I received honest advice about my career and business decisions. The session gave me a clear direction at the right time.',
    name: 'Neha M.',
    detail: 'Career Guidance',
  },
  {
    quote: 'Aniket Ji listened carefully and understood the concerns behind my questions. The consultation was truly reassuring.',
    name: 'Pooja R.',
    detail: 'Marriage Guidance',
  },
  {
    quote: 'The reading was thoughtful and easy to understand. I appreciated the personal attention and the straightforward guidance.',
    name: 'Rahul T.',
    detail: 'Life Analysis',
  },
  {
    quote: 'A calm and respectful consultation that helped me look at my problems with a fresh perspective. Highly recommended.',
    name: 'Simran J.',
    detail: 'Personal Consultation',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handlePrevSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const handleNextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  const handleConsultationSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim() || ''
    const phone = formData.get('phone')?.toString().trim() || ''
    const consultationType = formData.get('consultationType')?.toString().trim() || ''
    const query = formData.get('query')?.toString().trim() || ''

    // Validate form
    if (!name || !phone || !consultationType || !query) {
      setSubmitStatus('Please fill all fields')
      return
    }

    try {
      setSubmitStatus('Sending...')
      
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'astrologeraniketsharma795@gmail.com',
          from_name: name,
          phone_number: phone,
          consultation_type: consultationType,
          message: query,
        }
      )

      setSubmitStatus('✓ Consultation request sent successfully!')
      form.reset()
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('Error sending request. Please try again.')
      setTimeout(() => setSubmitStatus(''), 3000)
    }
  }

  return (
    <main className="landing-page">
      <section className="hero-carousel" aria-label="Astrology banner carousel">
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}`}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            <img src={slide.image} alt="Astrology background" />
            <div className="slide-overlay" />
          </div>
        ))}

        <div className="carousel-dots" aria-label="Carousel navigation">
          {slides.map((slide, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={index === activeIndex ? 'dot active' : 'dot'}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-button carousel-button-prev"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          type="button"
          className="carousel-button carousel-button-next"
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>
      </section>

      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-copy">
            <div className="section-heading">
              <span className="eyebrow">About Us</span>
              <h2>Trusted Vedic Astrologer for Life, Love & Career Guidance</h2>
            </div>

            <p className="lead">
              Astrologer Aniket Sharma is a trusted name in the field of Astrology, with 12+ years
              of experience helping individuals understand their life, relationships, career and
              important life decisions through the study of astrology.
            </p>

            <p>
              Over the years, we have guided 10,000+ happy clients across India and worked with
              clients from different parts of the world, giving us experience in understanding
              diverse concerns, cultures and life situations.
            </p>

            <p>
              Humara approach sirf predictions tak limited nahi hai. We believe astrology should
              provide clarity, not fear. Isliye har consultation mein hum kundli aur planetary
              influences ko detail mein samajhne ke baad practical perspective ke saath guidance
              provide karte hain.
            </p>

            <p>
              Whether it’s Love &amp; Relationships, Marriage, Career, Business, Family matters,
              Life decisions or personal concerns, our aim is to help you understand the situation
              better and make more informed decisions.
            </p>

            

            
          </div>

          <aside className="consultation-card" aria-label="Consultation form">
            <h3>Book Your Consultation</h3>
            <form className="consultation-form" onSubmit={handleConsultationSubmit}>
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Your phone number" required />
              </label>
              <label>
                Consultation Type
                <select name="consultationType" defaultValue="" required>
                  <option value="" disabled>
                    Select topic
                  </option>
                  <option value="love">Love &amp; Relationships</option>
                  <option value="career">Career</option>
                  <option value="marriage">Marriage</option>
                  <option value="business">Business</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Your Query
                <textarea name="query" rows="4" placeholder="Tell us about your concern" required />
              </label>
              <button type="submit">Submit</button>
              {submitStatus && (
                <div className={`form-status ${submitStatus.includes('Error') || submitStatus.includes('Please') ? 'error' : 'success'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </aside>
        </div>

        <div className="video-grid" aria-label="Video testimonials">
          {videoCards.map(({ video }, index) => (
            <a
              key={`video-${index}`}
              href="https://www.instagram.com/astrologeraniketsharma"
              target="_blank"
              rel="noreferrer"
              className="video-card"
              aria-label="Visit Astrologer Aniket Sharma on Instagram"
            >
              <div className="video-box">
                <video muted autoPlay loop playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="promo-strip" aria-label="Booking announcement">
        <div className="promo-track">
          <span>क्या आप परेशान हैं! क्या आपके काम नहीं बन रहे? घर बैठे पायें जीवन की हर समस्या का समाधान +91 870 023 3051</span>
        </div>
      </div>

      <section className="services-section" aria-label="Our top services">
        <div className="services-header">
          <span className="eyebrow">Our Top Services</span>
        </div>

        <div className="services-grid">
          {serviceCards.map(({ title, description, image }) => (
            <article key={title} className="service-card">
              <img className="service-image" src={image} alt={title} />
              <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                  className="service-whatsapp-link"
                  href="https://wa.me/918700233051?text=Hello%20Aniket%20Sharma"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Chat on WhatsApp about ${title}`}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-choose-section" aria-label="Why choose Aniket Sharma">
        <div className="why-choose-inner">
          <h2>Why Choose Aniket Sharma?</h2>

          <div className="why-choose-grid">
            <article className="why-box">
              <h3>12+ Years of Astrological Experience</h3>
              <p>
                
Years of practical experience in Vedic Astrology, helping people understand their life patterns and make informed decisions.
              </p>
            </article>

            <article className="why-box">
              <h3>Personalised Guidance</h3>
              <p>
                Every consultation is approached individually, with guidance based on your unique Kundli, circumstances, and concerns.
              </p>
            </article>

            <article className="why-box">
              <h3>10,000+ Clients Guided</h3>
              <p>
                Trusted by thousands of clients across India and internationally for relationship, marriage, career, business, and personal guidance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials-section" aria-label="Client testimonials">
        <div className="testimonials-heading">
          <span className="eyebrow">Client Experiences</span>
          <h2>What People Say</h2>
        </div>

        <div className="testimonials-window">
          <div className="testimonials-track">
            {[0, 1].map((group) => (
              <div className="testimonial-group" key={group} aria-hidden={group === 1}>
                {testimonials.map(({ quote, name, detail }) => (
                  <article className="testimonial-card" key={`${group}-${name}`}>
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <p>“{quote}”</p>
                    <div className="testimonial-person">
                      <strong>{name}</strong>
                      <span>{detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="Aniket Sharma Logo" className="footer-logo" />
            <div>
              <strong>Aniket Sharma</strong>
              <span>Astrology Guidance &amp; Consultation</span>
            </div>
          </div>

          <div className="footer-socials" aria-label="Social media links">
            <a
              className="footer-social whatsapp-social"
              href="https://wa.me/918700233051?text=Hello%20Aniket%20Sharma"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp at +91 87002 33051"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.77 11.77 0 0 0 12.1 1a11.7 11.7 0 0 0-10.2 17.8L1 23l4.35-1.13A11.7 11.7 0 0 0 12.1 23a11.72 11.72 0 0 0 8.42-3.13 11.72 11.72 0 0 0 0-16.39ZM12.1 21.2a9.72 9.72 0 0 1-4.95-1.35l-.35-.2-2.58.67.68-2.51-.23-.36A9.72 9.72 0 1 1 12.1 21.2Zm5.39-7.12c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.91 1.14-.17.19-.33.22-.62.07-.29-.15-1.23-.46-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.3-.02-.46.13-.61.14-.14.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.61-.91-2.2-.24-.58-.49-.5-.66-.51l-.56-.01a1.08 1.08 0 0 0-.79.37c-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.08c.14.19 2.1 3.21 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.23-.68.23-1.26.16-1.38-.07-.12-.27-.19-.56-.34Z" />
              </svg>
              <span>+91 87002 33051</span>
            </a>

            <a
              className="footer-social"
              href="https://www.instagram.com/astrologeraniketsharma"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              className="footer-social"
              href="https://m.youtube.com/@astrologeraniketsharma?ra=m&fbclid=PARlRTSAT_s4FwZG9mAmZkaWQWUNYRmlPf-w7av1EPRZdsaWyilxOGYGV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp9t_H5j3eVnbpdMrF24JFBTsRStkTpFTRRwOxoCMkgng9RE5d33W6awkihgm_aem_4shyWxEXwDxiJ9KPsnbpqA"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.58 7.19a2.99 2.99 0 0 0-2.1-2.12C17.63 4.5 12 4.5 12 4.5s-5.63 0-7.48.57a2.99 2.99 0 0 0-2.1 2.12A31.4 31.4 0 0 0 1.85 12a31.4 31.4 0 0 0 .57 4.81 2.99 2.99 0 0 0 2.1 2.12c1.85.57 7.48.57 7.48.57s5.63 0 7.48-.57a2.99 2.99 0 0 0 2.1-2.12A31.4 31.4 0 0 0 22.15 12a31.4 31.4 0 0 0-.57-4.81ZM10.1 15.5v-7l5.9 3.5-5.9 3.5Z" fill="currentColor" />
              </svg>
              <span>YouTube</span>
            </a>

            <a
              className="footer-social"
              href="https://www.facebook.com/Astrologeraniketsharma"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          <div className="footer-services-section">
            <p className="services-provided-label">Services Provided In</p>
            <div className="footer-flags" aria-label="Countries we serve">
              <img src="https://flagcdn.com/w80/in.png" alt="India" className="flag-circle" title="India" />
              <img src="https://flagcdn.com/w80/cn.png" alt="China" className="flag-circle" title="China" />
              <img src="https://flagcdn.com/w80/us.png" alt="United States" className="flag-circle" title="United States" />
              <img src="https://flagcdn.com/w80/de.png" alt="Germany" className="flag-circle" title="Germany" />
              <img src="https://flagcdn.com/w80/gb.png" alt="United Kingdom" className="flag-circle" title="United Kingdom" />
              <img src="https://flagcdn.com/w80/ru.png" alt="Russia" className="flag-circle" title="Russia" />
              <img src="https://flagcdn.com/w80/au.png" alt="Australia" className="flag-circle" title="Australia" />
              <img src="https://flagcdn.com/w80/ca.png" alt="Canada" className="flag-circle" title="Canada" />
            </div>
          </div>
        </div>
        <p className="footer-disclaimer">
          Disclaimer: Astrology is a traditional guidance system and should not be considered a substitute for professional medical, legal, or financial advice. Results may vary based on individual circumstances.
        </p>
        <p className="footer-copyright">&copy; {new Date().getFullYear()} Aniket Sharma. All rights reserved.</p>
      </footer>

      <div className="floating-actions" aria-label="Quick contact buttons">
        <a className="floating-btn phone-btn" href="tel:+918076680440" aria-label="Call Aniket Sharma">
          <span className="icon">☎</span>
        </a>
        <a
          className="floating-btn whatsapp-btn"
          href="https://wa.me/918700233051?text=Hello%20Aniket%20Sharma"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp icon">
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12.1 1a11.7 11.7 0 0 0-10.2 17.8L1 23l4.35-1.13A11.7 11.7 0 0 0 12.1 23a11.72 11.72 0 0 0 8.42-3.13 11.72 11.72 0 0 0 0-16.39ZM12.1 21.2a9.72 9.72 0 0 1-4.95-1.35l-.35-.2-2.58.67.68-2.51-.23-.36A9.72 9.72 0 1 1 12.1 21.2Zm5.39-7.12c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.91 1.14-.17.19-.33.22-.62.07-.29-.15-1.23-.46-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.3-.02-.46.13-.61.14-.14.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.61-.91-2.2-.24-.58-.49-.5-.66-.51l-.56-.01a1.08 1.08 0 0 0-.79.37c-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.08c.14.19 2.1 3.21 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.23-.68.23-1.26.16-1.38-.07-.12-.27-.19-.56-.34Z" />
            </svg>
          </span>
        </a>
      </div>
    </main>
  )
}

export default App
