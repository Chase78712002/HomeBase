import "./UpcomingMilestones.scss";

export default function UpcomingMilestones({ milestone }) {
  // Format a new date for todays date, then use in return to conditionally render upcoming milestones
  let d = new Date();
  let dateString =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);

  return (
    <div className="upcoming-milestones-container">
      {dateString < milestone.end_date && (
        <>
          <p className="upcoming-milestones-desc">{milestone.description}</p>
          <p className="upcoming-milestones-date">{milestone.end_date}</p>
        </>
      )}
    </div>
  );
}
