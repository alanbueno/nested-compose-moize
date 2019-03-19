import React from "react";
import { Page } from "tabler-react";

import RotationGallery from "./RotationGallery";

const RotationGalleryList = [
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/grant-ritchie-338179-500.jpg",
    thumbNail:
      "https://tabler.github.io/tabler/demo/photos/grant-ritchie-338179-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/41.jpg",
    description: "alt description",
    fullName: "Nathan Guerrero",
    dateString: "12 days ago",
    totalView: 112,
    totalLike: 42
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/ilnur-kalimullin-218996-500.jpg",
    thumbNail:
      "https://tabler.github.io/tabler/demo/photos/ilnur-kalimullin-218996-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/female/1.jpg",
    fullName: "Alice Mason",
    dateString: "12 days ago",
    totalView: 70,
    totalLike: 0
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/jakob-owens-224352-500.jpg",
    thumbNail:
      "https://tabler.github.io/tabler/demo/photos/jakob-owens-224352-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/female/18.jpg",
    fullName: "Rose Bradley",
    dateString: "4 days ago",
    totalView: 166,
    totalLike: 96
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/jeremy-bishop-330225-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/16.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/16.jpg",
    fullName: "Peter Richards",
    dateString: "18 days ago",
    totalView: 76,
    totalLike: 6
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/jonatan-pie-226191-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/26.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/26.jpg",
    fullName: "Wayne Holland",
    dateString: "16 days ago",
    totalView: 106,
    totalLike: 36
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/josh-calabrese-66153-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/female/7.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/female/7.jpg",
    fullName: "Michelle Ross",
    dateString: "4 days ago",
    totalView: 77,
    totalLike: 7
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/joshua-earle-157231-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/female/17.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/female/17.jpg",
    fullName: "Debra Beck",
    dateString: "6 days ago",
    totalView: 150,
    totalLike: 80
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/mahkeo-222765-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/30.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/30.jpg",
    fullName: "Phillip Peters",
    dateString: "17 days ago",
    totalView: 153,
    totalLike: 83
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/matt-barrett-339981-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/32.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/32.jpg",
    fullName: "Jack Ruiz",
    dateString: "15 days ago",
    totalView: 143,
    totalLike: 73
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/nathan-anderson-297460-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/9.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/9.jpg",
    fullName: "Ronald Bradley",
    dateString: "11 days ago",
    totalView: 149,
    totalLike: 79
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/nathan-anderson-316188-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/female/8.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/female/8.jpg",
    fullName: "Kathleen Harper",
    dateString: "16 days ago",
    totalView: 164,
    totalLike: 94
  },
  {
    imageUrl:
      "https://tabler.github.io/tabler/demo/photos/nathan-dumlao-287713-500.jpg",
    avatarUrl: "https://tabler.github.io/tabler/demo/faces/male/4.jpg",
    thumbNail: "https://tabler.github.io/tabler/demo/faces/male/4.jpg",
    fullName: "Bobby Knight",
    dateString: "6 days ago",
    totalView: 160,
    totalLike: 90
  }
];

const SomePage = () => (
  <Page header="SomePage">
    <Page.Content>
      <RotationGallery RotationGalleryList={RotationGalleryList} />
    </Page.Content>
  </Page>
);

export default SomePage;
