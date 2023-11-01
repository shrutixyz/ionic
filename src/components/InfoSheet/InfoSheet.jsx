import styles from "./InfoSheet.module.css";

const InfoSheet = (props) => {
  const One = () => {
    return (
      <>
        <h2>{"How to perform the experiment of color theory?"}</h2>
        <p className={styles.p}>
          {
            "Do you know? You can make literally any colour in the world using just a combination of three colours! Yes that's right! All you need is a little bit of red, green and blue with you, and you're good to go."
          }
        </p>
        <br />
        <div className={styles.oneeg}>
          <div
            className={styles.circle}
            style={{ backgroundColor: "red" }}
          ></div>
          <h1>+</h1>
          <div
            className={styles.circle}
            style={{ backgroundColor: "blue" }}
          ></div>
          <h1>=</h1>
          <div
            className={styles.circle}
            style={{ backgroundColor: "rgb(255, 255, 0)" }}
          ></div>
        </div>
        <p className={styles.p}>likewise</p>
        <div className={styles.oneeg}>
          <div
            className={styles.circle}
            style={{ backgroundColor: "yellow" }}
          ></div>
          <h1>+</h1>
          <div
            className={styles.circle}
            style={{ backgroundColor: "red" }}
          ></div>
          <h1>=</h1>
          <div
            className={styles.circle}
            style={{ backgroundColor: "rgb( 255,122.5, 0)" }}
          ></div>
        </div>
        <p className={styles.p}>
          {
            " In this experiment, you are given a bowl, and you can drag the colours from the flask into that bowl to create a new colour in a moment. Try it out with your friends. For example, if you mix red and green together, you get yellow. And, if you mix all three togther, red, green and blue, you get white colour! So, can you make wood brown colour? Unleash your curious side and find out"
          }
        </p>
      </>
    );
  };
  const Two = () => {
    return (
      <>
        <h2>{"How to perform the experiment of flame test?"}</h2>
        <p className={styles.p}>
          {
            "The test involves introducing a sample of the element or compound to a hot, non-luminous flame, and observing the color of the flame that results. The idea of the test is that sample atoms evaporate and since they are hot, they emit light when being in flame."
          }
        </p>
        <br />
        <table border="1">
          <tr>
            <th>Element</th>
            <th>Flame Test Color</th>
            <th>Atomic Representation</th>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>Yellow</td>
            <td>Na</td>
          </tr>
          <tr>
            <td>Potassium</td>
            <td>Lilac or Purple</td>
            <td>K</td>
          </tr>
          <tr>
            <td>Calcium</td>
            <td>Orange-Red</td>
            <td>Ca</td>
          </tr>
          <tr>
            <td>Lead</td>
            <td>Blue</td>
            <td>Pb</td>
          </tr>
          <tr>
            <td>Nickel</td>
            <td>Green</td>
            <td>Ni</td>
          </tr>
          <tr>
            <td>Barium</td>
            <td>Green</td>
            <td>Ba</td>
          </tr>
          <tr>
            <td>Copper</td>
            <td>Blue-Green</td>
            <td>Cu</td>
          </tr>
        </table>
        <br />
        <p className={styles.p}>
          {
            " In this experiment, you are given a burner that is ON, and you can drag various crystals from to petridish to the flame. When a crystal is in front of a flame, the colour of flame will change. Observe the colour closely and then based on facts, try to guess the element name that you just dragged. If the name is correct, the input box will be highlighted with green colour. You and your friends share the same experiment room so you can identify one element each or however you like it!"
          }
        </p>
      </>
    );
  };
  const Three = () => {
    return (
      <>
        <h2>{"How to perform the experiment of Convex Lens Focal Length?"}</h2>

        <p>
          In this experiment, students engage with a convex lens of unknown
          focal length. The app allows them to manipulate the position of an
          object, which in turn creates corresponding images. To facilitate
          their calculations, a ruler is provided on the screen for precise
          measurements.
        </p>

        <p>
          Key formulas come into play in this experiment. The lens equation,{" "}
          <code>1/f = 1/v + 1/u</code>, is a fundamental tool for relating
          object distance (u), image distance (v), and the lens's focal length
          (f). This equation serves as the foundation for the entire exercise.
        </p>

        <p>
          Students also utilize the magnification formula, <code>M = v/u</code>,
          to assess the relationship between the size of the image and the size
          of the object. Additionally, the linear magnification formula,{" "}
          <code>m = h'/h</code>, helps them understand the magnification aspect.
          The negative sign in the linear magnification formula indicates image
          inversion when it's negative.
        </p>

        <p>
          The process involves adjusting the object's position and noting the
          corresponding image formation by the lens. Measurements of object
          distance (u) and image distance (v) are crucial for the calculations.
          By applying the formulas and the collected measurements, students
          solve for the focal length of the lens and unveil its value.
        </p>

        <p>
          This interactive exercise enhances students' grasp of key concepts in
          optics, such as image formation, magnification, and the intricate
          connection between object distance and focal length. It encourages
          hands-on learning, problem-solving, and practical application of
          optical principles.
        </p>
      </>
    );
  };
  const Four = () => {
    return (
      <>
        <h2>{"How to perform the experiment of Concave Lens Focal Length?"}</h2>
        <p>
          In this experiment, students explore the properties of
          a concave lens. The app enables them to manipulate the position of an
          object, resulting in the formation of corresponding images. A ruler is
          provided on the screen for precise measurements to aid in their
          calculations.
        </p>

        <p>
          Important formulas are utilized in this experiment. The lens equation
          for a concave lens is{" "}
          <code>
          f= uv/u-v
          </code>
          , where <i>f</i> represents the focal length, <i>v</i> is the image
          distance, and <i>u</i> is the object distance.
        </p>

        <p>
          Students also work with the magnification formula for concave lenses,
          which is given by{" "}
          <code>
          m = -v/u 
          </code>
          . The negative sign here indicates that the image formed by a concave
          lens is virtual and upright.
        </p>

        <p>
          The process entails adjusting the object's position and recording the
          corresponding image formation by the concave lens. Measurements of
          object distance (u) and image distance (v) are essential for their
          calculations. By applying these formulas and the collected
          measurements, students can determine the focal length of the concave
          lens.
        </p>

        <p>
          This interactive exercise enhances students' understanding of concave
          lenses, virtual image formation, magnification, and the interplay
          between object distance and focal length. It promotes hands-on
          learning, problem-solving, and the practical application of optical
          principles specific to concave lenses.
        </p>
      </>
    );
  };
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
        <div className={styles.sheetchild}>
          {props.index === 0
            ? One()
            : props.index === 1
            ? Two()
            : props.index === 2
            ? Three()
            : Four()}
        </div>
      </div>
    </>
  );
};

export default InfoSheet;
