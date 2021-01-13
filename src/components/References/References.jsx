import React from 'react';
import ReferenceTools from './ReferenceTools';
import ReferenceImages from './ReferenceImages';
import ReferenceVideos from './ReferencVideos';
import GitCommitIcon from '../GitCommitIcon';
import './References.scss';

export default function References ({ data }) {
    return (
        <div className="references">
            {
                data.map((reference, index) => 
					<section key={ index } className="reference-wrap">
                        <div className="title top-space">
                            <GitCommitIcon />
                            <p className="italic bold reference-header">
                                { reference.text }
                                { reference.link ? <a className="reference-link" href={ reference.link } target="_blank">{ reference.link }</a> : "" }
                            </p>
                        </div>
                        <div className="reference-date title">
                            <p className="italic thin">{ reference.month } { reference.year }</p>
                            <ReferenceTools data={ reference.tools } />
                        </div>
                        <br/>
                        {
                            reference.images 
                                ? <ReferenceImages data={ reference.images } /> 
                                : <ReferenceVideos data={ reference.videos } />
                        }
					</section>
				)
			}
        </div>
    )
}