import { View, StyleSheet } from "react-native";
import React, { PureComponent } from "react";
import colors from "../../colors";

enum ListEntryHeight {
  short = 40,
  medium = 80,
  tall = 120,
}

type ListEntryContainerProps = { height: ListEntryHeight; children: any };
export class ListEntryContainer extends PureComponent<ListEntryContainerProps> {
  render() {
    const { height, children } = this.props;
    return (
      <View style={{ height: height, ...styles.container }}>{children}</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    margin: 5,
    marginTop: 0,
  },
});

export { ListEntryHeight };

export default ListEntryContainer;
