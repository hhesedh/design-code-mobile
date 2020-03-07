import React from "react";
import { ScrollView, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <Menu />
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Meng</Name>
            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data={logos}
              contentContainerStyle={{
                flexDirection: "row",
                paddingTop: 30,
                paddingLeft: 12,
                padding: 20
              }}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Logo image={item.image} text={item.text} />
              )}
            />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            <FlatList
              contentContainerStyle={{
                flexDirection: "row",
                paddingBottom: 30,
                paddingRight: 12
              }}
              data={cards}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  image={item.image}
                  caption={item.caption}
                  logo={item.logo}
                  subtitle={item.subtitle}
                />
              )}
            />
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>

          <CoursesContainer>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </CoursesContainer>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    id: 1,
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    id: 2,
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    id: 3,
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    id: 4,
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    id: 5,
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    id: 6,
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    id: 1,
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    id: 2,
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    id: 3,
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    id: 4,
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];

const courses = [
  {
    id: 1,
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    id: 2,
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    id: 3,
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    id: 4,
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
