import React from "react";
import classes from './ContentWrapper.module.css';

function ContentWrapper(children: any) {
	return (
		<section className={classes.ContentWrapper}>
			{children.children}
		</section>
	)
}

export default ContentWrapper;