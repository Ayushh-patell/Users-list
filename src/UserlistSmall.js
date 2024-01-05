import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function UserlistSmall({ UserData, loaded }) {
  return (
    <div className="userListSm">
      {UserData.length < 1 && !loaded ? (
        <List sx={{ width: "100%"}}>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
          <ListItem
            className="placeholder-glow border rounded bg-white"
            alignItems="center"
          >
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="placeholder rounded placeholder-lg placeholder-glow " />
          </ListItem>
        </List>
      ) : loaded && UserData.length > 1 ? (
        <div>
          {UserData.map((user, index) => {
            return (
              <Accordion key={index} sx={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}a-content`}
                  id={`user_accordian${index}`}
                >
                  <Avatar
                    style={{ backgroundColor: "#e6e6e6" }}
                    alt={user.profile.firstName}
                    src={user.avatar}
                  />{" "}
                  <Typography>
                    {user.profile.firstName} {user.profile.lastName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div className="job fw-semibold fs-5 text-black d-flex m-auto align-items-center">
                      {user.jobTitle}
                    </div>
                    <div className="bio fst-italic text-secondary">
                      {user.Bio}
                    </div>
                    <div className="name">{user.profile.username}</div>
                    <div className="other d-flex justify-content-between align-items-center w-100">
                      <div className="email">{user.profile.email}</div>
                      <div className="created">
                        {new Date(user.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      ) : (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <span className="fs-2 text-secondary font-bold">
            No Post Available
          </span>
        </div>
      )}
    </div>
  );
}

// <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//         </List>
//       </Collapse>
