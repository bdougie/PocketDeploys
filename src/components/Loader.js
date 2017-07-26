import React, {View} from "react";
import ContentLoader from '../lib/contentLoader'
import {Circle, Rect} from 'react-native-svg'
import {colors} from "../styles/variables";
import {ContentPadding} from "../styles";

const ImageLoader = () => (
  <ContentPadding>
    <ContentLoader
      primaryColor={colors.lighterGrey}
      secondaryColor={colors.lightestGrey}
      duration={700}
      height={140}
    >
      <Rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
      <Rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
      <Rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
      <Rect x="0" y="80" rx="3" ry="3" width="350" height="10"/>
      <Rect x="0" y="100" rx="3" ry="3" width="200" height="10"/>
      <Rect x="0" y="120" rx="3" ry="3" width="360" height="10"/>
    </ContentLoader>
  </ContentPadding>
);

const TextLoader = () => (
  <ContentPadding>
    <ContentLoader
                primaryColor={colors.lighterGrey}
                secondaryColor={colors.lightestGrey}
                height={80}>
        <Rect x="0" y="0" rx="3" ry="3" width="70" height="10"/>
        <Rect x="80" y="0" rx="3" ry="3" width="100" height="10"/>
        <Rect x="190" y="0" rx="3" ry="3" width="10" height="10"/>
        <Rect x="15" y="20" rx="3" ry="3" width="130" height="10"/>
        <Rect x="155" y="20" rx="3" ry="3" width="130" height="10"/>
        <Rect x="15" y="40" rx="3" ry="3" width="90" height="10"/>
        <Rect x="115" y="40" rx="3" ry="3" width="60" height="10"/>
        <Rect x="185" y="40" rx="3" ry="3" width="60" height="10"/>
        <Rect x="0" y="60" rx="3" ry="3" width="30" height="10"/>
    </ContentLoader>
  </ContentPadding>
);

export {ImageLoader, TextLoader};
