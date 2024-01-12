/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import moment from "moment";

const VideoLength = ({ time }) => {
  const duration = moment.duration(time, "seconds");

  const videoLengthInSeconds =
    duration.hours() > 0
      ? moment().startOf("day").seconds(time).format("H:mm:ss")
      : moment().startOf("day").seconds(time).format("mm:ss");
  return (
    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
