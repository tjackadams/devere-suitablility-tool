import React from "react";
import PropTypes from "prop-types";
// import { Segment } from "semantic-ui-react";

// import Footer from "../components/Footer";
// import Layout from "../layout";
// import { ProgressBar } from "../components/Spinners";
// import Winterfell from "../components/Winterfell";

// import schema from "../schema.js";
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

// class Home extends React.PureComponent {
//   state = {
//     questionsCurrentCount: 0,
//     questionsTotalCount: 0
//   };

//   render() {
//     return (
//       <>
//         <Layout title="deVere UK Mortgages">
//           <Segment>
//             <Winterfell
//               schema={schema}
//               onUpdate={update => {
//                 this.setState({
//                   questionsCurrentCount: update.questionsCurrentCount,
//                   questionsTotalCount: update.questionsTotalCount
//                 });
//               }}
//               onSubmit={(questionAnswers, action) => {
//                 this.props.history.push({
//                   pathname: "/result",
//                   state: { answers: questionAnswers }
//                 });
//               }}
//               disableSubmit
//             />
//           </Segment>
//           <Segment>
//             <ProgressBar
//               value={this.state.questionsCurrentCount}
//               total={this.state.questionsTotalCount}
//               size="tiny"
//               color="blue"
//             />
//           </Segment>
//         </Layout>
//         <Footer />
//       </>
//     );
//   }
// }

const Home: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c"
        }
      }}
      gap={15}
    >
      <img
        src="https://raw.githubusercontent.com/Microsoft/just/master/packages/just-stack-uifabric/template/src/components/fabric.png"
        alt="logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
      </Text>
      <Text variant="large">
        For a guide on how to customize this project, check out the UI Fabric
        documentation.
      </Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
          Stack Overflow
        </Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">
          Github
        </Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
          Icons
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
          Typography
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
          Theme
        </Link>
      </Stack>
    </Stack>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Home;
