import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";

const badgeColors = {
  Industry: "#0077B5",
  Research: "#7B42BC",
  Entrepreneurship: "#E67E22",
};

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="exp-card-outer">
        {experience.logo_path && (
          <Flip left duration={2000}>
            <div className="exp-card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assets/images/${experience["logo_path"]}`)}
                alt={experience["company"]}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="exp-card-body"
            style={{
              width: experience.logo_path ? "90%" : "100%",
              borderLeft: `4px solid ${experience.color || theme.headerColor}`,
            }}
          >
            <div
              className="exp-body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="exp-body-header-title">
                <h2 className="exp-card-title" style={{ color: theme.text }}>
                  {experience["title"]}
                </h2>
                <h3 className="exp-card-company" style={{ color: theme.text }}>
                  {experience["company_url"] ? (
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text, textDecoration: "none" }}
                    >
                      {experience["company"]}
                    </a>
                  ) : (
                    experience["company"]
                  )}
                </h3>
              </div>
              <div className="exp-body-header-duration">
                <h3 className="exp-duration" style={{ color: theme.text }}>
                  {experience["duration"]}
                </h3>
                <p className="exp-location" style={{ color: theme.text }}>
                  {experience["location"]}
                </p>
                {experience["badge"] && (
                  <div className="exp-badge-row">
                    {(Array.isArray(experience["badge"])
                      ? experience["badge"]
                      : [experience["badge"]]
                    ).map((b) => (
                      <span
                        key={b}
                        className="exp-badge"
                        style={{ backgroundColor: badgeColors[b] || experience["color"] }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="exp-body-content">
              <p className="exp-description" style={{ color: theme.text }}>
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
