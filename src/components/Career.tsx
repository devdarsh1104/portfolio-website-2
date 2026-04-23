import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.from(".career-container h2", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the timeline line growing as user scrolls
    gsap.to(".career-timeline", {
      maxHeight: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".career-info",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Fade in and slide up each career item individually as they come into view
    gsap.utils.toArray(".career-info-box").forEach((box: any) => {
      gsap.from(box, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {[
            {
              role: "B.Tech in Computer Science (AI-ML)",
              company: "SRM Institute of Science and Technology",
              date: "2023 - 2027",
              description: "Undergraduate degree focusing on Artificial Intelligence and Machine Learning."
            },
            {
              role: "AI / ML Intern",
              company: "Jio Platforms Limited",
              date: "Dec 2025 - Jan 2026",
              description: "Developed an AI-based chair occupancy detection system using CCTV images. Fine-tuned YOLOv11x segmentation and YOLOv8 pose estimation models."
            },
            {
              role: "Machine Learning Engineering Intern",
              company: "Tredence INC.",
              date: "Jun 2025 - Jul 2025",
              description: "Developed regression, classification, and clustering models using Python. Applied NLP and Computer Vision techniques with model explainability using SHAP and LIME."
            },
            {
              role: "Machine Learning Intern",
              company: "Jio Platforms Limited",
              date: "Jun 2024 - Jul 2024",
              description: "Developed ARIMA and SARIMA time-series forecasting models for apparel sales prediction to support inventory planning and demand forecasting."
            }
          ].map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.date}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
