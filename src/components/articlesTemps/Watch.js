import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import YouTube from "react-youtube"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/PortableText"

import {
  PicHero,
  PicContentOverlay,
  PicImg,
  PicText,
  PlayBut,
} from "../../styles/articleStyles"
import { ArrowLink } from "../../styles/globalStyles"

const Watch = ({
  right,
  heading,
  mainContent,
  mainImage,
  picLocation,
  youTubeLink,
}) => {
  const [videoId, setVideoId] = useState(null)
  const [player, setPlayer] = useState(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const onPlayVideo = () => {
    setVideoPlaying(true)
    player.playVideo()
  }
  const onReady = (event) => {
    // eslint-disable-next-line
    setPlayer(event.target)
    setVideoPlaying(false)
  }

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //  autoplay: 1,
    },
  }

  const imageData = getGatsbyImageData(
    mainImage.asset,
    { maxWidth: 3000 },
    clientConfig.sanity
  )
  return (
    <PicHero watch>
      <PicImg>
        {!videoPlaying && (
          <GatsbyImage
            image={imageData}
            // width={2200}
            // height={1300}
            layout="fullWidth"
            aspectRatio={22 / 15}
            quality={95}
            fit="cover"
            formats={["auto", "webp", "avif"]}
            alt={mainImage.alt}
            style={{ marginBottom: `0`, gridArea: "1 / 1 ", height: "100%" }}
          />
        )}
        {youTubeLink && (
          <div className="videoWrapper">
            <YouTube
              videoId={youTubeLink}
              opts={opts}
              className="youTubeWrapper"
              onReady={onReady}
              disabled={!player}
            />
          </div>
        )}
      </PicImg>
      {!videoPlaying && (
        <PicContentOverlay watch>
          <div className="picContentWrapper">
            <PicText>
              <h1>{heading}</h1>
              <h3>
                <PortableText blocks={mainContent} />
              </h3>
              <PlayBut onClick={onPlayVideo}>
                <svg viewBox="0 0 192.9 192.9">
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path
                        d="M0 0v192.9h192.9V0Zm140.87 101.3-60.22 38.89a14.06 14.06 0 0 1-7.52 2 15.44 15.44 0 0 1-4.06-.53c-4-1.06-6.56-3.56-6.56-6.33V57.56c0-2.78 2.59-5.28 6.56-6.34a15.16 15.16 0 0 1 11.58 1.49l60.22 38.89c2 1.29 3.11 3 3.11 4.85a6 6 0 0 1-3.11 4.85Z"
                        fill="#8d8d8d"
                      />
                    </g>
                  </g>
                </svg>
              </PlayBut>
            </PicText>
          </div>
        </PicContentOverlay>
      )}
    </PicHero>
  )
}

export default Watch
