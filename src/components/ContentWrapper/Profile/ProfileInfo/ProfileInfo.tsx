import classes from "../Profile.module.css";
import React from "react";

export function ProfileInfo() {
	return (
		<>
			<div className={classes.ProfileImage}>
				<img
					src="https://images.unsplash.com/photo-1507065255811-f3b9fe968f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80"
					alt="Profile"/>
			</div>

			<div className={classes.ProfileDescription}>
				ava + description
			</div>

			<div className={classes.Title}>
				My Posts
			</div>
		</>
	);
}