import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export default function Userlist({ UserData, loaded }) {
  const [selectedUser, setselectedUser] = React.useState(null);
  const [key, setkey] = React.useState(0);
  const handleSelect = (user) => {
    setselectedUser(user);
    setkey(key+1)
  };

  return (
    <div className="userList">
      {(UserData.length < 1 && !loaded) ? (
        <>
        <List sx={{ width: "100%", maxWidth: 370 }}>
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
        </>
      ) : (loaded && UserData.length >1) ? (
        <List
          sx={{ width: "100%", height:"100%", maxWidth: 370 }}
        >
          {UserData.map((user, index) => {
            return (
              <ListItem
              style={{cursor:"pointer"}}
                key={index}
                onClick={() => {
                  handleSelect(user);
                }}
                className={`border rounded mb-1 shadow ${selectedUser?.profile.username === user.profile.username? "bg-primary text-white":"bg-white text-black"}`}
                alignItems="center"
              >
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:"#e6e6e6"}} alt={user.profile.firstName}  src={user.avatar} />
                </ListItemAvatar>
                <ListItemText primary={user.profile.username} />
              </ListItem>
            );
          })}
        </List>
      ) :(
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <span className="fs-2 text-secondary font-bold">No Post Available</span>
      </div>
      )}
      {selectedUser && 
      <div className="bg-white p-2 rounded shadow" style={{position:"fixed", top:"50%", left:"395px", transform:"translate(0, -50%)"}}>
        <div className="d-flex">
          <div className="img me-2">
            <img key={key} src={selectedUser.avatar} alt="    N/A" />
          </div>
          <div className="job fw-semibold fs-5 text-black d-flex m-auto align-items-center">
          <span>{selectedUser.jobTitle}</span>
          </div>
          
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          
          <div className="username text-center">
          <span>{selectedUser.profile.username}</span>
          </div>
          <div className="name d-flex justify-content-center align-items-center gap-2">
            Name:<span>{selectedUser.profile.firstName} {selectedUser.profile.lastName}</span>
          </div>
          
        </div>
        <div className="d-flex flex-column">
        <div className="bio my-2 d-flex ms-2 align-items-center fw-light text-secondary justify-content-center">
            <span className="fst-italic">{selectedUser.Bio}</span>
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-between">
          <div className="email">
          Email:<span>{selectedUser.profile.email}</span>
          </div>
          <div className="created">
            <span>{new Date(selectedUser.createdAt).toLocaleString()}</span>
          </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
}
