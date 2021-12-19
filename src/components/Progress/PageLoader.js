import React, { memo, Fragment } from "react";
import {
  mergeStyleSets,
  Shimmer,
  Stack,
  ShimmerElementType
} from "office-ui-fabric-react";

const styles = mergeStyleSets({
  container: {
    width: "100%",
  },

  stackContainer: {
    width: "100%",
    marginTop: "2vh",
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titleItem: {
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)",
  },

  contentItem: {
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px",
  },
});

const PageLoader = () => (
  <Fragment>
    <div style={{ height: "20px" }}> </div>
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      className={styles.container}
    >
      <Stack padding={10} maxWidth={960} className={styles.stackContainer}>
        <Stack.Item className={styles.titleItem}>
          <Shimmer width="100%" />
        </Stack.Item>
        <Stack.Item className={styles.contentItem}>
          <Shimmer width="50%" />
          <Shimmer />
          <Shimmer
            shimmerElements={[
              { type: ShimmerElementType.line, width: "25%" },
              { type: ShimmerElementType.gap, width: "50%" },
              { type: ShimmerElementType.line, width: "25%" }
            ]}
          />
        </Stack.Item>
        <Stack.Item>
          <Shimmer
            shimmerElements={[
              { type: ShimmerElementType.gap, width: "25%" },
              { type: ShimmerElementType.line, width: "50%" },
              { type: ShimmerElementType.gap, width: "25%" }
            ]}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  </Fragment>
);

export default memo(PageLoader);
