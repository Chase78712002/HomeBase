import "./UpcomingMilestones.scss";

export default function UpcomingMilestones({ milestone }) {
  const getUpcomingMilestoneDates = (milestone) => {
    let today = new Date();
    let upcomingMilestones = {};
    for (const event of milestone) {
      let formattedMilestone = new Date(event.end_date);

      if (today.getTime() < formattedMilestone.getTime()) {
        console.log(true);
      }
    }

    console.log("here", upcomingMilestones);
    return null;
  };

  // getUpcomingMilestoneDates(milestone);

  return (
    <div className="upcoming-milestones-container">
      <p className="upcoming-milestones-desc">{milestone.description}</p>
      <p className="upcoming-milestones-date">{milestone.end_date}</p>
    </div>
  );
}
