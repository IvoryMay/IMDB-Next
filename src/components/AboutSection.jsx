import React from 'react'

const AboutSection = () => {
  return (
    <section>
        <h1 className='text-2xl text-amber-400 mb-6'>About</h1>
        <p className="mb-4">
  This IMDB clone is a modern web application built to explore and discover movies with ease.
  Designed with a clean, user-friendly interface, it provides quick access to movie details,
  ratings, trailers, and cast information. The project aims to recreate the core experience of
  popular movie databases while showcasing a performance-focused and visually appealing design.
</p>

<p className="mb-4">
  The application is built with <strong>Next.js</strong> for lightning-fast rendering, seamless
  routing, and SEO-friendly pages. <strong>Tailwind CSS</strong> powers the UI with flexible,
  responsive, utility-based styling, ensuring a smooth visual experience across all devices.
  The app integrates external APIs to fetch real-time movie data, allowing users to explore
  trending, popular, and top-rated films in an intuitive way.
</p>

<p>
  This project was created as a hands-on learning experience to strengthen full-stack development
  skills, particularly in modern frontend best practices. It demonstrates practical knowledge of
  API integration, server components, dynamic routing, and responsive UI design. The IMDB clone
  also serves as a foundation for future enhancements such as user authentication, watchlists,
  search filtering, and theme customization.
</p>

    </section>
  )
}

export default AboutSection