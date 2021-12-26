import React from "react";
import { Link } from "react-router-dom";

const Americas = ({ search, handlePopUp }) => {
	const copyCountries = [...search];
	return (
		<React.Fragment>
			<div className="outer-container">
				<h3 className="region-title">Americas</h3>

				<div className="regions-container">
					{copyCountries
						.filter((country) => country.fields.Region === "Americas")
						.slice(0, 6)
						.map((filteredRegion) => (
							<div
								key={filteredRegion.fields.Name}
								className="individual-country-container"
							>
								<div className="container one img">
									{" "}
									<img
										className="cover-image"
										alt=""
										src={filteredRegion.fields.Сover}
									/>
								</div>
								<div className="details">
									<div className="container one region">
										<p className="region-text">
											{filteredRegion.fields.Region}
										</p>
									</div>
									<div className="container one flag">
										<Link
											onClick={() => handlePopUp(filteredRegion.fields.Name)}
											className="link-region"
										>
											{filteredRegion.fields.Name}
										</Link>
										<img
											className="flag"
											alt=""
											src={filteredRegion.fields.Flag}
										/>
									</div>
									<div className="container one">
										<p className="small-text">
											<span className="grey-text">Capital:</span>{" "}
											{filteredRegion.fields.Capital}
										</p>
										<p className="small-text">
											{" "}
											<span className="grey-text">Currency: </span>
											{filteredRegion.fields.Сurrency}
										</p>
										<p className="small-text">
											{" "}
											<span className="grey-text">Language: </span>
											{filteredRegion.fields.Language}
										</p>
									</div>
								</div>
							</div>
						))}
					<div className="see-all-container">
						<Link
							to={`/global-employement-solutions/americas`}
							className="see-all"
						>
							{" "}
							See All
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Americas;
