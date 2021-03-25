import React from 'react';
import './upcommings.scss';
import Media from 'react-media'
import YouTube from 'react-youtube';
import { Fragment } from 'react';
//https://youtu.be/L_VBaLHq33E
function Upcommings() {
    const opts1 = {
        height: '155',
        width: '270',
      };
      const opts2 = {
        height: '170',
        width: '300',
      };
      const opts3 = {
        height: '390',
        width: '640',
      };

    return (
        <div className="upcommings" id="upcommings">
            <div className="upcommings__text">
                <p>Beta version demo vedio</p>
            </div>
            <Media
                queries={{
                    small: "(max-width: 299px)",
                    medium: "(min-width: 300px) and (max-width: 699px)",
                    large: "(min-width: 700px) and (max-width: 2000px)"
                }}
            >
                {
                    matches =>(
                        <Fragment>
                            { matches.small && <YouTube videoId="L_VBaLHq33E" opts={opts1} /> }
                            { matches.medium && <YouTube videoId="L_VBaLHq33E" opts={opts2} /> }
                            { matches.large && <YouTube videoId="L_VBaLHq33E" opts={opts3} />}
                        </Fragment>
                    )
                }
            </Media>
        </div>
    )
}

export default Upcommings
