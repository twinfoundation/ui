import type { Meta, StoryObj } from "@storybook/react";
// import stylex from "@stylexjs/stylex";

import ExpandingCards from "../../components/ExpandingCards";

/**
 * styles
 */

// const styles = stylex.create({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     overflow: "hidden",
//     margin: 0,
//     // width: "90vw",
//   },
// });

/**
 * types
 */

type Story = StoryObj<typeof ExpandingCards>;

/**
 * function
 */

export default {
  title: "Components/Expanding Cards",
  component: ExpandingCards,
  tags: ["autodocs"],
} satisfies Meta<typeof ExpandingCards>;

export const Primary: Story = {
  args: {
    panels: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Explore The World",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Wild Forest",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        title: "Sunny Beach",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        title: "City on Winter",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Mountains - Clouds",
      },
    ],
  },
  render: (args) => (
    // <div {...stylex.props(styles.container)}>
    <ExpandingCards panels={args.panels} />
    // </div>
  ),
  parameters: {
    // layout: "fullscreen",
  },
};
