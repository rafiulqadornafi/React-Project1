import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

import reactImage from "./assets/images/course-react.png";
import javascriptImage from "./assets/images/course-javascript.png";
import uiuxImage from "./assets/images/course-uiux.png";

import bookIcon from "./assets/icons/book.svg";
import playIcon from "./assets/icons/play.svg";
import sparkleIcon from "./assets/icons/sparkle.svg";

import "./App.css";

// Course Data
const courses = [
  {
    id: 1,
    title: "React.js Masterclass",
    category: "Development",
    level: "Beginner",
    duration: "Self-paced",
    image: reactImage,
    description:
      "Master React fundamentals, components, props and hooks through practical lessons.",

    lessons: [
      {
        title: "Introduction to React & JSX",
        description:
          "Learn what React is, how JSX works and how to create your first React component.",
      },
      {
        title: "Components and Props",
        description:
          "Understand reusable components and how to pass information using props.",
      },
      {
        title: "React useState Hook",
        description:
          "Build an interactive counter and understand how React manages component state.",
      },
    ],
  },

  {
    id: 2,
    title: "JavaScript Essentials",
    category: "Development",
    level: "Beginner",
    duration: "Self-paced",
    image: javascriptImage,
    description:
      "Learn modern JavaScript concepts and improve your frontend development skills.",

    lessons: [
      {
        title: "Variables and Data Types",
        description:
          "Practice const, let, strings, numbers, booleans and basic JavaScript expressions.",
      },
      {
        title: "Functions and Arrays",
        description:
          "Learn how functions work and how to use array methods to manage data.",
      },
      {
        title: "DOM and Events",
        description:
          "Understand browser events and create interactive elements with JavaScript.",
      },
    ],
  },

  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    duration: "Self-paced",
    image: uiuxImage,
    description:
      "Create beautiful digital experiences using practical UI/UX design principles.",

    lessons: [
      {
        title: "Introduction to UI/UX",
        description:
          "Understand user interface design, user experience and the design process.",
      },
      {
        title: "Colors and Typography",
        description:
          "Learn visual hierarchy, color combinations, spacing and readable typography.",
      },
      {
        title: "Wireframes and Layouts",
        description:
          "Plan a website layout using simple wireframes and user-centered design.",
      },
    ],
  },
];

