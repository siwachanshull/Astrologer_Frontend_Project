import { useEffect, useState } from 'react'
import image1 from './images/Crousal-1.jpg'
import heroImg from './assets/hero.png'
import lovePhoto from './Services photos/couple fight photo.jpg'
import moneyPhoto from './Services photos/Money_photo.jpg'
import kundaliPhoto from './Services photos/Kundali_photo.jpg'
import childPhoto from './Services photos/Child Problem Photo.jpg'
import videoOne from './videos/aniket-clip1.mp4'
import videoTwo from './videos/aniket cllip_2.mp4'
import videoThree from './videos/anuket clip-3.mp4'
import videoFour from './videos/aniket clip-4.mp4'
import './App.css'

const slides = [
  { image: image1 },
  { image: heroImg },
  { image: image1 },
]

const videoCards = [
  { video: videoOne },
  { video: videoTwo },
  { video: videoThree },
  { video: videoFour },
]

const serviceCards = [
  {
    title: 'Love & Relationship',
    description:
      'Love, marriage, compatibility, relationship conflicts & family-related relationship concerns.',
    image: lovePhoto,
  },
  {
    title: 'Career & Business',
    description:
      'Job, career growth, business decisions, partnerships, financial & professional guidance.',
    image: moneyPhoto,
  },
  {
    title: 'Kundli & Life Analysis',
    description:
      'Detailed Kundli reading, Raj Yog, Dasha, planetary influences, life patterns & major life phases.',
    image: kundaliPhoto,
  },
  {
    title: 'Child & Family Guidance',
    description:
      'Important life decisions, family matters, upcoming opportunities/challenges, timing, foreign travel & personal concerns.',
    image: childPhoto,
  },
  {
    title: 'Financial Stability Solution',
    description:
      'Remedies and guidance for debt issues, money flow, wealth blockage, financial stress and steady income growth.',
    image: moneyPhoto,
  },
  {
    title: 'Kundali Dosh Remedies',
    description:
      'Effective solutions for dosh-related problems, planetary imbalances, marriage delays and obstacles in life.',
    image: kundaliPhoto,
  },
  {
    title: 'Vastu Consultation',
    description:
      'Home and office Vastu corrections for harmony, peace, prosperity, health, and positive energy flow.',
    image: lovePhoto,
  },
  {
    title: 'Intercaste Marriage Guidance',
    description:
      'Support and astrological guidance for family approvals, compatibility concerns and relationship harmony.',
    image: lovePhoto,
  },
  {
    title: 'Ex Love Back Guidance',
    description:
      'Astrological guidance for love reconnection, emotional healing, compatibility and restoring past relationship balance.',
    image: lovePhoto,
  },
]

const testimonials = [
  {
    quote: 'The guidance helped me understand my situation with much more clarity. I finally feel positive and confident about my next steps.',
    name: 'Riya S.',
    detail: 'Relationship Guidance',
  },
  {
    quote: 'My consultation was detailed, patient, and practical. The remedies were explained beautifully and brought peace to my family.',
    name: 'Amit K.',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleConsultationSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim() || 'Not provided'
    const phone = formData.get('phone')?.toString().trim() || 'Not provided'
    const consultationType = formData.get('consultationType')?.toString().trim() || 'Not provided'
    const query = formData.get('query')?.toString().trim() || 'Not provided'

    const subject = encodeURIComponent('New Consultation Request')
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nConsultation Type: ${consultationType}\n\nQuery:\n${query}`,
    )

    window.location.href = `mailto:astrologeraniketsharma795@gmail.com?subject=${subject}&body=${body}`
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
      </section>

      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-copy">
            <div className="section-heading">
              <span className="eyebrow">About Us</span>
              <h2>Parampara, Anubhav aur Aadhunik Soch</h2>
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
          <span>Book your Consultation — Slots are limited. Reserve yours now!!</span>
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
              <h3>Gold Medalist Astrologer</h3>
              <p>
                Recognised for excellence in astrology, with a disciplined and deeply analytical
                approach to understanding life patterns and solutions.
              </p>
            </article>

            <article className="why-box">
              <h3>Ex Love Back Guidance</h3>
              <p>
                Compassionate support for emotional healing, relationship clarity, and helping you
                reconnect with love in a respectful and practical way.
              </p>
            </article>

            <article className="why-box">
              <h3>Trusted Guidance</h3>
              <p>
                Honest advice, personalised recommendations, and spiritual support that bring peace,
                confidence, and direction in life’s most sensitive moments.
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

      <div className="floating-actions" aria-label="Quick contact buttons">
        <a className="floating-btn phone-btn" href="tel:+918076680440" aria-label="Call Aniket Sharma">
          <span className="icon">☎</span>
        </a>
        <a
          className="floating-btn whatsapp-btn"
          href="https://wa.me/918076680440?text=Hello%20Aniket%20Sharma"
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
