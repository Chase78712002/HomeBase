import "./UpcomingMilestones.scss";

export default function UpcomingMilestones({ milestone }) {
  let d = new Date();
  let datestring =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);

  return (
    <div className="upcoming-milestones-container">
      {datestring < milestone.end_date && (
        <>
          <p className="upcoming-milestones-desc">{milestone.description}</p>
          <p className="upcoming-milestones-date">{milestone.end_date}</p>
        </>
      )}
    </div>
  );
}