// Read saved data from LocalStorage
function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  // Search and Category
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Saved Courses
  const [savedOnly, setSavedOnly] = useState(false);

  const [bookmarks, setBookmarks] = useState(() =>
    readStorage("learnflow-bookmarks", [])
  );

  // Learning Progress
  const [progress, setProgress] = useState(() =>
    readStorage("learnflow-progress", {})
  );

  // Selected Course
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Save Bookmarks
  useEffect(() => {
    localStorage.setItem(
      "learnflow-bookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  // Save Learning Progress
  useEffect(() => {
    localStorage.setItem(
      "learnflow-progress",
      JSON.stringify(progress)
    );
  }, [progress]);

  // Close Course Details with Escape Key
  useEffect(() => {
    if (!selectedCourse) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCourse(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  // Toggle Bookmark
  const toggleBookmark = (courseId) => {
    setBookmarks((previous) => {
      if (previous.includes(courseId)) {
        return previous.filter((id) => id !== courseId);
      }

      return [...previous, courseId];
    });
  };

  // Toggle Completed Lesson
  const toggleLesson = (courseId, lessonIndex) => {
    setProgress((previous) => {
      const completed = previous[courseId] || [];

      const updated = completed.includes(lessonIndex)
        ? completed.filter((index) => index !== lessonIndex)
        : [...completed, lessonIndex];

      return {
        ...previous,
        [courseId]: updated,
      };
    });
  };

  // Filter Courses
  const filteredCourses = courses.filter((course) => {
    const searchText = search.toLowerCase().trim();

    const matchSearch =
      course.title.toLowerCase().includes(searchText) ||
      course.description.toLowerCase().includes(searchText);

    const matchCategory =
      category === "All" || course.category === category;

    const matchSaved =
      !savedOnly || bookmarks.includes(course.id);

    return matchSearch && matchCategory && matchSaved;
  });

  const categories = ["All", "Development", "Design"];

  // Show Saved Courses
  const handleSavedClick = () => {
    setSavedOnly((previous) => !previous);

    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Reset Filters
  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSavedOnly(false);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar
        savedCount={bookmarks.length}
        showSaved={savedOnly}
        onSavedClick={handleSavedClick}
      />

      <main>

        {/* Hero */}
        <Hero />

        {/* Features Section */}
        <section className="features-section" id="features">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                WHY CHOOSE US
              </span>

              <h2>
                Everything You Need to
                <span className="gradient-text"> Grow Your Skills</span>
              </h2>

              <p>
                Learn smarter with practical lessons,
                flexible learning and progress tracking.
              </p>

            </div>

            <div className="features-grid">

              <div className="feature-card">

                <div className="feature-icon">
                  <img src={bookIcon} alt="" />
                </div>

                <h3>Practical Learning</h3>

                <p>
                  Build your knowledge through focused
                  lessons and real-world concepts.
                </p>

              </div>

              <div className="feature-card">

                <div className="feature-icon">
                  <img src={playIcon} alt="" />
                </div>

                <h3>Learn at Your Pace</h3>

                <p>
                  Explore courses whenever you want
                  and learn without unnecessary pressure.
                </p>

              </div>

              <div className="feature-card">

                <div className="feature-icon">
                  <img src={sparkleIcon} alt="" />
                </div>

                <h3>Track Your Progress</h3>

                <p>
                  Complete lessons, save your favorite courses
                  and track your learning journey.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Courses Section */}
        <section className="courses-section" id="courses">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                EXPLORE OUR COURSES
              </span>

              <h2>
                Discover Your
                <span className="gradient-text"> Next Skill</span>
              </h2>

              <p>
                Choose from our beginner-friendly courses
                and start building your future today.
              </p>

            </div>

            {/* Search and Filters */}
            <div className="course-toolbar">

              <div className="search-box">

                <span className="search-icon">⌕</span>

                <input
                  type="search"
                  placeholder="Search for courses..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  aria-label="Search courses"
                />

              </div>

              <div className="category-buttons">

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      category === item ? "active" : ""
                    }
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* Saved Courses Indicator */}
            {savedOnly && (
              <div className="saved-indicator">

                <span>♡ Showing saved courses</span>

                <button
                  type="button"
                  onClick={() => setSavedOnly(false)}
                >
                  Show All
                </button>

              </div>
            )}

            {/* Course Cards */}
            {filteredCourses.length > 0 ? (

              <div className="courses-grid">

                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isSaved={bookmarks.includes(course.id)}
                    onToggleSave={toggleBookmark}
                    onOpenCourse={setSelectedCourse}
                    completedCount={
                      (progress[course.id] || []).length
                    }
                  />
                ))}

              </div>

            ) : (

              <div className="empty-state">

                <div className="empty-icon">⌕</div>

                <h3>No courses found</h3>

                <p>
                  Try another search or reset your filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="primary-btn"
                >
                  Reset Filters
                </button>

              </div>

            )}

          </div>

        </section>

        {/* CTA Section */}
        <section className="cta-section">

          <div className="container">

            <div className="cta-box">

              <span className="section-tag">
                START YOUR JOURNEY
              </span>

              <h2>
                Ready to Level Up
                <br />
                Your Skills?
              </h2>

              <p>
                Explore free learning tracks and take
                your next step toward becoming a better developer.
              </p>

              <a href="#courses" className="primary-btn">
                Start Learning
                <span>→</span>
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Course Details Modal */}
      {selectedCourse && (

        <div
          className="modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCourse(null);
            }
          }}
        >

          <div
            className="course-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >

            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close course details"
            >
              ✕
            </button>

            <span className="section-tag">
              COURSE PREVIEW
            </span>

            <h2 id="modal-title">
              {selectedCourse.title}
            </h2>

            <p className="modal-description">
              {selectedCourse.description}
            </p>

            <div className="modal-progress">

              <span>
                Your Progress
              </span>

              <strong>
                {(progress[selectedCourse.id] || []).length}
                {" / "}
                {selectedCourse.lessons.length} Lessons
              </strong>

            </div>

            <div className="modal-lessons">

              {selectedCourse.lessons.map((lesson, index) => {

                const completed = (
                  progress[selectedCourse.id] || []
                ).includes(index);

                return (
                  <div className="lesson-item" key={index}>

                    <div className="lesson-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="lesson-content">

                      <h4>{lesson.title}</h4>

                      <p>{lesson.description}</p>

                      <button
                        type="button"
                        className={
                          completed
                            ? "lesson-complete"
                            : "lesson-action"
                        }
                        onClick={() =>
                          toggleLesson(selectedCourse.id, index)
                        }
                      >
                        {completed
                          ? "✓ Completed — Undo"
                          : "+ Mark Lesson Complete"}
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

            <p className="modal-note">
              This is a frontend learning demo.
              Your completed lessons are saved in your browser.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;