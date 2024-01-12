/* eslint-disable no-unused-vars */
import { Context } from "../context/ContexApi";
import { LeftNav, VideoCard } from "../components";
import { useContext, useEffect } from "react";

const Feed = () => {
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  const { loading, searchResults } = useContext(Context);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full bg-black overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults &&
            searchResults?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
