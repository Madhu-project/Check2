import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiLink from "../MuiLink/MuiLink";
import "./Styles.scss";

type MuiCardProps = {
  title: string;
  subPara1: string;
  subPara2: string;
  subPara3?: string;
  subPara4?: string;
  handleUpdate?: () => void;
  handleDelete?: () => void;
  clickCompletionStatusIcon?: () => void;
  subHeading1: string;
  subHeading2: string;
  subHeading3?: string;
  subHeading4?: string;
  cardActions?: boolean;
};

type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
};

// Styled ExpandMore button with animation
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MuiCard: React.FC<MuiCardProps> = ({
  title,
  subPara1,
  subPara2,
  handleUpdate,
  handleDelete,
  clickCompletionStatusIcon,
  subHeading1,
  subHeading2,
  cardActions = false,
  subPara3,
  subPara4,
  subHeading3,
  subHeading4,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mui-card">
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {subHeading1}: {subPara1}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {subHeading2}: {subPara2}
        </Typography>
        {subHeading3 && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subHeading3}: {subPara3}
          </Typography>
        )}
        {subHeading4 && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subHeading4}: {subPara4}
          </Typography>
        )}
      </CardContent>
      {cardActions && (
        <>
          <CardActions disableSpacing>
            Click to {subPara2 !== "Completed" ? "Complete " : "Re-Do "} Task
            <IconButton
              className={`status-${
                subPara2 !== "Completed" ? "complete" : "redo "
              }`}
              aria-label="Status"
              onClick={clickCompletionStatusIcon}
            >
              {subPara2 !== "Completed" ? <CheckCircleIcon /> : <ErrorIcon />}
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <MuiLink label={"Update Task?"} handleClick={handleUpdate} />
              <MuiLink label={"Delete Task?"} handleClick={handleDelete} />
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default MuiCard;
