import styles from "./InfoSheet.module.css";

const InfoSheet = (props) => {
  const desc = [
    {
      title: "How to perform the experiment of color theory?",
      content:
        "Do you know? You can make literally any colour in the world using just a combination of three colours! Yes that's right! All you need is a little bit of red, green and blue with you, and you're good to go. In this experiment, you are given a bowl, and you can drag the colours from the flask into that bowl to create a new colour in a moment. Try it out with your friends. For example, if you mix red and green together, you get yellow. And, if you mix all three togther, red, green and blue, you get white colour! So, can you make wood brown colour? Unleash your curious side and find out",
    },
  ];
  return (
    <>
      <div className={styles.sheetparent}>
        <h4 className={styles.title}>{desc[props.index].title}</h4>
        <p className={styles.p}>{desc[props.index].content}</p>
      </div>
    </>
  );
};

export default InfoSheet;
