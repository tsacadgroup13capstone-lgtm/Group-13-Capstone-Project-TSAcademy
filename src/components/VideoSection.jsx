import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop playsInline controls className="bg-video">
          <source src="/Planets data video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="video-content">
        <h2>
          How Planetary Data Helps Us <br /> Understand Space
        </h2>
        <p>
          Planetary science goes beyond images. Comparing <span>mass</span>,
          <span>diameter</span>, <span>gravity</span>, and <span>density</span>,
          we gain insight into how planets form, behave, and interact within the
          solar system.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;
