import React from "react";
import Post from "./Post";

const mockPosts = [
  {
    id: 1,
    username: "CdProjektRed",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fposter-of-cyberpunk-2077-phantom-liberty_bmVsZmaUmZqaraWkpJRqZWWtamVl.jpg&f=1&nofb=1&ipt=eca3e9b18131ecf7741e588d8ae01363f02bb4b347408e702940e0013583b731&ipo=images",
    caption: "The Best DLC is coming soon! 🎮",
    profile: {
      username: "CdProjektRed",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-qgrbIO-DMVk%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FozbYnmZgHpY%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1&ipt=6787af81530990e8c0f85f048aeac6ec25d7c67cdb7aed0f0a30d9d2a6fcdf4a&ipo=images",
    },
  },
  {
    id: 2,
    username: "League of Legends",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Farcane-4k-fanart-game-tv-show_bWVsbWqUmZqaraWkpJRqZWWtamVl.jpg&f=1&nofb=1&ipt=6760f7fdf865f078973af08fab83b98d5d02e9fd4ede7d6b6037195d28509ee5&ipo=images",
    caption: "Act 3 of Arcane is out now! 🎬",
    profile: {
      username: "LeagueOfLegendsOfficial",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2023%2F02%2FLoL-Symbol.png&f=1&nofb=1&ipt=df9078d32d08f54ae9073da0db859328efe74512ae3010a606d23337c13c8bf9&ipo=images",
    },
  },
  {
    id: 3,
    username: "Epic Games",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.soldoutservice.com%2Fwp-content%2Fuploads%2F2022%2F09%2Fjuice-wrld-fortnite-1.jpg&f=1&nofb=1&ipt=824b74c4c50737fd8b243f49bb3ab3fef58f3e221d1814c5e8e7824632c42b84&ipo=images",
    caption: "Juice WRLD is now available in Fortnite! 🎤",
    profile: {
      username: "Epic Games",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F12%2FEpic-Games-Symbol.png&f=1&nofb=1&ipt=16159ec68cd5b75628e621ba6084ecf5965f6c45e5ae0c83f19e0777f25478d4&ipo=images",
    },
  },
];

const Feed = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", paddingTop: "20px" }}>
      {mockPosts.map((post) => (
        <Post key={post.id} post={post} profile={post.profile} />
      ))}
    </div>
  );
};

export default Feed;
