import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  SvgIcon,
  Grid2,
} from "@mui/material";
import { ReactComponent as AccessTimeIcon } from "../../assets/svg/aiIcon.svg";
import "./challengeCard.css";
import Image from "next/image";

const ChallengeCard = ({ challenge }) => {
  const { name, description, startDate, endDate, image, levelType } = challenge;

  const currentTime = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isUpcoming = start > currentTime;
  const isActive = currentTime > start && currentTime < end;
  const isPast = currentTime > end;

  const getTimeDifference = (date) => {
    const difference = date - currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    return { days, hours, minutes };
  };

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(date)
      .toLocaleDateString("en-IN", options)
      .replace(",", "")
      .replace("at", "")
      .trim();
  };

  const timeToDisplay = isUpcoming
    ? getTimeDifference(start)
    : getTimeDifference(end);

  return (
    <Card className="card">
      <CardMedia component="img" alt={name} height="150" image={image} />

      <div className="status-box">
        <Grid2
          variant="contained"
          className={
            isUpcoming
              ? "status-upcoming"
              : isActive
              ? "status-active"
              : "status-past"
          }
        >
          {isUpcoming ? "Upcoming" : isActive ? "Active" : "Past"}
        </Grid2>
      </div>

      <CardContent className="cardContent">
        <>
          <Typography variant="h6" component="div" className="card-title">
            {name}
          </Typography>

          <div className="time-info">
            {isPast ? (
              <>
                <Typography sx={{ fontSize: "14px" }}>Ended on</Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "18px", marginTop: "10px" }}
                >
                  {formatDate(end)}
                </Typography>
              </>
            ) : (
              <>
                <Typography sx={{ fontSize: "14px" }}>
                  {isUpcoming ? "Starts in" : "Ends in"}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "18px", marginTop: "10px" }}
                >
                  {` ${timeToDisplay.days} Days ${timeToDisplay.hours} Hours ${timeToDisplay.minutes} Mins`}
                </Typography>
              </>
            )}
          </div>

          <Button
            variant="contained"
            color="success"
            fullWidth
            className="participate-btn"
          >
            Participate Now
          </Button>
        </>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
