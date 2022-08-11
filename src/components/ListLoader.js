import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Fade,
  Loader as loader,
} from 'rn-placeholder';

const Loader = ({isList, leftStyle, type = 'Fade'}) => (
  <Placeholder
    Animation={type == 'Fade' ? Fade : loader}
    style={{
      marginVertical: 6,
      marginHorizontal: 15,
      borderRadius: 4,
    }}
    Left={props => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            width: responsiveWidth(22),
            height: responsiveHeight(16),
          },
          leftStyle,
        ]}
      />
    )}>
    {isList && (
      <>
        <PlaceholderLine style={{marginTop: responsiveHeight(1)}} width={70} />
        <PlaceholderLine
          style={{marginTop: responsiveHeight(1.5)}}
          width={50}
        />
        <PlaceholderLine width={50} />
      </>
    )}
  </Placeholder>
);
export default Loader;
