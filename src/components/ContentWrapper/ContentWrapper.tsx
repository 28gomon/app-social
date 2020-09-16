import React from "react";
import classes from './ContentWrapper.module.css';

const ContentWrapper = (children: any) => {
	return (
		<section className={classes.ContentWrapper}>
			{children.children}
		</section>
	)
}

export default ContentWrapper;