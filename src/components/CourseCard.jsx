import bookIcon from "../assets/icons/book.svg";

function CourseCard({
  course,
  isSaved,
  onToggleSave,
  onOpenCourse,
  completedCount,
}) {
  const totalLessons = course.lessons.length;

  const progress = Math.round(
    (completedCount / totalLessons) * 100
  );

  return (
    <div className="course-card">

      {/* Course Image */}
      <div className="course-image-wrapper">

        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />

        <span className="course-level">
          {course.level}
        </span>

        {/* Bookmark Button */}
        <button
          type="button"
          className={`bookmark-btn ${isSaved ? "bookmarked" : ""}`}
          onClick={() => onToggleSave(course.id)}
          aria-label={
            isSaved
              ? `Remove ${course.title} from saved courses`
              : `Save ${course.title}`
          }
          aria-pressed={isSaved}
        >
          {isSaved ? "♥" : "♡"}
        </button>

      </div>

      {/* Course Information */}
      <div className="course-content">

        <div className="course-meta">

          <span className="course-category">
            {course.category}
          </span>

          <span className="course-duration">
            ◷ {course.duration}
          </span>

        </div>

        <h3>{course.title}</h3>

        <p className="course-description">
          {course.description}
        </p>

        {/* Lesson Information */}
        <div className="course-info">

          <span className="lesson-count">
            <img src={bookIcon} alt="" />
            {totalLessons} Lessons
          </span>

          <span className="course-price">
            Free
          </span>

        </div>

        {/* Course Progress */}
        <div className="course-progress">

          <div className="progress-text">
            <span>Your Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

        </div>

        {/* Course Button */}
        <button
          type="button"
          className="course-btn"
          onClick={() => onOpenCourse(course)}
        >
          {completedCount > 0
            ? "Continue Learning"
            : "Explore Course"}

          <span>→</span>
        </button>

      </div>

    </div>
  );
}

export default CourseCard;