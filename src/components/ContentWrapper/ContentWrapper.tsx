import React from "react";
// @ts-ignore
import classes from './ContentWrapper.module.css';

function ContentWrapper(children: any) {
	return (
		<section className={classes.ContentWrapper}>
			{children.children}
		</section>
	)
}

export default ContentWrapper;