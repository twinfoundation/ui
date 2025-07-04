import { useState } from "react";
// import "../styles/ExpandingCards.css";

import stylex from "@stylexjs/stylex";
// import * as stylex from '@stylexjs/stylex';

/**
 * styles
 */

const styles = stylex.create({
  container: {
    display: "flex",
    width: "90vw",
    backgroundColor: "red",
  },
  panel: {
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    borderRadius: "50px",
    color: "white",
    cursor: "pointer",
    flex: 0.5,
    margin: "10px",
    position: "relative",
    transition: "flex 0.7s ease-in",
  },
  header: {
    fontSize: "24px",
    position: "absolute",
    bottom: "20px",
    left: "20px",
    margin: "0",
    opacity: "0",
  },
  panelActive: {
    flex: 5,
  },
  headerActive: {
    opacity: 1,
    transition: "opacity 0.3s ease-in 0.4s",
  },
});

/**
 * types
 */
type PanelProps = {
  imageUrl: string;
  title: string;
};

export type ExpandingCardsProps = {
  panels: PanelProps[];
};

/**
 * Component
 */

export default function ExpandingCards({ panels }: ExpandingCardsProps) {
  // export default function ExpandingCards() {
  const [activePanel, setActivePanel] = useState<number>(0);

  // const panels: PanelProps[] = [
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Explore The World",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Wild Forest",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  //     title: "Sunny Beach",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  //     title: "City on Winter",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     title: "Mountains - Clouds",
  //   },
  // ];

  const handlePanelClick = (index: number) => {
    console.log(`current panel index: ${index}`);
    setActivePanel(index);
  };

  return (
    <div {...stylex.props(styles.container)}>
      {panels.map((panel, index) => (
        <div
          key={index}
          {...stylex.props(
            styles.panel,
            activePanel === index ? styles.panelActive : null
          )}
          onClick={() => handlePanelClick(index)}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
        >
          <h3
            {...stylex.props(
              styles.header,
              activePanel === index ? styles.headerActive : null
            )}
          >
            {panel.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
